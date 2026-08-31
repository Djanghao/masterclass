# Actually, this is a nice Question 👏👏

**Author:** Dixon_N
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/5805928/](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/5805928/)

---

**Understand Approach -1, then go to Approach -2**

Approach -1 fails on 83/84 test case TLE.


# Code
```java []
// Approach - 2
/*
Key optimizations:

Use a difference array technique to efficiently count frequencies.
Calculate prefix sum to get actual frequencies.

Time complexity: O(N + R + N log N)

N + R for counting frequencies
N log N for sorting

Space complexity: O(N)

Same as before

This optimized version significantly improves time efficiency, especially for large inputs with many overlapping requests.
*/
class Solution {
    private static final int MOD = 1000000007;

    public int maxSumRangeQuery(int[] nums, int[][] requests) {
        int n = nums.length;
        int[] frequency = new int[n];
        
        // Step 1: Use difference array to count frequencies
        for (int[] request : requests) {
            int start = request[0];
            int end = request[1];
            frequency[start]++;
            if (end + 1 < n) {
                frequency[end + 1]--;
            }
        }
        
        // Calculate prefix sum to get actual frequencies
        for (int i = 1; i < n; i++) {
            frequency[i] += frequency[i - 1];
        }

        // Step 2: Sort both arrays
        Arrays.sort(frequency);
        Arrays.sort(nums);

        // Step 3: Multiply and sum
        long totalSum = 0;
        for (int i = 0; i < n; i++) {
            totalSum += (long) frequency[i] * nums[i];
        }

        return (int) (totalSum % MOD);
    }
}

/*
Here's a simple example to illustrate:

If we have an array of length 5 (indices 0 to 4) and a request [1, 3]:

We increment frequency[1] (start of range)
We decrement frequency[4] (end of range + 1)
Later, when we calculate the prefix sum, indices 1, 2, and 3 will have the correct frequency
*/
```
```java []
// Approach -1
/*
Time complexity: O(R * N + N log N)

R * N for counting frequencies (R requests, each up to N elements)
N log N for sorting arrays

Space complexity: O(N)

Two arrays of length N (frequency and nums)

This approach is less efficient than the original for large inputs, especially with many overlapping requests.
*/

class Solution {
    private static final int MOD = 1000000007;

    public int maxSumRangeQuery(int[] nums, int[][] requests) {
        int n = nums.length;
        
        // Step 1: Count how many times each index is requested
        int[] frequency = new int[n];
        for (int[] request : requests) {
            int start = request[0];
            int end = request[1];
            for (int i = start; i <= end; i++) {
                frequency[i]++;
            }
        }

        // Step 2: Sort both arrays
        Arrays.sort(frequency);
        Arrays.sort(nums);

        // Step 3: Multiply and sum
        long totalSum = 0;
        for (int i = 0; i < n; i++) {
            totalSum += (long) frequency[i] * nums[i];
        }

        // Step 4: Return the result within the required range
        return (int) (totalSum % MOD);
    }
}
```