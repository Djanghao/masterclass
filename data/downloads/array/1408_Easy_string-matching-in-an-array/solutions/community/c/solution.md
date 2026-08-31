# [runtime beats 98.17 % ][easy understanding]

**Author:** rajat_gupta_
**Votes:** 11
**Link:** [https://leetcode.com/problems/string-matching-in-an-array/solutions/842062/](https://leetcode.com/problems/string-matching-in-an-array/solutions/842062/)

---

```
class Solution {
public:
    vector<string> stringMatching(vector<string>& words) {
        vector<string> str;
        for(int i=0;i<words.size();i++){
            for(int j=0;j<words.size();j++){
               if(i!=j){
                   size_t found=words[j].find(words[i]);
                   if(found!=string::npos){
                       str.push_back(words[i]);
                       break;
                   }
               }
            }
        }
        return str;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
