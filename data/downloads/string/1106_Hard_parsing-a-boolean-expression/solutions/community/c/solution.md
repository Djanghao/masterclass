# C++ clean code || smooth as f**k ! || Stack

**Author:** binayKr
**Votes:** 77
**Link:** [https://leetcode.com/problems/parsing-a-boolean-expression/solutions/2356645/](https://leetcode.com/problems/parsing-a-boolean-expression/solutions/2356645/)

---

***Almost Spent 2 hrs to solve this one!! So please upvote if you find this solution intuative!!***

```
class Solution {
private:
    bool parse_or (vector<int> &res)
    {
        int mask = res[0];
        for(int i=1; i<res.size(); i++)
        {
            mask |= res[i];
        }
        return mask;
    }
    
    bool parse_and (vector<int> &res)
    {
        int mask = res[0];
        for(int i=1; i<res.size(); i++)
        {
            mask &= res[i];
        }
        return mask;
    }
    
public:
    bool parseBoolExpr(string s) {
        int n = s.size();
        stack<int> st;
        for(int i =0; i<n; i++)
        {
            if(s[i] == ',') continue;
            if(s[i]==')')
            {
                vector<int> res;
                while(st.top()!='&' && st.top()!='|' && st.top()!='!')
                {
                    char c = st.top();
                    st.pop();
                    if(c=='t') res.push_back(1);
                    if(c=='f') res.push_back(0);
                }
                char c = st.top();
                st.pop();
                if(c=='&')
                {
                    if(parse_and(res)) st.push('t');
                    else st.push('f');
                }
                else if(c=='|') 
                {
                    if(parse_or(res)) st.push('t');
                    else st.push('f');
                }
                else if(c=='!')
                {
                    if(res[0] == 0) st.push('t'); 
                    else st.push('f');
                }
            }
            else st.push(s[i]);
        }
        return (st.top()=='t');
    }
};
```