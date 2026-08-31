# Typescript: easy solution with Set (Runtime beats 100%)

**Author:** alexgavrilov
**Votes:** 1
**Link:** [https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/4219353/](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/4219353/)

---

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n)

# Code
```
function sumCounts(nums: number[]): number {
    const counts: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const set = new Set([nums[i]]);
        for (let j = i; j < nums.length; j++) {
            set.add(nums[j]);
            counts.push(set.size ** 2);
        }
    }
    let sum: number = 0;
    counts.forEach((v) => sum += v);

    return sum;
};


```