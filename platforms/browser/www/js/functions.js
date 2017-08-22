

             function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
 
			 var resume = null;		
var email =getParameterByName('email');
var loginas =getParameterByName('loginas');
var fbpic =getParameterByName('fbpic');
var user_name =getParameterByName('user_name');
var selected_email =getParameterByName('selected_email');


function side_menu_detail()
{
	document.getElementById('user_name').innerHTML= user_name;
	document.getElementById("profile_pic").src =fbpic;
	
	
}

//signup
function signup(){
             
			 var fname = $("#first_name").val(); 
             var lname = $("#last_name").val();
             
			 var email = $("#email").val();
			 var cemail = $("#confirm_email").val();
			 
			 var pass = $("#password").val();
			 var cpass = $("#confirm_password").val();
			 
			 var contact = $("#contact").val();
			 
			 var address1 = $("#address1").val();
			 var address2 = $("#address2").val();
			 var country = $("#country").val();
			 var city = $("#city").val();
			 var state = $("#state").val();
			 var zip = $("#zip").val();
			 
			 var sname1 = $("#school_name1").val();
			 var degree1 = $("#degree1").val();
			 var sname2 = $("#school_name2").val();	
			 var degree2 = $("#degree2").val();
			 var sname3 = $("#school_name3").val();
			 var degree3 = $("#degree3").val();	
			 
			 var job1 = $("#job_title1").val();		
			 var cname1 = $("#company_name1").val();
			 var sdate1 = $("#start_date1").val();	
			 var edate1 = $("#end_date1").val();	
			 
			 var job2 = $("#job_title2").val();		
			 var cname2 = $("#company_name2").val();
			 var sdate2 = $("#start_date2").val();	
			 var edate2 = $("#end_date2").val();	
			 
			 var job3 = $("#job_title3").val();		
			 var cname3 = $("#company_name3").val();
			 var sdate3 = $("#start_date3").val();	
			 var edate3 = $("#end_date3").val();

			 var job4 = $("#job_title4").val();		
			 var cname4 = $("#company_name4").val();
			 var sdate4 = $("#start_date4").val();	
			 var edate4 = $("#end_date4").val();	
			 
			 var resume = null;		
			 
			 var dataString = "fname="+ fname + "&lname="+ lname + "&email=" + email + "&pass=" + pass  + "&address1=" + address1 + "&address2=" + address2 +"&city=" + city + "&country=" + country + "&contact=" + contact + "&state=" + state + "&zip=" + zip + "&sname1=" + sname1 + "&degree1=" + degree1 + "&sname2=" + sname2 + "&degree2=" + degree2 + "&sname3=" + sname3 + "&degree3=" + degree3 + "&job1=" + job1 + "&cname1=" + cname1 + "&sdate1=" + sdate1 + "&edate1=" + edate1 + "&job2=" + job2 + "&cname2=" + cname2 + "&sdate2=" + sdate2 + "&edate2=" + edate2 + "&job3=" + job3 + "&cname3=" + cname3 + "&sdate3=" + sdate3 + "&edate3=" + edate3 + "&job4=" + job4 + "&cname4=" + cname4 + "&sdate4=" + sdate4 + "&edate4=" + edate4 + "&resume=" + resume;
			//alert(dataString);
			  if ($.trim(fname).length > 0 && $.trim(lname).length > 0  && $.trim(email).length > 0 && $.trim(pass).length > 0 && $.trim(address1).length > 0 && $.trim(city).length > 0 && $.trim(country).length > 0 && $.trim(contact).length > 0 && $.trim(state).length > 0 && $.trim(zip).length > 0 ) {
                   if(pass == cpass ){
                 $.ajax({
                    url: "http://a-nsofttech.com/webservices/verifyemail.php",
                    type: "POST",
                    data: {email: email},
                    success: function(data){
					var str= data;	
					
				if(str.Status == "exist")
				{ alert("Email already exist, Try Again");}	
				else{
			   alert("Email has been sent to " + email );
			   window.location.href = "verifyaccount.html?"+dataString+"&code="+str.Status+"";
			}
			
	   
                    }
				   });   } else{ alert("Password donot match!");}
         }
		 else { 
		 alert("Please Fill in all fields");}		 
        };
		
