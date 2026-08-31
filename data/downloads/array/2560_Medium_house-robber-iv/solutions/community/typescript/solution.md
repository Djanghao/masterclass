# 🔥 Beats 100% Runtime

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/house-robber-iv/solutions/5695468/](https://leetcode.com/problems/house-robber-iv/solutions/5695468/)

---

# Intuition
In summary, the algorithm efficiently narrows down the minimum capability required using binary search and verifies feasibility in linear time.

# Approach
This approach ensures that you efficiently find the minimum capability with a time complexity of O(n log(max_value - min_value)), where n is the length of the nums array.

# Complexity
- Time complexity:
Binary Search: O(log(max_value - min_value))
Feasibility Check: O(n)
Overall: O(n log(max_value - min_value))

- Space complexity:
Auxiliary Space: O(1)

# Code
```typescript []
function minCapability(nums: number[], k: number): number {
    let low = Math.min(...nums); // The smallest possible value for capability
    let high = Math.max(...nums); // The largest possible value for capability

    const canRobWithCapability = (capability: number): boolean => {
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= capability) {
                count++;
                i++; // Skip the next house
            }
        }
        return count >= k;
    };

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (canRobWithCapability(mid)) {
            high = mid; // Try for a smaller capability
        } else {
            low = mid + 1; // Increase capability
        }
    }

    return low;
}



```