// get refernces from the dataTable,fileInput
let fileInput=document.getElementById('fileInput');
let dataTable=document.getElementById('dataTable').getElementsByTagName('tbody')[0];

// give an event listener method for changes in the file input
fileInput.addEventListener("change",function(){
    const file=fileInput.files[0];//get a selected file
    if(file){
        const reader=new FileReader();//create a filereader object
        reader.onload=function(event){
            const content=event.target.result;//get the content from the file
            displayCSVData(content);//calling this function to displlay the csv data

        };
        reader.readAsText(file);//read the file as text
    }
    });
    // function to display csv data in the table format
    function  displayCSVData(content){
     const rows=content.split('\n');//split the row content into newline character
     const headers=rows[0].split(',');//extract the headers from the first row
     const data=rows.slice(1);//get the data rows
     dataTable.innerHTML='';//clear the table body;
     
  
    // loop through each data row
    data.forEach(row=>{
        const columns=row.split(',');
        // split the data rows into columns using comma
         if(columns.length==2){//check wether if there are two columns (name and age)
            const newRow=dataTable.insertRow(dataTable.rows.length)//Insert a new row
        for(let i=0;i<columns.length;i++){
            const cell=newRow.insertCell(i);
            // insert a cell in the row
            cell.textContent=columns[i];
            // set the cell content
        } 

        }

    });
}