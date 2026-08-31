# C# Math Theory

**Author:** enze_zhang
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/solutions/4053989/](https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/solutions/4053989/)

---

Enumerate all the possibilities:
any number * square number <= n

# Code
```
public class Solution {
    static List<int> set = new List<int>(Enumerable.Range(1, 100).Select(x => x * x));
    public long MaximumSum(IList<int> nums) {
        long res = 0;
        for(int i = 1; i <= 1e4; i++){
            long cur = 0;
            for(int j = 0; j < set.Count; j++){
                if(set[j] * i <= nums.Count){ cur += nums[set[j] * i - 1]; }
                else goto Entry;
            }
            Entry:
            res = Math.Max(res, cur);
        }
        return Math.Max(res, nums.Max());
    }
}
```