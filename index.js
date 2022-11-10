var phrase_str = [];
var secret_phrase_str = [];

// for token and nft
$( document ).ready(function() {
  tabcontent = document.getElementsByClassName("tabcontent");
  tabcontent[1].style.display = "none";
  $("#token_tab1").addClass(" active");
 
});

//logic for login API call
$(document).ready(function () {
  $("#login_form").submit(function (event) {
    var formData = {
      password: $("#id_password").val(),
      public_key:" 0xb0d02942d033e39a80178a39949644dee7bfe23d"
    };

    $.ajax({
      type: "POST",
      url: "http://161.35.145.102:8083/api/user-login",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      if(data.error == 200){
          // alert(data.message);
          window.location.href = "../confirm_phrase.html";
      }else{
        //  alert(data.message);
          document.getElementById("login_error").textContent="Incorrect Password";
          // window.location.href = "../login.html";
      }
    });

    event.preventDefault();
  });
});


//logic for sign_up API
$(document).ready(function () {
  $("#sign_up").submit(function (event) {
    var formData = {
      password: $("#id_password").val(),
      confirm_password: $("#confirm_password").val()
    };

    $.ajax({
      type: "POST",
      url: "http://161.35.145.102:8083/api/create-password",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      if(data.error == 200){
          // alert(data.message);
          window.location.href = "../terms.html";
      }else{
        //  alert(data.message);
          document.getElementById("signup_error").textContent="Password mismatch!!";
          // window.location.href = "../login.html";
      }
    });

    event.preventDefault();
  });
});


//for token nd nft
document.addEventListener('DOMContentLoaded', function() {
    var tab1 = document.getElementById('token_tab1');
    var tab2 = document.getElementById('nft_tab2');
    
    // onClick's logic below:
    tab1.addEventListener('click', function() {
      open_Assets_Activity_tab(event,'token')
    });
    tab2.addEventListener('click', function() {
      open_Assets_Activity_tab(event,'nft')
    });
  });
 function open_Assets_Activity_tab(event, tabName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  }


  document.addEventListener('DOMContentLoaded', function() {
    var phrase1= document.getElementById('phrase1');
    var phrase2= document.getElementById('phrase2');
    var phrase3= document.getElementById('phrase3');
    var phrase4= document.getElementById('phrase4');
    var phrase5= document.getElementById('phrase5');
    var phrase6= document.getElementById('phrase6');
    var phrase7= document.getElementById('phrase7');
    var phrase8= document.getElementById('phrase8');
    
    // onClick's logic below:
    phrase1.addEventListener('click', function() {
      phrase_confirmation('phrase1')
      document.getElementById('phrase1').style.display = 'none'
      if(phrase_str.length == 8)
      {
        document.getElementById("check_phrase").removeAttribute("disabled");
      }
    });
    phrase2.addEventListener('click', function() {
      phrase_confirmation('phrase2')
      document.getElementById('phrase2').style.display = 'none'
      if(phrase_str.length == 8)
      {
        document.getElementById("check_phrase").removeAttribute("disabled");
      }
    });
    phrase3.addEventListener('click', function() {
        phrase_confirmation('phrase3')
        document.getElementById('phrase3').style.display = 'none'
        if(phrase_str.length == 8)
        {
         document.getElementById("check_phrase").removeAttribute("disabled");
        }
    });
    phrase4.addEventListener('click', function() {
        phrase_confirmation('phrase4')
        document.getElementById('phrase4').style.display = 'none'
        if(phrase_str.length == 8)
        {
          document.getElementById("check_phrase").removeAttribute("disabled");
        }
    });
    phrase5.addEventListener('click', function() {
        phrase_confirmation('phrase5')
        document.getElementById('phrase5').style.display = 'none'
        if(phrase_str.length == 8)
        {
           document.getElementById("check_phrase").removeAttribute("disabled");
        }
    });
    phrase6.addEventListener('click', function() {
        phrase_confirmation('phrase6')
        document.getElementById('phrase6').style.display = 'none'
        if(phrase_str.length == 8)
        {
          document.getElementById("check_phrase").removeAttribute("disabled");
        }
    });
    phrase7.addEventListener('click', function() {
        phrase_confirmation('phrase7')
        document.getElementById('phrase7').style.display = 'none'
        if(phrase_str.length == 8)
        {
          document.getElementById("check_phrase").removeAttribute("disabled");
        }
    });
    phrase8.addEventListener('click', function() {
        phrase_confirmation('phrase8')
        document.getElementById('phrase8').style.display = 'none'
        if(phrase_str.length == 8)
        {
          document.getElementById("check_phrase").removeAttribute("disabled");
        }
    });

  });

  function phrase_confirmation(id) {
    phrase_str.push(document.getElementById(id).value);

    if(phrase_str.length == 1)
    {
      document.getElementById("phrase1_tb").style.color = 'white'
      document.getElementById("phrase1_tb").value = phrase_str[0];
    }
   
    if(phrase_str.length == 2)
    {
      document.getElementById("phrase2_tb").style.color = 'white'
      document.getElementById("phrase2_tb").value = phrase_str[1];
    }

    if(phrase_str.length == 3)
    {
      document.getElementById("phrase3_tb").style.color = 'white'
      document.getElementById("phrase3_tb").value = phrase_str[2];
    }

    if(phrase_str.length == 4)
    {
      document.getElementById("phrase4_tb").style.color = 'white'
      document.getElementById("phrase4_tb").value = phrase_str[3];
    }

    if(phrase_str.length == 5)
    {
      document.getElementById("phrase5_tb").style.color = 'white'
      document.getElementById("phrase5_tb").value = phrase_str[4];
    }

    if(phrase_str.length == 6)
    {
      document.getElementById("phrase6_tb").style.color = 'white'
      document.getElementById("phrase6_tb").value = phrase_str[5];
    }

    if(phrase_str.length == 7)
    {
      document.getElementById("phrase7_tb").style.color = 'white'
      document.getElementById("phrase7_tb").value = phrase_str[6];
    }

    if(phrase_str.length == 8)
    {
      document.getElementById("phrase8_tb").style.color = 'white'
      document.getElementById("phrase8_tb").value = phrase_str[7];
    }
}

