# TS Solution

**Author:** SinghSau
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted/solutions/4512109/](https://leetcode.com/problems/max-chunks-to-make-sorted/solutions/4512109/)

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
```
function maxChunksToSorted(arr: number[]): number {
    let max = 0;
        let chunks = 0;

            for(let i=0;i<arr.length;i++) {
                    max=Math.max(arr[i],max);
                            if(max<=i) chunks++;
                                }

                                    return chunks;
};
```