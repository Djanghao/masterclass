# Easy Solution O(n) approach

**Author:** venkatachandukonduru
**Votes:** 138
**Link:** [https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/1238665/](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/1238665/)

---

Here we are using sliding window technique with a window size of 3
With every iteration new element is pushed into the window and the last element of window is pushed out.
With in every window we check if there is any repetition of elements using if loop
```
class Solution {
public:
    int countGoodSubstrings(string s) {
        if(s.size()<3)return 0;
        char a=s[0],b=s[1],c=s[2];
        int res=0;
        for(int i=3;i<=s.size()-1;i++)
        {
            if(a!=b and b!=c and c!=a)res++;
            a=b;
            b=c;
            c=s[i];
        }
        if(a!=b and b!=c and c!=a)res++;
        return res;
    }
};
```
**Do upvote and keep supporting..!**