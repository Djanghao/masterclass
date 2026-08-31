# Short and clear solution using Stack

**Author:** anikit
**Votes:** 9
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/2799147/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/2799147/)

---

```csharp
public class Solution
{
    public string RemoveDuplicates(string s)
    {
        Stack<char> st = new();

        foreach (char c in s)
        {
            if (st.TryPeek(out char d) && d == c)
            {
                st.Pop();
                continue;
            }

            st.Push(c);
        }

        return string.Concat(st.Reverse());
    }
}
```