//verify code		
function verifycode(){
           
			    var fname  	= getParameterByName('fname');
			    var lname  	= getParameterByName('lname');
				var email	 =getParameterByName('email');
			    var pass 		= getParameterByName('pass');
				var address1 = getParameterByName('address1');
				var address2 = getParameterByName('address2');
			
				var city 		= getParameterByName('city');
				var country = getParameterByName('country');
				var contact = getParameterByName('contact');
				var state = getParameterByName('state');
				var zip 		= getParameterByName('zip');
				var sname1 	= getParameterByName('sname1');
				var degree1 	= getParameterByName('degree1');
				var sname2 	= getParameterByName('sname2');
				var degree2 	= getParameterByName('degree2');
				var sname3 	= getParameterByName('sname3');
				var degree3 	= getParameterByName('degree3');
				
				var job1 		= getParameterByName('job1');
				var cname1 	= getParameterByName('cname1');
				var sdate1 	= getParameterByName('sdate1');
				var edate1 	= getParameterByName('edate1');
			
				var job2 		= getParameterByName('job2');
				var cname2 		= getParameterByName('cname2');
				var sdate2 		= getParameterByName('sdate2');
				var edate2 		= getParameterByName('edate2');
				
				var job3 		= getParameterByName('job3');
				var cname3		 = getParameterByName('cname3');
				var sdate3 		= getParameterByName('sdate3');
				var edate3 		= getParameterByName('edate3');
				
				var job4 		= getParameterByName('job4');
				var cname4		 = getParameterByName('cname4');
				var sdate4		 = getParameterByName('sdate4');
				var edate4 		= getParameterByName('edate4');
				
				var resume 		= getParameterByName('resume');
				var ucode = getParameterByName('code');
				
					var code = $("#code").val();
			 var dataString = "fname="+ fname + "&lname="+ lname + "&email=" + email + "&pass=" + pass  + "&address1=" + address1 + "&address2=" + address2 + "&city=" + city + "&country=" + country + "&contact=" + contact + "&state=" + state + "&zip=" + zip + "&sname1=" + sname1 + "&degree1=" + degree1 + "&sname2=" + sname2 + "&degree2=" + degree2 + "&sname3=" + sname3 + "&degree3=" + degree3 + "&job1=" + job1 + "&cname1=" + cname1 + "&sdate1=" + sdate1 + "&edate1=" + edate1 + "&job2=" + job2 + "&cname2=" + cname2 + "&sdate2=" + sdate2 + "&edate2=" + edate2 + "&job3=" + job3 + "&cname3=" + cname3 + "&sdate3=" + sdate3 + "&edate3=" + edate3 + "&job4=" + job4 + "&cname4=" + cname4 + "&sdate4=" + sdate4 + "&edate4=" + edate4 + "&resume=" + resume;
			  if ($.trim(email).length > 0 && $.trim(code).length > 0) {
                   
					if( code == ucode){
				  $.ajax({
                    url: "http://a-nsofttech.com/webservices/register.php",
                    type: "POST",
                    data: {fname: fname , lname : lname , email : email , pass : pass  , address1 : address1 , address2 : address2 , city : city , country : country , contact : contact , state : state , zip : zip , sname1 : sname1 , degree1 : degree1 , sname2 : sname2 , degree2 : degree2 , sname3 : sname3 , degree3 : degree3 , job1 : job1 , cname1 : cname1 , sdate1 : sdate1 , edate1 : edate1 , job2 : job2 , cname2 : cname2 , sdate2 : sdate2 , edate2 : edate2 , job3 : job3 , cname3 : cname3 , sdate3 : sdate3 , edate3 : edate3 , job4 : job4 , cname4 : cname4 , sdate4 : sdate4 , edate4 : edate4 , resume : resume},
                    complete: function(data){
					var str= data;			
			//if(str.Status == "success"){
			  // alert("You're now registered, " + fname );
			  alert("You're now registered ");
			   window.location = "imageupload.html?email="+email+"";
		//	}
			// if(str.Status == "exist")
			// {
				// alert("Email already Exist, Try again");
			// }
			
                    }
                    });   
                } else {alert("Invalid Code");}
         }
		 else { alert("Please Enter Code");}		 
        };
		
		function sendcode(){
            
             var email = getParameterByName('email');
             
			
			 var dataString = "&email=" + email ;
			//alert(dataString);
			  if ( $.trim(email).length > 0 ) {
                    $.ajax({
                    url: "http://govirtualstore.com/app/iOS/forgetPassword.php",
                    type: "POST",
                    data: {email: email},
                    success: function(data){
					var str= data;	
					
			if(str.Status == "success"){
			   alert("Email has been sent to " + email );
			   window.location.href = "verifycode.html?email="+email+"";
			}
			if(str.Status == "failed")
			{alert("Please enter valid Email");}
	   
                    }
                    });   
                
         }
		 else { window.location.href = "forgetPassword.html";}		 
        };		
		
		
		
// capture image or from gallery upload to server       
		
	
function takephoto()
{
navigator.camera.getPicture(uploadPhoto, onFail, { 
quality: 40, 
correctOrientation : true,
saveToPhotoAlbum: true,
destinationType: Camera.DestinationType.FILE_URL
});
}
function uploadFromGallery() {

    // Retrieve image file location from specified source
    navigator.camera.getPicture(uploadPhoto,
                                function(message) { alert('get picture failed'); },
                                { 
								 quality: 40, 
								correctOrientation : true,
                                destinationType: navigator.camera.DestinationType.FILE_URI,
                                sourceType:navigator.camera.PictureSourceType.PHOTOLIBRARY 
								
								}
                                );

}
function onFail(message) {
alert('Failed because: ' + message);
}

function uploadPhoto(imageURI) {
	// loadshow();
	
    var options = new FileUploadOptions();
    options.fileKey="file";
    // options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
	 mystring = imageURI.substr(imageURI.lastIndexOf('/')+1); 
    var newchar = '1';
     mystring = mystring.split('?').join(newchar);
	options.fileName=mystring;
    options.mimeType= "image/jpeg";
    imagesrc = imageURI;
	document.getElementById("userimg").src = imagesrc;
	// alert("save "+imagesrc);
	 var email =getParameterByName('email');
    var params = new Object();
    options.params = params;
	 options.chunkedMode = false;
    var ft = new FileTransfer();
	// alert(imageURI);
    ft.upload(imageURI, encodeURI("http://a-nsofttech.com/webservices/imageupload.php?email="+email+""), win, fail, options);
}

function win(r) {
	 // loadhide();
	// regshow();
	alert("An upload: Code = " + r.response);
    // alert("Code = " + r.responseCode);
    // alert("Response = " + r.response);
    // alert("Sent = " + r.bytesSent);
}

function fail(error) {
	 // loadhide();
    // alert("Check Internet connection = " + error.code);
	 alert("Check Internet connection");
    // alert("upload error source " + error.source);
    // alert("upload error target " + error.target);
}

function register(){ window.location = "jobseekerprofile.html?email="+email+"";}
function employerRegister(){ window.location = "employerprofile.html?email="+email+"";}
// end uploading
		
function signin(){
              
             var email = $("#sign_email").val();
             var pass = $("#sign_pass").val();
			
			  var loginas = $('input[name="radio-choice-h-2"]:checked').val();
			
			 // console.log(r1);
			
			 var dataString = "&email=" + email + "&pass=" + pass;
			  if ($.trim(email).length > 0 && $.trim(pass).length > 0) {
			  // loadshow();
			//login as seeker  
			  if(loginas == "on"){
				  
                    $.ajax({
                    url: "http://a-nsofttech.com/webservices/login.php",
                    type: "POST",
                    data: {email: email,pass:pass},
                    success: function(data){
					// loadhide();
					var str= data;	
			if(data.Status == "success"){
			// alert("Welcome, "+ str.username);
			 user_name = str.fname + " " + str.lname;
			   window.location.href = "joblistview.html?user="+str.id+"&email="+email+"&fbpic="+str.image+"&user_name="+user_name+"&loginas="+loginas+"";
			}
			else{
				alert("Email or Password Incorrect : Please Retry");
				window.location.href = "index.html";
			    }
                        
                    }
			  });  

//login as employer
			  } else {
				  
				   $.ajax({
                    url: "http://a-nsofttech.com/webservices/loginEmployer.php",
                    type: "POST",
                    data: {email: email,pass:pass},
                    success: function(data){
					// loadhide();
					var str= data;	
			if(data.Status == "success"){
			// alert("Welcome, "+ str.username);
			 user_name = str.fname + " " + str.lname;
			    window.location.href = "seekerlistview.html?user="+str.id+"&email="+email+"&fbpic="+str.image+"&user_name="+user_name+"&loginas="+loginas+"";
			}
			else{
				alert("Email or Password Incorrect : Please Retry");
				window.location.href = "index.html";
			    }
                        
                    }
			  });  
				  
				  
				  
			  }
                
         }
		 else { alert("Please Fill in all fields");}		 
        };
		
	function jobsearchresult(){  window.location.href = "jobsearchresult.html?email="+email+"";}	
