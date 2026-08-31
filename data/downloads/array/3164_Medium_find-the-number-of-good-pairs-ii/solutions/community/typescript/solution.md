# Simple TS Solution

**Author:** vadimshvetsov
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/6100412/](https://leetcode.com/problems/find-the-number-of-good-pairs-ii/solutions/6100412/)

---

# Code
```typescript []
function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
        const dividers = new Map<number, number>();
        for (const num of nums2) {
            dividers.set(num * k, (dividers.get(num * k) || 0) + 1);
        }

        const counts = new Array(Math.max(...nums1) + 1).fill(0);

        for (const [num, count] of dividers.entries()) {
            for (let multiplier = num; multiplier < counts.length; multiplier += num) {
                counts[multiplier] += count;
            }
        }
        
        return nums1.reduce((sum, num) => sum + (counts[num] || 0), 0);
};
```