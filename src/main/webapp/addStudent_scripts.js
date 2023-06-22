/**
 * 
 */

// login
function CheckRole() {
    const xhr3 = new XMLHttpRequest();
    xhr3.onreadystatechange = () => {
        if (xhr3.readyState === 4) {
            if (xhr3.status == 302) {
                window.location = 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/login.html'
            } else if (xhr3.status == 404){
                window.location = 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/'
            } 
            else {
                const addButton = document.getElementById("add_button");
                addButton.addEventListener("click", function () {
                    const xhr4 = new XMLHttpRequest();
                    xhr4.onreadystatechange = () => {
                        if (xhr4.readyState === 4) {
                            if (xhr4.status == 302) {
                                window.location = 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/login.html'
                            } else if (xhr4.status == 200) {
                                alert("Request Sent");
                            } else {
                                alert("ERROR");
                            }
                        }
                    }


                    xhr4.open("POST", "http://" + window.location.host + "/my-first-webapp2-1.0-SNAPSHOT/addStudentServlet");
                    xhr4.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
                    const account = JSON.stringify({
                        "account": document.getElementById("add_account").value
                    });



                    xhr4.send(account);
                }
                )

            }

        }
    }
    xhr3.open("GET", "http://" + window.location.host + "/my-first-webapp2-1.0-SNAPSHOT/addStudentServlet");
    xhr3.send(null);
}
