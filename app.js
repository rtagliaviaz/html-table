
const up = document.getElementsByClassName('arrowUp')
const down = document.getElementsByClassName('arrowDown')
let index;  // variable to set the selected row index
function getSelectedRow()
{
    let table = document.getElementById("table");
    for(let i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
            // clear the selected from the previous selected row
            // the first time index is undefined
            if(typeof index !== "undefined"){
                table.rows[index].classList.toggle("selected");
            }
            index = this.rowIndex;
            this.classList.toggle("selected");
        };
    }
        
}


getSelectedRow();


function upNdown(direction)
{
    let rows = document.getElementById("table").rows,
        parent = rows[index].parentNode;
     if(direction === "up")
     {
         if(index > 1){
            parent.insertBefore(rows[index],rows[index - 1]);
            // when the row go up the index will be equal to index - 1
            index--;
        }
     }
     
     if(direction === "down")
     {
         if(index < rows.length -1){
            parent.insertBefore(rows[index + 1],rows[index]);
            // when the row go down the index will be equal to index + 1
            index++;
        }
     }
}