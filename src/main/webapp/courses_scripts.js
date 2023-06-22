// display courses

function displayCoursesTeacher() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status == 302) {
                window.location = 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/login.html'
            } else if (xhr.status == 200) {
                var theaderRef = document.getElementById('courses_table').getElementsByTagName('thead')[0];
                // Insert a row at the end of the header
                var newHeaderRow = theaderRef.insertRow();
                var newHeaderCell = document.createElement("TH");
                newHeaderCell.innerHTML = "Courses";
                newHeaderRow.appendChild(newHeaderCell);

                var tbodyRef = document.getElementById('courses_table').getElementsByTagName('tbody')[0];
                var coursesArray = JSON.parse(xhr.responseText);

                for (let i = 0; i < coursesArray.length; i++) {
                    // Insert a row at the end of table
                    var newCourseRow = tbodyRef.insertRow();
                    // Insert a cell at the end of the row
                    var newCourseCodeCell = newCourseRow.insertCell();
                    // Append a text node to the cell
                    var newCourseCode = document.createTextNode(coursesArray[i].code);
                    newCourseCodeCell.appendChild(newCourseCode);
                    // Insert a cell at the end of the row
                    var newCourseNameCell = newCourseRow.insertCell();
                    // Append a text node to the cell
                    var newCourseName = document.createTextNode(coursesArray[i].name);
                    newCourseNameCell.appendChild(newCourseName);
                    //

                    var newShowCell = newCourseRow.insertCell();
                    var newShowLink = document.createElement("a");
                    newShowLink.href = 'student_list.html?courseId=' + coursesArray[i].code;
                    newShowLink.textContent = "Show student";
                    newShowCell.appendChild(newShowLink);
                }

            } else {
                alert(xhr.status + " : " + xhr.responseText);

            }
        }
    }

    xhr.open('GET', 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/courses_teacher', true);
    xhr.send(null);
}


function displayCoursesStudent() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status == 302) {
                window.location = 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/login.html'
            } else if (xhr.status == 200) {
                var theaderRef = document.getElementById('courses_table').getElementsByTagName('thead')[0];
                // Insert a row at the end of the header
                var newHeaderRow = theaderRef.insertRow();
                var newHeaderCell = document.createElement("TH");
                newHeaderCell.innerHTML = "Courses";
                newHeaderRow.appendChild(newHeaderCell);

                var tbodyRef = document.getElementById('courses_table').getElementsByTagName('tbody')[0];
                var coursesArray = JSON.parse(xhr.responseText);

                for (let i = 0; i < coursesArray.length; i++) {
                    // Insert a row at the end of table
                    var newCourseRow = tbodyRef.insertRow();
                    // Insert a cell at the end of the row
                    var newCourseCodeCell = newCourseRow.insertCell();
                    // Append a text node to the cell
                    var newCourseCode = document.createTextNode(coursesArray[i].code);
                    newCourseCodeCell.appendChild(newCourseCode);
                    // Insert a cell at the end of the row
                    var newCourseNameCell = newCourseRow.insertCell();
                    // Append a text node to the cell
                    var newCourseName = document.createTextNode(coursesArray[i].name);
                    newCourseNameCell.appendChild(newCourseName);
                }

            } else {
                alert(xhr.status + " : " + xhr.responseText);

            }
        }
    }

    xhr.open('GET', 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/courses_student', true);
    xhr.send(null);
}
function displayCoursesSecretary() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status == 302) {
                window.location = 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/login.html'
            } else if (xhr.status == 200) {
                var theaderRef = document.getElementById('courses_table').getElementsByTagName('thead')[0];
                // Insert a row at the end of the header
                var newHeaderRow = theaderRef.insertRow();
                var newHeaderCell = document.createElement("TH");
                newHeaderCell.innerHTML = "Courses";
                newHeaderRow.appendChild(newHeaderCell);

                var tbodyRef = document.getElementById('courses_table').getElementsByTagName('tbody')[0];
                var coursesArray = JSON.parse(xhr.responseText);

                for (let i = 0; i < coursesArray.length; i++) {
                    // Insert a row at the end of table
                    var newCourseRow = tbodyRef.insertRow();
                    // Insert a cell at the end of the row
                    var newCourseCodeCell = newCourseRow.insertCell();
                    // Append a text node to the cell
                    var newCourseCode = document.createTextNode(coursesArray[i].code);
                    newCourseCodeCell.appendChild(newCourseCode);
                    // Insert a cell at the end of the row
                    var newCourseNameCell = newCourseRow.insertCell();
                    // Append a text node to the cell
                    var newCourseName = document.createTextNode(coursesArray[i].name);
                    newCourseNameCell.appendChild(newCourseName);
                    var newNameCell = newCourseRow.insertCell();
                    // Append a text node to the cell
                    var newName = document.createTextNode(coursesArray[i].account);
                    newNameCell.appendChild(newName);
                    //

                    var newShowCell = newCourseRow.insertCell();
                    var newShowLink = document.createElement("a");
                    newShowLink.href = 'student_list.html?courseId=' + coursesArray[i].code;
                    newShowLink.textContent = "Show student";
                    newShowCell.appendChild(newShowLink);


                }

            } else {
                alert(xhr.status + " : " + xhr.responseText);

            }
        }
    }
    xhr.open('GET', 'http://' + window.location.host + '/my-first-webapp2-1.0-SNAPSHOT/all_courses', true);
    xhr.send(null);
}
;




