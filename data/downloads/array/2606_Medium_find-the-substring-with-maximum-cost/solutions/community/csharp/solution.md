# C# solution

**Author:** Tomer136
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/5750763/](https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/5750763/)

---

# Time complexity: O(n)

# Code
```csharp []
public class Solution {
    public int MaximumCostSubstring(string s, string chars, int[] vals) {
        var sub = 0;
        var maxCost = 0;
        for(var i = 0; i < s.Length; i++) {
            // Calculate the value
            var temp = chars.Contains(s[i]) ? vals[chars.IndexOf(s[i])] : char.ToUpper(s[i]) - 'A' + 1;
            // If the current sub-values + the current value is smaller than the current value
                // It is better to start a new sub-values with the current value since it will be bigger
            sub = Math.Max(sub + temp, temp);
            // If the current max cost is smaller than the current sub-values
             // Update the max cost to be the current sub-values
            maxCost = Math.Max(maxCost, sub);
        }
        return maxCost;
    }
}
```