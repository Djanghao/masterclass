# Straight Forward Brute Force Typescript Solution

**Author:** LWMyHzdPui
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5681785/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5681785/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Straight forward brute force approach. 

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(1)$$

# Code
```typescript []
function countKConstraintSubstrings(s: string, k: number): number {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let ones = 0;
        let zeros = 0;
        if (s[i] == "1") {
            ones++;
        } else {
            zeros++;
        }
        // Since 1 <= k, all substrings with length 1 are valid
        count++;
        for (let e = i + 1; e < s.length; e++) {
            // While increasing the size of substrings
            // check each new character 
            if (s[e] == "1") {
                ones++;
            } else {
                zeros++;
            }
            if(ones <= k || zeros <= k) count++;
        }
    }
    return count;
};
```