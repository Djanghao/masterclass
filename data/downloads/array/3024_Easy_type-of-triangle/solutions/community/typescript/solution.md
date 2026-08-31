# Easy Solution

**Author:** shamnad_skr
**Votes:** 1
**Link:** [https://leetcode.com/problems/type-of-triangle/solutions/5804100/](https://leetcode.com/problems/type-of-triangle/solutions/5804100/)

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
```typescript []
function triangleType(nums: number[]): string {

     const [a, b, c] = nums; //here i assigned values to this variables to easy calculation

    
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "none"; // Not a valid triangle
    }

    // Classify the triangle
    if (a === b && b === c) {
        return "equilateral"; // All sides are equal
    } 
    if (a === b || b === c || a === c) {
        return "isosceles"; // Two sides are equal
    }
    
    return "scalene"; // All sides are different
    
};
```