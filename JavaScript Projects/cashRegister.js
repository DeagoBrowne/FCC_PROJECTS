function checkCashRegister(price, cash, cid) {

  let changeGiven = cash - price;

  let units =
    [['ONE HUNDRED', 100.00], ['TWENTY', 20.00], ['TEN', 10.00], ['FIVE', 5.00], ['ONE', 1.00], ['QUARTER', 0.25], ['DIME', 0.10], ['NICKEL', 0.05], ['PENNY', 0.01]];

  let totalcid = 0;
  cid.forEach(item => totalcid += item[1]);
  let changeArray = []

  if (changeGiven > totalcid) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else if (changeGiven == totalcid) {
    return { status: 'CLOSED', change: cid };
  } else {
    cid = cid.reverse();
    for (let i = 0; i < units.length; i++) {
      let arr = [units[i][0], 0];
      while (changeGiven >= units[i][1] && cid[i][1] > 0) {
        arr[1] += units[i][1];
        cid[i][1] -= units[i][1];
        changeGiven -= units[i][1];
        changeGiven = changeGiven.toFixed(2);
      } if (arr[1] > 0) changeArray.push(arr);
    }
  }
  if (changeGiven > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else {
    return { status: 'OPEN', change: changeArray };
  };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])