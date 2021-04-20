<template>
	
	<div class="mt-3 p-2 pb-4 bg-contanier">
		<div class="container-fluid" v-if="error404">
			<b-card  class="border-0 shadow-sm mt-4 text-center">
				<h3>  
				Información no disponible</h3>
				<router-link to="/" class="btn btn-warning text-white" ><b-icon icon="arrow-left"></b-icon> Volver</router-link>

			</b-card>
		</div>
		<div class="container-fluid" v-else>
			<b-card  class="border-0 shadow-sm mt-4">
				<div class="text-center mb-4">
					<div class="mb-4">
						<h5>Seleccione una empresa</h5>
					</div>
					<input type="text" placeholder="Buscar..." class="mt-2 form-control search" v-model="search">
				</div>
				<ul class="list-group list-group-flush">
					
					

					<router-link v-for="item in filteredList" v-bind:key="item.id"  :to="'departamento/'+item.slug" class="list-group-item tetx-left border-bottom cursor text-dark">	{{item.nombreEmpresa}}  <b-icon  variant="warning" icon="plus-circle-fill" class="float-right"></b-icon></router-link>




				</ul>
			</b-card>
		</div>
	</div>

</template>

<script>
	import axios from 'axios';
	export default {
		created() {
			this.getEmpresas();

		},
		data() {


			return {
				search:'',
				empresas:[],
				error404:false


			}
		},

		methods: {
			getEmpresas(){

				const api = 'https://datos.mifila.co/empresaServicioTurno';
				axios.get(api).then(response=>{
					this.empresas = response.data;

				}).catch(errors => {

					if (errors) {
						this.error404=true
					}

				});

			}

		},
		computed: {
			filteredList() {
				return this.empresas.filter(data => {
					return data.nombreEmpresa.toLowerCase().includes(this.search.toLowerCase())
				})
			}


		}
	};
</script>

<style>

	.search{

		border-radius: 30px !important;

	}
	.bg-contanier{
		background: #f9f9f9
	}
	.cursor{
		cursor: pointer;
		text-decoration: none !important;

	}
	.cursor:hover{
		color: red !important
	}
	


</style>