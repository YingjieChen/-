<?php
	require_once(dirname(__FILE__)."/function.php");
	class KuaiDi{
		private $type;
		private $postid;
		private $interface;
		function __construct($type='',$postid='',$interface=""){
			$this->type		=	$type;
			$this->postid		=	$postid;
			$this->interface	=	$interface;
		}
		function getdata(){
			$datas			=	curl($this->interface,"get",array("postid"=>$this->postid,"type"=>$this->type));
			return $datas;
		}
	}
?>
