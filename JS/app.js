document.getElementById('btn-calculate').addEventListener('click',function(){
    
    const incomeField = document.getElementById('income-value');
    const incomeString = incomeField.value;
    const income = parseInt(incomeString);
    
    const foodField = document.getElementById('food-value');
    const foodCostString = foodField.value;
    const foodCost = parseInt(foodCostString);

    const rentField = document.getElementById('rent-value');
    const rentCostString = rentField.value;
    const rentCost = parseInt(rentCostString);

    const clothesField = document.getElementById('clothes-value');
    const clothesCostString = clothesField.value;
    const clothesCost = parseInt(clothesCostString);

    const totalExpenseField = document.getElementById('total-expense');
    const totalExpenseSting = foodCost + rentCost + clothesCost;
    const totalExpense = parseInt(totalExpenseSting);
    totalExpenseField.innerText = totalExpense;

    const currentTotalField = document.getElementById('current-total');
    const currentTotalString = income - totalExpense;
    const currentTotal = parseInt(currentTotalString);

    currentTotalField.innerText = currentTotal;
    
})
