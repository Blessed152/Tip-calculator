/**
This software was developed on 24 June 2022 by Blessing Muchuu.
Step one this program will have to get the total bill.
Find the 10 percent of the total bill.
Output the amount in rands for bill and tip.
Theen if the user chooses group.
Get the total amount x number of people.
Else the default amount fo the bill should not change.
**/
/*DevelopeR*/
let myName = 'Muchuu';
/*Input section*/
const form = document.getElementsByTagName('form')
const tipBill = document.querySelector('.get-bill');
const percentage = document.querySelector('.get-percent');
const totalPeople = document.querySelector('#people');
/*Outpput section*/
const showTip = document.querySelector('.show-tip');
const showBill = document.querySelector('.show-bill');

/***********START***********/
tipBill.addEventListener('input', start);
percentage.addEventListener('input', start);

function start(e) {
    function Calculate(bill, percent) {
        this.bill = bill;
        this.percent = percent;
    }
/*Get tip amount*/
function Get_tips(saveTip){
    this.saveTip = saveTip;
}

Calculate.prototype.findTip = function() {
    return parseFloat(this.bill) * this.percent / 100;
};

inputs = new Calculate(tipBill.value, percentage.value);
const tipAmount = inputs.findTip();
const paymentDue = tipAmount + parseFloat(tipBill.value);

Get_tips.prototype.tipSaved = function (){
return this.saveTip;
}
groupTip = new Get_tips(tipAmount)

/***********FIRST SOLUTIONS***********/
    function insertSolutions(tipAmount, paymentDue, Convert_int) {
        Convert_int(tipAmount, paymentDue)
    }
insertSolutions(tipAmount, paymentDue, function Convert_int(tipAmount, paymentDue){
/*Converter*/
tipAmount = new Intl.NumberFormat('en-ZA', {style: 'currency', currency: 'ZAR' }).format(tipAmount);
paymentDue = new Intl.NumberFormat('en-ZA', {style: 'currency', currency: 'ZAR' }).format(paymentDue);

if(tipBill.value !== '' &&  isNaN(tipBill.value) === false ){
    numExists(showTip, showBill)
}else {
//Clear//
clearInputs();
}

function numExists(showTip, showBill){
showTip.value = tipAmount;
showBill.value = paymentDue;
}
})



/*Exclude tip or add*/
function ExcludeOrInclude_Tip (paymentDue, tipAmount){
   this.paymentDue = paymentDue;
   this.tipAmount = tipAmount;
}

exclude_Include = new ExcludeOrInclude_Tip(paymentDue, tipAmount);

ExcludeOrInclude_Tip.prototype. removeTip = function (){
    return removed = parseFloat(this.paymentDue) - parseFloat(this.tipAmount)
   }
   ExcludeOrInclude_Tip.prototype.includeTip = function (){
    return included = parseFloat(this.paymentDue)
   }
   
/*If selected type is group*/
    BILLTYPE(totalPeople)
}

/***********SECOND SOLUTIONS***********/
function BILLTYPE(totalPeople) {
/*Number of group members*/
totalPeople.addEventListener('input', groupBill);
function groupBill(e) {
/*Get tip amount*/
let tip = groupTip.tipSaved();
people = document.querySelector('#people').value;
/*Bill amount due*/
function findGroupBill(tip, people) {
    return parseFloat(tip) / parseFloat(people);
}
/*Bill amount due output*/
newTip = findGroupBill(tip, people);
/*Converter*/
newTip = new Intl.NumberFormat('en-ZA', 
{ style: 'currency', currency: 'ZAR' }).format(newTip);
/*Check tip*/
checkTip = document.querySelector('.show-tip').value;
if (checkTip) {
    let checkTip = newTip;
    let totalTip = document.querySelector('.show-tip').value
    runInputs(newTip, totalTip);
}
}};

BILLTYPE(totalPeople)

/***********Buttons Section***********/
radioBtn = document.querySelectorAll('.tip-type');
radioBtn.forEach(function(btn) {
    btn.addEventListener('click', e => {
        if (e.target.parentElement.classList.contains('form-buttons') &&
            e.target.classList.contains('group')) {
            add_group_section()
            add_tip_section()
        } else {
            remove_group_section()
            remove_tip_section()
            //Clear//
            clearInputs();
        }
    })
})

function add_group_section() {
    groupSection = document.querySelector('.type-is-group');
    groupSection.style.display = 'block';
}

function remove_group_section() {
    groupSection = document.querySelector('.type-is-group');
    groupSection.style.display = 'none';
}

function add_tip_section() {
    groupSection = document.querySelector('.group-output');
    groupSection.style.display = 'block';
}

function remove_tip_section() {
    groupSection = document.querySelector('.group-output');
    groupSection.style.display = 'none';
}
/***********INSERT SECOND SOLUTIONS***********/
function runInputs(newTip, totalTip) {
    document.querySelector('.split-bill').value = newTip;
    document.querySelector('.total-tip').value = totalTip;
}

/***********Clear***********/
function clearInputs(){

document.querySelector('.get-bill').value = '';
document.querySelector('.split-bill').value = '';
document.querySelector('.total-tip').value = '';
document.querySelector('#people').value = '';
document.querySelector('.show-tip').value = '';
document.querySelector('.show-bill').value = '';
}

/***********INCLUDE OR EXCLUDE***********/
remove_addTips = document.querySelector('.form-output-exclude');
remove_addTips.addEventListener('click', e=> {
    if(e.target.parentElement.classList.contains('form-output-exclude') && e.target.
        classList.contains('exclude')){

let include_convert = exclude_Include.removeTip();
    ConvertInc(include_convert)

} else {
let exclude_convert = exclude_Include.includeTip();
    ConvertExc(exclude_convert)
    
    }
})
/***********Convert***********/

function ConvertInc(incTip){
    /*Converter*/
incTip = new Intl.NumberFormat('en-ZA', {style: 'currency', currency: 'ZAR' }).format(incTip);
document.querySelector('.show-bill').value = incTip;
}
function ConvertExc(excTip){
    /*Converter*/
excTip = new Intl.NumberFormat('en-ZA', {style: 'currency', currency: 'ZAR' }).format(excTip);
document.querySelector('.show-bill').value = excTip;
}

/***********CLEAR BUTTON***********/
document.querySelector('.clear-btn').addEventListener('click', e=> {
    location.reload(form)
    //Clear//
    clearInputs()
})


/***********Developer***********/

class Person {
    constructor(name){
        this.name = name;
    }

    createName = function (){
        return this.name;
    }
}

getName = new Person(myName)

 getName.createName();
