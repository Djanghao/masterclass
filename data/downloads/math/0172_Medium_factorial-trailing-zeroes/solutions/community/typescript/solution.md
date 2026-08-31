# ✅Short and optimize code | step by step explanation

**Author:** SumitPokhriyal
**Votes:** 2
**Link:** [https://leetcode.com/problems/factorial-trailing-zeroes/solutions/3808067/](https://leetcode.com/problems/factorial-trailing-zeroes/solutions/3808067/)

---

# Intuition:
To find the number of trailing zeros in the factorial of a given number, we need to understand that trailing zeros appear when a multiple of 10 is present in the factorial. A multiple of 10 can be obtained by multiplying 5 and 2. So, we only need to count the number of 5's present in the prime factors of the factorial.

# Approach:

1. Initialize a variable res to store the count of trailing zeros, initially set to 0.
2. Use a while loop to calculate the number of 5's in the prime factors of n.
3. In each iteration, update n by dividing it by 5 using Math.floor(n / 5) to count the number of 5's in the current iteration.
4. Add the count of 5's to res.
5. Continue the loop until n becomes less than or equal to 0.
6. Finally, return the value of res, which represents the number of trailing zeros in n!.
# Complexity:

- Time complexity: The time complexity of this approach is O(log(n)) because in each iteration, we are reducing the value of n by dividing it by 5, and this process continues until n becomes less than 5.
- Space complexity: The space complexity is O(1) because we are using only a constant amount of extra space to store the res variable.

# Code
```
function trailingZeroes(n: number): number {
    let res = 0;
    while( n > 0 ){
        n = Math.floor(n/5);
        res += n;
    }
    return res;
};
```