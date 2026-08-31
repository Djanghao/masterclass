# Easy recursion +DP solution  with very intutive idea

**Author:** aps_3999
**Votes:** 17
**Link:** [https://leetcode.com/problems/count-the-number-of-inversions/solutions/5356018/](https://leetcode.com/problems/count-the-number-of-inversions/solutions/5356018/)

---

# Intuition
you need to observe that if you take prefix array of count inversion then it will be unique for unique permutation.

example-> take this permutation
       3 2 1 4 5 
its prefix count inversion will be
       0 1 3 3 3
so the observation is that for a prefix count inversion array you will get 
unique permutation
if you have given 0 1 3 3 3
then permutation must be 3 2 1 4 5
so we can now count the no of possible prefix count inversion array to solve this problem.




# Approach
Now to calculate this we will use recursion .
we iterate with i=1 to i=n . for i=0 prefix[0]=0;
one more thing to observe 
range of prefix[i]=prefix[i-1] to prefix[i-1]+i;
prefix[i]=prefix[i-1] when prefix[i] is max no till i;
prefix[i]=prefix[i-1]+i when prefix[i] is minimum element till i;

we will have two states which will change in recursion one is i (1 to n)
and another is previous elemnt of prefix array that we denote as cnt.

we will also see that it fulfills the requirement otherwise we return 0;
we now calculate is using recursion then we create dp to optimise it .


# Complexity
- Time complexity:
O(n*cnt)


# Code
```
class Solution {
public:
    int dp[300][401];int mod=1e9+7;
   int  solve(int i,int n,map<int,int>&m,int cnt)
    {
        if(i==n)
            return 1;
        if(cnt>400)
            return 0;
       if(dp[i][cnt]!=-1)
           return dp[i][cnt];
       
      
        int sum=0;
        for(int j=cnt;j<=cnt+i;j++)
        {
            
       
        
        
        if(m.find(i)!=m.end())
        {
            if(j!=m[i])
                continue;
        }
            
            
         sum= (sum%mod+  solve(i+1,n,m,j)%mod)%mod;
            
            
        } 
        return dp[i][cnt]=sum;
            
        
    }
    
    
    
    int numberOfPermutations(int n, vector<vector<int>>& requirements) {
        map<int,int>m;
        memset(dp,-1,sizeof(dp));
        for(int i=0;i<requirements.size();i++)
        {
          m[requirements[i][0]]=requirements[i][1];
        }
        
        if(m.find(0)!=m.end() && m[0]!=0)
            return 0;
    
        
        
       return  solve(1,n,m,0);
    }
};
```