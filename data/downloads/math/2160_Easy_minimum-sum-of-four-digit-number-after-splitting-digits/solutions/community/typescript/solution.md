# Sort Solution (with step by step explanation)

**Author:** alekseyvy
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/4292225/](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/4292225/)

---

# Intuition
we will use sort to solve this problem
# Approach
we convert number to string and split to digits, then we sort it and after that we return sum of digits
# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)
# Code
```
function minimumSum(num: number): number {
    // convert number to string, split to digit and sort
    const sorted = String(num).split("").sort((a, b) => +a - +b);
    // return sum of numbers at inidicies 0 and 2 with numbers at indicies 2 and 3
    return Number(`${sorted[0]}${sorted[2]}`) + Number(`${sorted[1]}${sorted[3]}`)
};
```