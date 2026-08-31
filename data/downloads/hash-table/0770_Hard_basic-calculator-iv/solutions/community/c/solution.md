# 770. Basic Calculator IV.cpp

**Author:** 202021ganesh
**Votes:** 0
**Link:** [https://leetcode.com/problems/basic-calculator-iv/solutions/4545105/](https://leetcode.com/problems/basic-calculator-iv/solutions/4545105/)

---

**Code**
class Solution {
public:
    bool isNumber(string& s) {
        return s.back() >= '0' && s.back() <= '9';
    }
    
    bool isVariable(string& s) {
        return s[0] >= 'a' && s[0] <= 'z';
    }
    
    int priority(string& s) {
        if (s == "+") return 1;
        if (s == "-") return 1;
        if (s == "*") return 2;
        return -1; // "("
    }
    
    bool equal(vector<string>& a, vector<string>& b) {
        if (a.size() != b.size()) return false;
        for (int i = 1; i < a.size(); i++) if (a[i] != b[i]) return false;
        return true;
    }
    
    vector<vector<string>> calculate(vector<vector<string>>& a, string& opr, vector<vector<string>>& b) {
        vector<vector<string>> c;
        if (opr == "+") {
            for (auto& s : a) c.push_back(s);
            for (auto& s : b) c.push_back(s);
        } else if (opr == "-") {
            for (auto& s : a) c.push_back(s);
            for (auto& s : b) {
                c.push_back(s);
                c.back()[0] = to_string(-stoi(c.back()[0]));
            }
        } else {
            for (auto& s : a) {
                for (auto& t : b) {
                    vector<string> o;
                    o.push_back(to_string(stoi(s[0]) * stoi(t[0])));
                    for (int i = 1; i < s.size(); i++) o.push_back(s[i]);
                    for (int i = 1; i < t.size(); i++) o.push_back(t[i]);
                    c.push_back(o);
                }
            }
        }
        for (auto& s : c) {
            sort(s.begin() + 1, s.end());
        }
        sort(c.begin(), c.end(), [](auto& p, auto& q) {
            if (p.size() != q.size()) return p.size() > q.size();
            for (int i = 1; i < p.size(); i++) {
                if (p[i] != q[i]) return p[i] < q[i];
            }
            return true;
        });
        vector<vector<string>> result;
        for (auto& s : c) {
            if (!result.empty() && equal(result.back(), s)) {
                result.back()[0] = to_string(stoi(result.back()[0]) + stoi(s[0]));
            } else {
                result.push_back(s);
            }
            if (result.back()[0] == "0") result.pop_back();
        }
        return result;
    }    
    vector<string> basicCalculatorIV(string expression, vector<string>& evalvars, vector<int>& evalints) {
        vector<string> v(1);
        for (char c : expression) {
            if (c == '(' || c == ')') {
                if (!v.back().empty()) v.push_back(string());
                v.back() += c;
                v.push_back(string());
            } else if (c == ' ') {
                if (!v.back().empty()) v.push_back(string());
            } else {
                v.back() += c;
            }
        }
        if (v.back().empty()) v.pop_back();
        unordered_map<string, int> m;
        for (int i = 0; i < evalvars.size(); i++) {
            m[evalvars[i]] = evalints[i];
        }
        for (auto& s : v) {
            if (m.find(s) != m.end()) {
                s = to_string(m[s]);
            }
        }
        v.push_back(")");
        stack<string> st;
        st.push("(");
        vector<string> u;
        for (auto& s : v) {
            if (isNumber(s) || isVariable(s)) {
                u.push_back(s);
            } else if (s == "(") {
                st.push(s);
            } else if (s == ")") {
                while (st.top() != "(") {
                    u.push_back(st.top());
                    st.pop();
                }
                st.pop();
            } else {
                int p = priority(s);
                while (priority(st.top()) >= p) {
                    u.push_back(st.top());
                    st.pop();
                }
                st.push(s);
            }
        }
        stack<vector<vector<string>>> ste; 
        for (auto& s : u) {
            if (isNumber(s)) {
                ste.push(vector<vector<string>>(1, vector<string>(1, s)));
            } else if (isVariable(s)) {
                ste.push(vector<vector<string>>(1, vector<string>(2, s)));
                ste.top()[0][0] = "1";
            } else {
                auto second = ste.top();
                ste.pop();
                auto first = ste.top();
                ste.pop();
                ste.push(calculate(first, s, second));
            }
        }
        auto r = ste.top();
        vector<string> result;
        for (auto& p : r) {
            if (p[0] == "0") continue;
            result.push_back(string());
            for (auto& q : p) {
                result.back() += q + "*";
            }
            result.back().pop_back();
        }
        return result;
    }
};
```