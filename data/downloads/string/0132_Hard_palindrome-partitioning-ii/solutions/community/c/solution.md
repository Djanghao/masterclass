# MCM Pattern (In Aditya Verma Format) with some Optimizations | All TC Passed | Memoization | 1-D DP

**Author:** naman14310
**Votes:** 141
**Link:** [https://leetcode.com/problems/palindrome-partitioning-ii/solutions/1364206/](https://leetcode.com/problems/palindrome-partitioning-ii/solutions/1364206/)

---

*"I tried to keep it as simple as possible! Your suggestions are most welcomed"*


```
    bool isPalindrome (string & s, int i, int j){
        while(i<j){
            if(s[i]!=s[j]) return false;
            i++; j--;
        }
        return true;
    }
    

    int solve (string & s, int i, int j, vector<int> & dp){    
        
        if(i>=j or isPalindrome(s, i, j)) return 0;
        
        if(dp[i]!=-1) return dp[i];
        
        int ans = INT_MAX;
        
        for(int k=i; k<j; k++){
            
            /* 
                Instead of writing below standard line
                We will recurse for only right part
                Only when left part turns out to be palindrome
				
				Reason : If left substring becomes palindrome then there is no need to partition it further 
				(which in turn reduces the number of recursive calls)
                
                int temp =  solve (s, i, k, dp, palindrome) + solve (s, k+1, j, dp, palindrome) + 1;
                
            */
            
            if(isPalindrome(s, i, k)){                         
                int temp = solve (s, k+1, j, dp) + 1;
                ans = min (ans, temp);
            }
        }
        
        return dp[i] = ans;
    }
    
    int minCut(string s) {
        int n = s.length();
        
        /* I've used 1D DP here becoz only one parameter is changing i.e. `i` */
        
        vector<int> dp (n+1, -1);   
            
        return solve (s, 0, n-1, dp);
    }
```