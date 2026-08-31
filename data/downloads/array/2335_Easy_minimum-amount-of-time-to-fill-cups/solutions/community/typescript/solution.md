# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/4255479/](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/4255479/)

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
Java:
```
public int fillCups(int[] amount) {
    int mx = 0, sum = 0;
    for(int a : amount) {
        mx = Math.max(a, mx);
        sum += a;
    }
    return Math.max(mx, (sum + 1) / 2);
}
```
Javascript:
```
var fillCups = function(amount) {
    let max = 0, sum = 0;
    for (let i of amount) {
        max = Math.max(i, max);
        sum += i;
    }
    
    return Math.max(max, Math.floor((sum + 1) / 2));
};
```
Typescript:
```
function fillCups(amount: number[]): number {
    let max = 0, sum = 0;
    for (let i of amount) {
        max = Math.max(i, max);
        sum += i;
    }
    
    return Math.max(max, Math.floor((sum + 1) / 2));
};
```