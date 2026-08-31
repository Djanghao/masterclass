# Typescript

**Author:** ggnohope
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-floored-pairs/solutions/5804582/](https://leetcode.com/problems/sum-of-floored-pairs/solutions/5804582/)

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
function sumOfFlooredPairs(nums: number[]): number {
    const MOD = 10**9 + 7;
    const maxNum = Math.max(...nums);  

    const freq = new Array(maxNum + 1).fill(0);
    for (const num of nums) {
        freq[num] += 1;
    }

    const prefixSum = new Array(maxNum + 1).fill(0);
    for (let i = 1; i <= maxNum; i++) {
        prefixSum[i] = prefixSum[i - 1] + freq[i];
    }

    let result = 0;
    for (let num = 1; num <= maxNum; num++) {
        if (freq[num] > 0) {
            for (let multiple = 1; multiple * num <= maxNum; multiple++) {
                const left = num * multiple;
                const right = Math.min(num * (multiple + 1) - 1, maxNum);
                const countInRange = prefixSum[right] - prefixSum[left - 1];
                result = (result + freq[num] * countInRange * multiple) % MOD;
            }
        }
    }

    return result;
}

```