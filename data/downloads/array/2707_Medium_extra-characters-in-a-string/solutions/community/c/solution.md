# Recursion->Top Down->Bottom up || Explained || Easy to understand

**Author:** MohakHarjani
**Votes:** 144
**Link:** [https://leetcode.com/problems/extra-characters-in-a-string/solutions/3568666/](https://leetcode.com/problems/extra-characters-in-a-string/solutions/3568666/)

---

leetscode, dictionary = ["leet","code","leetcode"]

**[l + eetscode]**
#Make a cut \u201Cl\u201D and fix the string
#Then get the extra character count for \u201Ceetscode\u201D (recursion)
#Now \u201Cl\u201D is not in dictionary so 
**totalExtra = sizeof(\u201Cl\u201D) + nextExtra(got via recursion)**
//====================================================
**[le + etscode]**
#Make a cut \u201Cle\u201D and fix the string
#Then get the extra character count for \u201Cetscode\u201D (recursion)
#Noe \u201Cle\u201D is not in dictionary
**totalExtra = sizeof(\u201Cle\u201D) + nextExtra(got via recursion)**
//====================================================
**[lee + tscode]**
#Similarly for \u201Clee\u201D
//================================================================
**[leet + scode]**
#Make a cut \u201Cleet\u201D and fix the string
#Then get the extra character count for \u201Cscode\u201D (recursion)
#Now \u201Cleet\u201D is in dictionary :) [A relief]
**totalExtra = 0 + nextExtra(got via recursion)**
//==================================================================
#Similarly other calls are made

## RECURSION
```
class Solution {
public:
    int solve(string& s, unordered_map<string, int>&mp, int index)
    {
        if (index >= s.size()) return 0;
        
        string currStr = "";
        int minExtra = s.size();
        for (int cutIdx = index; cutIdx < s.size(); cutIdx++)
        {
            currStr.push_back(s[cutIdx]);
            //currStr will be a string from (index to cutIdx)
            
            //if string not in dictionary, we have to delete as they are extra chars
            int currExtra = (mp.count(currStr))? 0 : currStr.size();
            int nextExtra = solve(s, mp, cutIdx + 1);
            int totalExtra = currExtra + nextExtra;
            
            minExtra = min(minExtra, totalExtra);
        }
        return minExtra;
    }
    int minExtraChar(string s, vector<string>& dictionary) 
    {
        unordered_map<string, int>mp;
        for (string& word : dictionary) mp[word]++;
        
        int ans = solve(s, mp, 0);
        return ans;
        
    }
};
```
//======================================================================================================================
## TOP-DOWN MEMOIZATION
```
class Solution {
public:
    int solve(string& s, unordered_map<string, int>&mp, vector<int>&dp, int index)
    {
        if (index >= s.size()) return 0;
        if (dp[index] != -1) return dp[index]; //use the stored results
        
        string currStr = "";
        int minExtra = s.size();
        for (int cutIdx = index; cutIdx < s.size(); cutIdx++)
        {
            currStr.push_back(s[cutIdx]);
            //currStr will be a string from (index to cutIdx)
            
            //if string not in dictionary, we have to delete as they are extra chars
            int currExtra = (mp.count(currStr))? 0 : currStr.size();
            int nextExtra = solve(s, mp, dp, cutIdx + 1);
            int totalExtra = currExtra + nextExtra;
            
            minExtra = min(minExtra, totalExtra);
        }
        return dp[index] = minExtra;
    }
    int minExtraChar(string s, vector<string>& dictionary) 
    {
        vector<int>dp(s.size(), -1);
        unordered_map<string, int>mp;
        for (string& word : dictionary) mp[word]++;
        
        int ans = solve(s, mp, dp, 0);
        return ans;
        
    }
};
```
//======================================================================================================================
## BOTTOM-UP
```
class Solution {
public:
    int minExtraChar(string s, vector<string>& dictionary) 
    { 
        int n = s.size();
        unordered_map<string, int>mp;
        for (string& word : dictionary) mp[word]++;
        vector<int>dp(n + 1, 0);
        //===================================================================================================
        for (int index = n - 1; index >= 0; index--) //index denotes the startIdx of current sub problem string
        {
            string currStr = "";
            int minExtra = s.size();
            for (int cutIdx = index; cutIdx < n; cutIdx++)
            {
                currStr.push_back(s[cutIdx]);
                //currStr will be a string from (index to cutIdx)

                //if string not in dictionary, we have to delete as they are extra chars
                int currExtra = (mp.count(currStr))? 0 : currStr.size();
                int nextExtra = dp[cutIdx + 1]; 
                int totalExtra = currExtra + nextExtra;

                minExtra = min(minExtra, totalExtra);
            }
            dp[index] = minExtra;
        }
        //====================================================================================================
        return dp[0];
    }
};
```