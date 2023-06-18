//Calculating of NHIF
function calculateTaxDeduction(TotalPay){
    const TaxDeduction = 0;
    if( TotalPay >= 3000 && TotalPay <=5999) {
        TaxDeduction = 150;
    }else if (TotalPay >=6000 && TotalPay <=7999){
        TaxDeduction =300;
    }else if (grossPay >= 8000 && grossPay <= 11999) {
        TaxDeduction = 400;
      } else if (grossPay >= 12000 && grossPay <= 14999) {
        TaxDeduction = 500;
      } else if (grossPay >= 15000 && grossPay <= 19999) {
        TaxDeduction = 600;
      } else if (grossPay >= 20000 && grossPay <= 24999) {
        TaxDeduction = 750;
      } else if (grossPay >= 25000 && grossPay <= 29999) {
        TaxDeduction = 850;
      } else if (grossPay >= 30000 && grossPay <= 34999) {
        TaxDeduction = 900;
      } else if (grossPay >= 35000 && grossPay <= 39999) {
        TaxDeduction = 950;
      } else if (grossPay >= 40000 && grossPay <= 44999) {
        TaxDeduction = 1000;
      } else if (grossPay >= 45000 && grossPay <= 49999) {
        TaxDeduction = 1100;
      } else if (grossPay >= 50000 && grossPay <= 59999) {
        TaxDeduction = 1200;
      } else if (grossPay >= 60000 && grossPay <= 69999) {
        TaxDeduction = 1300;
      } else if (grossPay >= 70000 && grossPay <= 79999) {
        TaxDeduction = 1400;
      } else if (grossPay >= 80000 && grossPay <= 89999) {
        TaxDeduction = 1500;
      } else if (grossPay >= 90000 && grossPay <= 99999) {
        TaxDeduction = 1600;
      } else if (grossPay >= 100000) {
        TaxDeduction = 1700;
      }
      //Display the results of the tax deduction done.
      return TaxDeduction;
     
    }
  
    //Calculation of NSSF
    function calculatePensionPay(Paytier) {
      console.log (Paytier * 6/100)
    }//Display the results for NSSF.
  
   //This is the calculation for the tax rates
   function calculateTaxableRate(eachmonthtaxpay) {
      const rate = 0;
      if (eachmonthtaxpay <= 24000) {
        rate = 10;
      } else if (eachmonthtaxpay >= 24001 && eachmonthtaxpay <= 32333) {
        rate = 25;
      } else if (eachmonthtaxpay > 32333) {
        rate = 30;
      }
     //The rate is then displayed to the user.
      return rate;
  
    }
  
    //This is the calculation of the Netsalary
      function calculateNetsalary(Totalsalary, benefits){
      const eachmonthtaxpay = Totalsalary
      const deductTax = calculateTaxRate(eachmonthtaxpay)// %
      const TotalPay = Totalsalary - ((deductTax / 100) * Totalsalary)
      const deductNhif = calculateTaxDeduction(TotalPay)
      const pay = Totalsalary - ((deductTax / 100) * Totalsalary) - deductNhif
      const deductNssf = calculatePensionPay(Paytier)
      const netSalaryCalculation = () =>{const netValue = (pay - deductNhif) ; return netValue}
      const netSalary = netSalaryCalculation()
      console.log(netSalary)
  
      return netSalary
      }
  
   let Totalsalary = parseInt("7000")//input Total salary
   let benefits = parseInt("800")// input benefits
   calculateNetsalary(Totalsalary, benefits)
