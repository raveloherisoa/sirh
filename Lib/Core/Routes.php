<?php
	
	/**
	 * Définition des routes 
	 *
	 * @author Voahirana
	 *
	 * @since 25/09/19
	 */

	namespace Core;

	class Routes 
	{		
		/**
		 * Lister les routes
		 *
		 * @param string $appName Nom de l'application
		 *
		 * @return array
		 */
		public function getListRoutes($appName)
		{
			$file = __DIR__.'/../../App/'. $appName .'/Config/routes.xml';
			if (file_exists($file)) {
				$contents = simplexml_load_file($file);
				foreach ($contents->route as $route) {
					$url 		  = (string)$route['url'];
					$module 	  = (string)$route['module'];
					$action 	  = (string)$route['action'];
					$routes[$url] = [
						'module' => $module, 
						'action' => $action
					];
				}
				return $routes;
			}
		}
	}
