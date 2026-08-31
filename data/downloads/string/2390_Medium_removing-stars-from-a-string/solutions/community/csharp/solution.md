# C# | Fast Stack solution + Bonus 1 Line LINQ Fast Solution

**Author:** neerex
**Votes:** 5
**Link:** [https://leetcode.com/problems/removing-stars-from-a-string/solutions/3403230/](https://leetcode.com/problems/removing-stars-from-a-string/solutions/3403230/)

---

# Code
```
public class Solution 
{
    public string RemoveStars(string s) 
    {
        var stack = new Stack<char>();
        for (int i = 0; i < s.Length; i++)
        {
            if (s[i] == '*')
                stack.Pop();
            else
                stack.Push(s[i]);
        }
        return string.Concat(stack.Reverse());
    }
}
```

# Code
```
public class Solution 
{
    public string RemoveStars(string s) 
    {
        return s.Aggregate(new StringBuilder(s.Length), (sb, c) 
            => c == '*' 
                ? sb.Remove(sb.Length - 1, 1) 
                : sb.Append(c))
            .ToString();
    }
}
```