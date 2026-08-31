# C# Solution 🔥🚀 with approach. ❇️✅

**Author:** ArafatSabbir
**Votes:** 9
**Link:** [https://leetcode.com/problems/simplify-path/solutions/3408403/](https://leetcode.com/problems/simplify-path/solutions/3408403/)

---

# \u2B06\uFE0FLike|\uD83C\uDFAFShare|\u2B50Favourite

# Approach
1. Split the path into parts using '/' as the delimiter.
2. Iterate through the parts and push the parts into a stack.
3. If the part is ".." then pop the stack.
4. If the part is "." or "" then do nothing.
5. If the part is anything else then push it into the stack.
6. Iterate through the stack and build the result string.
7. Return the result string.

# Complexity
- Time complexity:
O(n) where n is the length of the path.

- Space complexity:
O(n) where n is the length of the path.

# C# Code
```
public class Solution 
{
    public string SimplifyPath(string path)
    {
        var stack = new Stack<string>();
        var parts = path.Split('/');
        foreach (var part in parts)
        {
            if (part == "..")
            {
                if (stack.Count > 0)
                {
                    stack.Pop();
                }
            }
            else if (part != "." && part != "")
            {
                stack.Push(part);
            }
        }
        var result = new StringBuilder();
        while (stack.Count > 0)
        {
            result.Insert(0, stack.Pop());
            result.Insert(0, "/");
        }
        return result.Length == 0 ? "/" : result.ToString();
    }
}
```