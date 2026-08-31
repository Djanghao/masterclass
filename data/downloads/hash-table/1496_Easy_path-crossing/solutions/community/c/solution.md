# C++ Easy Solution || Using Set & Pair || 0ms

**Author:** markrash4
**Votes:** 8
**Link:** [https://leetcode.com/problems/path-crossing/solutions/1798936/](https://leetcode.com/problems/path-crossing/solutions/1798936/)

---

**Please upvote if you liked my code. It is always a good motivation to write more such codes :)**

```
class Solution {
public:
    bool isPathCrossing(string s) 
    {
        set< pair<int, int> > st;
        int p = 0, q = 0;
        
        st.insert({0, 0});
        
        for(int i=0; i<s.size(); i++)
        {
            if(s[i] == 'N')
                p += 1;
            else if(s[i] == 'E')
                q += 1;
            else if(s[i] == 'W')
                q -= 1;
            else
                p -= 1;
            
            if(st.count({p, q}) > 0)
                return true;
            st.insert({p, q});
        }
        
        return false;
    }
};
```