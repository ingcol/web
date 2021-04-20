<template>
	<div class="about">
		<h1>This is an about pagina {{$route.params.empresa}}</h1>

		{{datos}}

		<b-button>Button</b-button>
		<b-button variant="danger">Button</b-button>
		<b-button variant="success">Button</b-button>
		<b-button variant="outline-primary">Button</b-button>
	</div>
</template>

<script>
	
	export default {
		props:{
			empresa:String
		},
		created(){
			alert(this.$route.params.empresa);
			this.datos=this.$route.params.empresa
		},
		data() {
				

				return {
					datos:''
					


				}
			},
	};
</script>
