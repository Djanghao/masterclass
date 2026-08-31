# Java code ✅

**Author:** deleted_user
**Votes:** 13
**Link:** [https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5875815/](https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5875815/)

---

# Intuition 

1. Count the divisors for each number to understand how many pairs can be formed with a specific GCD.
2. Start from the maximum value and calculate the number of pairs for each GCD by subtracting counts of multiples to avoid overcounting.
3. Build a prefix sum of pairs for quick lookups, allowing us to efficiently answer each query using binary search.

# Approach
1. Count divisors for each number.
2. Calculate the number of pairs for each GCD from the maximum down to 1.
3. Build a prefix sum of pairs to quickly answer each query using binary search.

# Complexity
- Time complexity: $$O(n \\sqrt{m})$$, where $$n$$ is the length of `nums` and $$m$$ is the maximum value in `nums`.
- Space complexity: $$O(m)$$, where $$m$$ is the maximum value in `nums`.

# Code
```java
class Solution {
    public int[] gcdValues(int[] nums, long[] queries) {
        int n = nums.length;
        int maxValue = Arrays.stream(nums).max().orElse(0);
        int[] divisorCount = new int[maxValue + 1];

        for (int number : nums) {
            for (int i = 1; i * i <= number; i++) {
                if (number % i == 0) {
                    divisorCount[i]++;
                    if (i != number / i) {
                        divisorCount[number / i]++;
                    }
                }
            }
        }

        long[] gcdPairCount = new long[maxValue + 1];

        for (int gcd = maxValue; gcd >= 1; gcd--) {
            long count = divisorCount[gcd];
            gcdPairCount[gcd] = count * (count - 1) / 2;
            for (int multiple = 2 * gcd; multiple <= maxValue; multiple += gcd) {
                gcdPairCount[gcd] -= gcdPairCount[multiple];
            }
        }

        long[] prefixSum = new long[maxValue + 1];
        for (int gcd = 1; gcd <= maxValue; gcd++) {
            prefixSum[gcd] = prefixSum[gcd - 1] + gcdPairCount[gcd];
        }

        int[] result = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            long query = queries[i];
            long left = 1, right = maxValue, answer = -1;
            while (left <= right) {
                long mid = (left + right) / 2;
                if (prefixSum[(int) mid] > query) {
                    answer = mid;
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            result[i] = (int) answer;
        }

        return result;
    }
}
```

# Upvote if you found this helpful! \uD83D\uDE0A