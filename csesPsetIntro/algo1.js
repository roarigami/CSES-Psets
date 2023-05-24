/**
CSES Problem #1 Weird algorithm
Question - Consider an algorithm that takes as
input a positive integer n. If n is even, the algorithm
divides it by two, and if n is odd, the algorithm multiplies
it by three and adds one. The algorithm repeats this, until n is one.
For example, the sequence for n = 3 is as follows
3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
**/

const addSubToOne = (num) => {
  while (num > 1) {
    if(num % 2 == 0)
    num /= 2;
    else
    num = num * 3 + 1;
    console.log(num);
  }
  return num;
}
console.log(addSubToOne(47));
