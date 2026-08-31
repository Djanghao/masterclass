# Easy greedy + DP | Video solution | Intuitive approach

**Author:** i_pranav
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-the-string-with-lcp/solutions/3204109/](https://leetcode.com/problems/find-the-string-with-lcp/solutions/3204109/)

---

# Intuition
In order to form the smallest lexicographic string we always would be starting the result with 'a'. any index $j>0$ (0 base indexing and index 0 has already been set to 'a'), would be having the value at index $i$ $(i<j)$ if $lcp[i][j]>0$, else assign it the minimum unutilized character. 


Video solution: https://youtu.be/BotxOAPrYnY

# Approach
<!-- Describe your approach to solving the problem. -->
1. assign character 'a' to the 0th index, let's call the string as res 
2. run loop for $i=1$ to size-1
3. check for the leftmost index j $(j<i)$ such that $lcp[i][j]>0$ if such an index exist then assign $res[i]=res[j]$
4. If such an index is not found then assign minimum unused character to $res[i]$
5. In order to verify if the string is valid, construct a longest similar suffix dp array.
6. If the dp array is exactly equal to the lcp then answer constructed is valid else return empty string (for invalid answer)
# Complexity
- Time complexity:
 $$O(n^2)$$ 

- Space complexity:
 $$O(n^2)$$ 
# Code
```
class Solution {
public:
    string findTheString(vector<vector<int>>& lcp) {
        int n=lcp.size();
        string res(n,'a');
        res[0]='a';     
        char mn='b';
        for(int i=1;i<n;i++)
        {
            bool set=false;
            for(int j=0;j<i;j++){
                if(lcp[i][j]!=0){
                    set=true;
                    res[i]=res[j];
                    break;
                }
            }
            if(!set)    res[i]=mn++;
        }
        for(int i=0;i<n;i++)    if(res[i]>'z')  return "";
        vector<vector<int>> dp(n,vector<int>(n,0));     // suffix count

        for(int i=n-1;i>=0;i--)
            for(int j=n-1;j>=0;j--)
                if(res[i]==res[j])  dp[i][j]=1+((i<n-1 && j<n-1)?dp[i+1][j+1]:0);
        
        for(int i=0;i<n;i++)        // now my 2 arrays should be equal
            for(int j=0;j<n;j++)
                if(dp[i][j]!=lcp[i][j]) return "";
        
        
        return res;
    }
};
```