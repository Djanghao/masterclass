# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/6140417/](https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/6140417/)

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
public int maximumStrongPairXor(int[] nums) {
    int n = nums.length;
    int maxXor = 0;

    // Iterate through all possible pairs
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            int x = nums[i];
            int y = nums[j];

            // Check if the pair (x, y) is a strong pair
            if (Math.abs(x - y) <= Math.min(x, y)) {
                // Calculate XOR and update maxXor if it's larger
                maxXor = Math.max(maxXor, x ^ y);
            }
        }
    }

    return maxXor;
}
```
```javascript []
var maximumStrongPairXor = function(nums) {
    const n = nums.length;
    let maxXor = 0;

    // Iterate through all possible pairs
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const x = nums[i];
            const y = nums[j];

            // Check if the pair (x, y) is a strong pair
            if (Math.abs(x - y) <= Math.min(x, y)) {
                // Calculate XOR and update maxXor if it's larger
                maxXor = Math.max(maxXor, x ^ y);
            }
        }
    }

    return maxXor;
};
```
```typescript []
function maximumStrongPairXor(nums: number[]): number {
    const n = nums.length;
    let maxXor = 0;

    // Iterate through all possible pairs
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const x = nums[i];
            const y = nums[j];

            // Check if the pair (x, y) is a strong pair
            if (Math.abs(x - y) <= Math.min(x, y)) {
                // Calculate XOR and update maxXor if it's larger
                maxXor = Math.max(maxXor, x ^ y);
            }
        }
    }

    return maxXor;
};
```