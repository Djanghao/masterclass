# Solution

**Author:** deleted_user
**Votes:** 244
**Link:** [https://leetcode.com/problems/word-break-ii/solutions/2996989/](https://leetcode.com/problems/word-break-ii/solutions/2996989/)

---

```C++ []
class Solution {
public:
    void solve(string s, vector<string>& res, unordered_set<string>& st, vector<string>&temp){
        if(s.length() == 0){
            string str = "";
            for(auto it:temp){
                str += it + " ";
            }
            str.pop_back();
            res.push_back(str);
            return;
        }
        for(int i=0;i<s.length(); i++){
            if(st.count(s.substr(0, i+1))){
                temp.push_back(s.substr(0, i+1));
                solve(s.substr(i+1), res, st, temp);
                temp.pop_back();
            }
        }
    }
    vector<string> wordBreak(string s, vector<string>& wordDict) {
        vector<string>res, temp;
        unordered_set<string>st(wordDict.begin(), wordDict.end());
        
        solve(s, res, st, temp);
        return res;
    }
};
```

```Python3 []
def fun(s,dc,memo):
    if(s in memo):
        return memo[s]
    ans=[]
    if(dc[s]==1):
        ans=[s]
    for i in range(1,len(s)):
        if(dc[s[:i]]==1):
            a=fun(s[i:],dc,memo)
            for x in a:
                ans.append(s[:i]+" "+x)
    memo[s]=ans
    return ans
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        dc=defaultdict(lambda:0)
        for a in wordDict:
            dc[a]=1
        return(fun(s,dc,{}))
```

```Java []
class Solution {
    private void helper(String s, int i, Set<String> dict, List<String> cur, List<String> res) {
        if (i == s.length()) {
            if (cur.size() > 0) {
                StringBuilder sb = new StringBuilder();
                for (int j = 0; j < cur.size(); j++) {
                    if (j > 0) {
                        sb.append(' ');
                    }
                    sb.append(cur.get(j));
                }
                res.add(sb.toString());
            }
            return;
        }

        for (int j = i+1; j <= s.length(); j++) {
            if (dict.contains(s.substring(i, j))) {
                cur.add(s.substring(i, j));
                helper(s, j, dict, cur, res);
                cur.remove(cur.size() - 1);
            }
        }
    }
    public List<String> wordBreak(String s, List<String> wordDict) {
        Set<String> dict = new HashSet<>(wordDict);
        List<String> res = new ArrayList<>();
        List<String> cur = new ArrayList<>();
        helper(s, 0, dict, cur, res);
        return res;
    }
}
```
