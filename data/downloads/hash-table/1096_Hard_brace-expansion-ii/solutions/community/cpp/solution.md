# C++ Stack Solution

**Author:** omkamble0800
**Votes:** 2
**Link:** [https://leetcode.com/problems/brace-expansion-ii/solutions/3242778/](https://leetcode.com/problems/brace-expansion-ii/solutions/3242778/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Use stack to keep track of previous two lists
<!-- Describe your approach to solving the problem. -->
<!-- 
# Complexity
- Time complexity: -->
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

<!-- - Space complexity: -->
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    
    vector<string> multiply(vector<string>& a, vector<string>& b){
        if(a.empty()) return b;
        if(b.empty()) return a;
        vector<string> ans;
        for(auto&i:a){
            for(auto&j:b) ans.push_back(i+j);
        }
        return ans;
    }
    
    vector<string> braceExpansionII(string expression) {
        vector<string>  res, curr;
        stack<vector<string>> st;
        for(auto&x:expression){
            if(x >= 'a' and x <= 'z'){
                if(curr.size()) for(auto&i:curr) i += x;
                else curr.push_back(string(1, x));
            }
            else if(x == '{'){
                st.push(res); st.push(curr);
                res.clear(), curr.clear();
            }
            else if(x == '}'){
                vector<string> preCurr = st.top(); st.pop();
                vector<string> preRes = st.top(); st.pop();
                for(auto&i:curr) res.push_back(i);
                curr = multiply(preCurr, res);
                res = preRes;
            }
            else if(x == ','){
                for(auto&i:curr) res.push_back(i);
                curr.clear();
            }
        }
        for(auto&i:curr) res.push_back(i);
        sort(res.begin(), res.end());
        return vector<string>(res.begin(), unique(res.begin(), res.end()));
    }
};
```