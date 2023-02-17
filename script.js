document.getElementById("urlap").onsubmit=function(e){
    e.preventDefault();

    console.log("Elküldtek");
    console.log(e.target.elements.name.value);

    let name = e.target.elements.name.value;
    let szulido = e.target.elements.szulido.value;
    szulido = szulido.replaceAll('-','.');
    let eletkor = e.target.elements.eletkor.value;
    console.log(e.target.elements);
    console.log(e.target.elements.vegzettseg);
    console.log(vegzettseg.children[vegzettseg.selectedIndex]);
    let vegzettsegTomb = ['Programozo', 'Gázszerlő', 'Pék']

    let s = `A nevem ${name},
     ${eletkor} éves vagyok. A végzettségem ${e.target.elements.vegzettseg.value}, amiben ${szulido}óta dolgozom.
     Számomra a tőkéletes mukahely helyszíne
      
      ${e.target.elements.varos1.checked?
      e.target.elements.varos1.value + ",":""}

      ${e.target.elements.varos2.checked?
        e.target.elements.varos2.value + ",":""}

     ${e.target.elements.varos3.checked?
       e.target.elements.varos3.value + ",":""}

    vagy Home office a világ minden részéről. Az álltalam ismert nyelvek kőzül a legotthonosabban a ${e.target.elements.prnyelv.value}-ben mozgok. 




        



      
      `;  //`` ---> altgr + 7 ez a jel :)


    document.getElementById('massage').innerHTML=s;
}