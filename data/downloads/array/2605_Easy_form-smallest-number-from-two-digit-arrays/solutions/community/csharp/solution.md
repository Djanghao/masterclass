# ✅ BEATS 100% C# O(n) solution WITHOUT sorting

**Author:** janek123
**Votes:** 1
**Link:** [https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/4453049/](https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/4453049/)

---

# Approach
- Search both arrays for smallest number and save same numbers into list
- If there are any same numbers: return the smallest one of them. Otherwise return number formed from the smallest numbers from each array so it is are as small as possible.

# Complexity
- Time complexity: $$O(n)$$ where ```n``` is ```nums1.Length + nums2.Length```
- Space complexity: $$O(n)$$

# Code
```
public class Solution {
    public int MinNumber(int[] nums1, int[] nums2) 
    {
        HashSet<int> map = new();
        List<int> same = new();

        int n1 = GetSmallestArrNum(nums1, map, same);
        int n2 = GetSmallestArrNum(nums2, map, same);

        if (same.Count > 0)
        {
            int min = 9;

            for (int i = 0; i < same.Count; i++)
            {
                if (same[i] == 1) return 1;
                if (same[i] < min) min = same[i];
            }

            return min;
        }

        return n1 < n2 ? FormNum(n1, n2) : FormNum(n2, n1);
    }

    private static int FormNum(in int i1, in int i2) => i1 * 10 + i2;

    private static int GetSmallestArrNum(int[] nums, HashSet<int> map, List<int> same)
    {
        int min = 9;

        for (int i = 0; i < nums.Length; i++)
        {
            if (!map.Add(nums[i])) same.Add(nums[i]);
            if (nums[i] < min) min = nums[i];
        }

        return min;
    }
}
```