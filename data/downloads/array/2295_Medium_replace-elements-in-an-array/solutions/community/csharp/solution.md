# C# Solution using hashmap

**Author:** panaeimi
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-elements-in-an-array/solutions/3436204/](https://leetcode.com/problems/replace-elements-in-an-array/solutions/3436204/)

---

# Code
```
public class Solution {
    public int[] ArrayChange(int[] nums, int[][] operations) {
        Dictionary<int, int> map = new Dictionary<int, int>();
        for(int i = 0; i < nums.Length; i++) {
            map.Add(nums[i], i);
        }

        foreach(int[] op in operations) {
            int index = map[op[0]];
            nums[index] = op[1];
            map.Remove(op[0]);
            map.Add(op[1], index);
        }

        return nums;
    }
}
```