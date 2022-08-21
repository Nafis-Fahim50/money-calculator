function getElementValueById(elementId){
    const elementField = document.getElementById(elementId);
    const elementStringValue = elementField.value;
    const elementValue = parseInt(elementStringValue);
    return elementValue;
}

function setElementValueById(elementId,newValue){
    const calculateField = document.getElementById(elementId);
    calculateField.innerText = newValue;

}

document.getElementById('btn-calculate').addEventListener('click',function(){
    const foodCost = getElementValueById('food-value');
    const rentCost = getElementValueById('rent-value');
    const clothesCost = getElementValueById('clothes-value');

    const totalCost = foodCost + rentCost + clothesCost;

    setElementValueById('total-expense',totalCost);

    const totalMoney = getElementValueById('income-value');
    const currentMoney = totalMoney - totalCost;

    setElementValueById('current-total',currentMoney);
    
})
document.getElementById('btn-save').addEventListener('click',function(){
    const saveInput = getElementValueById('save-field');
    const incomeValue = getElementValueById('income-value');

    const totalSave = incomeValue * (saveInput/100);
    setElementValueById('total-save',totalSave);

    const currentMoneyField = document.getElementById('current-total');
    const currentMoneyString = currentMoneyField.innerText;
    const currentMoney = parseInt(currentMoneyString);

    const finalAmount = currentMoney - totalSave;
    setElementValueById('final-money',finalAmount);
})