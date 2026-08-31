# C#  ||  Too Much Greedy Approach

**Author:** sunil20000
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/6058632/](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/solutions/6058632/)

---

```csharp []
public class Solution {
    public int MinMovesToMakePalindrome(string s) {
        int result = 0, n = s.Length;
        List<char> ls = s.ToList();
        while(ls.Count > 0)
        {
            var lastChar = ls[ls.Count - 1];
            var index = ls.FindIndex( c => c == lastChar);

            if(index == ls.Count - 1)
            {
                result += (index / 2);
            }
            else
            {
                result += index;
                ls.RemoveAt(index);
            }

            ls.RemoveAt(ls.Count - 1);
        }

        return result;
    }
}
```