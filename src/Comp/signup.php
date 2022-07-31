<?php
require "connection.php";
require 'bootstrap.php';
header('Access-Control-Allow-Origin: * ');

if (isset($_POST['submit'])) {
    $showalert = false;
    $showerror = true;
    $existence = true;
    $name = $_POST['signupname'];
    $email = $_POST['signupemail'];
    $phone = $_POST['signupphone'];
    $password = $_POST['signuppass'];
    $cpassword = $_POST['signupcon'];
    $exist = false;
    $numrow = "select * from signup where name = '$name'";
    $result = mysqli_query($conn, $numrow);
    $answer = mysqli_num_rows($result);
    if ($answer > 0) {
        $exist = true;
    } else {
        $exist = false;
        if ($password == $cpassword) {
            $hash = password_hash($password, PASSWORD_DEFAULT);
            $sql = "insert into signup(name,email,phone, password)  values('$name','$email','$phone','$hash');";
            $result = mysqli_query($conn, $sql);
            if ($result) {
                $showalert = true;
            }
            // header("Location: login.php");
        }
    }
    if ($cpassword != $password) {
        $showerror = false;
    }
?>
<?php
    if ($showerror == false) {
        echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Passwords do not match!!</strong> <br>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>';
    }
    if ($showalert == true) {
        echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Data saved sucessfully</strong> <br>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>';
    }
    if ($exist == true) {
        echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Name Already exists!!</strong> <br>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>';
    }
}
?>
<script>
    function show()
    {
        var pass = document.getElementById("exampleInputPassword1");
        var x = document.getElementById("exampleInputPasswor1");
        if(pass.type === "password" || x.type === "password")
        {
            pass.type = "text";
            x.type = "text";
        }
        else
        {
            pass.type = "password";
            x.type = "password";
        }
    }
</script>