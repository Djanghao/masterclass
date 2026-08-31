# C# Sort in correct order

**Author:** sergey-tihon
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5876473/](https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5876473/)

---

# Code
```csharp []
public class Solution {
    public int MaxGoodNumber(int[] nums) {
        var bits = nums.Select(x => Convert.ToString(x, 2)).ToArray();
        Array.Sort(bits, (a,b)=> -(a+b).CompareTo(b+a));
        return Convert.ToInt32(string.Concat(bits), 2);
    }
}
```