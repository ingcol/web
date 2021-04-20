<template>
	
	<div class="mt-3 p-2 bg-contanier">

		<div class="container-fluid" v-if="error404">
			<b-card  class="border-0 shadow-sm mt-4 text-center">
				<h3>  
				Información no disponible</h3>
				<router-link to="/empresas" class="btn btn-warning text-white" ><b-icon icon="arrow-left"></b-icon> Volver</router-link>

			</b-card>
		</div>


		<div class="container-fluid" v-else>
			<b-card  class="border-0 shadow-sm mt-4">
				<div class="text-center mb-4">
					<div class="mb-4">
						<h5>{{nombreEmpresa}}</h5>
					</div>
					
				</div>
				<ul class="list-group list-group-flush">
					
					

					<router-link v-for="item in departamentos" v-bind:key="item.id"  :to="'/turnos/'+urlTurno+'/'+item.id" class="list-group-item tetx-left border-bottom cursor text-dark">	{{item.NombreDepartamento}}  <b-icon  variant="danger" icon="plus-circle-fill" class="float-right"></b-icon></router-link>




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
				departamentos:[],
				nombreEmpresa:'',
				error404:false,
				urlTurno:''



			}
		},

		methods: {
			getDepartamentos(){
				this.urlTurno=this.$route.params.slug

				let slug=this.$route.params.slug



				slug = slug.replace(/[`~!@#$%^&*()_\-+=;:'"\\|,.<>?\s]/g, '').toLowerCase();
				let url=slug+'.mifila.co'
				
				let urlEmpresa='https://'+url+'/'+'turnoPublicoDatos';
				
				axios.get(urlEmpresa).then(response=>{
					this.departamentos = response.data.departamento;
					this.nombreEmpresa=response.data.empresa.NombreEmpresa
				}).catch(errors => {

					if (errors) {
						this.error404=true
					}

				});

			}

		},
	};
</script>
