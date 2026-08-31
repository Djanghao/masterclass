# [0ms][1LINER][100%][Fastest Solution Explained] O(n)time complexity O(n)space complexity

**Author:** darian-catalin-cucer
**Votes:** 9
**Link:** [https://leetcode.com/problems/range-sum-query-immutable/solutions/2129952/](https://leetcode.com/problems/range-sum-query-immutable/solutions/2129952/)

---

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* *** Java ***

```

/**
 * Using a prefix sum array
 *
 * prefixSum[i] = prefixSum[i-1] + nums[i-1]. Length of prefixSum array is 1 +
 * length of input array.
 *
 * sumRange(1,3) = prefixSum[3+1] - prefixSum[1]
 *
 * Time Complexity: NumArray() -> O(N). sumRange() -> O(1)
 *
 * Space Complexity: O(N) (Can be O(1) if allowed to modify nums array)
 *
 * N = Length of input array.
 */
class NumArray {

    int[] prefixSum;

    public NumArray(int[] nums) {
        if (nums == null) {
            throw new IllegalArgumentException("Input is null");
        }

        prefixSum = new int[nums.length + 1];

        for (int i = 1; i <= nums.length; i++) {
            prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
        }
    }

    public int sumRange(int left, int right) {
        if (left < 0 || right >= prefixSum.length - 1) {
            throw new IndexOutOfBoundsException("Input indices are out of bounds");
        }

        // Here both left and right are inclusive.
        // right maps to right+1 in prefixSum. left maps to left+1 in prefixSum.
        // To get the result subtract the prefixSum before left index from prefixSum at
        // right index.
        return prefixSum[right + 1] - prefixSum[left];
    }
}

```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***
