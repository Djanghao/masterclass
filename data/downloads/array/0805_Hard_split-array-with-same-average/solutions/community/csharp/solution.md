# 🧮 C# Dynamic Subset Sum with Average Constraints Using DP

**Author:** ivanvinogradov207
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-with-same-average/solutions/5959243/](https://leetcode.com/problems/split-array-with-same-average/solutions/5959243/)

---

## Intuition:
We need to determine if it is possible to partition the array into two subsets such that both subsets have the same average. The challenge lies in finding a subset whose sum is proportional to its size compared to the total sum and size of the array. This problem can be reduced to a subset sum problem where the target sum is proportional to the subset size.

## Approach:
1. Calculate the total sum and length of the array.
2. For each possible subset size `size` (from 1 to `n/2`), check if it's possible to partition the array into subsets of that size where the subset sum is proportional to the total sum.
3. Use dynamic programming (`dp`) to check whether a subset of size `size` can achieve the target sum.
   - The `dp` array tracks whether it's possible to form a subset of a specific size and sum using the given numbers.
   - Iterate over the numbers in reverse to update the `dp` array and avoid overwriting previous results.
4. If any subset can achieve the required sum, return `true`.

## Complexity:
- **Time complexity**:  
  $$O(n \	imes \	ext{sum})$$ where `n` is the length of the array, and `sum` is the total sum of the array. The double loop inside the dynamic programming step involves checking subsets of different sizes and sums.
  
- **Space complexity**:  
  $$O(n \	imes \	ext{target})$$ due to the `dp` table that tracks subset sizes and target sums.

# Code
```csharp []
public class Solution {
    public bool SplitArraySameAverage(int[] nums) {
        var n = nums.Length;
        var sum = nums.Sum();

        for (var size = 1; size <= n/2; size++)
        {
            if (size * sum % n == 0)
            {
                var target = size * sum / n;

                var dp = new bool[size+1,target+1];
                dp[0,0] = true;

                foreach (var num in nums)
                {
                    for (int i = size; i >= 1; i--)
                    {
                        for (int j = target; j >= num; j--)
                        {
                            dp[i,j] |= dp[i-1,j-num];
                        }
                    }
                }

                if (dp[size, target])
                    return true;
            }
        }

        return false;
    }
}
```