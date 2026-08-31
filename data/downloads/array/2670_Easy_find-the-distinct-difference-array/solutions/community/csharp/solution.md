# C#, Hashset

**Author:** CDev
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3495101/](https://leetcode.com/problems/find-the-distinct-difference-array/solutions/3495101/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
public class Solution 
{
    public int[] DistinctDifferenceArray(int[] nums) 
    {
        int n = nums.Length;
        int[] result = new int[n];
        HashSet<int> distinctElements = new HashSet<int>();

        distinctElements.Add(nums[n-1]);
        for (int i = n - 2; i >= 0; i--)
        {
            result[i] = -distinctElements.Count;
            distinctElements.Add(nums[i]);
        }

        distinctElements.Clear();

        for (int i = 0; i <= n - 1; i++)
        {
            distinctElements.Add(nums[i]);
            result[i] += distinctElements.Count;
        }

        return result;
    }
}
```