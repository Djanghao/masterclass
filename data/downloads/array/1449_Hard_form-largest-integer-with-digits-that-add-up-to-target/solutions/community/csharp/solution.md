# C# Solution | Time: O(n), Memory: O(n) | Easy to understand, Dynamic programming

**Author:** TonyTroeff
**Votes:** 1
**Link:** [https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/2512933/](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/solutions/2512933/)

---

```C#
public class Solution {
    public string LargestNumber(int[] cost, int target) {
        Dictionary<int, string> memo = new ();
        string ans = Solve(target);
        if (ans.Length == 0) return "0";
        return ans;
        
        string Solve(int t) {
            if (t < 0) return string.Empty;
            if (memo.TryGetValue(t, out var memoizedResult)) return memoizedResult;

            string max = string.Empty;
            for (int i = cost.Length - 1; i >= 0; i--) {
                if (cost[i] == t && max.Length == 0) max = (i + 1).ToString();
                else if (cost[i] < t) {
                    string maxForRemainingCost = Solve(t - cost[i]);
                    if (maxForRemainingCost.Length > 0 && maxForRemainingCost.Length >= max.Length) {
                        max = $"{(i + 1)}{maxForRemainingCost}";
                    }
                }
            }

            memo[t] = max;
            return max;
        }
    }
}
```