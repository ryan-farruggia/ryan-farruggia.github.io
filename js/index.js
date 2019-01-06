function passWord() {
    var testV = 1;
    var pass1 = prompt('Enter Password (Case Sensitive):','');
        while (testV < 3) {
            if (!pass1) 
                window.open('index.html','_self');
            if (pass1 == "xEqtionr0901") {
                window.open('education.html','_self');
            break;
            }
        testV+=1;
        var pass1 = prompt('Access Denied - Password Incorrect','Password');
        }
        if (pass1.toLowerCase()!="password" & testV ==3) {
            window.open('index.html','_self');
            return " ";
        }
}