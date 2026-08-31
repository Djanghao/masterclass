# Beginner friendly [Java/JavaScript/Python] Solution

**Author:** HimanshuBhoir
**Votes:** 5
**Link:** [https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/2590789/](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/solutions/2590789/)

---

**Time Complexity : O(n)**
**Python**
```
class Solution(object):
    def longestContinuousSubstring(self, s):
        max_len = 1
        for i in range(1, len(s)):
            count = 1
            while i < len(s) and ord(s[i-1]) + 1 == ord(s[i]):
                count += 1
                i += 1
            max_len = max(max_len, count)
        return max_len
```
**JavaScript**
```
var longestContinuousSubstring = function(s) {
    let max_len = 1
    for(let i=1; i<s.length; i++){
        let count = 1
        while(i < s.length && s.charCodeAt(i-1) + 1 == s.charCodeAt(i)){
            count++
            i++;
        }
        max_len = Math.max(max_len, count)
    }     
    return max_len
};
```
**Java**
```
class Solution {
    public int longestContinuousSubstring(String s) {
        int max_len = 1;
        for(int i=1; i<s.length(); i++){
            int count = 1;
            while(i < s.length() && s.charAt(i-1) + 1 == s.charAt(i)){
                count++;
                i++;
            }
            max_len = Math.max(max_len, count);
        }     
        return max_len;
    }
}
```