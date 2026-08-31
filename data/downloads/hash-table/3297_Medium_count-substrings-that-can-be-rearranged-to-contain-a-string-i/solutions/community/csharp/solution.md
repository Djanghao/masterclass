# Sliding window, explained

**Author:** ilya-chumakov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-i/solutions/5890843/](https://leetcode.com/problems/count-substrings-that-can-be-rearranged-to-contain-a-string-i/solutions/5890843/)

---

# Approach
A valid substring of `word1` should have all characters from `word2` plus *maybe* some more. Let's think of `word1` this way:

```
word1 = prefix + word2 + postfix
```
Let's check all the substrings starting from some point in `word1`. As soon as we get the first valid `prefix + word2` substring, then ALL the substrings till the rest of the `word1` are valid too, so we add the postfix length the the resulting sum. And while we have enough characters to form `word2` we can shrink `prefix` part char by char each time getting a new substring set.

So, let's use sliding window approach, increasing the window size till we find a valid substring, then shrinking the window till it's no longer valid.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```csharp []
public class Solution
{
    public long ValidSubstringCount(string word1, string word2)
    {
        var required = new char[26];
        foreach (char c in word2)
        {
            required[c - 'a']++;
        }

        int n = word1.Length;
        int l = 0;
        int r = 0;
        var window = new char[26];
        long sum = 0;

        while (r < n)
        {
            window[word1[r] - 'a']++;
            
            while (l < n && IsWindowValid(window, required))
            {
                sum += n - r;
                window[word1[l] - 'a']--;
                l++;
            }

            r++;
        }

        return sum;
    }

    private bool IsWindowValid(char[] window, char[] required)
    {
        for (var i = 0; i < window.Length; i++)
        {
            if (window[i] < required[i]) return false;
        }
        return true;
    }
}
```