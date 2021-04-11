<template>
	<div>

		<b-navbar toggleable="lg" type="dark" fixed="top" class="navbar">
			<b-navbar-brand  class="text-white"><img  src="../../assets/icono.png"> Mi Fila</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav>
					<b-nav-item href="#" ><router-link to="/" class="text-white">Inicio</router-link> </b-nav-item>
					<b-nav-item href="#"><router-link to="/about" class="text-white" >Solicitar turno</router-link>
					</b-nav-item>
					<b-nav-item href="#"><router-link to="/about" class="text-white" >Mis turnos</router-link>
					</b-nav-item>
					
				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					
<!--<b-nav-item-dropdown text="Lang" right>
						<b-dropdown-item href="#">EN</b-dropdown-item>
						<b-dropdown-item href="#">ES</b-dropdown-item>
						<b-dropdown-item href="#">RU</b-dropdown-item>
						<b-dropdown-item href="#">FA</b-dropdown-item>
					</b-nav-item-dropdown>
				-->

				<b-nav-item-dropdown right class="text-white">
					<!-- Using 'button-content' slot -->
					<template  #button-content>
						<em class="text-white">Usuario</em>
					</template>
					<b-dropdown-item href="#">Perfil</b-dropdown-item>
					<b-dropdown-item href="#">Salir</b-dropdown-item>
				</b-nav-item-dropdown>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>



</div>
</template>

<style>
	.text-white{
		color: white !important;
		font-size:16px;
		font-weight: bold;
	}
	#nav a.router-link-exact-active {
		color:#f2f2f2 !important;

		border-radius: 5px 8px ;
		font-size: 16px;
	}
	.navbar{
		background: #16df7e;
		box-shadow:  0 0 5px #ddd;
	}


</style>

