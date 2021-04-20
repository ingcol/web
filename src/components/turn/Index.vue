<template>
	
	<div class="mt-3 pt-1 bg-contanier">

		<div class="container-fluid" v-if="error404">
			<b-card  class="border-0 shadow-sm mt-4 text-center">
				<h3>  
				Información no disponible</h3>
				<router-link to="/empresas" class="btn btn-warning text-white" > Inicio</router-link>

			</b-card>
		</div>


		<div class="container-fluid" v-else>
			<b-card  class="border-0 shadow-sm mt-4">
				<div class="text-center mb-4">
					<div class="mb-4 border-bottom">
						<h5 v-if=titulo>{{nombreEmpresa}} ({{nombreDepartamento}})</h5>
					</div>
					
				</div>
				<div class="row">

					<div class="col-md-6 mb-3">
						<div class="bg-turno p-2 rounded text-center text-white">

							<label class="d-block">Personas en la fila </label>
							<label class="d-block" v-if="cantidadTurno>=0"> {{cantidadTurno}}</label>

						</div>



					</div>
					<div class="col-md-6">
						<div class="bg-warning p-2 rounded  text-center text-white">
							<label>Turnos disponibles </label>
							<label class="d-block" v-if="limiteCantidadDepartamento">{{turnoLimiteRestante}}</label>
							<label class="d-block" v-else>

								<b-icon icon="check-circle-fill
								"></b-icon>


							</label>
						</div>

					</div>
					

				</div>
				
			</b-card>

			<b-card  class="border-0 shadow-sm mt-4" v-if="turnos.length">
				<h5 class="text-center">Turnos</h5>
				<hr>

				<ul class="list-group ">
					<li v-for="turno in turnos" v-bind:key="turno.id" class="tetx-left border-bottom  text-dark p-1 list-none">


						<label  v-if="turno.IdDptoTraslado && turno.IdDptoTraslado!=turno.departamento_id">
							<label class="text-success"  v-if="turno.EstadoTurno=='Llamado'">

								<span >{{turno.TrasladoTurno}}</span>
								<span > - {{turno.NumeroTurno}}</span> 


							</label>
							<label v-else class="text-danger"> 

								<span >{{turno.TrasladoTurno}}</span>
								<span > - {{turno.NumeroTurno}}</span>
							</label>


						</label>

						<label v-else>

							<label class="text-success"  v-if="turno.EstadoTurno=='Llamado'">

								<span >{{letraDepartamento}}</span>
								<span > - {{turno.NumeroTurno}}</span>
							</label>
							<label class="text-danger"  v-else>

								<span >{{letraDepartamento}}</span>
								<span > - {{turno.NumeroTurno}}</span>
							</label>
						</label>

						<label  class="float-right text-success " v-if="turno.EstadoTurno=='Llamado'">
							<span >En atención  </span>
						</label>
						<label color="success" v-else class="float-right text-danger ">
							<span>Sin atención</span>
						</label>

					</li>


				</ul>





			</b-card>
		</div>
	</div>

</template>

<script>

	import axios from 'axios';
	export default {
		props:{

		},
		mounted(){

			this.getDepartamentos();
		},
		data() {


			return {
				datos:'',
				turnos:[],
				nombreEmpresa:'',
				error404:false,
				nombreDepartamento:'',
				titulo:false,
				cantidadTurno:'',
				limiteCantidadDepartamento:'',
				turnoLimiteRestante:0,
				letraDepartamento:''



			}
		},

		methods: {
			getDepartamentos(){

				let slug=this.$route.params.slug

				slug = slug.replace(/[`~!@#$%^&*()_\-+=;:'"\\|,.<>?\s]/g, '').toLowerCase();
				let url=slug+'.mifila.co'

				let urlTurno='https://'+url+'/'+'turnoPublicoDepartamento/'+this.$route.params.id;



				axios.get(urlTurno).then(response=>{
					console.log('turnos:',response);
					this.nombreEmpresa=response.data.nombreEmpresa
					this.nombreDepartamento=response.data.nombreDepartamento
					this.limiteCantidadDepartamento=response.data.limiteCantidadDepartamento
					this.cantidadTurno=response.data.cantidadTurno
					this.turnoLimiteRestante=response.data.turnoLimite
					this.titulo=true
					this.turnos=response.data.turno
					this.letraDepartamento=response.data.letraDepartamento
				}).catch(errors => {

					if (errors) {
						alert();
						this.error404=true
					}

				});

			}

		},
	};
</script>
<style>

	.bg-turno{
		background: #0fb9d8
	}
	.list-none{
		list-style: none;
	}
</style>
