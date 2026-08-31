# Sliding Window

**Author:** eguousaca
**Votes:** 1
**Link:** [https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/4845376/](https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/4845376/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Sliding Window

# Complexity
- Time complexity:
O(n * 10)

- Space complexity:
O(m)

# Code
```
public class Solution {
    public int LongestValidSubstring(string word, IList<string> forbidden)
    {
        int ans = 0;
        HashSet<string> hs = new HashSet<string>(forbidden);

        int left = 0;
        for(int right = 0; right < word.Length; right++)
        {            
            // Check each substring from right index to left index
            // For example: cbaaaabc
            // Left in index 1 and right in index 4, whole substring is "baaa"
            // Then k shall loop from index 4 to index 1, check each substring if substring length <= 10
            // if found one, then move left index to index k + 1
            for(int k = right; k >= left; k--)
            {
                if(right - k + 1 > 10)
                {
                    break;
                }

                string str = word.Substring(k, right - k + 1);
                
                if(hs.Contains(str))
                {
                    left = k + 1;
                    break;
                }
            }            

            ans = Math.Max(ans, right - left + 1);
        }

        return ans;
    }    
}
```