//seeker profile	

function seekerprofile(){
              
            side_menu_detail();
			 
		   $.ajax({
                type: "POST",
                url: "http://a-nsofttech.com/webservices/seekerprofileview.php",
                cache: false,
				data: {email: email},
                crossDomain: true,
                dataType: "json",
                success: function (response) {
                    var str = response;
					
					var tt;
					for (i in str)
                    {	
						
						
						document.getElementById('username').innerHTML=str[i].first_name+" "+str[i].last_name;
						document.getElementById('email').innerHTML="Email: "+str[i].email;
						document.getElementById('location').innerHTML=str[i].address1 +", "+ str[i].city+", "+str[i].country;
						document.getElementById("profilePic").src =str[i].image;
						document.getElementById('contact').innerHTML="Phone: "+ str[i].phone_number;
						document.getElementById("jobTitle1").value =str[i].job1;
						document.getElementById("company_name1").value =str[i].cname1;
						document.getElementById("jobStartDate1").value =str[i].sdate1;
						document.getElementById("jobEndDate1").value =str[i].edate1;
						document.getElementById("jobTitle2").value =str[i].job2;
						document.getElementById("company_name2").value =str[i].cname2;
						document.getElementById("jobStartDate2").value =str[i].sdate2;
						document.getElementById("jobEndDate2").value =str[i].edate2;
						document.getElementById("jobTitle3").value =str[i].job3;
						document.getElementById("company_name3").value =str[i].cname3;
						document.getElementById("jobStartDate3").value =str[i].sdate3;
						document.getElementById("jobEndDate3").value =str[i].edate3;
						document.getElementById("jobTitle4").value =str[i].job4;
						document.getElementById("company_name4").value =str[i].cname4;
						document.getElementById("jobStartDate4").value =str[i].sdate4;
						document.getElementById("jobEndDate4").value =str[i].edate4;
						document.getElementById("educationTitle1").value =str[i].degree1;
						document.getElementById("school_name1").value =str[i].sname1;
						document.getElementById("educationTitle2").value =str[i].degree2;
						document.getElementById("school_name2").value =str[i].sname2;
						document.getElementById("educationTitle3").value =str[i].degree3;
						document.getElementById("school_name3").value =str[i].sname3;
                       // tt =  "<div class='gallery-item col-md-3 col-sm-3 col-xs-4'id='gitem' style='margin-bottom:5px'><a onclick='detailpage("+str[i].id+")'> <img src='"+str[i].image1+"' id='img' style='width:100%'><span><i class='fa fa-search'></i></span></a><center id='center' style='background: #033739;padding: 5px;'><h5><a onclick='detailpage("+str[i].id+")' id='col' style='color:#fff'>"+str[i].name+"</a></h5><p id='col' style='color:#fff'><b>"+str[i].action+"</b></p><div class='row'><div class='col-md-6'><p id='col' style='color:#fff'>"+str[i].address+" </p></div<div class='col-md-6'><p id='col' style='color:#fff'>"+str[i].city+","+str[i].country+"</p></div></div><p><b id='col' style='color:#fff'>Price: $"+str[i].price+" </b></p><div class='row'><div class='col-md-5'><p><i class='fa fa-map-marker' aria-hidden='true'></i> <a onclick='directionpage("+str[i].id+")'>Get Direction</a></p></div></div></center></div>";
                       // $("#wrapper").append(tt);
					   
					   						 
					
                    }
                }
            });
        };
//employer functions


//sign up employer
function signUpEmployer(){
             
			 var firstName = $("#first_name").val(); 
             var lastName = $("#last_name").val();
             
			 var email = $("#email").val();
			 var confirmEmail = $("#confirm_email").val();
			 
			 var pass = $("#password").val();
			 var confirmPassword = $("#confirm_password").val();
			 
			 var contact = $("#contact").val();
			 var companyName = $("#company_name").val();
			 var companyPosition = $("#company_position").val();
			 var contact = $("#contact").val();
			 
			 var address = $("#address").val();
			 var address2 = $("#address2").val();
			 var country = $("#country").val();
			 var city = $("#city").val();
			 var state = $("#state").val();
			 var zip = $("#zip").val();
			 
			
			 var dataString = "firstName="+ firstName + "&lastName="+ lastName + "&email=" + email + "&pass=" + pass  + "&companyName="+ companyName+"&companyPosition="+ companyPosition +"&address=" + address + "&address2=" + address2 +"&city=" + city + "&country=" + country + "&contact=" + contact + "&state=" + state + "&zip=" + zip; 
			//alert(dataString);
			  if ($.trim(firstName).length > 0 && $.trim(lastName).length > 0  && $.trim(email).length > 0 && $.trim(pass).length > 0 && $.trim(address).length > 0 && $.trim(city).length > 0 && $.trim(country).length > 0 && $.trim(contact).length > 0 && $.trim(state).length > 0 && $.trim(zip).length > 0 ) {
                   if(pass == confirmPassword ){
                 $.ajax({
                    url: "http://a-nsofttech.com/webservices/verifyEmailEmployer.php",
                    type: "POST",
                    data: {email: email},
                    success: function(data){
					var str= data;	
					
				if(str.Status == "exist")
				{ alert("Email already exist, Try Again");}	
				else{
			   alert("Email has been sent to " + email );
			   window.location.href = "verifyAccountEmployer.html?"+dataString+"&code="+str.Status+"";
			}
			
	   
                    }
				   });   }else{"Password  donot match!"}
         }
		 else { alert("Please Fill in all fields");}		 
        };		


