<template>
 <!-- OFFCANVAS -->
		<div id="offcanvas-nav" data-uk-offcanvas="flip: true; overlay: true">
			<div class="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
				<button class="uk-offcanvas-close uk-close uk-icon" type="button" data-uk-close></button>
			    <ul class="uk-nav uk-nav-offcanvas uk-nav-parent-icon" data-uk-nav="{ multiple: true }">
					<li class="uk-nav-header">Menu</li>
					<li><a href="#js-options"><span class="uk-margin-small-right uk-icon" data-uk-icon="icon: table"></span> Item</a></li>
					<li><a href="#"><span class="uk-margin-small-right uk-icon" data-uk-icon="icon: thumbnails"></span> Item</a></li>
					<li class="uk-nav-divider"></li>
					<li><a href="#"><span class="uk-margin-small-right uk-icon" data-uk-icon="icon: trash"></span> Item</a></li>
				</ul>
				<h3>Information</h3>
				<p>Vue starter using UIKit 3, Nuxt Js and Vue JS, Auth0, Axios, PWA, Jest, with Off Canvas and other UIKit components which can be utilized.</p>
				<NuxtLink to="/login" id="login" class="uk-button uk-button-primary uk-border-rounded uk-align-center">Login</NuxtLink>
			</div>
		</div>
		<!-- /OFFCANVAS -->
</template>

<style scoped>

</style>