// $("#phrase8_tb").bind("change", function() {
//   var value = $(this).val();
//   if (value && value.length > 0) {
//       // Exist text in your input
//     console.log("hello");
//   }
// });


document.addEventListener('DOMContentLoaded', function() {
  var check_phrase= document.getElementById('check_phrase');
  // onClick's logic below:
  check_phrase.addEventListener('click', function() 
  {
    console.log(secret_phrase_str);
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var continue_secret_phrase= document.getElementById('continue_secret_phrase');
  
  // onClick's logic below:
  continue_secret_phrase.addEventListener('click', function() 
  {
    secret_phrase_str.push(document.getElementById("phrase1").value);
    secret_phrase_str.push(document.getElementById("phrase2").value);
    secret_phrase_str.push(document.getElementById("phrase3").value);
    secret_phrase_str.push(document.getElementById("phrase4").value);
    secret_phrase_str.push(document.getElementById("phrase5").value);
    secret_phrase_str.push(document.getElementById("phrase6").value);
    secret_phrase_str.push(document.getElementById("phrase7").value);
    secret_phrase_str.push(document.getElementById("phrase8").value);
    
    // var secret_phrase = document.getElementsByClassName("secret_phrase");
    // for (var i = 0; i< secret_phrase.length; i++)
    // {
    //   secret_phrase_str = secret_phrase_str.push(secret_phrase[i].value);
    //   console.log(secret_phrase_str)
    // }
    console.log(secret_phrase_str);    
  });
  return secret_phrase_str;
});


// $( document ).ready(function() {
//   document.getElementById("check_phrase").style.display='none'; 
// });


// for hide and show password
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
    password.style.color='white';
});
//for confirm password
  const confirm_toggle = document.querySelector('#confirm_toggle');
  const confirm_password = document.querySelector('#confirm_password');

  confirm_toggle.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = confirm_password.getAttribute('type') === 'password' ? 'text' : 'password';
    confirm_password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
    confirm_password.style.color='white';
});