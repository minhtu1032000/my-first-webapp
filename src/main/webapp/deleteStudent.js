/**
 * 
 */

// login
function CheckRole2() {
    const xhrd = new XMLHttpRequest();
    xhrd.onreadystatechange = () => {
        if (xhrd.readyState === 4) {
            if (xhrd.status == 302) {
                window.location = 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/login.html'
            } else if (xhrd.status == 404){
                window.location = 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/'
            } 
            else {
                const addButton = document.getElementById("delete_button");
                addButton.addEventListener("click", function () {
                    const xhrd1 = new XMLHttpRequest();
                    xhrd1.onreadystatechange = () => {
                        if (xhrd1.readyState === 4) {
                            if (xhrd1.status == 302) {
                                window.location = 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/login.html'
                            } else if (xhrd1.status == 200) {
                                alert("Request Sent");
                            } else {
                                alert("ERROR");
                            }
                        }
                    }


                    xhrd1.open("POST", "http://" + window.location.host + "/my-first-webapp2-1.0-SNAPSHOT/deleteStudentServlet");
                    xhrd1.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
                    const account_delete = JSON.stringify({
                        "account_delete": document.getElementById("delete_account").value
                    });



                    xhrd1.send(account_delete);
                }
                )

            }

        }
    }
    xhrd.open("GET", "http://" + window.location.host + "/my-first-webapp2-1.0-SNAPSHOT/deleteStudentServlet");
    xhrd.send(null);
}
