# [Java] simple O(n) %100

**Author:** zeldox
**Votes:** 27
**Link:** [https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/1429825/](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/1429825/)

---

if you like it pls upvote

Java

```
class Solution {
    public int countGoodSubstrings(String s) {
        int res = 0;
        
        for(int i = 2 ; i< s.length();i++)
            if(s.charAt(i) != s.charAt(i-1) && s.charAt(i) != s.charAt(i-2)  && s.charAt(i-1) != s.charAt(i-2))
                res++;
        return res;
    }
}
```