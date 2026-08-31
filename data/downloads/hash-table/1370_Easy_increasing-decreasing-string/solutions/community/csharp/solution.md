# Simple c# charcount solution 97% runtime, 100% memory

**Author:** avivo121
**Votes:** 1
**Link:** [https://leetcode.com/problems/increasing-decreasing-string/solutions/561716/](https://leetcode.com/problems/increasing-decreasing-string/solutions/561716/)

---

```
public string SortString(string s) {
        int[] counters = new int[26];
        var sb = new StringBuilder();
		
        foreach (var cur in s) {
            counters[cur - 'a'] ++;
        }
		
        while (sb.Length < s.Length) {         
            for (int i = 0; i < counters.Length; i++) {
                if (counters[i] > 0) {
                    sb.Append((char)('a' + i));
                    counters[i]--;
                }
            }
            for (int i = counters.Length - 1; i >= 0; i--) {
                if (counters[i] > 0) {
                    sb.Append((char)('a' + i));
                    counters[i]--;
                }
            }
        }
        
        return sb.ToString();
    }