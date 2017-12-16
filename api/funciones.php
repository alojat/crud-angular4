<?php 
	
	function conecta_bd(){		
		$servidor = "localhost";
		$usuario = "root";
		$clave = "";
		$bd = "test";		

		$conn=mysqli_connect($servidor,$usuario,$clave, $bd);
		
		if(mysqli_connect_errno()){
			echo mysqli_connect_error();
			exit(0);
		}
		
		# Seleccion de BD
		return $conn;
	}

	function getSQL($sql){
		$res;
		$conn	=	conecta_bd();
		$rs = mysqli_query($conn, $sql);
		$array = array();
		if ($rs) {
			$array = array();
			while ($fila = mysqli_fetch_assoc($rs)) {	
				$array[] = array_map('utf8_encode', $fila);
			}
			$res = json_encode($array, JSON_NUMERIC_CHECK);
		}else{
			$res = null;
			echo mysqli_error($conn);
		}
		mysqli_close($conn);
		return $res;
	}

	function putSQL($sql){
		$res;
		$conn	=	conecta_bd();
		$rs = mysqli_query($conn, $sql);
		if ($rs) {
			$array = true;
			$res = json_encode($array, JSON_NUMERIC_CHECK);
		}else{
			$array = false;
			$res = json_encode($array, JSON_NUMERIC_CHECK);
			echo mysqli_error($conn);
		}
		mysqli_close($conn);
		return $res;
	}

?>