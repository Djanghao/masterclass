# Beginner friendly [Java/JavaScript/Python] Solution

**Author:** HimanshuBhoir
**Votes:** 6
**Link:** [https://leetcode.com/problems/check-distances-between-same-letters/solutions/2555730/](https://leetcode.com/problems/check-distances-between-same-letters/solutions/2555730/)

---

**Time Complexity : O(n)**
**Java**
```
class Solution {
    public boolean checkDistances(String s, int[] distance) {
        int[] arr = new int[26];
        for(int i=0; i<s.length(); i++){
            if(arr[s.charAt(i) - 'a'] != 0 && i - arr[s.charAt(i) - 'a'] != distance[s.charAt(i) - 'a'])    
                return false;
            arr[s.charAt(i) - 'a'] = i+1;
        }
        return true;
    }
}
```
**JavaScript**
```
var checkDistances = function(s, distance) {
    let arr = Array(26).fill(0)
    for(let i=0; i<s.length; i++){
        if(arr[s.charCodeAt(i) - 97] != 0 && i - arr[s.charCodeAt(i) - 97] != distance[s.charCodeAt(i) - 97])    
            return false
        arr[s.charCodeAt(i) - 97] = i+1
    }
    return true
};
```
**Python**
```
class Solution(object):
    def checkDistances(self, s, distance):
        arr = [0]*26
        for i in range(len(s)):
            if arr[ord(s[i]) - 97] != 0 and i - arr[ord(s[i]) - 97] != distance[ord(s[i]) - 97]:
                return False
            arr[ord(s[i]) - 97] = i+1
        return True
```