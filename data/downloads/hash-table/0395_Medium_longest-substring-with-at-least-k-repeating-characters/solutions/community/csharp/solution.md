# HashTable || Recursive || nlogn

**Author:** hilmicihan
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/6014115/](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/solutions/6014115/)

---

# Intuition
To find the longest substring where each character appears at least `k` times, the idea is to split the string at characters with frequency less than `k`, as these characters cannot be part of any valid substring.

# Approach
1. Build a frequency map of characters in `s`.
2. If all characters meet the frequency requirement, the entire string is valid, so return its length.
3. Otherwise, split `s` at each character with frequency `< k`, and recursively find the longest valid substring in each segment.
4. Return the maximum length of valid substrings found.

# Complexity
- **Time complexity**: \\( O(n \\log n) \\) due to recursive splitting of the string.
- **Space complexity**: \\( O(n) \\) for storing the frequency map and recursive calls.

# Code
```csharp
public class Solution {
    public int LongestSubstring(string s, int k) {
        if(s.Length < k) return 0;
        var freqMap = new Dictionary<char,int>();
        foreach(char c in s)
        {
            if(freqMap.ContainsKey(c))
                freqMap[c]++;
            else
                freqMap[c] = 1;
        }
        foreach(var entry in freqMap)
        {
            if(entry.Value < k)
            {
                char c = entry.Key;
                int maxLength = 0;
                foreach(string subs in s.Split(c))
                {
                    maxLength = Math.Max(maxLength, LongestSubstring(subs, k));
                }
                return maxLength;
            }
        }
        return s.Length;
    }
}
```