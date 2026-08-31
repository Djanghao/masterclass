# 💥 C# | Runtime and memory beats 95.29%

**Author:** r9n
**Votes:** 13
**Link:** [https://leetcode.com/problems/4sum/solutions/5768080/](https://leetcode.com/problems/4sum/solutions/5768080/)

---

# Intuition
I have to find all unique sets of four numbers that sum up to a given target. To do this efficiently, I need to avoid checking the same set multiple times and handle duplicates properly.

# Approach
Sort the Array: Helps in managing duplicates and using the two-pointer technique.

Fix Two Numbers: Use two nested loops to choose the first two numbers.

Two-pointer Technique: Use pointers to find the other two numbers that make the target sum.

Skip Duplicates: Ensure unique quadruplets by skipping duplicate values.

# Complexity
- Time complexity:
O(n3) due to sorting and nested loops.

- Space complexity:
O(1) extra space (excluding result storage).

# Code
```csharp []
public class Solution
{
    public IList<IList<int>> FourSum(int[] nums, int target)
    {
        Array.Sort(nums);
        var result = new List<IList<int>>();
        int n = nums.Length;

        for (int i = 0; i < n - 3; i++)
        {
            if (i > 0 && nums[i] == nums[i - 1]) continue; // Skip duplicates for i

            for (int j = i + 1; j < n - 2; j++)
            {
                if (j > i + 1 && nums[j] == nums[j - 1]) continue; // Skip duplicates for j

                int left = j + 1;
                int right = n - 1;
                long targetSum = (long)target - nums[i] - nums[j]; // Use long to avoid overflow

                while (left < right)
                {
                    long sum = (long)nums[left] + nums[right]; // Use long to avoid overflow
                    if (sum == targetSum)
                    {
                        result.Add(new List<int> { nums[i], nums[j], nums[left], nums[right] });
                        while (left < right && nums[left] == nums[left + 1]) left++; // Skip duplicates for left
                        while (left < right && nums[right] == nums[right - 1]) right--; // Skip duplicates for right
                        left++;
                        right--;
                    }
                    else if (sum < targetSum) left++;
                    else right--;
                }
            }
        }

        return result;
    }
}

```