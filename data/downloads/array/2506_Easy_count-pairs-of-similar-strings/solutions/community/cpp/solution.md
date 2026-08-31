# Set & String

**Author:** kreakEmp
**Votes:** 22
**Link:** [https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/2923556/](https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/2923556/)

---

```
class Solution {
public:
    int similarPairs(vector<string>& words) {
        int ans = 0;
        vector<string> v;
        for(auto w: words){
            set<char> s;
            for(auto c: w) s.insert(c);
            string t = "";
            for(auto m: s) t += m;
            v.push_back(t);
        }
        for(int i = 0; i < v.size(); ++i){
            for(int j = i+1; j < v.size(); ++j){
                if(v[i] == v[j]) ans++;
            }
        }
        return ans;
    }
};
```