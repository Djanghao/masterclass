# Typescript O(n) solution with explanation

**Author:** MarcoMaar
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/1043905/](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/1043905/)

---

This problem has 2 parts.

**Part1: calculate digit sum**
First we need to calcuate the digit sum of all numbers (123 -> 1+2+3 = 6), which can be accomplished by using the modulo operation and a while loop. Note that in typescript numbers can have decimal values, therefore we use ```num |= 0``` to strip the decimal places.

**Part2: count balls in boxes**

To count how many balls are in a box we can simply use a Map to keep track of the amount. The key is the box index, while the value is the number of balls. Lastly, the result to the riddle is the biggest value we find in any box.

```
function countBalls(lowLimit: number, highLimit: number): number {

    let boxes = new Map<number, number>();

    for (let i = lowLimit; i <= highLimit; i++) {
        let box = digitSum(i);
        let value = boxes.get(box);
        if (value) {
            boxes.set(box, value + 1);
        } else {
            boxes.set(box, 1);
        }
    }

    let result = Math.max(...Array.from(boxes.values()))
    return result;
};

function digitSum(num: number): number {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num /= 10;
        num = num | 0;
    }
    return sum;
}
```