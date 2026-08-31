# Beginner friendly [Java/JavaScript/Python] Solution

**Author:** HimanshuBhoir
**Votes:** 14
**Link:** [https://leetcode.com/problems/count-sorted-vowel-strings/solutions/1790576/](https://leetcode.com/problems/count-sorted-vowel-strings/solutions/1790576/)

---

**Time Complexity :  O(n)**
**Java**
```
class Solution {
    public int countVowelStrings(int n) {
        int a=1, e=1, i=1, o=1, u=1;
        while(n-- > 1){
            a = a + e + i + o + u;
            e = e + i + o + u;
            i = i + o + u;
            o = o + u;
            u = u;
        }
        return a + e + i + o + u;
    }
}
```
**JavaScript**
```
var countVowelStrings = function(n) {
    let a=1, e=1, i=1, o=1, u=1
    while(n-- > 1){
        a = a + e + i + o + u
        e = e + i + o + u
        i = i + o + u
        o = o + u
        u = u
    }
    return a + e + i + o + u
};
```
**Python**
```
class Solution(object):
    def countVowelStrings(self, n):
        a,e,i,o,u = 1,1,1,1,1
        for x in range(n-1):
            a = a + e + i + o + u
            e = e + i + o + u
            i = i + o + u
            o = o + u
            u = u
        return a + e + i + o + u
```