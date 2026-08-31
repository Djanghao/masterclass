# C++ Short Code + BEGINNER FRIENDLY + HIGHLY READABLE

**Author:** SM3210
**Votes:** 16
**Link:** [https://leetcode.com/problems/largest-merge-of-two-strings/solutions/1202638/](https://leetcode.com/problems/largest-merge-of-two-strings/solutions/1202638/)

---

**PLZ UPVOTE IF YOU LIKED THIS**

```
class Solution {
public:
    string largestMerge(string word1, string word2) {
        
        string ans="";
        
        while(word1.size()!=0 && word2.size()!=0){
            if(word1>=word2) {ans+=word1[0];word1=word1.substr(1);}
            
            else             {ans+=word2[0];word2=word2.substr(1);}
        }
        
        if(word1.size()!=0)ans=ans+word1;
        if(word2.size()!=0)ans=ans+word2;
        
        return ans;
    }
};