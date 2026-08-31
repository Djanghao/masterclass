# Clear typescript solution (beats 100%)

**Author:** igor_muram
**Votes:** 0
**Link:** [https://leetcode.com/problems/recover-the-original-array/solutions/4624792/](https://leetcode.com/problems/recover-the-original-array/solutions/4624792/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(n)$$

# Code
```
function recoverArray(nums: number[]): number[] {
    nums = nums.sort((a, b) => a - b)
    const half: number = nums.length / 2

    const getResultForK = (k: number): number[] => {
        const result: number[] = []

        const counts: Map<number, number> = nums.reduce((acc, cur) => {
            acc.set(cur, (acc.get(cur) || 0) + 1)
            return acc
        }, new Map<number, number>())

        for (let num of nums) {
            if (counts.get(num) === 0) {
                continue
            }

            if (counts.get(num + k) === 0) {
                return []
            }

            counts.set(num, counts.get(num) - 1)
            counts.set(num + k, counts.get(num + k) - 1)

            result.push(num + k / 2)
        }

        if (result.length !== half) {
            return []
        }

        return result
    }

    for (let i = 1; i <= half; i++) {
        const k: number = nums[i] - nums[0]

        if (k !== 0 && k % 2 === 0) {
            const result = getResultForK(k)

            if (result.length > 0) {
                return result
            }
        }
    }
}
```