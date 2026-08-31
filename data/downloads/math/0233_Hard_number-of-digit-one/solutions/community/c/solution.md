# Easy to understand Digit DP solution(C++)

**Author:** rashmi_j
**Votes:** 36
**Link:** [https://leetcode.com/problems/number-of-digit-one/solutions/908032/](https://leetcode.com/problems/number-of-digit-one/solutions/908032/)

---

A digit DP solution based on the blog :- https://codeforces.com/blog/entry/53960
```
class Solution {
    vector<int> nums;
    int s;
    int dp[10][10][2];
    //dp[pos][count][flag]
    //pos= current position from left side
    //count= count of 1s so far
    //flag=the number we are building has already become smaller than the given number(0:NO ,1:YES)
    
public:
    int digitdp(int pos,int count,int flag)
    {
        if(pos==s)
        {
            return count;
        }
        if(dp[pos][count][flag]!=-1)
        {
            return dp[pos][count][flag];
        }
        //if the number has already become smaller than the given number we can insert any digit we want
        int limit= flag==0?nums[pos]:9;
        int res=0;
        for(int i=0;i<=limit;i++)
        {
            //if the digit is 1 we increase the count by 1
            int ncount= i==1 ?count+1:count;
            //the digit at the ith position is smaller than the digit at the ith position of the number the number has already become smaller so we can set the flag as 1
            int nflag=flag || i!=limit;
            res+=digitdp(pos+1,ncount,nflag);
        }
        return dp[pos][count][flag]=res;
    }
    int countDigitOne(int n) {
        while(n>0)
        {
            nums.push_back(n%10);
            n=n/10;
        }
        memset(dp,-1,sizeof dp);
        reverse(nums.begin(),nums.end());
        s=nums.size();
        return digitdp(0,0,0);
    }
};
```

