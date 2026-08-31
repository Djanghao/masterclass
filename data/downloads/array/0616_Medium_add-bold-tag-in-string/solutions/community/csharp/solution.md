# C# Stack

**Author:** shnitsel666
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-bold-tag-in-string/solutions/3917241/](https://leetcode.com/problems/add-bold-tag-in-string/solutions/3917241/)

---

# Approach
C# Stack

# Code
```
public class Solution
{
    public string AddBoldTag(string s, string[] words)
    {
        Stack<Pair> stack = new ();
        for (int i = 0; i < s.Length; i++)
        {
            foreach(string w in words)
            {
                if (s[i..].StartsWith(w))
                {
                    Pair top = stack.Count == 0 ? null : stack.Peek();
                    if (top != null && top.End >= i)
                    {
                        top.End = Math.Max(top.End, i + w.Length);
                        break;
                    }
                    else
                    {
                        top = new Pair(i, i + w.Length);
                        stack.Push(top);
                    }
                }
            }
        }

        StringBuilder result = new (s);
        while (stack.Count != 0)
        {
            Pair top = stack.Pop();
            result.Insert(top.Start, "<b>");
            result.Insert(top.End + "<b>".Length, "</b>");
        }

        return result.ToString();
    }
}

public class Pair
{
    public int Start;
    public int End;
    public Pair(int start, int end)
    {
        Start = start;
        End = end;
    }
}
```