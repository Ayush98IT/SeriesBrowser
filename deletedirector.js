let form=document.querySelector('#deletedirectorform');
let url='https://bluecollarsclientwork.000webhostapp.com/seriesbrowser/deletedirector.php';
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let Name = document.querySelector('#name').value;

    let data =new FormData();
        data.append('name',Name);
    
    //let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            console.log('director deleted');
        }
        else
        {
            console.log('error occured');

        }


    }
    xhr.send(data); 
});