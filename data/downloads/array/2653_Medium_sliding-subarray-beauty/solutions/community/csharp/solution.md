# Sliding windows + sorted Dictionary

**Author:** Alaiv
**Votes:** 0
**Link:** [https://leetcode.com/problems/sliding-subarray-beauty/solutions/5915789/](https://leetcode.com/problems/sliding-subarray-beauty/solutions/5915789/)

---


# Code
```csharp []
public class Solution {
    public int[] GetSubarrayBeauty(int[] nums, int k, int x) {
        var dict = new SortedDictionary<int, int>();
        var result = new int[nums.Length - k + 1];
        int l = 0;
        
        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] < 0) dict[nums[i]] = dict.GetValueOrDefault(nums[i], 0) + 1;

            if (i + 1 >= k) {
                result[l] = GetXthMinValue(x, dict);
                if (nums[l] < 0) dict[nums[l]]--;
                l++;
            }
        }

        return result;
    }

    private int GetXthMinValue(int x, SortedDictionary<int, int> dict) {
        int xth = 0;

        foreach(var (key, value) in dict) {
            xth += value;

            if (xth >= x) {
                return key;
            }
        }

        return 0;
    }
}
```