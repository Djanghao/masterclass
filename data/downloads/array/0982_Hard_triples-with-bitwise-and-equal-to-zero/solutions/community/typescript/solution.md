# [TS] Use hash map to count.

**Author:** zhi-zhi
**Votes:** 0
**Link:** [https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/2867107/](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/2867107/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. Calculate the count of ``nums[i] & nums[j] & nums[k] === 0``, ``i !== j && i !== k && j !== k``
2. Calculate the count of ``nums[i] & nums[j] & nums[k] === 0``, ``i !== j``
    1. k is equal to i or equal to j.
3. Calculate the count of ``nums[i] & nums[j] & nums[k] === 0``, ``i === j && i === k``

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^3)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$

# Code
```
function countTriplets(nums: number[]): number {
    let res = 0
    // (key, value) = (nums[i] & nums[j], count), i !== j
    const map = new Map<number, number>()
    const n = nums.length
    
    for (let i = 0; i < n; i++) {
        for (const entry of Array.from(map.entries())) {
            if ((nums[i] & entry[0]) === 0) {
                // (i, j, k), i !== j && i !== k && j !== k
                // 3! = 6
                // 3: the ways pick i into three slot.
                // 2: the ways pick j into two slot.
                // 1: the ways pick k into one slot.
                res += entry[1] * 6
            }
        }

        for (let j = 0; j < i; j++) {
            // record the different ways that nums[i] & nums[j]
            map.set(nums[i] & nums[j], (map.get(nums[i] & nums[j]) ?? 0) + 1)

            // (i, j, k), i !== j && (i === k || j === k)
            // i: C(3, 2) + C(3, 1) = 6
            // i: C(3, 2), the ways pick two i into three slot
            // i: C(3, 1), the ways pick one i into three slot 
            if ((nums[i] & nums[j]) === 0)
                res += 6
        }

        // (i, i, i)
        if (nums[i] === 0)
            res += 1
    }



    return res
};
```