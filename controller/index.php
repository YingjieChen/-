<?php
	require_once("../data/config.php");
	require_once("./lib/kuaidi.class.php");
	$type		=	$_GET['type'];
	$postid		=	$_GET['postid'];
	$kuaidi		=	new KuaiDi($type,$postid,$config['api']['kuaidi']);
	echo json_encode($kuaidi->getdata());
?>
