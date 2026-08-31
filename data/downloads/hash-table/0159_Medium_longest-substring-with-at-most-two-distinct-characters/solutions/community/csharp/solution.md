# Sliding window (also a template) - Time O(n) / Space O(1)

**Author:** mewnbr
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/4452798/](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/4452798/)

---

# Code
```
public class Solution {
    const int MaxDistincts = 2;

    public int LengthOfLongestSubstringTwoDistinct(string s) {
        // initialize the window (left = 0, right will iterate)
        var left = 0;
        var max = 0;
        var distincts = new Dictionary<char, int>();

        for(var right = 0; right < s.Length; right++)
        {
            // pre-process the new input (we can`t ensure it will be valid here)
            // in this case: add the char to teh chars counter
            if(distincts.ContainsKey(s[right]))
                distincts[s[right]]++;
            else
                distincts.Add(s[right], 1);
            
            // if the window is invalid, run it until it become valid again
            // in this case: remove the left chars until ths distincs charss be <= 2
            while(distincts.Count > MaxDistincts)
            {
                distincts[s[left]]--;
                if(distincts[s[left]] == 0)
                    distincts.Remove(s[left]);
                left++;
            }

            // process (here it will be valid for sure)
            // in this case: just counting the substring legth
            var len = right - left + 1;
            max = Math.Max(len, max);
        }

        return max;
    }
}
```