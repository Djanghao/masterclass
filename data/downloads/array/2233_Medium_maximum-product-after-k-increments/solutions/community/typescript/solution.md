# Linear Solution for TS (beats 100% as of yet)

**Author:** svetansusidhya
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-after-k-increments/solutions/5342234/](https://leetcode.com/problems/maximum-product-after-k-increments/solutions/5342234/)

---

![image.png](./images/0.png)


# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Incrementing the smallest numbers would provide the largest increase in the product, so the objective is to continuously increment the smallest numbers in nums for k operations.
# Approach
<!-- Describe your approach to solving the problem. -->
The reason why I wanted to share this approach in the first place was because most other solutions were using a PriorityQueue, here a frequency map is used to increment the smallest members of nums linearly instead, improving on the time complexity while using more space, using a frequency map of all numbers from 0 to (n + k), where n is the largest number in nums.
# Complexity
- Time complexity: O(n + k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n + k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maximumProduct(nums: number[], k: number): number {
    let res = 1, max = 0, count = k;
    const MOD = 10**9 + 7;
    for (let num of nums) max = Math.max(num, max);
    let freq = new Array(max + k + 1).fill(0);
    for (let num of nums) freq[num]++;
    let i = 0;
    while (count > 0) {
        if (freq[i] > 0) {
            if (freq[i] <= count) {
                count -= freq[i];
                freq[i+1] += freq[i];
                freq[i] = 0;
            } else {
                freq[i] -= count;
                freq[i+1] += count;
                count = 0;
            }
        }
        i++;
    }
    for (let i = 0; i < freq.length; i++) {
        if (freq[i] > 0) {
            for (let j = 0; j < freq[i]; j++) res = (res * i) % MOD;
        }
    }
    return res; 
};
```