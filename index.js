console.log('Ajax In ne Video')

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object by GET request
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);  // true is for asychronous request

    // By the POST request
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);  // true is for asychronous request
    xhr.getResponseHeader('Content-type', 'application/json')

    // What to do on progress (optional)
    xhr.onprogress = function () {
        console.log('On Progress'); // You can show spinner here
    }

    // Onreadystatechange function (it is a old function), it will call when the state will change
    xhr.onreadystatechange = function () {
        console.log('Ready state is ', xhr.readyState);
    }

    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)
        }
        else {
            console.log("Sorry!! Some Error Occured")
        }
    }

    // Send the request
    params = `{"name":"test","salary":"123","age":"23"}`
    xhr.send(params);

    console.log('We are done');
}


let populateBtn = document.getElementById('populateBtn');
populateBtn.addEventListener('click', popHandler);

function popHandler() {
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object by GET request
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);  // true is for asychronous request

    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj.data);
            let list = document.getElementById('list');
            for (key in obj.data)
            {
                str = "";
                str += `<tr>
                        <th>${obj.data[key].id}</th>
                        <th>${obj.data[key].employee_name}</th>
                        <th>${obj.data[key].employee_salary}</th>
                        <th>${obj.data[key].employee_age}</th>
                        </tr>`
                
                list.innerHTML += str;
                console.log(str);
            }
            
            
            // str = "";
        }
        else {
            console.log("Sorry!! Some Error Occured")
        }
    }

    // Send the request
    xhr.send();
    console.log('We are done');
}