# ✅ Easy-to-understand C# solution using Two Pointers approach [O(n), O(1)]

**Author:** KamronSaliev
**Votes:** 32
**Link:** [https://leetcode.com/problems/string-compression/solutions/3247030/](https://leetcode.com/problems/string-compression/solutions/3247030/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
public class Solution 
{
    public int Compress(char[] chars)
    {
        var i = 0;
        var j = 0;

        while (i < chars.Length)
        {
            var current = chars[i];
            var counter = 0;

            while (i < chars.Length && chars[i] == current)
            {
                i++;
                counter++;
            }

            chars[j++] = current;

            if (counter > 1)
            {
                foreach (var counterChar in counter.ToString())
                {
                    chars[j++] = counterChar;
                }
            }
        }

        return j;
    }
}
```

![pleaseupvote.jpg](./images/0.jpeg)