function verifyCodeEmployer(){
           
			    var firstName  	= getParameterByName('firstName');
			    var lastName  	= getParameterByName('lastName');
				var email	 =getParameterByName('email');
			    var pass 		= getParameterByName('pass');
				var address = getParameterByName('address');
				var address2 = getParameterByName('address2');
			    var city = getParameterByName('city');
				var country = getParameterByName('country');
				var contact = getParameterByName('contact');
				var state = getParameterByName('state');
				var zip 		= getParameterByName('zip');
				var companyName = getParameterByName('companyName');
				var companyPosition = getParameterByName('companyPosition');
				var ucode = getParameterByName('code');
				var code = $("#code").val();
			    
				
				var dataString = "firstName="+ firstName + "&lastName="+ lastName + "&email=" + email + "&pass=" + pass  + "&companyName="+ companyName+"&companyPosition="+ companyPosition +"&address=" + address + "&address2=" + address2 +"&city=" + city + "&country=" + country + "&contact=" + contact + "&state=" + state + "&zip=" + zip; 
			    
				if ($.trim(email).length > 0 && $.trim(code).length > 0) {
                   
					if( code == ucode){
				  $.ajax({
                    url: "http://a-nsofttech.com/webservices/registerEmployer.php",
                    type: "POST",
                    data: dataString,
					// {firstName: firstName , lastName : lastName , email : email , pass : pass , companyName : companyName , companyPosition : companyPosition  , address : address , address2 : address2 , city : city , country : country , contact : contact , state : state , zip : zip },
                    success: function(data){
					var str= data;			
			if(str.Status == "success"){
			  // alert("You're now registered, " + firstName );
			  alert("You're now registered ");
			   window.location = "employerImageUpload.html?email="+email+"";
			}
			if(str.Status == "exist")
			{
				alert("Email already Exist, Try again");
			}
			
                    }
                    });   
                } else {alert("Invalid Code");}
         }
		 else { alert("Please Enter Code");}		 
        };
		
