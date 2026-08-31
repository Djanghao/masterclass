# 🌟 Beats 74.29%  ||  Step-by-Step Breakdown 💯🔥

**Author:** withaarzoo
**Votes:** 75
**Link:** [https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/solutions/5984530/](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/solutions/5984530/)

---

![github_promotion_dark.png](./images/0.png)

### **\uD83C\uDF1F Access Daily LeetCode Solutions Repo :** [click here](https://github.com/withaarzoo/LeetCode-Solutions)

---

![image.png](./images/1.png)

---

# Intuition
To solve this problem, let\u2019s think about what makes a mountain array:
1. The array has to increase to a peak and then decrease.
2. A mountain array has a single peak, meaning the sequence first strictly increases, reaches a peak, and then strictly decreases.

With this in mind, the problem becomes finding the longest subarray that can form a mountain shape and then determining the minimum number of removals required to create it. We\u2019ll use two sequences:
- **Longest Increasing Subsequence (LIS)** up to each point to form the "up" side.
- **Longest Decreasing Subsequence (LDS)** from each point to form the "down" side.

---

# Approach
1. **Calculate LIS and LDS**:
   - **LIS**: For each element, find the length of the longest increasing subsequence up to that element.
   - **LDS**: For each element, find the length of the longest decreasing subsequence from that element.

2. **Find Maximum Mountain Length**:
   - For each potential peak (where both `LIS[i] > 1` and `LDS[i] > 1`), calculate the mountain length as `LIS[i] + LDS[i] - 1`.
   - Track the maximum mountain length we can form.

3. **Calculate Minimum Removals**:
   - Subtract the maximum mountain length from the total number of elements to get the minimum removals needed.

---

# Complexity
- **Time Complexity**: \\(O(n^2)\\), due to the LIS and LDS calculations for each element.
- **Space Complexity**: \\(O(n)\\), for storing the LIS and LDS arrays.

---

# Code
```C++ []
class Solution {
public:
    int minimumMountainRemovals(vector<int>& nums) {
        int n = nums.size();
        vector<int> LIS(n, 1), LDS(n, 1);

        // Compute LIS up to each index
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                if (nums[i] > nums[j]) {
                    LIS[i] = max(LIS[i], LIS[j] + 1);
                }
            }
        }

        // Compute LDS from each index
        for (int i = n - 1; i >= 0; --i) {
            for (int j = n - 1; j > i; --j) {
                if (nums[i] > nums[j]) {
                    LDS[i] = max(LDS[i], LDS[j] + 1);
                }
            }
        }

        int maxMountainLength = 0;

        // Find the maximum mountain length
        for (int i = 1; i < n - 1; ++i) {
            if (LIS[i] > 1 && LDS[i] > 1) {  // Valid peak
                maxMountainLength = max(maxMountainLength, LIS[i] + LDS[i] - 1);
            }
        }

        return n - maxMountainLength;
    }
};

```
```Java []
class Solution {
    public int minimumMountainRemovals(int[] nums) {
        int n = nums.length;
        int[] LIS = new int[n], LDS = new int[n];
        Arrays.fill(LIS, 1);
        Arrays.fill(LDS, 1);

        // Compute LIS for each index
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                if (nums[i] > nums[j]) {
                    LIS[i] = Math.max(LIS[i], LIS[j] + 1);
                }
            }
        }

        // Compute LDS from each index
        for (int i = n - 1; i >= 0; --i) {
            for (int j = n - 1; j > i; --j) {
                if (nums[i] > nums[j]) {
                    LDS[i] = Math.max(LDS[i], LDS[j] + 1);
                }
            }
        }

        int maxMountainLength = 0;

        // Find the maximum mountain length
        for (int i = 1; i < n - 1; ++i) {
            if (LIS[i] > 1 && LDS[i] > 1) {  // Valid peak
                maxMountainLength = Math.max(maxMountainLength, LIS[i] + LDS[i] - 1);
            }
        }

        return n - maxMountainLength;
    }
}

```
```JavaScript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
    const n = nums.length;
    const LIS = Array(n).fill(1), LDS = Array(n).fill(1);

    // Compute LIS for each index
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            if (nums[i] > nums[j]) {
                LIS[i] = Math.max(LIS[i], LIS[j] + 1);
            }
        }
    }

    // Compute LDS from each index
    for (let i = n - 1; i >= 0; --i) {
        for (let j = n - 1; j > i; --j) {
            if (nums[i] > nums[j]) {
                LDS[i] = Math.max(LDS[i], LDS[j] + 1);
            }
        }
    }

    let maxMountainLength = 0;

    // Find the maximum mountain length
    for (let i = 1; i < n - 1; ++i) {
        if (LIS[i] > 1 && LDS[i] > 1) {  // Valid peak
            maxMountainLength = Math.max(maxMountainLength, LIS[i] + LDS[i] - 1);
        }
    }

    return n - maxMountainLength;
};

```
```Python []
class Solution:
    def minimumMountainRemovals(self, nums: List[int]) -> int:
        n = len(nums)
        LIS = [1] * n
        LDS = [1] * n

        # Compute LIS for each index
        for i in range(n):
            for j in range(i):
                if nums[i] > nums[j]:
                    LIS[i] = max(LIS[i], LIS[j] + 1)

        # Compute LDS from each index
        for i in range(n - 1, -1, -1):
            for j in range(n - 1, i, -1):
                if nums[i] > nums[j]:
                    LDS[i] = max(LDS[i], LDS[j] + 1)

        maxMountainLength = 0

        # Find the maximum mountain length
        for i in range(1, n - 1):
            if LIS[i] > 1 and LDS[i] > 1:  # Valid peak
                maxMountainLength = max(maxMountainLength, LIS[i] + LDS[i] - 1)

        return n - maxMountainLength

```
```Go []
func minimumMountainRemovals(nums []int) int {
    n := len(nums)
    LIS := make([]int, n)
    LDS := make([]int, n)

    for i := range LIS {
        LIS[i] = 1
        LDS[i] = 1
    }

    // Compute LIS for each index
    for i := 0; i < n; i++ {
        for j := 0; j < i; j++ {
            if nums[i] > nums[j] {
                LIS[i] = max(LIS[i], LIS[j] + 1)
            }
        }
    }

    // Compute LDS from each index
    for i := n - 1; i >= 0; i-- {
        for j := n - 1; j > i; j-- {
            if nums[i] > nums[j] {
                LDS[i] = max(LDS[i], LDS[j] + 1)
            }
        }
    }

    maxMountainLength := 0

    // Find the maximum mountain length
    for i := 1; i < n-1; i++ {
        if LIS[i] > 1 && LDS[i] > 1 {
            maxMountainLength = max(maxMountainLength, LIS[i] + LDS[i] - 1)
        }
    }

    return n - maxMountainLength
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

```

---

# Step-by-Step Detailed Explanation

1. **LIS and LDS Calculation**:
   - For each element in the array, compute the longest increasing sequence up to that point (LIS) and longest decreasing sequence from that point (LDS).
  
2. **Finding the Longest Mountain**:
   - A valid peak must have `LIS[i] > 1` and `LDS[i] > 1`.
   - For each valid peak, calculate the mountain length `LIS[i] + LDS[i] - 1` and track the maximum mountain length.

3. **Calculate Minimum Removals**:
   - The minimum removals required to achieve the mountain array is `n - maxMountainLength`.

---

![upvote_cat.png](./images/2.png)
