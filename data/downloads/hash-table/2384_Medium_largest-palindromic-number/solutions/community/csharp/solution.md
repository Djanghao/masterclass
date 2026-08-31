# ⭐⭐⭐ Super EASY & FAST Solution ⭐⭐⭐

**Author:** Jubadze
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-palindromic-number/solutions/6098335/](https://leetcode.com/problems/largest-palindromic-number/solutions/6098335/)

---

```csharp []
public class Solution {
    public string LargestPalindromic(string num) {
        var count = new int[10];
        var maxOdd = -1;
        var sb = new List<char>();
        foreach (var c in num) count[c - '0']++;
        for (int i = 9; i >= 0; i--) {
            for (int j = 0; j < count[i] / 2; j++) sb.Add((char)(i + '0'));
            if (maxOdd < 0 && count[i] % 2 == 1) maxOdd = i;
        }
        var sb2 = new List<char>(sb);
        sb2.Reverse();
        if (maxOdd > -1) sb.Add((char)(maxOdd + '0'));
        var ans = (new string(sb.ToArray()) + new string(sb2.ToArray())).Trim('0');
        return ans.Length == 0 ? "0" : ans;
    }
}
```