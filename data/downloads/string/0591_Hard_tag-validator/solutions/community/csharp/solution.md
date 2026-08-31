# 💥 Runtime beats 100.00%, Memory beats 71.43% [EXPLAINED]

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/tag-validator/solutions/5707702/](https://leetcode.com/problems/tag-validator/solutions/5707702/)

---

# Intuition
The task is to validate a string with nested tags, ensuring they are correctly opened, closed, and nested. Tags are wrapped in <TAG> and </TAG>. Special sections are ignored as they contain raw data.

# Approach
Traverse the string with a stack to track open tags. Push opening tags, pop matching closing tags. If the stack is empty at the end, the tags are valid.

# Complexity
- Time complexity:
 O(n) - Single pass through the string.

- Space complexity:
O(n) - Stack stores tags, up to the total number of tags in the worst case.

# Code
```csharp []
public class Solution 
{
    public bool IsValid(string code)
    {
        var tagStack = new Stack<string>();
        int i = 0;
        
        while (i < code.Length)
        {
            if (i > 0 && tagStack.Count == 0) return false;

            if (i <= code.Length - 9 && code.Substring(i, 9) == "<![CDATA[")
            {
                int cdataEnd = code.IndexOf("]]>", i + 9);
                if (cdataEnd == -1) return false;
                i = cdataEnd + 3;
            }
            else if (i <= code.Length - 2 && code.Substring(i, 2) == "</")
            {
                int tagEnd = code.IndexOf('>', i + 2);
                if (tagEnd == -1) return false;

                string tagName = code.Substring(i + 2, tagEnd - (i + 2));
                if (tagStack.Count == 0 || tagStack.Pop() != tagName) return false;
                i = tagEnd + 1;
            }
            else if (code[i] == '<')
            {
                int tagEnd = code.IndexOf('>', i + 1);
                if (tagEnd == -1) return false;

                string tagName = code.Substring(i + 1, tagEnd - (i + 1));
                if (!IsValidTagName(tagName)) return false;

                tagStack.Push(tagName);
                i = tagEnd + 1;
            }
            else
            {
                i++;
            }
        }

        return tagStack.Count == 0;
    }

    private bool IsValidTagName(string tagName)
    {
        if (tagName.Length < 1 || tagName.Length > 9) return false;
        foreach (char c in tagName)
        {
            if (!char.IsUpper(c)) return false;
        }
        return true;
    }
}

```