# C# Linq

**Author:** gregsklyanny
**Votes:** 8
**Link:** [https://leetcode.com/problems/set-mismatch/solutions/2735316/](https://leetcode.com/problems/set-mismatch/solutions/2735316/)

---

**Please upvote if my solution was helpful ;)**
```
public class Solution {
    public int[] FindErrorNums(int[] nums) {
        
        int first = nums.GroupBy(x => x).Where(g => g.Count() == 2).Select(x => x.Key).First();
        int second = Enumerable.Range(1, nums.Length).Except(nums).First();

        return new int[] { first, second }; 
    }
}
```