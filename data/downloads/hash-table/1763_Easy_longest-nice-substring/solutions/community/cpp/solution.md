# C++ Simple | Easy to understand

**Author:** __greed
**Votes:** 12
**Link:** [https://leetcode.com/problems/longest-nice-substring/solutions/2506855/](https://leetcode.com/problems/longest-nice-substring/solutions/2506855/)

---

```
bool check(string s){
        for(int i=0;i<s.size();i++) {
            char c = s[i];
            if(c<=90) c += 32;
            else c -= 32;
            if(s.find(c)==string::npos) return false;
        }
        return true;
    }
    string longestNiceSubstring(string s) {
        string ans = "";
        for(int i=0;i<s.size();i++){
            string res = "";
            res += s[i];
            for(int j = i+1;j<s.size();j++){
                res += s[j];
                if(check(res) and res.size()>ans.size()) ans = res;
            }
        }
        return ans;
    }
```
Upvote, if it helped..