# C++ || Easiest Solution || Substring

**Author:** tarun_sahnan
**Votes:** 33
**Link:** [https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/1802497/](https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/1802497/)

---

```
// The easiest solution to this problem is:
// Step 1: Calculate length of "pref"
// Step 2: find substring of "words" from 0 to length of "pref"
// if both match increment count by 1;



class Solution {
public:
    int prefixCount(vector<string>& words, string pref) {
        
        int count=0;
        int preflen=pref.size();        //step 1
        
        for(auto i:words){
            if(i.substr(0,preflen) == pref)     //step 2
                count++;                        //if both matches then increment count by 1
            
        }
        return count;   //return count
        
    }
};
```
Please Upvote, if you liked my solution.
Dont forget to visit my repo: https://github.com/tarunsahnan/LeetCode-Solutions