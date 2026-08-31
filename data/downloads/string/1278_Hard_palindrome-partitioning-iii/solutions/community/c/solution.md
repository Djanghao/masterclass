# C++ 4ms Short Top-Down DP with Explanation

**Author:** dedoced
**Votes:** 24
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iii/solutions/1346510/](https://leetcode.com/problems/palindrome-partitioning-iii/solutions/1346510/)

---

This is a variation of well known problem of Dynamic Programming viz. MCM (Matrix Chain Multiplication). 

Lets analyze the brute-force approach first. This problem can be divided into 2 sections:
1. Partitioning the given string ```s``` into all possible ```k``` different substrings.
2. Finding the lowest cost of partitioning among all possible substrings partitions.

**Lets go on to understand how to accomplish it**
* Our goal is to write logic to partition a single string to 2 different substrings, and then call the function recursively to get ```k``` partitions.
* **Inductive Step:** So, for a string ```S[i...n-1]```, we can split it into ```[i..part]``` and ```[part+1, n-1]```.
* For, each recursive step, we add the cost ```C[i...part]``` and pass on the control to next recursive calls to add up cost of the 2nd part till it gets partitioned into ```k``` substrings overall.
* **Base Case:** When the no. of substrings adds up to ```k```, then we return the cost. Otherwise, if the iterator reaches the end with less than ```k``` partitions, its not possible hence return ```INFINITY``` (in this case 105, since the max. value of k is 99 because ```size(String) <= 100```). 

* Since calculating Cost would take O(n) time everytime, we need to decrease the amortized time complexity by memoizing the Cost using ```C[i][j]```, where ```C[i][j]``` signifies the cost of making the substring ```S[i...j]``` palindrome. 


```
class Solution {
public:
    int dp[101][101], C[101][101];
    const int inf = 1e2+5;
    
    int cost(string& s, int i, int j){
        if(i >= j) return 0;
        if(C[i][j] != -1) return C[i][j];
        return C[i][j] = (s[i] != s[j]) + cost(s, i+1, j-1);
    }
    
    int partition(string& s, int i, int k){
        if(k == 0) return cost(s, i, s.size()-1);
        if(i == s.size()) return inf;
        
        if(dp[i][k] != -1) return dp[i][k];
        
        int ans = inf;
        for(int part=i; part<s.size()-1; part++){
            ans = min(ans, cost(s, i, part) + partition(s, part+1, k-1));
        }
        
        return dp[i][k] = ans;
    }
    
    int palindromePartition(string s, int k) {
        memset(C, -1, sizeof(C));
        memset(dp, -1, sizeof(dp));
        
        return partition(s, 0, k-1);
    }
};
```

Please upvote it if you liked it !!! This will encourage me to write more posts. :)