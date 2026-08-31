# Beats 100%

**Author:** EvgeniiTachalov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/5988090/](https://leetcode.com/problems/count-the-number-of-beautiful-subarrays/solutions/5988090/)

---


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```typescript []
function beautifulSubarrays(nums: number[]): number {
    const map = new Map();
    let count = 0;
    let currentXor = 0;

    map.set(0, 1);

    nums.forEach(num => {
        currentXor = currentXor ^ num;
        if (map.has(currentXor)) {
            count += map.get(currentXor);
        }

        map.set(currentXor, (map.get(currentXor) || 0) + 1);

    })

    return count;
};
```