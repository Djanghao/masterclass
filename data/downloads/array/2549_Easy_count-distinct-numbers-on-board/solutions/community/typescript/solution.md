# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/5852992/](https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/5852992/)

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
```java []
public int distinctIntegers(int n) {
    // If n is 1, then only 1 remains on the board
    if (n == 1) {
        return 1;
    }
    
    // For any n > 1, the result is always n - 1 distinct integers
    return n - 1;
}
```
```javascript []
var distinctIntegers = function(n) {
    // If n is 1, return 1 since only 1 remains on the board
    if (n === 1) {
        return 1;
    }
    
    // For any n > 1, the result is n - 1 distinct integers
    return n - 1;
};
```
```typescript []
function distinctIntegers(n: number): number {
    // If n is 1, return 1 since only 1 remains on the board
    if (n === 1) {
        return 1;
    }
    
    // For any n > 1, the result is n - 1 distinct integers
    return n - 1;
};
```