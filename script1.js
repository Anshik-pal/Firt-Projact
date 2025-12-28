// generate id-card
function generate() {
    let inputEnroll = document.getElementById("inputEnroll").value;
    let inputBranch = document.getElementById("inputBranch").value;
    let inputName = document.getElementById("inputName").value;
    let inputFather = document.getElementById("inputFather").value;
    let inputDob = document.getElementById("inputDob").value;
    inputDob = inputDob.split("-").reverse().join("-");
    let inputMON = document.getElementById("inputMON").value;
    let inputAMON = document.getElementById("inputAMON").value;
    let inputIssueDate = document.getElementById("inputIssueDate").value;
    inputIssueDate = inputIssueDate.split("-").reverse().join("-");
    let inputAddress = document.getElementById("inputAddress").value;
  
    let inputImage = document.getElementById("inputImage").files[0];
    let inputSign = document.getElementById("inputSign").files[0];
  
    //for validation
    let valid = validation(
      inputEnroll,
      inputBranch,
      inputName,
      inputFather,
      inputDob,
      inputMON,
      inputAMON,
      inputIssueDate,
      inputAddress,
      inputImage,
      inputSign
    );
  
    if (valid == true) {
      document.getElementById("idLoading").style.display = "block";
      document.getElementById("idForm").style.display = "none";
  
      setTimeout(() => {
        document.getElementById("idLoading").style.display = "none";
        document.getElementById("card-template").style.display = "block";
      }, 2000);
      document.getElementById("idForm").style.display = "none";
  
      document.getElementById("branchField").innerHTML = inputBranch;
      document.getElementById("studentField").innerHTML = inputName;
      document.getElementById("enrollField").innerHTML = inputEnroll;
      document.getElementById("fatherField").innerHTML = inputFather;
      document.getElementById("dobField").innerHTML = inputDob;
      document.getElementById("mobileField").innerHTML = inputMON;
      document.getElementById("addressField").innerHTML = inputAddress;
      document.getElementById("altNumber").innerHTML = inputAMON;
      document.getElementById("issuedateField").innerHTML = inputIssueDate;
  
      //Profile Picture
      renderpic(inputImage, "imageField");
      renderpic(inputSign, "studentSign");
    }
  }
  
  function realoadingpage() {
    window.location.reload();
  }
  
  // for validation
  function validation(
    inputEnroll,
    inputBranch,
    inputName,
    inputFather,
    inputDob,
    inputMON,
    inputAMON,
    inputIssueDate,
    inputAddress,
    inputImage,
    inputSign
  ) {
    let validity = 0;
  
    if (inputEnroll == "") {
      document.getElementById("inputEnroll").style.border = "2px solid red";
    } else {
      document.getElementById("inputEnroll").style.border = "1px solid green";
      validity += 1;
    }
  
    if (inputBranch == "Choose...") {
      document.getElementById("inputBranch").style.border = "2px solid red";
    } else {
      document.getElementById("inputBranch").style.border = "1px solid green";
      validity += 1;
    }
  
    if (inputName == "") {
      document.getElementById("inputName").style.border = "2px solid red";
    } else {
      document.getElementById("inputName").style.border = "1px solid green";
      validity += 1;
    }
  
    if (inputFather == "") {
      document.getElementById("inputFather").style.border = "2px solid red";
    } else {
      document.getElementById("inputFather").style.border = "1px solid green";
      validity += 1;
    }
  
    if (inputDob == "") {
      document.getElementById("inputDob").style.border = "2px solid red";
    } else {
      document.getElementById("inputDob").style.border = "1px solid green";
      validity += 1;
    }
  
    if (inputMON != "" && !isNaN(inputMON) && inputMON.length == 10) {
      document.getElementById("inputMON").style.border = "1px solid green";
      validity += 1;
    } else {
      document.getElementById("inputMON").style.border = "2px solid red";
    }
  
    if (inputAMON != "" && !isNaN(inputAMON) && inputAMON.length == 10) {
      document.getElementById("inputAMON").style.border = "1px solid green";
      validity += 1;
    } else {
      document.getElementById("inputAMON").style.border = "2px solid red";
    }
  
    if (inputIssueDate == "") {
      document.getElementById("inputIssueDate").style.border = "2px solid red";
    } else {
      document.getElementById("inputIssueDate").style.border = "1px solid green";
      validity += 1;
    }
  
    if (inputAddress == "") {
      document.getElementById("inputAddress").style.border = "2px solid red";
    } else {
      document.getElementById("inputAddress").style.border = "1px solid green";
      validity += 1;
    }
  
    if (inputImage == undefined) {
      document.getElementById("inputImage").style.border = "2px solid red";
    } else {
      document.getElementById("inputImage").style.border = "1px solid green";
      validity += 1;
    }
  
    if (inputSign == undefined) {
      document.getElementById("inputSign").style.border = "2px solid red";
    } else {
      document.getElementById("inputSign").style.border = "1px solid green";
      validity += 1;
    }
  
    if (validity == 11) {
      return true;
    } else {
      return false;
    }
  }
  
  function renderpic(url, field) {
    let reader = new FileReader();
    reader.readAsDataURL(url);
    //set the image to template.
    reader.onloadend = function () {
      document.getElementById(field).src = reader.result;
    };
  }
  
  //for download id card 
  document.getElementById("download").addEventListener("click", () => {
    document.getElementById("download").style.display = "none";
    document.getElementById("createAnother").style.display = "none";
    window.print();
    document.getElementById("download").style.display = "inline-block";
    document.getElementById("createAnother").style.display = "inline-block";
  });