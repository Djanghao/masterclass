# Direct solution, Dynamic Programming, O(n^2)

**Author:** Igor0
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-ii/solutions/4742813/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-ii/solutions/4742813/)

---

# Intuition
Use DP.

# Approach
Use DP. At first create a dictionary to keep the intermediate results:
```
var dic = new Dictionary<(int index0, int index1), int>();
```
The key in this dictionary is a tuple `(int index0, int index1)`, where `index0` and `index1` are the first and the last considered indexes in array `nums`.
Add a method for DP:
```
private int MaxOperations((int index0, int index1) key, Dictionary<(int index0, int index1), int>  dic, int sum, int[] nums)
```
In this method
- `(int index0, int index1) key` is the key for the dictionary
- `Dictionary<(int index0, int index1), int> dic` is the dictionary to keep the intermediate results
- `int sum` is the sum of 2 items
- `int[] nums` is the initial array
Call this method recursively.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n^2)$$

# Code
```
public class Solution {
    public int MaxOperations(int[] nums) {
        var dic = new Dictionary<(int index0, int index1), int>();
        var sum = nums[0] + nums[1];
        var rs0 = 1 + MaxOperations((2, nums.Length - 1), dic, sum, nums);
        sum = nums[0] + nums[nums.Length - 1];
        var rs1 = 1 + MaxOperations((1, nums.Length - 2), dic, sum, nums);
        sum = nums[nums.Length - 2] + nums[nums.Length - 1];
        var rs2 = 1 + MaxOperations((0, nums.Length - 3), dic, sum, nums);
        var rs = Math.Max(Math.Max(rs0, rs1), rs2);
        return rs;
    }
    private int MaxOperations((int index0, int index1) key, Dictionary<(int index0, int index1), int>  dic, int sum, int[] nums)
    {
        if (key.index1 <= key.index0) return 0;
        if (dic.ContainsKey(key)) return dic[key];
        var rs = 0;
        if (nums[key.index0] + nums[key.index0 + 1] == sum)
        {
            rs = Math.Max(rs, 1 + MaxOperations((key.index0 + 2, key.index1), dic, sum, nums));
        }
        if (nums[key.index0] + nums[key.index1] == sum)
        {
            rs = Math.Max(rs, 1 + MaxOperations((key.index0 + 1, key.index1 - 1), dic, sum, nums));
        }
        if (nums[key.index1 - 1] + nums[key.index1] == sum)
        {
            rs = Math.Max(rs, 1 + MaxOperations((key.index0, key.index1 - 2), dic, sum, nums));
        }
        if (!dic.ContainsKey(key)) dic.Add(key, rs);
        return rs;
    }
}
```