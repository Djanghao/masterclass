# Solution

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-concatenated-strings/solutions/3400049/](https://leetcode.com/problems/split-concatenated-strings/solutions/3400049/)

---

```C++ []
class Solution {
public:
    string splitLoopedString(vector<string>& strs) {
        string ans = "";
        if(strs.size() == 0)
            return ans;
        vector<string> vec_strs(strs.size());
        string tmpstr = "";
        char maxch = 0;
        int chcnt = 0;
        for(int i = 0; i < strs.size(); ++ i){
            vec_strs[i] = max(strs[i], reverseStr(strs[i]));
            tmpstr += strs[i];
            for(int j = 0; j < strs[i].size(); ++ j){
                if(strs[i][j] > maxch){
                    maxch = strs[i][j];
                    chcnt = 1;
                }else if(strs[i][j] == maxch)
                    ++ chcnt;
            }
        }
        if(chcnt == tmpstr.size()){
            ans = tmpstr;
        }else{
            for(int i = 0; i < strs.size(); ++ i){
                for(int j = 0; j < strs[i].size(); ++ j){
                    if(strs[i][j] == maxch){
                        tmpstr = "";
                        for(int l = j; l < strs[i].size(); ++ l)
                            tmpstr += strs[i][l];
                        addResStr(tmpstr, vec_strs, i);
                        tmpstr += strs[i].substr(0, j);
                        ans = max(ans, tmpstr);
                        
                        tmpstr = "";
                        for(int l = j; l >= 0; -- l)
                            tmpstr += strs[i][l];
                        addResStr(tmpstr, vec_strs, i);
                        for(int l = strs[i].size() - 1; l >= j + 1; -- l)
                            tmpstr += strs[i][l];
                        ans = max(ans, tmpstr);
                    }
                }
            }
        }
        return ans;
    }
private:
    string reverseStr(string s){
        string res = s;
        reverse(res.begin(), res.end());
        return res;
    }
    void addResStr(string &res, vector<string> &vec_strs, int start){
        for(int k = (start + 1)%vec_strs.size(); k != start; k = (k + 1)%vec_strs.size()){
            res += vec_strs[k];
        }
    }
};
```

```Python3 []
class Solution:
    def splitLoopedString(self, strs: List[str]) -> str:
        max_ch = max([max(s) for s in strs])
        strs = [max([s, s[::-1]]) for s in strs]
        output = ''.join(strs)
        for i, s in enumerate(strs):
            if max_ch not in s:
                continue
            l = ''.join(strs[i+1:]+strs[:i])
            for j in range(len(s)):
                if s[j] == max_ch:
                    output = max([output, s[j:]+l+s[:j], s[:j+1][::-1]+l+s[j+1:][::-1]])
        
        return output
```

```Java []
class Solution {
    public String splitLoopedString(String[] strs) {
        if (strs == null || strs.length == 0) {
            return "";
        }
        StringBuilder sb = new StringBuilder();
        for (String str : strs) {
            String rev = new StringBuilder(str).reverse().toString();
            if (str.compareTo(rev) < 0) {
                sb.append(rev);
            }
            else {
                sb.append(str);
            }
        }
        String s = sb.toString();
        
        int n = strs.length;
        String result = "a";
        int current = 0;
        
        for (int i = 0; i < n; i++) {
            String s1 = strs[i];
            String s2 = new StringBuilder(s1).reverse().toString();
            String mid = s.substring(current + s1.length()) + s.substring(0, current);
            
            for (int j = 0; j < s1.length(); j++) {
                if (s1.charAt(j) >= result.charAt(0)) {
                    String t = s1.substring(j) + mid + s1.substring(0, j);
                    result = (result.compareTo(t) >= 0) ? result : t;
                }
                if (s2.charAt(j) >= result.charAt(0)) {
                    String t = s2.substring(j) + mid + s2.substring(0, j);
                    result = (result.compareTo(t) >= 0) ? result : t;
                }
            }
            current += s1.length();
        }
        return result;
    }
}
```
