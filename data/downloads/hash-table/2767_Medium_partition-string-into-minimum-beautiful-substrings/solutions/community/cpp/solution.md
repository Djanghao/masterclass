# Recursive solution like palindromic partitioning(with dp optional)|Full explanation

**Author:** priyanshulomesh
**Votes:** 14
**Link:** [https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3741493/](https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3741493/)

---

# Intuition 
The initial idea will be to make partitions to generate substring and check if the substring generated out of the partition is satisfying the criteria or not. Partitioning means we would end up generating every substring and checking for criteria (isBeautiful) at every step. Since this is a repetitive task being done again and again, at this point we should think of recursion.

# Approach
- The recursion continues until the entire string is exhausted. 
- The for loop is running from particular index to end of string to check for partition at every index.
- If the substring from particular index to k is beautiful then 1 is added i.e 1 partition has been made and recursive call is made for k+1.
- We are maintaining the mini variable to store the minimum partition till end of recursion.
- The isBeautiful function is first checking for leading zeros and then convert the string into decimal and check if it is power of 5 or not. 
- Used INT_MAX-1 because we are adding 1 result in INT_MAX+1 so it will overflow int.At the end if it is unable to find ans it will return -1(as ans will have value INT_MAX-1).

# Complexity
- **Time complexity:**
O(2^n)*O(k)
O(2^n) to generate all the substrings and k is the avg length of string to convert into decimal and check is it a power of 5 or not.
we can reduce it to O(n^2) using dp;

- **Space complexity:**
O(n)
for recursive stack.
for dp solution->O(n);

# Code
```
class Solution {
public:
bool isBeautiful(string &str,int start,int end)
{
    int res=0,val=1;
    //check leading zeros
    if(str[start]=='0')
    {
        return false;
    }

    //convert into decimal
    for(int i=end;i>=start;i--)
    {
        if(str[i]=='1')
        {
            res+=val;
        }
        val=val*2;
    }

    //check for power of 5
    while(res>1)
    {
        if(res%5==0)
        {
            res=res/5;
        }
        else
        {
            return 0;
        }
    }
    return 1;
}
    int solve(string& str,int index,vector<int>&dp)
    {
        if(index==str.size())
        {
            return 0;
        }
        //if(dp[index]!=-1)
        //{
        //    return dp[index];
        //}
  
        //generating substrings
        int mini=INT_MAX-1;
        for(int k=index;k<str.size();k++)
        {
            if(isBeautiful(str,index,k))
            {
                mini=min(mini,1+solve(str,k+1,dp));
            }
        }
        return mini;
        //return dp[index]=mini;
    }
    int minimumBeautifulSubstrings(string str) {
        vector<int>dp(str.size()+1,-1);
        int ans=solve(str,0,dp);
        return ans==INT_MAX-1?-1:ans;
    }
};
```