# [C++] DP+map | using LPS | with explanation

**Author:** divyanshu1
**Votes:** 33
**Link:** [https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/solutions/1212994/](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/solutions/1212994/)

---

* Run LPS(longest palindromic subsequence) on combined string (word1 + word2)
* Use dp array for memoization, this dp array will give you the length of longest palindromic subsequence between any two indexes and will also be used later.
 (for eg: dp[i][j] will give you the length of longest palindromic subsequence between i ans j (both inclusive) )
* Now, we need to have atleast one letter from each word. So, for each letter from word1 we will find its last occurence in word2 and calculate the LPS between them using dp array.
* We can use map to store indexes of each letter to make program faster.


**CODE**
```
int dp[2002][2002];
class Solution {
public:
    int lcs(string &s, int i, int j){
        if(i>j){
            return dp[i][j]=0;
        }
        if(i==j){
            return dp[i][j]=1;
        }
        if(dp[i][j]!=-1){
            return dp[i][j];
        }
        if(s[i]==s[j]){
            return dp[i][j]=2+lcs(s, i+1, j-1);
        }
        return dp[i][j]=max(lcs(s, i+1, j), lcs(s, i, j-1));
    }
    int longestPalindrome(string &s1, string &s2){
        string s = s1+s2;
        int n=s.size();
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                dp[i][j]=-1;
            }
        }
        lcs(s,0,n-1);
        map<char, int> mp;
        for(int i=0; i<s1.size(); i++){
            if(mp.count(s1[i])==0){
                mp[s1[i]]=i;
            }
        }
        int ans=0;
        map<char, bool> m;
        reverse(s2.begin(), s2.end());
        for(int i=0; i<s2.size(); i++){
            if(mp.count(s2[i])!=0 && m[s2[i]]==false){
                m[s2[i]]=true;
                int id1=mp[s2[i]]+1;
                int id2=n-i-2;
                if(id1>=0 && id2>=0){
                    ans=max(ans, 2+dp[id1][id2]);
                }
            }
        }
        return ans;
    }
};
```
![image](./images/0.png)

*UPVOTE!!*  \uD83D\uDC4D