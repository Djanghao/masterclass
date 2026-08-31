# js dp solution prefix +suffix

**Author:** swu1747
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/6076465/](https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/6076465/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {string} s
 * @return {number}
 */
var minimumCost = function (s) {
    const n = s.length
    const memo = []
    for (let i = 0; i < n; i++) {
        if (s[i] !== s[i + 1]) {
            if (s[i] === '0') {
                if (memo.length === 0) {
                    memo.push([0, i + 1])
                } else {
                    memo.push([memo[memo.length - 1][0], memo[memo.length - 1][0] + i + 1])
                }
            } else {
                if (memo.length === 0) {
                    memo.push([i + 1, 0])
                } else {
                    memo.push([memo[memo.length - 1][1] + i + 1, memo[memo.length - 1][1]])
                }
            }
        }
    }
    let x = memo.length - 1
    const memo1 = new Array(x + 1).fill(0)
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] !== s[i - 1]) {
            if (s[i] === '0') {
                if (x === memo.length - 1) {
                    memo1[x] = [0, n - i]
                } else {
                    memo1[x] = [memo1[x + 1][0], memo1[x + 1][0] + n - i]
                }
            } else {
                if (x === memo.length - 1) {
                    memo1[x] = [n - i, 0]
                } else {
                    memo1[x] = [memo1[x + 1][1] + n - i, memo1[x + 1][1]]
                }
            }
            x--
        }
    }
    let ans = Infinity
    for (let i = 0; i < memo1.length; i++) {
        ans = Math.min(ans, memo[i][0] + memo1[i][0], memo[i][1] + memo1[i][1])
    }
    return ans
};
```