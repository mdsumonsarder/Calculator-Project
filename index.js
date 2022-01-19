let resultField =$("#result");

function insertNumber(number)
{
  //alert(number)
  let exNumber = resultField.val();
  resultField.val(exNumber + number);
}

function clearResult(){
  resultField.val('');
}

function calculate(){
 let result = eval(resultField.val());
 resultField.val(result);
}

function deleteNumber(){
  let presentValue = resultField.val();
  if(presentValue != ''){
    resultField.val(presentValue.slice(0,-1));
  }
}