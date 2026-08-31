# Set solution TS beats 75%

**Author:** jbolson98
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/5959478/](https://leetcode.com/problems/k-divisible-elements-subarrays/solutions/5959478/)

---

# Intuition
- We will need to iterate through possible subarrays. If we have too many divisible elements, we can stop adding onto that subarray and start over.
- We need to avoid duplicate subarrays

# Approach
- Iterate through possible subarrays, starting from the beginning. Once there are too many divisible elements, move the start of the array to the next element and start over.
- Use a Set to avoid counting duplicates
- Convert array to string to store in Set

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n^2)$$ - If there are no duplicate subarrays there are $$n*n$$ unique possibilities to be stored in the set.

# Code
```typescript []
function countDistinct(nums: number[], k: number, p: number): number {
    const subarrays = new Set();

    for (let i = 0; i < nums.length; i++) {
        let divisible = 0;
        for (let j = i; j < nums.length; j++) {
            // If new element in subarray i-to-j is divisible, increment divisible count
            if (nums[j] % p === 0) divisible++;

            // If less than k are divisible, then we have a distinct subarray
            if (divisible <= k) subarrays.add(String(nums.slice(i, j+1)));
            else break;
        }
    }

    return subarrays.size;
};
```