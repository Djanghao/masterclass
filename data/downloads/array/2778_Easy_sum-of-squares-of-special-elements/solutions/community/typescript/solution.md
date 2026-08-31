# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/6038314/](https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/6038314/)

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
public int sumOfSquares(int[] nums) {
    int n = nums.length;
    int sum = 0;

    // Iterate through each index and check if it's special
    for (int i = 1; i <= n; i++) {
        if (n % i == 0) { // Check if i divides n
            sum += nums[i - 1] * nums[i - 1]; // Square the element at index i-1 and add to sum
        }
    }

    return sum;

}
```
```javascript []
var sumOfSquares = function(nums) {
    const n = nums.length;
    let sum = 0;

    // Iterate through each index and check if it's special
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) { // Check if i divides n
            sum += nums[i - 1] * nums[i - 1]; // Square the element at index i-1 and add to sum
        }
    }

    return sum;
};
```
```typescript []
function sumOfSquares(nums: number[]): number {
    const n = nums.length;
    let sum = 0;

    // Iterate through each index and check if it's special
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) { // Check if i divides n
            sum += nums[i - 1] * nums[i - 1]; // Square the element at index i-1 and add to sum
        }
    }

    return sum;
};
```