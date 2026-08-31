# Typescrip

**Author:** haque_jibon
**Votes:** 0
**Link:** [https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/6126825/](https://leetcode.com/problems/query-kth-smallest-trimmed-number/solutions/6126825/)

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
function smallestTrimmedNumbers(nums: string[], queries: number[][]): number[] {

    const result: number[] = []

    for (let [kth, trim] of queries) {
        const temp: string[][] = []

        for (let i = 0; i < nums.length; i++) {
            let len = nums[i].length
            temp.push([nums[i].substring(len - trim), `${i}`])
        }

        temp.sort((a, b) => a[0].localeCompare(b[0]))

        result.push(+temp[kth - 1][1])

    }

    return result
};
```