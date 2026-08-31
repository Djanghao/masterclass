# 🎯 Solving "Shortest String That Contains Three Strings"

**Author:** phistellar
**Votes:** 6
**Link:** [https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3840469/](https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3840469/)

---

## Inspired by vanAmsen's Video Guide

A big shout-out to vanAmsen for their awesome coding video tutorial [here](https://youtu.be/3DKi5rzmq1o) that inspired this solution. 

# \uD83E\uDDE0 Intuition
Given three strings, we need to find the shortest string that contains all three as substrings. If there are multiple such strings, we should return the lexicographically smallest one. Our first instinct might be to look for overlaps between the strings and merge them accordingly.

# \uD83D\uDE80 Approach
Our approach involves two main steps:

1. **Merging Two Strings**: We create a helper function `merge(s1, s2)` that takes two strings as input and returns a new string that is the result of merging `s1` and `s2`. If one string is a substring of the other, we return the larger string. If not, we look for the longest overlap between the end of `s1` and the start of `s2` and merge the two strings at that point.

2. **Finding the Shortest String**: We generate all possible combinations of the three strings using the `merge` function and store the shortest combination. If there are multiple combinations with the same length, we store the lexicographically smallest one.

# \u23F1\uFE0F Complexity Analysis
- The time complexity of this approach is \\(O(n^2)\\), where \\(n\\) is the length of the longest string. This is because, in the worst case, we have to check for overlap between two strings character by character.
- The space complexity is \\(O(n)\\), where \\(n\\) is the total length of all the strings. We need this much space to store the merged strings.

# \uD83D\uDCBB Code
```Python []
class Solution:
    def merge(self, s1: str, s2: str) -> str: 
        if s1 == s2 or s2 in s1: 
            return s1 
        if s1 in s2: 
            return s2 
        for i in range(len(s1)): 
            if s2.startswith(s1[i:]): 
                return s1[:i] + s2 
        return s1 + s2 
                                                                                                       
    def minimumString(self, a: str, b: str, c: str) -> str:
        strings = [a, b, c] 
        results = [] 
        for p in permutations(strings): 
            merged = self.merge(self.merge(p[0], p[1]), p[2]) 
            results.append(merged) 
        return min(results, key=lambda s: (len(s), s)) 
```
``` Java []
class Solution {
    private String merge(String s1, String s2) {
        if (s1.contains(s2)) return s1;
        for (int i = 0; i < s1.length(); i++) {
            if (s2.startsWith(s1.substring(i))) return s1.substring(0, i) + s2;
        }
        return s1 + s2;
    }

    public String minimumString(String a, String b, String c) {
        String res = "";
        int l = Integer.MAX_VALUE;
        for (String s : new String[]{
            merge(merge(a, b), c),
            merge(merge(b, a), c),
            merge(merge(c, b), a),
            merge(merge(b, c), a),
            merge(merge(a, c), b),
            merge(merge(c, a), b)
        }) {
            if (s.length() < l) {
                res = s;
                l = s.length();
            } else if (s.length() == l) {
                res = res.compareTo(s) < 0 ? res : s;
            }
        }
        return res;
    }
}
```
``` C++ []
class Solution {
public:
    string minimumString(string a, string b, string c) {
        auto merge = [](string s1, string s2) {
            if (s1.find(s2) != string::npos) return s1;
            for (int i = 0; i < s1.size(); i++) {
                if (s2.rfind(s1.substr(i), 0) == 0) return s1.substr(0, i) + s2;
            }
            return s1 + s2;
        };

        string res = "";
        int l = INT_MAX;
        for (string s : vector<string>{
            merge(merge(a, b), c),
            merge(merge(b, a), c),
            merge(merge(c, b), a),
            merge(merge(b, c), a),
            merge(merge(a, c), b),
            merge(merge(c, a), b)
        }) {
            if (s.size() < l) {
                res = s;
                l = s.size();
            } else if (s.size() == l) {
                res = min(res, s);
            }
        }

        return res;
    }
};

```
``` C# []
public class Solution {
    public string MinimumString(string a, string b, string c) {
        string merge(string s1, string s2) {
            if (s1.Contains(s2)) return s1;
            for (int i = 0; i < s1.Length; i++) {
                if (s2.StartsWith(s1.Substring(i))) return s1.Substring(0, i) + s2;
            }
            return s1 + s2;
        }

        string res = "";
        int l = int.MaxValue;
        foreach (string s in new string[] {
            merge(merge(a, b), c),
            merge(merge(b, a), c),
            merge(merge(c, b), a),
            merge(merge(b, c), a),
            merge(merge(a, c), b),
            merge(merge(c, a), b)
        }) {
            if (s.Length < l) {
                res = s;
                l = s.Length;
            } else if (s.Length == l) {
                res = string.CompareOrdinal(res, s) < 0 ? res : s;
            }
        }

        return res;
    }
}
```
``` JavaScript []

```