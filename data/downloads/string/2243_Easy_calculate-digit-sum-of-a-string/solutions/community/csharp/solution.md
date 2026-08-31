# C# nothing special, code explain itself

**Author:** nzspider
**Votes:** 1
**Link:** [https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/5745018/](https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/5745018/)

---

# Code
```csharp []
public class Solution {
    public string DigitSum(string s, int k) {
        var sb = new StringBuilder();
        while(s.Length > k){
            var lists = SplitStringByLength(s, k);
            foreach(var str in lists){
                var sum = str.Select(c=>c-'0').Sum();
                sb.Append(sum.ToString());
            }
            s = sb.ToString();
            sb.Clear();
        }
        return s;
    }

    public IEnumerable<string> SplitStringByLength(string str, int length)
    {
        for (int i = 0; i < str.Length; i += length)
        {
            yield return str.Substring(i, Math.Min(length, str.Length - i));
        }
    }
}
```