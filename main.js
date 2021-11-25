// Text About Me
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    // INJECT CSS
    var css = document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// On click input of password
let pwdInput = document.getElementById('password');
let cnfpwdInput = document.getElementById('cpassword');

pwdInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

cnfpwdInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

pwdInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}

cnfpwdInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}


const onSubmitForm = () => {
    var nameValue = document.getElementById('name').value;
    var emailValue = document.getElementById('email').value;
    var contactValue = document.getElementById('contact').value;
    var passwordValue = document.getElementById('password').value;
    var cnfpasswordValue = document.getElementById('cpassword').value;

    // Validations
    if (nameValue == null || nameValue == "") {
        alert("Name can't be empty");
    } else if (emailValue == null || emailValue == "") {
        alert("Email can't be empty");
    } else if (passwordValue == null || passwordValue == "") {
        alert("Password can't be empty");
    } else if (cnfpasswordValue == null || passwordValue == "") {
        alert("Re-entered Password can't be empty");
    } else if (passwordValue != cnfpasswordValue) {
        alert('Password must be same')
    } else if (passwordValue.length < 8) {
        alert('Password must be of 8 characters')
    }

    // alert(nameValue + emailValue + contactValue + passwordValue + cnfpasswordValue)


    document.getElementById('signup').reset();
}


