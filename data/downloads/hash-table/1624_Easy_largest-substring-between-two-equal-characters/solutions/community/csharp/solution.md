# C# - 100% Runtime - 92% Memory - Happy New Year!

**Author:** limtis0
**Votes:** 4
**Link:** [https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4480503/](https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4480503/)

---

![image.png](./images/0.png)

**Happy New Year and great success to everybody!**

# Intuition
We need to save the values of `First` and `Last` found letters, then return the biggest difference found.

# Approach
I made a custom class `Letter` to easily update values and return the difference in one function call.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
public class Solution
{
    private class Letter
    {
        int First { get; set; } = -1;
        int Second { get; set; } = -1;

        public int UpdateAndGetDifference(int num)
        {
            if (First == -1)
            {
                First = num;

                return -1;
            }

            Second = num;

            return Second - First - 1;
        }
    }

    public int MaxLengthBetweenEqualCharacters(string s)
    {
        if (s.Length <= 1)
        {
            return -1;
        }

        Letter[] letters = new Letter[26];

        for (int i = 0; i < 26; i++)
        {
            letters[i] = new();
        }

        int maxDifference = -1;

        for (int i = 0; i < s.Length; i++)
        {
            Letter letter = letters[s[i] - 'a'];

            maxDifference = Math.Max(maxDifference, letter.UpdateAndGetDifference(i));
        }

        return maxDifference;
    }
}
```

---
![image.png](./images/1.png)