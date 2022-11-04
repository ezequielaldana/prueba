// variable de prueba
function doGet(){
  var template= HtmlService.createTemplateFromFile('registro');
  template.pubUrl="https://script.google.com/macros/s/AKfycbyzw7k9SkQ8Dpxkia-j-DuJ4v_8CXDJSSr-2sYzhK9C/dev";
     var output = template.evaluate();
    return output;
}
function include( filename ){
  return HtmlService.createHtmlOutputFromFile(filename)
  .getContent()
}
function doPost( e ){
var ss= SpreadsheetApp.getActiveSpreadsheet();
var sheetRegistro= ss.getSheetByName('registro');
console.log(e)


var id=new Date();
var nombre=e.parameter.nombre;
var apellido= e.parameter.apellido;
var dni=e.parameter.dni;
var fechaNacimiento= e.parameter.fechaNacimiento;
var direccion= e.parameter.direccion;
var numero=e.parameter.numero;
var piso=e.parameter.piso;
var depto=e.parameter.depto;
var ciudad=e.parameter.ciudad;
var departamento=e.parameter.departamento;
var email=e.parameter.email;
var telefono=e.parameter.telefono;
var password=e.parameter.password;
var revista=e.parameter.revista;
var acuerdoPrivacidad=(e.parameter.acuerdoPrivacidad == 'on') ? 'Aceptado' : 'Rechazado';

sheetRegistro.appendRow([id, nombre, apellido, dni, fechaNacimiento, direccion,numero, piso, depto,ciudad,departamento, email, telefono,password, revista, acuerdoPrivacidad])

return HtmlService.createTemplateFromFile("RegistroTerminado").evaluate()
}