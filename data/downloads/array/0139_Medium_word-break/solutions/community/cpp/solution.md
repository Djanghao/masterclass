# C++ Dynamic Programming simple and fast solution (4ms) with optimization

**Author:** paul7
**Votes:** 560
**Link:** [https://leetcode.com/problems/word-break/solutions/43814/](https://leetcode.com/problems/word-break/solutions/43814/)

---

We use a boolean vector dp[]. dp[***i***] is set to true if a valid word (word sequence) ends there. The optimization is to look from current position ***i*** back and only substring and do dictionary look up in case the preceding position ***j*** with *dp[**j**] == true* is found.

    bool wordBreak(string s, unordered_set<string> &dict) {
            if(dict.size()==0) return false;
            
            vector<bool> dp(s.size()+1,false);
            dp[0]=true;
            
            for(int i=1;i<=s.size();i++)
            {
                for(int j=i-1;j>=0;j--)
                {
                    if(dp[j])
                    {
                        string word = s.substr(j,i-j);
                        if(dict.find(word)!= dict.end())
                        {
                            dp[i]=true;
                            break; //next i
                        }
                    }
                }
            }
            
            return dp[s.size()];
        }