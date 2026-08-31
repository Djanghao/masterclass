# Very Easy || 100% || Fully Explained || Java, C++, Python, Javascript, Python3 (Using HashMap)

**Author:** PratikSen07
**Votes:** 384
**Link:** [https://leetcode.com/problems/isomorphic-strings/solutions/2472118/](https://leetcode.com/problems/isomorphic-strings/solutions/2472118/)

---

**Two strings s and t are isomorphic if the characters in s can be replaced to get t.**
-----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
# **Java Solution:**
```
// Runtime: 3 ms, faster than 94.17% of Java online submissions for Isomorphic Strings.
// Memory Usage: 42.1 MB, less than 95.61% of Java online submissions for Isomorphic Strings.
// Time Complexity : O(n)
class Solution {
    public boolean isIsomorphic(String s, String t) {
        // Base case: for different length of two strings...
        if(s.length() != t.length())
            return false;
        // Create two maps for s & t strings...
        int[] map1 = new int[256];
        int[] map2 = new int[256];
        // Traverse all elements through the loop...
        for(int idx = 0; idx < s.length(); idx++){
            // Compare the maps, if not equal, return false...
            if(map1[s.charAt(idx)] != map2[t.charAt(idx)])
                return false;
            // Insert each character if string s and t into seperate map...
            map1[s.charAt(idx)] = idx + 1;
            map2[t.charAt(idx)] = idx + 1;
        }
        return true;    // Otherwise return true...
    }
}
```

# **C++ Solution:**
```
// Time Complexity : O(n)
// Space Complexity : O(1)
class Solution {
public:
    bool isIsomorphic(string s, string t) {
        // Use hashmaps to save the replacement for every character in the first string...
        unordered_map <char , char> rep;
        unordered_map <char , bool> used;
        // Traverse all elements through the loop...
        for(int idx = 0 ; idx < s.length() ; idx++) {
            // If rep contains s[idx] as a key...
            if(rep.count(s[idx])) {
                // Check if the rep is same as the character in the other string...
                // If not, the strings can\u2019t be isomorphic. So, return false...
                if(rep[s[idx]] != t[idx])
                    return false;
            }
            // If no replacement found for first character, check if the second character has been used as the replacement for any other character in the first string...
            else {
                if(used[t[idx]])
                    return false;
                // If there exists no character whose replacement is the second character...
                // Assign the second character as the replacement of the first character.
                rep[s[idx]] = t[idx];
                used[t[idx]] = true;
            }
        }
        // Otherwise, the strings are not isomorphic.
        return true;
    }
};
```

# **Python Solution:**
```
# Time Complexity : O(n)
class Solution(object):
    def isIsomorphic(self, s, t):
        map1 = []
        map2 = []
        for idx in s:
            map1.append(s.index(idx))
        for idx in t:
            map2.append(t.index(idx))
        if map1 == map2:
            return True
        return False
```
        
# **JavaScript Solution:**
```
// Runtime: 83 ms, faster than 88.18% of JavaScript online submissions for Isomorphic Strings.
// Time Complexity : O(n)
var isIsomorphic = function(s, t) {
    // Base case: for different length of two strings...
    if(s.length != t.length)
        return false;
    // Create two maps for s & t strings...
    const map1 = [256];
    const map2 = [256];
    // Traverse all elements through the loop...
    for(let idx = 0; idx < s.length; idx++){
        // Compare the maps, if not equal, return false...
        if(map1[s.charAt(idx)] != map2[t.charAt(idx)])
            return false;
        // Insert each character if string s and t into seperate map...
        map1[s.charAt(idx)] = idx + 1;
        map2[t.charAt(idx)] = idx + 1;
    }
    return true;    // Otherwise return true...
};
```

# **Python3 Solution:**
```
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        return [*map(s.index, s)] == [*map(t.index, t)]
```
**I am working hard for you guys...
Please upvote if you found any help with this code...**