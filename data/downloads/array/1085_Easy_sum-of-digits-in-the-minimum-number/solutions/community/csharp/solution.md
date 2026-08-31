# C# One-liner

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/5875346/](https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/5875346/)

---

```csharp
public class Solution
{
    public int SumOfDigits(int[] nums) =>
        nums.Min().ToString().Aggregate(1, (a, c) => a ^ c & 1);
}
```