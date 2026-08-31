# Simple Easy Solution C++

**Author:** krishnadey30
**Votes:** 4
**Link:** [https://leetcode.com/problems/brace-expansion/solutions/428422/](https://leetcode.com/problems/brace-expansion/solutions/428422/)

---

```cpp
class Solution {
public:
    void getStrings(string S, string newS, vector<string> &ans,int i) {
        if(i == S.size()) {
            ans.push_back(newS);
            return;
        }
        if(S[i] == '{') {
            vector<char> cur;
            while(S[i]!='}') {
                if(isalpha(S[i]))cur.push_back(S[i]);
                i++;
            }
            for(char x: cur) {
                getStrings(S,newS+x,ans,i+1);
            }
        }
        else if(isalpha(S[i])) {
            getStrings(S,newS+S[i],ans,i+1);
        }
    }
    vector<string> expand(string S) {
        vector<string> ans;
        getStrings(S,"",ans,0);
        sort(ans.begin(),ans.end());
        return ans;
    }
};
```