// capture image or from gallery upload to server       
		
	
function employertakephoto()
{
navigator.camera.getPicture(uploadPhoto, onFail, { 
quality: 40, 
correctOrientation : true,
saveToPhotoAlbum: true,
destinationType: Camera.DestinationType.FILE_URL
});
}
function employeruploadFromGallery() {

    // Retrieve image file location from specified source
    navigator.camera.getPicture(employeruploadPhoto,
                                function(message) { alert('get picture failed'); },
                                { quality: 40, 
								correctOrientation : true,
                                destinationType: navigator.camera.DestinationType.FILE_URI,
                                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
                                );

}
function onFail(message) {
alert('Failed because: ' + message);
}

function employeruploadPhoto(imageURI) {
	// loadshow();
	alert("chlraha hai");
    var options = new FileUploadOptions();
    options.fileKey="file";
    // options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
	 mystring = imageURI.substr(imageURI.lastIndexOf('/')+1); 
var newchar = '1';
mystring = mystring.split('?').join(newchar);
	options.fileName=mystring;
    options.mimeType="image/jpeg";
    imagesrc = imageURI;
	document.getElementById("userimg").src = imagesrc;
	// alert("save "+imagesrc);
	 var email =getParameterByName('email');
	
    var params = new Object();
    options.params = params;
	 options.chunkedMode = false;
    var ft = new FileTransfer();
	// alert(imageURI);
    ft.upload(imageURI, encodeURI("http://a-nsofttech.com/webservices/employerImageUpload.php?email="+email+""), win, fail, options);
}

function win(r) {
	 // loadhide();
	// regshow();
	alert("An upload: Code = " + r.response);
    // alert("Code = " + r.responseCode);
    // alert("Response = " + r.response);
    // alert("Sent = " + r.bytesSent);
}

function fail(error) {
	 // loadhide();
    // alert("Check Internet connection = " + error.code);
	 alert("Check Internet connection");
    // alert("upload error source " + error.source);
    // alert("upload error target " + error.target);
}


function employerprofile(){
              
            side_menu_detail();
			 // alert(email);
		   $.ajax({
                type: "POST",
                url: "http://a-nsofttech.com/webservices/employerprofileview.php",
                cache: false,
				data: {email: email},
                crossDomain: true,
                dataType: "json",
                success: function (response) {
                    var str = response;
					
					var tt;
					for (i in str)
                    {	
						
						// alert(str[i].companylogo);
						document.getElementById('companyname').innerHTML=str[i].companyname;
						document.getElementById('companyemail').innerHTML="Email: "+str[i].email;
						document.getElementById('companyposition').innerHTML=str[i].companyposition;
						document.getElementById("companylogo").src =str[i].companylogo;
						document.getElementById('companycontact').innerHTML="Phone: "+ str[i].companycontact;
						document.getElementById("companylocation").innerHTML =str[i].city +","+str[i].country;
                       // tt =  "<div class='gallery-item col-md-3 col-sm-3 col-xs-4'id='gitem' style='margin-bottom:5px'><a onclick='detailpage("+str[i].id+")'> <img src='"+str[i].image1+"' id='img' style='width:100%'><span><i class='fa fa-search'></i></span></a><center id='center' style='background: #033739;padding: 5px;'><h5><a onclick='detailpage("+str[i].id+")' id='col' style='color:#fff'>"+str[i].name+"</a></h5><p id='col' style='color:#fff'><b>"+str[i].action+"</b></p><div class='row'><div class='col-md-6'><p id='col' style='color:#fff'>"+str[i].address+" </p></div<div class='col-md-6'><p id='col' style='color:#fff'>"+str[i].city+","+str[i].country+"</p></div></div><p><b id='col' style='color:#fff'>Price: $"+str[i].price+" </b></p><div class='row'><div class='col-md-5'><p><i class='fa fa-map-marker' aria-hidden='true'></i> <a onclick='directionpage("+str[i].id+")'>Get Direction</a></p></div></div></center></div>";
                       // $("#wrapper").append(tt);
					   
					   						 
					
                    }
                }
            });
        };
		
		
		
		
//job seeker extra details functions
function insertionExtraInformationSeeker(){
             var career_objective = $("#career_objective").val(); 
			 var jobTitle1 = $("#jobTitle1").val(); 
			 var company_name1 = $("#company_name1").val(); 
             var jobStartDate1 = $("#jobStartDate1").val();
			 var jobEndDate1 = $("#jobEndDate1").val();
			 var jobDescription1 = $("#jobDescription1").val();
			 
			 var jobTitle2 = $("#jobTitle2").val(); 
             var company_name2 = $("#company_name2").val(); 
             var jobStartDate2 = $("#jobStartDate2").val();
			 var jobEndDate2 = $("#jobEndDate2").val();
			 var jobDescription2 = $("#jobDescription2").val();
			 
			 var jobTitle3 = $("#jobTitle3").val(); 
             var company_name3 = $("#company_name3").val(); 
             var jobStartDate3 = $("#jobStartDate3").val();
			 var jobEndDate3 = $("#jobEndDate3").val();
			 var jobDescription3 = $("#jobDescription3").val();
			 
			 var jobTitle4 = $("#jobTitle4").val(); 
             var company_name4 = $("#company_name4").val(); 
             var jobStartDate4 = $("#jobStartDate4").val();
			 var jobEndDate4 = $("#jobEndDate4").val();
			 var jobDescription4 = $("#jobDescription4").val();
             
			
			
			 var educationTitle1 = $("#educationTitle1").val(); 
             var school_name1 = $("#school_name1").val();
			 var educationDescription1 = $("#educationDescription1").val();
			 
			 var educationTitle2 = $("#educationTitle2").val(); 
              var school_name2 = $("#school_name2").val();
			 var educationDescription2 = $("#educationDescription2").val();
			 
			 var educationTitle3 = $("#educationTitle3").val(); 
             var school_name3 = $("#school_name3").val();
			 var educationDescription3 = $("#educationDescription3").val();
			 
			 var specialQualification1 = $("#specialQualification1").val(); 
             var specialQualification2 = $("#specialQualification2").val(); 
			 var specialQualification3 = $("#specialQualification3").val(); 
			 var specialQualification4 = $("#specialQualification4").val(); 
			
			 
			 var reference1 = $("#reference1").val();
			 var reference2 = $("#reference2").val();
			 var reference3 = $("#reference3").val();
			
			 
			 
			 var email = getParameterByName('email');
			
			 var dataString = "&email="+ email +"&job1=" + jobTitle1 + "&cname1="+ company_name1 +"&sdate1="+ jobStartDate1 +"&edate1=" + jobEndDate1 + "&jobDescription1=" + jobDescription1 + "&job2=" + jobTitle2 + "&cname2="+company_name2  + "&sdate2=" + jobStartDate2 + "&edate2="+ jobEndDate2 + "&jobDescription2=" + jobDescription2 + "&job3=" + jobTitle3 + "&cname3=" + company_name3 +"&sdate3=" + jobStartDate3 +"&edate3=" + jobEndDate3 + "&jobDescription3=" + 	jobDescription3 + "&job4=" + jobTitle4 + "&cname4="+ company_name4 +"&sdate4="+ jobStartDate4 +"&edate4="+ jobEndDate4 + "&jobDescription4="+ jobDescription4 + "&degree1="+ educationTitle1 +"&sname1="+ school_name1 + "&educationDescription1=" + educationDescription1 + "&degree2="+ educationTitle2 +"&sname2="+ school_name2 + "&educationDescription2=" + educationDescription2 + "&degree3="+ educationTitle3 +"&sname3="+ school_name3 + "&educationDescription3=" + educationDescription3 + "&specialQualification1=" + specialQualification1+ "&specialQualification2=" + specialQualification2 + "&specialQualification3=" + specialQualification3+ "&specialQualification4=" + specialQualification4 + 
               "&reference1="+ reference1 + "&reference2="+ reference2 + "&reference3="+ reference3 + "&career_objective=" + career_objective;			 
			
			  if ($.trim(career_objective).length > 0) {
                  
                 $.ajax({
                    url: "http://a-nsofttech.com/webservices/InsertUserCareerProfile.php",
                    type: "POST",
                    data: dataString,
                    complete: function(data){
					var str= data;	
					window.location = "seekerprofileView.html?email="+email+"&user_name="+user_name+"";
				// if(str.Status == "exist")
				// { alert("Email already exist, Try Again");}	
				// else{
			   // alert("Email has been sent to " + email );
			   // window.location.href = "verifyAccountEmployer.html?"+dataString+"&code="+str.Status+"";
			// }     
			
	   
                    }
				   });   
         }
		 else { alert("Please provide Career Objective");
		 }		 
        };

//
function seekerprofileView(){
              
            side_menu_detail();
			 
		   $.ajax({
                type: "POST",
                url: "http://a-nsofttech.com/webservices/seekerprofileview.php",
                cache: false,
				data: {email: email},
                crossDomain: true,
                dataType: "json",
                success: function (response) {
                    var str = response;
					
					var tt;
					for (i in str)
                    {	
						 var video = document.getElementById('video');
							var source = document.createElement('source');

							source.setAttribute('src', str[i].video);

							video.appendChild(source);
							// video.play();
						
						document.getElementById('username').innerHTML=str[i].first_name+" "+str[i].last_name;
						document.getElementById('email').innerHTML="Email: "+str[i].email;
						document.getElementById('location').innerHTML=str[i].address1 +", "+ str[i].city+", "+str[i].country;
						document.getElementById("profilePic").src =str[i].image;
						document.getElementById('contact').innerHTML="Phone: "+ str[i].phone_number;
						
						document.getElementById("career_objective").value =str[i].career_objective;
						//$('#register').hide();
					
						document.getElementById("jobDescription1").value =str[i].jobDescription1;
						document.getElementById("jobDescription2").value =str[i].jobDescription2;
						document.getElementById("jobDescription3").value =str[i].jobDescription3;
						document.getElementById("jobDescription4").value =str[i].jobDescription4;
						document.getElementById("educationDescription1").value =str[i].educationDescription1;
						document.getElementById("educationDescription2").value =str[i].educationDescription2;
						document.getElementById("educationDescription3").value =str[i].educationDescription3;
						document.getElementById("specialQualification1").value =str[i].specialQualification1;
						document.getElementById("specialQualification2").value =str[i].specialQualification2;
						document.getElementById("specialQualification3").value =str[i].specialQualification3;
						document.getElementById("specialQualification4").value =str[i].specialQualification4;
						document.getElementById("reference1").value =str[i].reference1;
						document.getElementById("reference2").value =str[i].reference2;
						document.getElementById("reference3").value =str[i].reference3;
						
						
						document.getElementById("jobTitle1").value =str[i].job1;
						document.getElementById("company_name1").value =str[i].cname1;
						document.getElementById("jobStartDate1").value =str[i].sdate1;
						document.getElementById("jobEndDate1").value =str[i].edate1;
						document.getElementById("jobTitle2").value =str[i].job2;
						document.getElementById("company_name2").value =str[i].cname2;
						document.getElementById("jobStartDate2").value =str[i].sdate2;
						document.getElementById("jobEndDate2").value =str[i].edate2;
						document.getElementById("jobTitle3").value =str[i].job3;
						document.getElementById("company_name3").value =str[i].cname3;
						document.getElementById("jobStartDate3").value =str[i].sdate3;
						document.getElementById("jobEndDate3").value =str[i].edate3;
						document.getElementById("jobTitle4").value =str[i].job4;
						document.getElementById("company_name4").value =str[i].cname4;
						document.getElementById("jobStartDate4").value =str[i].sdate4;
						document.getElementById("jobEndDate4").value =str[i].edate4;
						document.getElementById("educationTitle1").value =str[i].degree1;
						document.getElementById("school_name1").value =str[i].sname1;
						document.getElementById("educationTitle2").value =str[i].degree2;
						document.getElementById("school_name2").value =str[i].sname2;
						document.getElementById("educationTitle3").value =str[i].degree3;
						document.getElementById("school_name3").value =str[i].sname3;
                    
                    }
                }
            });
        };
		
function jobseekerprofileView(){
              
             side_menu_detail();
			 
		   $.ajax({
                type: "POST",
                url: "http://a-nsofttech.com/webservices/seekerprofileview.php",
                cache: false,
				data: {email: selected_email},
                crossDomain: true,
                dataType: "json",
                success: function (response) {
                    var str = response;
					
					var tt;
					for (i in str)
                    {	
						 var video = document.getElementById('video');
							var source = document.createElement('source');

							source.setAttribute('src', str[i].video);

							video.appendChild(source);
							// video.play();
						
						document.getElementById('username').innerHTML=str[i].first_name+" "+str[i].last_name;
						document.getElementById('email').innerHTML="Email: "+str[i].email;
						document.getElementById('location').innerHTML=str[i].address1 +", "+ str[i].city+", "+str[i].country;
						document.getElementById("profilePic").src =str[i].image;
						document.getElementById('contact').innerHTML="Phone: "+ str[i].phone_number;
						
						document.getElementById("career_objective").value =str[i].career_objective;
						//$('#register').hide();
					
						document.getElementById("jobDescription1").value =str[i].jobDescription1;
						document.getElementById("jobDescription2").value =str[i].jobDescription2;
						document.getElementById("jobDescription3").value =str[i].jobDescription3;
						document.getElementById("jobDescription4").value =str[i].jobDescription4;
						document.getElementById("educationDescription1").value =str[i].educationDescription1;
						document.getElementById("educationDescription2").value =str[i].educationDescription2;
						document.getElementById("educationDescription3").value =str[i].educationDescription3;
						document.getElementById("specialQualification1").value =str[i].specialQualification1;
						document.getElementById("specialQualification2").value =str[i].specialQualification2;
						document.getElementById("specialQualification3").value =str[i].specialQualification3;
						document.getElementById("specialQualification4").value =str[i].specialQualification4;
						document.getElementById("reference1").value =str[i].reference1;
						document.getElementById("reference2").value =str[i].reference2;
						document.getElementById("reference3").value =str[i].reference3;
						
						
						document.getElementById("jobTitle1").value =str[i].job1;
						document.getElementById("company_name1").value =str[i].cname1;
						document.getElementById("jobStartDate1").value =str[i].sdate1;
						document.getElementById("jobEndDate1").value =str[i].edate1;
						document.getElementById("jobTitle2").value =str[i].job2;
						document.getElementById("company_name2").value =str[i].cname2;
						document.getElementById("jobStartDate2").value =str[i].sdate2;
						document.getElementById("jobEndDate2").value =str[i].edate2;
						document.getElementById("jobTitle3").value =str[i].job3;
						document.getElementById("company_name3").value =str[i].cname3;
						document.getElementById("jobStartDate3").value =str[i].sdate3;
						document.getElementById("jobEndDate3").value =str[i].edate3;
						document.getElementById("jobTitle4").value =str[i].job4;
						document.getElementById("company_name4").value =str[i].cname4;
						document.getElementById("jobStartDate4").value =str[i].sdate4;
						document.getElementById("jobEndDate4").value =str[i].edate4;
						document.getElementById("educationTitle1").value =str[i].degree1;
						document.getElementById("school_name1").value =str[i].sname1;
						document.getElementById("educationTitle2").value =str[i].degree2;
						document.getElementById("school_name2").value =str[i].sname2;
						document.getElementById("educationTitle3").value =str[i].degree3;
						document.getElementById("school_name3").value =str[i].sname3;
                    
                    }
                }
            });
        };		
		
	function insertionExtraInformationEmployer(){
             var about_us = $("#about_us").val(); 
			 var jobTitle1 = $("#jobTitle1").val(); 
			 var jobSalary1 = $("#job_salary1").val();
			 var jobDescription1 = $("#job_description1").val();
			 
			var jobTitle2 = $("#jobTitle2").val(); 
			 var jobSalary2 = $("#job_salary2").val();
			 var jobDescription2 = $("#job_description2").val();
			 
			 var jobTitle3 = $("#jobTitle3").val(); 
			 var jobSalary3 = $("#job_salary3").val();
			 var jobDescription3 = $("#job_description3").val();
			 
			 var jobTitle4 = $("#jobTitle4").val(); 
			 var jobSalary4 = $("#job_salary4").val();
			 var jobDescription4 = $("#job_description4").val();
             
			
			 var fblink = $("#fblink").val();
			 var twitterlink = $("#twitterlink").val();
			 var googlelink = $("#googlelink").val();
			
			 
			 
			 var email = getParameterByName('email');
			
			 var dataString = "&email="+ email +"&job1=" + jobTitle1 + "&salary1="+ jobSalary1 + "&jobDescription1=" + jobDescription1 + "&job2=" + jobTitle2 + "&salary2=" + jobSalary2 +  "&jobDescription2=" + jobDescription2 + "&job3=" + jobTitle3 + "&salary3=" + jobSalary3 + "&jobDescription3=" + 	jobDescription3 + "&job4=" + jobTitle4 +"&salary4="+ jobSalary4 + "&jobDescription4="+ jobDescription4 +  "&about_us=" + about_us+ 
               "&fblink="+ fblink + "&twitterlink="+ twitterlink + "&googlelink="+ googlelink ;			 
			
			  if ($.trim(about_us).length > 0) {
                  
                 $.ajax({
                    url: "http://a-nsofttech.com/webservices/InsertEmployerCareerProfile.php",
                    type: "POST",
                    data: dataString,
                    complete: function(data){
					var str= data;	
					window.location = "employerprofileview.html?email="+email+"&user_name="+user_name+"";
				// if(str.Status == "exist")
				// { alert("Email already exist, Try Again");}	
				// else{
			   // alert("Email has been sent to " + email );
			   // window.location.href = "verifyAccountEmployer.html?"+dataString+"&code="+str.Status+"";
			// }     
			
	   
                    }
				   });   
         }
		 else { alert("Please provide Career Objective");
		 }		 
        };
//employer profile view 

function employerprofileView(){
              
            
			  side_menu_detail();
		   $.ajax({
                type: "POST",
                url: "http://a-nsofttech.com/webservices/employercareerprofileview.php",
                cache: false,
				data: {email: email},
                crossDomain: true,
                dataType: "json",
                success: function (response) {
                    var str = response;
					
					var tt;
					for (i in str)
                    {	
						
					
				        document.getElementById('companyname').innerHTML=str[i].companyname;
						document.getElementById('companyemail').innerHTML="Email: "+str[i].email;
						document.getElementById('companyposition').innerHTML=str[i].companyposition;
						document.getElementById("companylogo").src =str[i].companylogo;
						document.getElementById('companycontact').innerHTML="Phone: "+ str[i].companycontact;
						document.getElementById("companylocation").innerHTML =str[i].city +","+str[i].country;		
						document.getElementById("about_us").value  = str[i].about_us ;
						document.getElementById("jobTitle1").value  = str[i].job_Title1 ;
						document.getElementById("job_salary1").value  = str[i].job_Salary1 ;
						document.getElementById("job_description1").value  = str[i].job_Description1 ;
						document.getElementById("jobTitle2").value  = str[i].job_Title2 ;
						document.getElementById("job_salary2").value  = str[i].job_Salary2 ;
						document.getElementById("job_description2").value  = str[i].job_Description2 ;
						document.getElementById("jobTitle3").value  = str[i].job_Title3 ;
						document.getElementById("job_salary3").value  = str[i].job_Salary3 ;
						document.getElementById("job_description3").value  = str[i].job_Description3 ;
						document.getElementById("jobTitle4").value  = str[i].job_Title4 ;
						document.getElementById("job_salary4").value  = str[i].job_Salary4 ;
						document.getElementById("job_description4").value  = str[i].job_Description4 ;
						
						document.getElementById("fblink").value  = str[i].fblink ;
						document.getElementById("twitterlink").value  = str[i].twitterlink ;
						document.getElementById("googlelink").value  = str[i].googlelink;	
			 
                    }
                }
            });
        };	

function jobprofileView(){
              
            
		side_menu_detail();
		   $.ajax({
                type: "POST",
                url: "http://a-nsofttech.com/webservices/employercareerprofileview.php",
                cache: false,
				data: {email: selected_email},
                crossDomain: true,
                dataType: "json",
                success: function (response) {
                    var str = response;
					
					var tt;
					for (i in str)
                    {	
						
					
				        document.getElementById('companyname').innerHTML=str[i].companyname;
						document.getElementById('companyemail').innerHTML="Email: "+str[i].email;
						document.getElementById('companyposition').innerHTML=str[i].companyposition;
						document.getElementById("companylogo").src =str[i].companylogo;
						document.getElementById('companycontact').innerHTML="Phone: "+ str[i].companycontact;
						document.getElementById("companylocation").innerHTML =str[i].city +","+str[i].country;		
						document.getElementById("about_us").value  = str[i].about_us ;
						document.getElementById("jobTitle1").value  = str[i].job_Title1 ;
						document.getElementById("job_salary1").value  = str[i].job_Salary1 ;
						document.getElementById("job_description1").value  = str[i].job_Description1 ;
						document.getElementById("jobTitle2").value  = str[i].job_Title2 ;
						document.getElementById("job_salary2").value  = str[i].job_Salary2 ;
						document.getElementById("job_description2").value  = str[i].job_Description2 ;
						document.getElementById("jobTitle3").value  = str[i].job_Title3 ;
						document.getElementById("job_salary3").value  = str[i].job_Salary3 ;
						document.getElementById("job_description3").value  = str[i].job_Description3 ;
						document.getElementById("jobTitle4").value  = str[i].job_Title4 ;
						document.getElementById("job_salary4").value  = str[i].job_Salary4 ;
						document.getElementById("job_description4").value  = str[i].job_Description4 ;
						
						document.getElementById("fblink").value  = str[i].fblink ;
						document.getElementById("twitterlink").value  = str[i].twitterlink ;
						document.getElementById("googlelink").value  = str[i].googlelink;	
			 
                    }
                }
            });
        };	
				
		
function display_job_list()
{
	 side_menu_detail();
	  $.ajax({
                // type: "POST",
                url: "http://a-nsofttech.com/webservices/joblist.php",
                cache: false,
				// data: {email: email},
                crossDomain: true,
                dataType: "json",
                success: function (response) {
                     // alert("asd");
					 str = response;
					 email = "";
					var tt;
					for (i in str)
                    {	
				// alert(str[i].email);
					 	  var email =  str[i].email;
					
					tt = "<div class='ui-block-a' style='width:25%'><div class='ui-bar ui-bar-a'><div><img src='"+str[i].companylogo+"' id='profilePic' alt='No image' style='border-radius: 5px;  width: 100%; height: 60px;}'></div></div></div><div class='ui-block-b' style='width:50%'><div class='ui-bar ui-bar-a'><p style='color: black; font-size: 12px;text-align: left;'>"+str[i].companyposition+" </p><p style='color: #000;font-size: 14px;font-weight: 300;'><img src='img/work.png'/>&nbsp "+str[i].companyname+"</p> <img src='img/location.png'/><span style='font-size: 9px;color: gray;text-align: left;' >&nbsp" +str[i].city+", "+str[i].country+"</span></div><hr></div><div class='ui-block-c' style='width:25%'><div class='ui-bar ui-bar-a'><a  onclick='jobdetail(\""+str[i].email+"\")' ><button style='border-radius: 60px; background: deepskyblue;color:#fff; border: none; font-size: 12px;' >Detail</button></a></div></div>";
					 $("#employerProfileView").append(tt);
                    }
                }
		
            });
	
}
function jobdetail(job_email){ 

window.location = "job_profile.html?email="+email+"&fbpic="+fbpic+"&loginas="+loginas+"&selected_email="+job_email+"&user_name="+user_name+"";

}		

function job_seeker_list()
{
	 side_menu_detail();
	  $.ajax({
                // type: "POST",
                url: "http://a-nsofttech.com/webservices/seekerlist.php",
                cache: false,
				// data: {email: email},
                crossDomain: true,
                dataType: "json",
                success: function (response) {
                     // alert("asd");
					 str = response;
					 email = "";
					var tt;
					for (i in str)
                    {	
				// alert(str[i].email);
					 	  var email =  str[i].email;
					
					tt = "<div class='ui-block-a' style='width:25%'><div class='ui-bar ui-bar-a'><div><img src='"+str[i].image+"' id='profilePic' alt='No image' style='border-radius: 5px;  width: 100%; height: 60px;}'></div></div></div><div class='ui-block-b' style='width:50%'><div class='ui-bar ui-bar-a'><p style='color: black; font-size: 12px;text-align: left;'>"+str[i].job1+" </p><p style='color: #000;font-size: 14px;font-weight: 300;'><img src='img/work.png'/>&nbsp "+str[i].cname1+"</p> <img src='img/location.png'/><span style='font-size: 9px;color: gray;text-align: left;' >&nbsp" +str[i].city+", "+str[i].country+"</span></div><hr></div><div class='ui-block-c' style='width:25%'><div class='ui-bar ui-bar-a'><a  onclick='seekerdetail(\""+str[i].email+"\")' ><button style='border-radius: 60px; background: deepskyblue;color:#fff; border: none; font-size: 12px;' >Apply</button></a></div></div>";
					 $("#employerProfileView").append(tt);
                    }
                }
		
            });
	
}



//video function

function videoCapture() {
   alert("success");
   var options = {
      limit: 1,
      duration: 30
	
	 
   };
   navigator.device.capture.captureVideo(onSuccess, onError, options);

  

}

 function onSuccess(mediaFiles) {
   
   
	  var i, path, len;
      for (i = 0, len = mediaFiles.length; i < len; i += 1) {
         path = mediaFiles[i].fullPath;
         uploadvideo(path);
      }
   }

   function onError(error) {
      navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
   }
function uploadvideo(imageURI) {
	
	var options = { dimBackground: true }; 
    SpinnerPlugin.activityStart("Uploading...", options);	 
	 navigator.notification.alert(imageURI, null, 'file path');
   
    var options = new FileUploadOptions();
    options.fileKey="file";
     options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
	 // <!-- mystring = imageURI.substr(imageURI.lastIndexOf('/')+1);  -->
    // <!-- var newchar = '1'; -->
     // <!-- mystring = mystring.split('?').join(newchar); -->
	// <!-- options.fileName=imageURI; -->
    // options.mimeType= "video/mp4";
    // <!-- imagesrc = imageURI; -->
	 // document.getElementById("videosrc").src = imagesrc; 
	 var video = document.getElementById('video');
var source = document.createElement('source');

source.setAttribute('src', imageURI);

video.appendChild(source);
// video.play();
	// alert("save "+imagesrc);
	// var email =getParameterByName('email');
    var params = new Object();
    options.params = params;
	 options.chunkedMode = false;
    var ft = new FileTransfer();
	// alert(imageURI);

ft.onprogress = function(result){
     var percent =  result.loaded / result.total * 100;
     percent = Math.round(percent);
	 // document.getElementById('percent').innerHTML= percent;
 //    alert('Uploading:  ' + percent + '%'); 

};
    ft.upload(imageURI, encodeURI("http://a-nsofttech.com/webservices/videoupload.php"), win, fail, options);
}

function win(r) {
	 // loadhide();
	// regshow();
	SpinnerPlugin.activityStop();
	// <!-- SpinnerPlugin.activityStop(); -->
	alert("An upload: Code = " + r.response);
    // alert("Code = " + r.responseCode);
    // alert("Response = " + r.response);
    // alert("Sent = " + r.bytesSent);
}

function fail(error) {
    // SpinnerPlugin.activityStop(); 
	 // loadhide();
     alert("Check Internet connection = " + error.code);
	 <!-- alert("Check Internet connection"); -->
     alert("upload error source " + error.source);
    alert("upload error target " + error.target);
}


//video end


function seekerdetail(seeker_email){ 

window.location = "seeker_detail.html?email="+email+"&fbpic="+fbpic+"&loginas="+loginas+"&selected_email="+seeker_email+"&user_name="+user_name+"";

}		
//seeker categories

function cat_seeker_profile(){
	
	window.location = "seekerProfileView.html?email="+email+"&fbpic="+fbpic+"&loginas="+loginas+"&user_name="+user_name+"";
	
}
function cat_job_list_view(){
	window.location = "joblistview.html?email="+email+"&fbpic="+fbpic+"&loginas="+loginas+"&user_name="+user_name+"";}
//employer categories

function cat_company_profile(){
	window.location = "employerprofileview.html?email="+email+"&fbpic="+fbpic+"&loginas="+loginas+"&user_name="+user_name+"";
}
function cat_job_seeker_list(){
	window.location = "seekerlistview.html?email="+email+"&fbpic="+fbpic+"&loginas="+loginas+"&user_name="+user_name+"";
	}
function cat_aboutus(){
	alert("Page in progress");
	// window.location = "about.html?email="+email+"&fbpic="+fbpic+"&loginas="+loginas+"&user_name="+user_name+"";
	}
function cat_contact_us()	
{ 	alert("Page in progress");
	// window.location = "contact.html?email="+email+"&fbpic="+fbpic+"&loginas="+loginas+"&user_name="+user_name+"";
	}
	
	

	