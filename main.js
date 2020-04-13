/* Exercise on DOM manipulation */
let projectId, projectName, projectDesc, projectStatus, projectObj, result;
let projectsList=[];
result = document.getElementById('result');
let tableList = document.createElement('table');

	var rowheading = tableList.insertRow(0);
	var th1 = rowheading.insertCell(0).innerHTML = "<b>Id</b>";
	var th2 = rowheading.insertCell(1).innerHTML = "<b>Project Name</b>";
	var th3 = rowheading.insertCell(2).innerHTML = "<b>Project Description</b>";
	var th4 = rowheading.insertCell(3).innerHTML = "<b>Project Status</b>";

function addProjectDetail(){
	projectId = Number(document.getElementById('pId').value);
	projectName = document.getElementById('pName').value;
	projectDesc = document.getElementById('pDescription').value;
	projectStatus = document.getElementById('pStatus').value;
	
	if (projectId == null || projectId == "", projectName == null || projectName == "", projectDesc == null || projectDesc == "", projectStatus == null || projectStatus == "") {
      alert("Please Fill All Required Field");
      return false;
    }
	
	projectObj = {
		id:projectId,
		name:projectName,
		description:projectDesc,
		status:projectStatus
	}
	projectsList.push(projectObj);
	
	var row = tableList.insertRow();
		var cell1 = row.insertCell().innerHTML = projectObj.id;
		var cell2 = row.insertCell().innerHTML = projectObj.name;
		var cell3 = row.insertCell().innerHTML = projectObj.description;
		var cell3 = row.insertCell().innerHTML = projectObj.status;

	result.appendChild(tableList);
	document.getElementById('rowCountEle').style.display = 'block';
}

 function rowCount(){
	let getTbl = document.getElementsByTagName('table')[1];
	let row = getTbl.rows.length
	let message = "Total Row Count (with header): " + row;
	document.getElementById('showRowCount').innerText = "Total Row Count (with header): " + row;
} 



class MyConsole {
	histroyObj = [];
	
	constructor(){
		this.histroyObj
	}
	
	log(data){
		this.histroyObj.push(data)
		return JSON.stringify(data)
	}
	
	history(indexArg = -1) {
        let message = "";
        if (indexArg === -1) {
            for (let index = 0; index < this.histroyObj.length; index++) {
                if (index === this.histroyObj.length - 1) {
                    if (typeof this.histroyObj[index] === 'object') {
                        message = message + JSON.stringify(this.histroyObj[index]);
                    } else {
                        message = message + this.histroyObj[index];
                    }
                } else {
                    if (typeof this.histroyObj[index] === 'object') {
                        message = message + JSON.stringify(this.histroyObj[index]) + "\n";
                    } else {
                        message = message + this.histroyObj[index] + "\n";
                    }
                }
            }
        } else {
            if (typeof this.histroyObj[indexArg] === 'object') {
                message = message + JSON.stringify(this.histroyObj[indexArg]);
            } else {
                message = message + this.histroyObj[indexArg];
            }
        }
        return message;
    }
    clearHistory() {
        this.histroyObj = [];
    }
}




















