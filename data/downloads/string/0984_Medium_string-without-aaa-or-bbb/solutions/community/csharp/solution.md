# The Simplest C# Solution

**Author:** victornovik
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/5933564/](https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/5933564/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```csharp []
public class Solution 
{
    public string StrWithout3a3b(int a, int b) 
    {
        (char ch, int count)[] ab = [('a', a), ('b', b)];

        var res = new StringBuilder();
        var prevCh = char.MinValue;
        int count;
        do
        {
            // Sort descendingly. Maximum character count lives in abc[0]
            Sort();

            var ch = ab[0].ch;
            if (ch == prevCh)
            {
                // We've already added two such characters running but this character still has the max count.
                // So add one character from the 2-nd max bucket.
                ch = ab[1].ch;
                count = int.Min(ab[1].count, 1);
                ab[1].count -= count;
            }
            else
            {
                // We've just added some different character so we can add next two characters from the greatest bucket.
                count = int.Min(ab[0].count, 2);
                ab[0].count -= count;
            }
            res.Append(ch, count);
            prevCh = ch;
        }
        while (count > 0);

        return res.ToString();

        void Sort()
        {
            if (ab[1].count > ab[0].count)
                (ab[1], ab[0]) = (ab[0], ab[1]);
        }
    }
}
```