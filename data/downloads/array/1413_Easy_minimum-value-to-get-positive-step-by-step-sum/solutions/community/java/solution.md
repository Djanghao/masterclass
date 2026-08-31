# Java || Runtime 0ms || Beat 100% || Easy to understand with detailed explanation

**Author:** shiyang2575326696
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/4526979/](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/4526979/)

---

# Code
```
class Solution {
    public int minStartValue(int[] nums) {
        int minPrefixSum = 0; // Initialize to track the minimum prefix sum
        int sum = 0; // This variable will keep track of the cumulative sum

        // Iterate through the array to compute the cumulative sum
        // and keep track of the minimum value reached by this sum
        for (int num : nums) {
            sum += num;
            minPrefixSum = Math.min(minPrefixSum, sum);
        }

        // The minimum start value should ensure that the cumulative sum
        // never drops below 1. If minPrefixSum is negative or zero,
        // the start value must be 1 - minPrefixSum to offset this deficit.
        // Otherwise, if minPrefixSum is already positive, start with 1.
        return 1 - minPrefixSum;
    }
}

```
![87bab3dd-fabf-4b71-9ac5-984d9015438e_1678160362.0612018.jpeg](./images/0.jpeg)
