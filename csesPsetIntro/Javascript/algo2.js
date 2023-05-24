/*CSES #2 Missing Number
You are given all numbers between 1,2,…,n except one. Your task is to find the missing number.
*/

const getMissingNo = (a, n) => {
    let total = Math.floor((n + 1) * (n + 2) / 2);
    for (let i = 0; i < n; i++)
        total -= a[i];
    return total;
}
// Driver Code
let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16 ];
let n = arr.length;
let miss = getMissingNo(arr, n);
// document.write(miss);
console.log(miss);


/**
#2B - Your a give numbers between 1 - n, but some are missing.
It could 1 and it could be multiple.
Your first task is to find out how many numbers are missing
your second task is to find out which numebrs
**/
