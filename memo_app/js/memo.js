'use strict';


window.addEventListener('DOMContentLoaded',
    function(){
        if(typeof localStorage == 'underfined'){
        window.alert("このブラウザはStorage機能が実績されていますせん");
            return;
         }else{
            viewStorage();
            const save= document.getElementById('save');
            save.addEventListener('click',
            function(e){
              e.preventDefault();
              const key = document.getElementById("textkey").value;
              const value = document.getElementById("textdata").value;
            if(key==""|| value==""){
                 window.alert('Key, Memo はいずれもの必要です。');
                 return;
              }else{
                  localStorage.setItem(key,value);
                  viewStorage();
                  let w_msg ="LocalStorage に"+ key + " " + value + "を保存しました";
                  window.alert(w_msg);
                  document.getElementById("textkey").value= "";
                  document.getElementById("textdata").value= "";
                  }
              },false 
           );
          

           const del = document.getElementById('del');
            del.addEventListener('click',
            function(e){
               e.preventDefault();
               let w_select="0"
                w_select = selectRadioBtn();
                if(w_select === "1"){
                   const key = document.getElementById("textkey").value;
                   const value = document.getElementById("textdata").value;
                   localStorage.removeItem(key);
                   viewStorage();
                   let w_msg= "LocalStorageから" + key + " " + value + "を削除（delete）しました。";
                   window.alert(w_msg);
                   document.getElementById("textkey").value = "";
                   document.getElementById("textdata").value ="";
                   }
                 },false
           );

           const allclear= document.getElementById('allclear');
            allclear.addEventListener('click',
            function(e){
                 e.preventDefault();
                 let w_confirm=""
                 w_confirm = confirm("LocalStorageのデータをすべて削除(all clear)します。よろしいですか？");
                 if(w_confirm === true){
                 localStorage.clear();
                 viewStorage();
                 let w_msg = "LocalStorageのデータをすべて削除(all clear)しました";
                 window.alert(w_msg);
                 document.getElementById("textkey").value = "";
                 document.getElementById("textdata").value ="";
              }
            },false
          );

            
            
            const select = document.getElementById('select');
              select.addEventListener('click',
              function(e){
                  e.preventDefault();
                 let w_select = "0"
                 selectRadioBtn();
                },false
           ); 
         
       }

    },false
           
  );



        
  function viewStorage(){
    const list= document.getElementById("list");
    while(list.rows[0]) list.deleteRow(0);
    for(let i=0; i <localStorage.length; i++){
        let w_key = localStorage.key(i);
        let tr  = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        list.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        td1.innerHTML = "<input name='radio1' type='radio'>";
        td2.innerHTML = w_key;
        td3.innerHTML = localStorage.getItem(w_key);
    }
}


function selectRadioBtn(){
  let w_sel="0"
  const radio1=  document.getElementsByName("radio1");
  const table1= document.getElementById('table1');
   for(let i=0; i< radio1.length; i++){
           if(radio1[i].checked){
           document.getElementById("textkey").value= table1.rows[i+1].cells[1].firstChild.data;
           document.getElementById("textdata").value= table1.rows[i+1].cells[2].firstChild.data;
           return w_sel = "1";
         }
    }
window.alert('1つ選択してください');
}

    