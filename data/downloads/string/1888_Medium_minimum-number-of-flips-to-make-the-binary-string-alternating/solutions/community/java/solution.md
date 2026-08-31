# Java Simple and easy using sliding window solution solution, clean code with comments

**Author:** satyaDcoder
**Votes:** 29
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/1261056/](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/solutions/1261056/)

---

**PLEASE UPVOTE IF YOU LIKE THIS SOLUTION**


```
class Solution {
    public int minFlips(String s) {
        /*
        * Sliding Window Approach
        */
        
        
        int n = s.length();
        
        int mininumFlip = Integer.MAX_VALUE;
        
        int misMatchCount = 0;
        for(int i = 0; i < (2 * n); i++){
            
            int r = i % n;
            
            //add mis watch count in current window
            if((s.charAt(r) - '0') != (i % 2 == 0 ? 1 : 0)) misMatchCount++;
            
            //remove mismatch count which are not relvent for current window
            if(i >= n && (s.charAt(r) - '0') != (r % 2 == 0 ? 1 : 0)) misMatchCount--;
            
            
            //misMatchCount : when valid binary string start from 1
            //n - misMatchCount : when valid binary string start from 0
            if(i >= n - 1) mininumFlip = Math.min(mininumFlip, Math.min(misMatchCount, n - misMatchCount));
        }
        
        return mininumFlip;
    }
}

```