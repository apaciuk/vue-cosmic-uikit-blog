<template>
<header id="site-head">
			<div class="uk-container uk-container-expand">
				<div class="uk-grid uk-grid-medium uk-flex uk-flex-middle uk-flex-between" data-uk-grid>
					<div class="uk-width-auto" id="logo">
				    <NuxtLink to="/" class="uk-logo" title="eCommerce"><img src="logo.png" alt="Logo"></NuxtLink>
					    <NuxtLink to="/admin/auth" data-uk-icon="icon:user"></NuxtLink>
					</div>
				    <div class="uk-width-auto">
					 <ul class="uk-subnav" data-uk-margin>
						 <li class="uk-visible@s"><NuxtLink to="/" exact>Home</NuxtLink></li>
						  <li class="uk-visible@s"><NuxtLink to="/admin">Admin</NuxtLink></li>
						   <li class="uk-visible@s"><NuxtLink to="/posts">Blog</NuxtLink></li>
							<li class="uk-visible@s"><NuxtLink to="/about">About</NuxtLink></li>
					        <li class="uk-visible@s"><NuxtLink to="/contact">Contact</NuxtLink></li>
				        
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

export default {


}
</script>
<style scoped>
#site-head {
background-color: #550ac5;
padding-right: 50px;
padding-left: 30px;
}
#site-head a {
color:whitesmoke;
}
#site-head a:hover {
color: gainsboro;
}
#site-head a.nuxt-link-active {
color:#d40d1e;
}
h4.uk-margin-small-bottom {
text-transform: uppercase;
font-size: 1em;
}
</style>
