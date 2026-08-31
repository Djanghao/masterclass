# JAVA || 100% faster code || Easy Solution with Explanation

**Author:** shivrastogi
**Votes:** 175
**Link:** [https://leetcode.com/problems/first-unique-character-in-a-string/solutions/2431836/](https://leetcode.com/problems/first-unique-character-in-a-string/solutions/2431836/)

---

	PLEASE UPVOTE IF YOU LIKE.
```
class Solution {
     public int firstUniqChar(String s) {
        // Stores lowest index / first index
        int ans = Integer.MAX_VALUE;
        // Iterate from a to z which is 26 which makes it constant
        for(char c='a'; c<='z';c++){
            // indexOf will return first index of alphabet and lastIndexOf will return last index
            // if both are equal then it has occured only once.
            // through this we will get all index's which are occured once
            // but our answer is lowest index
            int index = s.indexOf(c);
            if(index!=-1&&index==s.lastIndexOf(c)){
                ans = Math.min(ans,index);
            }
        }

        // If ans remain's Integer.MAX_VALUE then their is no unique character
        return ans==Integer.MAX_VALUE?-1:ans;
    }   
}
```