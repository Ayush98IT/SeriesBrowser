let form=document.querySelector('#deleteseriesform');
let url='https://bluecollarsclientwork.000webhostapp.com/seriesbrowser/deleteseries.php';
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let Name = document.querySelector('#name').value;
    let Director = document.querySelector('#director').value;
    let Status= document.querySelector('#status').value;
    let Genre= document.querySelector('#genre').value;
    let Yor= document.querySelector('#yor').value;
    let Yoe= document.querySelector('#yoe').value;

    let data =new FormData();
        data.append('name',Name);
        data.append('director',Director);
        data.append('status',Status);
        data.append('genre',Genre);
        data.append('yor',Yor);
        data.append('yoe',Yoe);
    
    //let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            console.log('series deleted');
        }
        else
        {
            console.log('error occured');

        }


    }
    xhr.send(data); 
});