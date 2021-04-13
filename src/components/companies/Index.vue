<template>
	
	<div class="mt-3 p-2 bg-contanier">
		<div class="container-fluid">
			<b-card  class="border-0 shadow-sm mt-4">
				<div class="text-center mb-4">
					<div class="mb-4">
						<h5>Seleccione una empresa</h5>
					</div>
					<input type="text" placeholder="Buscar..." class="mt-2 form-control search" v-model="search">
				</div>
				<ul class="list-group list-group-flush">
					<a  v-for="item in filteredList" v-bind:key="item.id" :href="'metodo/'+item.id">
					<li  class="list-group-item tetx-left border-bottom cursor">
					


						{{item.nombreEmpresa}} <b-icon  variant="warning" icon="plus-circle-fill" class="float-right"></b-icon></li></a> 
					
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


			}
		},

		methods: {
			getEmpresas(){

				const api = 'https://datos.mifila.co/empresaServicioTurno';
				axios.get(api).then(response=>{
					this.empresas = response.data;
					console.log('datos:',response.data);
				})

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

		border-radius: 20px;

	}
	.bg-contanier{
		background: #f9f9f9
	}
	.cursor{
		cursor: pointer;
	}
	
	
</style>