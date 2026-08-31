# Two pointers and DFS in C++

**Author:** user4804h
**Votes:** 0
**Link:** [https://leetcode.com/problems/brace-expansion/solutions/5766079/](https://leetcode.com/problems/brace-expansion/solutions/5766079/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Use two pointers to construct the map for array iteration.
Each element stores all characters that we could choose from.
Then use DFS to find out all strings.

# Code
```cpp []
class Solution {
public:
    vector<string> res;
    void dfs(int i, string &cur, vector<string> &components){
        if(i >= components.size()) {
            res.push_back(cur);
            return;
        }
        for(auto c: components[i]){
            cur.push_back(c);
            dfs(i + 1, cur, components);
            cur.pop_back();
        }
    }
    vector<string> expand(string s) {
        int n = s.size();
        vector<string> components(n);
        int index = 0;
        for(int i = 0; i < n; i++){
            if(s[i] == '{'){
                int j = i + 1;
                while(j < n && s[j] != '}'){
                    if(s[j] != ','){
                        components[index].push_back(s[j]);
                    }
                    j++;
                }
                sort(components[index].begin(), components[index].end());
                index++;
                i = j;
            }else{
                components[index] = s[i];
                index++;
            }
        }
        components.resize(index);
        string cur;
        dfs(0, cur, components);
        return res;
    }
};
```