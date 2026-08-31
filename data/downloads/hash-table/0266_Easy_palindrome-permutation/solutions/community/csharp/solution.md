# Bit Manipulation

**Author:** ashotmuradian
**Votes:** 2
**Link:** [https://leetcode.com/problems/palindrome-permutation/solutions/3671406/](https://leetcode.com/problems/palindrome-permutation/solutions/3671406/)

---

The idea is just replace the following code:
```csharp
public class Solution {
    public bool CanPermutePalindrome(string s) {
        var set = new HashSet<char>();
        foreach (var ch in s) {
            if (!set.Add(ch)) set.Remove(ch);
        }
        return set.Count <= 1;
    }
}
```

With the one that uses Bit Manipulation in order to get $$O(1)$$ space complexity:
```csharp
public class Solution {
    public bool CanPermutePalindrome(string s) {
        var bitmap = 0u;
        foreach (var ch in s) {
            bitmap = bitmap ^ (1u << ch);
        }
        return (bitmap & (bitmap - 1)) == 0;
    }
}
```

If you wonder why right shift `1u << ch` works despite its right-hand operator being `char`, you can find more about this [here in docs](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/operators/bitwise-and-shift-operators#shift-count-of-the-shift-operators)