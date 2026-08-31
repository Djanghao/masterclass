# ✅98.43%🔥Easy Solution🔥With Dynamic Programming🔥

**Author:** MrAke
**Votes:** 232
**Link:** [https://leetcode.com/problems/arithmetic-slices-ii-subsequence/solutions/4520265/](https://leetcode.com/problems/arithmetic-slices-ii-subsequence/solutions/4520265/)

---

# Intuition
#### The problem requires counting the number of arithmetic subsequences in the given array. A sequence is considered arithmetic if it has at least three elements, and the difference between any two consecutive elements is the same.


# Approach
#### One way to solve this problem is to use dynamic programming. We can maintain a 2D array `dp`, where `dp[i][j]` represents the number of arithmetic subsequences ending at index `i` with a common difference of `j`. We can then iterate through the array, updating the `dp` array and counting the total number of arithmetic subsequences.

### Here's a step-by-step breakdown of the approach:

#### 1. Initialize a variable `total_count` to 0, which will keep track of the total number of arithmetic subsequences.
#### 2. Initialize a 2D array `dp` with dimensions `n x n`, where `n` is the length of the input array `nums`. Each element `dp[i][j]` will represent the number of arithmetic subsequences ending at index `i` with a common difference of `j`.
#### 3. Iterate through the array `nums` with two nested loops:
- ##### The outer loop (`i`) goes from 1 to `n - 1`.
- ##### The inner loop (``j``) goes from 0 to `i - 1`.
#### 4. For each pair of indices (`i, j`), calculate the common difference `diff = nums[i] - nums[j]`.
#### 5. Update `dp[i][diff]` by incrementing it by 1, indicating that we have found a new arithmetic subsequence ending at index `i` with a common difference of `diff`.
#### 6. If there is an existing subsequence ending at index `j` with the common difference `diff`, extend it to form a longer subsequence ending at index `i`. Increment `dp[i][diff]` by the value of `dp[j][diff]`.
#### 7. Update the `total_count` by adding the value of `dp[j][diff]` to it.
#### 8. After the loops, the `total_count` will contain the total number of arithmetic subsequences.
---
# Complexity
- ## Time complexity:
#### $$O(n^2)$$ - The nested loops iterate through each pair of indices, leading to a quadratic time complexity.
- ## Space complexity:
#### $$O(n^2)$$ - The 2D array `dp` has dimensions `n x n`, contributing to a quadratic space complexity.
# Code

```python []
class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        n = len(nums)
        total_count = 0  
        dp = [defaultdict(int) for _ in range(n)]

        for i in range(1, n):
            for j in range(i):
                diff = nums[i] - nums[j]
                dp[i][diff] += 1  
                if diff in dp[j]:
                    dp[i][diff] += dp[j][diff]
                    total_count += dp[j][diff]

        return total_count
```
```javascript []
var numberOfArithmeticSlices = function(nums) {
    const n = nums.length;
    let total_count = 0;

    const dp = new Array(n).fill().map(() => new Map());

    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            const diff = nums[i] - nums[j];

            if (dp[j].has(diff)) {
                dp[i].set(diff, (dp[i].get(diff) || 0) + dp[j].get(diff));
                total_count += dp[j].get(diff);
            }

            dp[i].set(diff, (dp[i].get(diff) || 0) + 1);
        }
    }

    return total_count;
};

```
```java []
public class Solution {
    public int numberOfArithmeticSlices(int[] nums) {
        int n = nums.length;
        int total_count = 0;

        HashMap<Integer, Integer>[] dp = new HashMap[n];

        for (int i = 0; i < n; ++i) {
            dp[i] = new HashMap<>();
        }

        for (int i = 1; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                long diff = (long) nums[i] - nums[j]; 

                if (diff > Integer.MAX_VALUE || diff < Integer.MIN_VALUE) {
                    continue; 
                }

                int diffInt = (int) diff;

                dp[i].put(diffInt, dp[i].getOrDefault(diffInt, 0) + 1);  
                if (dp[j].containsKey(diffInt)) {
                    dp[i].put(diffInt, dp[i].get(diffInt) + dp[j].get(diffInt));
                    total_count += dp[j].get(diffInt);
                }
            }
        }

        return total_count;
    }
}
```
```C++ []
class Solution {
public:
    int numberOfArithmeticSlices(std::vector<int>& nums) {
        int n = nums.size();
        int total_count = 0;

        std::vector<std::unordered_map<int, int>> dp(n);

        for (int i = 1; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                long long diff = static_cast<long long>(nums[i]) - nums[j]; 

                if (diff > INT_MAX || diff < INT_MIN)
                    continue; 

                int diff_int = static_cast<int>(diff);

                dp[i][diff_int] += 1; 

                if (dp[j].count(diff_int)) {
                    dp[i][diff_int] += dp[j][diff_int];
                    total_count += dp[j][diff_int];
                }
            }
        }

        return total_count;
    }
};
```
```C# []
public class Solution {
    public int NumberOfArithmeticSlices(int[] nums) {
        int n = nums.Length;
        int total_count = 0;

        Dictionary<int, int>[] dp = new Dictionary<int, int>[n];

        for (int i = 0; i < n; ++i) {
            dp[i] = new Dictionary<int, int>();
        }

        for (int i = 1; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                long diff = (long)nums[i] - nums[j]; 
                if (diff > int.MaxValue || diff < int.MinValue) {
                    continue; 
                }

                int diffInt = (int)diff;

                dp[i][diffInt] = dp[i].GetValueOrDefault(diffInt) + 1;  

                if (dp[j].ContainsKey(diffInt)) {
                    dp[i][diffInt] += dp[j][diffInt];
                    total_count += dp[j][diffInt];
                }
            }
        }

        return total_count;
    }
}

```


---
![Screenshot 2023-08-20 065922.png](./images/0.png)



