<?php
	class KuaiDi{
		private $type;
		private $postid;
		private $interface;
		function __contruct($type='',$postid='',$interface=""){
			global $config;
			$this->type		=	$type;
			$this->postid		=	$postid;
			$this->interface	=	$interface;
		}
		function getdata(){
		}
	}
?>
