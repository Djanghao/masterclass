# [2 ways][faster than 100.00%][c++]

**Author:** rajat_gupta_
**Votes:** 9
**Link:** [https://leetcode.com/problems/number-of-segments-in-a-string/solutions/843062/](https://leetcode.com/problems/number-of-segments-in-a-string/solutions/843062/)

---

```
//1.
class Solution {
public:
    int countSegments(string s) {
        if(s=="") return 0;
        int count=0;
        for(int i=0;i<s.length();i++)
            if((s[i] != ' ') && ((s[i+1] == ' ')||(s[i+1]=='\\0')))  count++;
        return count;
    }
};
//2.
class Solution {
public:
    int countSegments(string s) {
        int count=0;
        stringstream sa(s);
        string word;
        while(sa>>word) count++;
        return count;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
