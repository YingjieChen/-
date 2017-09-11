<?php
/**
 * Created by PhpStorm.
 * User: oskfh
 * Date: 2017/9/5
 * Time: 11:54
 */
header("Content-type:text/html; charset=utf-8");
$type=$_POST['type'];
$postid=$_POST['postid'];

$url="http://www.kuaidi100.com/query?type={$type}&postid={$postid}";
 echo file_get_contents($url);
//