<?php
echo 'starting;';
echo "<br>";

$site_name = 'https://frogkmv.ru/assets/images/work/';
$output_path = './work_imgs/';
$save_filename = '';

//file_put_contents($output_path .'/1.jpg',file_get_contents($site_name . '1.jpg')); die;

for($i=1;$i<=27;$i++)
{
	$temp_filename = __DIR__ . $output_path . $i . '.jpg';
	$temp_down_filename = $site_name . $i . '.jpg'; 
	echo $temp_filename; echo "<br>";
	echo $temp_down_filename; echo "<br>";
	echo "<hr>";
	if (!is_file($temp_filename)){
		$new_file = file_get_contents($temp_down_filename);
		file_put_contents($temp_filename,$new_file);
	}
}
echo 'ending;';
echo "<br>";