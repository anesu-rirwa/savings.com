export const calculateHowMuchIsSaved = (initialSavings, deposit, depositFrequency, duration) => {
    let totalTime = 0;
    let totalYears = 0;
    let totalMonths = 0;

    // get current date
    const currentDate = new Date();

    // goal date
    const goalDate = new Date(duration);

    // get time in months
    totalYears = goalDate.getFullYear() - currentDate.getFullYear();
    totalMonths = goalDate.getMonth() - currentDate.getMonth();

    if (totalYears === 0) {
        totalTime = totalMonths;
    }
    else {
        totalTime = (totalYears * 12) + (totalMonths);
    };

    // get frequency
    if (depositFrequency === 'monthly') {
        const amountSaved = deposit * totalTime;
        const percentageIncrease = (amountSaved / initialSavings) * 100;
    
        return {amountSaved, percentageIncrease};
    }
}


export const calculateInvestmentReturn  = (investmentAmount, expectedAnnualReturn, duration) => {
    //const expectedROI = investmentAmount *( Math.pow(1 + expectedAnnualReturn / 100), duration);

    const investmentReturn = ((investmentAmount * (expectedAnnualReturn / 100)) * duration).toFixed(2);

    const total = investmentReturn + investmentAmount;

    const roi = ((investmentReturn / investmentAmount) * 100);

    return {investmentReturn, total, roi};
}