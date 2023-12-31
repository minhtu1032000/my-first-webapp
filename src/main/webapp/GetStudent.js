function displayStudent() {
    const xhr = new XMLHttpRequest();
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('courseId');
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status == 302) {
                window.location = 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/login.html'
            } else if (xhr.status == 200) {

                var tbodyRef = document.getElementById('student-table').getElementsByTagName('tbody')[0];
                var studentArray = JSON.parse(xhr.responseText);
                var theaderRef = document.getElementById('student-table').getElementsByTagName('thead')[0];
                // Insert a row at the end of the header
                var newHeaderRow = theaderRef.insertRow();
                var newHeaderCell = document.createElement("TH");
                newHeaderCell.innerHTML = "Student List Of " + studentArray[0].name;
                newHeaderRow.appendChild(newHeaderCell);

                for (let i = 0; i < studentArray.length; i++) {
                    // Insert a row at the end of table
                    var newStuRow = tbodyRef.insertRow();
                    // Insert a cell at the end of the row
                    var newStuNameRow = newStuRow.insertCell();
                    // Append a text node to the cell
                    var newStuName = document.createTextNode(studentArray[i].account);
                    newStuNameRow.appendChild(newStuName);
                    // Insert a cell at the end of the row
                    var newCodeRow = newStuRow.insertCell();
                    // Append a text node to the cell
                    var newCourseCode = document.createTextNode(studentArray[i].code);
                    newCodeRow.appendChild(newCourseCode);
                    // Insert a cell at the end of the row
                    var newCourseNameCell = newStuRow.insertCell();
                    // Append a text node to the cell
                    var newCourseName = document.createTextNode(studentArray[i].name);
                    newCourseNameCell.appendChild(newCourseName);
                }

            } else {
                alert(xhr.status + " : " + xhr.responseText);

            }
        }
    }

    xhr.open('GET', 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/get_students?courseId=' + courseId, true);
    xhr.send(null);
}
