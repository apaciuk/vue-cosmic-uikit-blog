<template>
<header id="site-head">
			<div class="uk-container uk-container-expand">
				<div class="uk-grid uk-grid-medium uk-flex uk-flex-middle uk-flex-between" data-uk-grid>
					<div class="uk-width-auto" id="logo">
				    <a href="#" class="uk-logo" title="eCommerce"><img src="logo_uikit.svg" height="50" alt="Logo"></a>
					</div>
				    <div class="uk-width-auto">
					 <ul class="uk-subnav" data-uk-margin>
						  <li class="uk-visible@s"><NuxtLink to="/" exact>Home</NuxtLink></li>
						  	  <li class="uk-visible@s"><NuxtLink to="/contact">About</NuxtLink></li>
						
							<li class="uk-visible@s"><NuxtLink to="/contact">Products</NuxtLink></li>
								<li class="uk-visible@s"><NuxtLink to="/contact">Services</NuxtLink></li>
							<li class="uk-visible@s"><NuxtLink to="/contact">Contact</NuxtLink></li>
			                 <li class="uk-visible@s"><NuxtLink to="/login" data-uk-icon="icon:user"></NuxtLink></li>
						   
							<li class="uk-hidden@s"><a data-uk-navbar-toggle-icon data-uk-toggle href="#offcanvas-nav"></a></li>
					       </ul>
					</div>
				</div>
			</div>
           <fork-this/>
		</header>
     <!--/HEADER-->
</template>
<script>
import ForkThis from '~/components/ForkThis'
import { mapGetters } from 'vuex'
export default {
  components: {
    ForkThis
 },
computed: mapGetters(['isAuthenticated'])
}
</script>
<style scoped>
#site-head {
background:#0f2d53;
padding-right: 50px;
padding-left: 30px;
}
#logo {
padding-bottom: 6px;
}
h4.uk-margin-small-bottom {
text-transform: uppercase;
font-size: 1em;
}
li.uk-visible@s a {
padding-right: 20px;
}
</style>
