# C++ solutions

**Author:** Infox_92
**Votes:** 8
**Link:** [https://leetcode.com/problems/the-score-of-students-solving-math-expression/solutions/2832313/](https://leetcode.com/problems/the-score-of-students-solving-math-expression/solutions/2832313/)

---

```
class Solution {
public:
    int Max;
    int h(int i, int j) {return i*100+j;}
    unordered_map<int, vector<int>> dp;
    
    int getValid(string &s){
        long long valid = 0;
        stack<long long> st;
        st.push({s[0]-'0'});
        for(int i = 1; i<s.length(); ++i){
            if(isdigit(s[i])){
                if(s[i-1]=='*'){
                    long long mul = 1ll*st.top()*(s[i]-'0'); 
                    st.pop();
                    st.push(mul);
                }
                else st.push({s[i]-'0'});
            }
            
        }
        
        while(st.size()) { valid += st.top(); st.pop(); }
        return valid;
    }
    
    vector<int> dfs(int i, int j, string &s){
        
        if(i==j) return {(s[i]-'0')};  
        int hash = h(i,j);
        if(!dp.count(hash)) 
        {
            unordered_set<int> possible;
            for(int k=i; k<=j-2; k+=2){
                vector<int> res1 = dfs(i,k,s), res2 = dfs(k+2,j,s);
                for(auto &val1 : res1){ 
                    for(auto &val2 : res2){
                        int val = s[k+1]=='*'? val1*val2 : val1 + val2; 
                        if(val<=Max)
                            possible.insert(val);
                    }
                }

            }

            dp[hash] = vector<int>(possible.begin(), possible.end());
        }
        return dp[hash];
        
    }

    int scoreOfStudents(string s, vector<int>& ans) {
        dp.clear(); Max = 1000;
        vector<int> possible = dfs(0, s.length()-1, s);
        unordered_set<int> can(possible.begin(), possible.end());        
        int valid = getValid(s), res =0;
        
            
        for(auto &val : ans){
            if(val==valid) res+=5;
            else if(can.count(val)) res+=2;
        }
        
        return res;
        
        
    }
};
```