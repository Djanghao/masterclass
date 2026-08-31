# Sliding Window with a catch

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/6051934/](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/6051934/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using sliding window to check for matching conditions and then also check for all valid substrings s[k..j] where k > i && k <= j and add them to dictionary.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int MaxFreq(string s, int maxLetters, int minSize, int maxSize) {
        Dictionary<string, int> freq = new ();
        Dictionary<char, int> letter = new ();
        int i=0;
        int j = 0;
        letter[s[i]] = 1;
        bool add = true;
        while(j < s.Length && i <= j)
        {
            int len = j - i + 1;
            int lcount = letter.Keys.Count;
            if (add && len >= minSize && len <= maxSize && lcount <= maxLetters)
            {
                string sub = s.Substring(i, len);
                if (!freq.ContainsKey(sub))
                {
                    freq[sub] = 1;
                } else {
                    freq[sub] += 1;
                }
            }
            if (lcount > maxLetters || len > maxSize || j == (s.Length - 1))
            {
                letter[s[i]] -= 1;
                if (letter[s[i]] == 0)
                {
                    letter.Remove(s[i]);
                }
                i++;
                add = false;
                continue;
            }
            j++;
            add = true;
            if (!letter.ContainsKey(s[j]))
            {
                letter[s[j]] = 1;
            } else {
                letter[s[j]] += 1;
            }
            CheckValid(letter, i, j, minSize, maxLetters, freq, s);
        }
        int maxFreq = 0;
        string res = "";
        foreach(var kv in freq)
        {
            if (kv.Value > maxFreq)
            {
                maxFreq = kv.Value;
                res = kv.Key;
            }
        }
        //Console.WriteLine(res);
        return maxFreq;
    }

    private void CheckValid(Dictionary<char, int> letter, int i, int j, int minSize, int maxLetter, Dictionary<string, int> freq, string s)
    {
        int k = i+1;
        var newLetter = letter.ToDictionary(entry => entry.Key, entry => entry.Value);
        newLetter[s[i]] -= 1;
        if (newLetter[s[i]] == 0)
        {
            newLetter.Remove(s[i]);
        }
        while((j-k+1) >= minSize)
        {
            int lcount = newLetter.Keys.Count;
            if (lcount <= maxLetter)
            {
                string sub = s.Substring(k, (j-k+1));
                if (!freq.ContainsKey(sub))
                {
                    freq[sub] = 1;
                } else {
                    freq[sub] += 1;
                }
            }
            newLetter[s[k]] -= 1;
            if (newLetter[s[k]] == 0)
            {
                newLetter.Remove(s[k]);
            }
            k++;
        }
    }
}
```