# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/5695533/](https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/5695533/)

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
public boolean isConsecutive(int[] nums) {
    if (nums == null || nums.length == 0) {
        return false;
    }
    
    Set<Integer> set = new HashSet<>();
    int min = Integer.MAX_VALUE;
    int max = Integer.MIN_VALUE;
    
    // Find the minimum and maximum values
    for (int num : nums) {
        if (num < min) min = num;
        if (num > max) max = num;
        set.add(num);
    }
    
    // Check if the number of unique elements matches the range
    for (int i = min; i <= max; i++) {
        if (!set.contains(i)) {
            return false;
        }
    }
    
    return (max - min + 1) == nums.length;
}
```
```javascript []
var isConsecutive = function(nums) {
    if (nums == null || nums.length === 0) {
        return false;
    }
    
    const set = new Set();
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    
    // Find the minimum and maximum values
    for (const num of nums) {
        if (num < min) min = num;
        if (num > max) max = num;
        set.add(num);
    }
    
    // Check if the number of unique elements matches the range
    for (let i = min; i <= max; i++) {
        if (!set.has(i)) {
            return false;
        }
    }
    
    return (max - min + 1) === nums.length;

};
```
```typescript []
function isConsecutive(nums: number[]): boolean {
    if (nums == null || nums.length === 0) {
        return false;
    }

    const set = new Set<number>();
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    
    // Find the minimum and maximum values
    for (const num of nums) {
        if (num < min) min = num;
        if (num > max) max = num;
        set.add(num);
    }
    
    // Check if the number of unique elements matches the range
    for (let i = min; i <= max; i++) {
        if (!set.has(i)) {
            return false;
        }
    }
    
    return (max - min + 1) === nums.length;
};
```