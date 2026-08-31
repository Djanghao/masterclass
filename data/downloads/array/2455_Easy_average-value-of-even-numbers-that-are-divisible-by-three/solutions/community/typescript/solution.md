# 🔥[EASY] JS/TS RunTime (100%/46MS) For beginners / Small solution

**Author:** seba1337
**Votes:** 2
**Link:** [https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/5507166/](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/5507166/)

---

# Intuition
The problem involves finding the average of numbers in an array that are divisible by 6. My first thought is to iterate through the array, check each number for divisibility by 6, and if it is, add it to a running sum while keeping a count of such numbers. Finally, the average can be computed by dividing the sum by the count of numbers that are divisible by 6.
# Approach
1. Initialize two variables: one to keep track of the sum `(sum)` of numbers that are divisible by 6 and another to count `(c)` such numbers.
2. Iterate through the array using a `for...of` loop.
3. For each number, check if it is divisible by 6 using the modulus operator `(%)`.
4. If the number is divisible by 6, increment the count `(c)` and add the number to the sum `(sum)`.
5. After the loop, compute the average by dividing the sum by the count. Use `Math.floor` to return the integer part of the average.
6. Handle the case where no numbers are divisible by 6 by returning 0 if the count is zero.
# Complexity
- Time complexity: \uD835\uDC42(\uD835\uDC5B)
- Space complexity: \uD835\uDC42(\uD835\uDC5B)
# Code
```
function averageValue(nums: number[]): number {
    let c , sum;
    c = sum = 0;

    for (const num of nums) {
        if (num % 6 === 0) {
            c++
            sum += num;
        }
    }

    return Math.floor(sum / c ) || 0
};
```
![image.png](./images/0.png)
