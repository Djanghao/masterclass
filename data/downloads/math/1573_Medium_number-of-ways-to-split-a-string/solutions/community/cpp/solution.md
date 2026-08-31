# [c++][easiest way][runtime beats 99.52 %]

**Author:** rajat_gupta_
**Votes:** 10
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/905967/](https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/905967/)

---

**TC: O(n)**
```
class Solution {
public:
    int numWays(string s) {
        long mod=1000000007;
        long ones=0;
        long n=s.size();
		//Count number of Ones
        for(int i=0;i<n;i++) 
            ones+=s[i]-'0';
        if(ones==0)  //When there are only zeroes
		       return (int)((((n-1)*(n-2))/2)%mod);
        if(ones%3!=0)  //Can't be grouped equally if the ones are not divisible by 3
		       return 0;
        long onethird=ones/3;  //Number of ones in each group
        ones=0;
		//Number of zeroes which lie on the borders
        long way1=0,way2=0;
        for(int i=0;i<n;i++){
            ones+=s[i]-'0';
            if(ones==onethird) way1++;
            if(ones==2*onethird) way2++;
        }
        return (int)((way1*way2)%mod);
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
