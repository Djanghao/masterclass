# Clean code using status

**Author:** julianmr
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-comments/solutions/3753266/](https://leetcode.com/problems/remove-comments/solutions/3753266/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
See approach below.

# Approach
<!-- Describe your approach to solving the problem. -->
Using status variable, just traverse through each char. By default status is 0 which you can insert the char into buffer. Status 0 can change into either 1 (line comment) or 2 (block comment), where status 1 can only change back to 0, the same as status 2 as well (see problem description). You don't insert any char to buffer during status 1 or 2.

When to insert buffer to the line list? Obviously not when the status is 2. You can insert the buffer when buffer is not empty, and status is either 0 or 1 (as you can write some code and add the single-line comment in the same line).

I wrote the code below using C#, but you should be able to convert this to your other favorite language (or using ChatGPT if you're too lazy). 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Where n is num of total chars in source: $$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
public class Solution {
    public IList<string> RemoveComments(string[] source) {
        IList<string> result = new List<string>();
        int status = 0; // 0 --> no comment, 1 --> line, 2 --> block
        IList<char> buffer = new List<char>();

        foreach (string line in source)
        {
            // line comment ends at newline.
            if (status == 1)
            {
                status = 0;
            }

            for (int idx = 0; idx < line.Length; idx++)
            {
                char curr = line[idx];
                
                if (status == 0 && idx + 1 < line.Length && curr == '/' && line[idx + 1] == '/')
                {
                    // line comment
                    status = 1;
                    idx++;
                }
                else if (status == 0 && idx + 1 < line.Length && curr == '/' && line[idx + 1] == '*')
                {
                    // begin block comment
                    status = 2;
                    idx++;
                }
                else if (status == 2 && idx + 1 < line.Length && curr == '*' && line[idx + 1] == '/')
                {
                    // end block comment
                    status = 0;
                    idx++;
                }
                else if (status == 0)
                {
                    buffer.Add(curr);
                }
            }

            if (status != 2 && buffer.Count > 0)
            {
                char[] chars = buffer.ToArray();
                result.Add(new string(chars));
                buffer = new List<char>();
            }
        }
         
        return result;
    }
}
```