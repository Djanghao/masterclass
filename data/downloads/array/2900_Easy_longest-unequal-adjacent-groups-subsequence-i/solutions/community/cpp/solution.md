# Easiest C++ Solution 🌟

**Author:** Aachal5676
**Votes:** 18
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/4168113/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/4168113/)

---



# Code
```
class Solution {
public:
    vector<string> getWordsInLongestSubsequence(int n, vector<string>& words, vector<int>& groups) {
        vector<string>ans;
        int flag=-1;
        for(int i=0;i<n;i++){
            if(groups[i]!=flag){
                flag=groups[i];
                ans.push_back(words[i]);
            }
        }
        return ans;
    }
};
```