# ✅ C++ simple code | Recursive + Memoization | Top-Down approach | Runtime : 4ms

**Author:** HustlerNitin
**Votes:** 17
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iii/solutions/1701833/](https://leetcode.com/problems/palindrome-partitioning-iii/solutions/1701833/)

---

**if you like my approach don't forget to hit upvote button ! : )**
```
class Solution {
public:
    /*
    
        There are a lot of these types of questions in DP Hard. If you learn to recognize the basic structure, you can come up with an answer fairly quickly.
        Couple words that give away the DP nature of the problem

        1.Palindrome
        2.Minimum
        
        If we break the question apart we get:

        1.How many changes do I need to perform to make S.substring(i, j) to a palindrome.
        2.How many ways can I split the string from i to j into groups and what are their costs.
        3.What is the minimum combination of these groups.
    
        First thing you should make is a map that contains all the cost from i to j
        This is faily simple given the nature of substituion.
    */
    int pal[101][101];
    int dp[101][101];
    int palindromePartition(string s, int k) {
        
        
        // STEP-1
        // Leetcode problem -> https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
        // For each substring calculate the minimum number of steps to make it 
        // palindrome and store it in a table.
        memset(pal,0,sizeof(pal));
        int n=s.length();
        // generate all substrings
        for(int g=0;g<n;g++)
        {
            for(int i=0,j=g; j<n; i++,j++)
            {
                
                if(g==0){
                    pal[i][j]=0;// 0 steps required to make it palindrome
                }
                else if(g==1){
                    if(s[i] == s[j])
                        pal[i][j]=0;
                    else
                        pal[i][j]=1;
                }
                else
                {
                    if(s[i] == s[j]){
                        pal[i][j] = pal[i+1][j-1];
                    }
                    else{
                        //1 step extra required to make string palindrome
                        // dry run on "leetcode" string with 'gap=3' 
                        
                        // instead of this --> pal[i][j] = min(pal[i+1][j], pal[i][j-1]) + 1; 
                        pal[i][j] = pal[i+1][j-1] + 1; 
                    }
                }
            }
        }
        
        // for(int i=0;i<n;i++){
        //     for(int j=0;j<n;j++){
        //         cout<<pal[i][j]<<"  ";
        //     }
        //     cout<<endl;
        // }
        
        memset(dp,-1,sizeof(dp));
        return findMinCost(0, k, n); // find minimum cost by partition
        
    }
    
    // similar to MCM (matrix chain multiplication)
    int findMinCost(int index, int k, int n)
    {
        
        if(index==n){
				return n; // max value  -- isse jyada insertion nahi hoga = min steps required to 
                            // make string palindrome
		}
        
        if(k==1){  // if single non-empty substring, then minimum no. of steps required to make it palindrome
            return pal[index][n-1];
        }
        
        // memoization
        if(dp[index][k]!=-1)
            return dp[index][k];
        
        int ans=INT_MAX;
        for(int i=index;i<n;i++){
            
            ans = min(ans, pal[index][i] + findMinCost(i+1, k-1, n));
        }
        
        dp[index][k]=ans;
        return ans;
    }
};
```