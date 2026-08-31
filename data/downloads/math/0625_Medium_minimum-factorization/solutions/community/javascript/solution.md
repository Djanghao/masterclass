# [JavaScript] don't do DFS or BFS

**Author:** SmittyWerbenjagermanjensen
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-factorization/solutions/5613276/](https://leetcode.com/problems/minimum-factorization/solutions/5613276/)

---


# Complexity
logarithm is base 10
- Time complexity:
$$O(ceil(log(num)))$$

- Space complexity:
$$O(ceil(log(num)))$$

# Code
```
const smallestFactorization = (num) => {
    if (num <= 3) return num;

    let digits = [];
    for (let factor = 9; factor > 1; factor--) {
        while (num % factor === 0) {
            digits.unshift(factor);
            num = num / factor;
        }
    }
    if (num > 1) return 0;

    const ans = digits.reduce((num, digit) => num = num*10 + digit, 0);
    return ans < 2**31 ? ans : 0;
}       
```