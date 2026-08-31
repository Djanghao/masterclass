# Simplest C++

**Author:** skp91513
**Votes:** 3
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/3549214/](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/3549214/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    string findLexSmallestString(string s, int a, int b) 
    {
        unordered_set<string> st;
        b = b%s.size();
        
        queue<string> q;
        q.push(s);
        st.insert(s);
        while(q.size())
        {
            string curr = q.front();
            q.pop();
            string rot = curr; 
            for(int i = 1; i<curr.size();i=i+2)
            {
                int z = (curr[i] -'0'+ a)%10 ; 
                curr[i] = char(z+48);
            }
            reverse(rot.begin(), rot.end());
            reverse(rot.begin(), rot.begin() + b);
            reverse(rot.begin() + b, rot.end());
            if(st.find(rot)==st.end())
            {
                q.push(rot);
                st.insert(rot);
            }
            if(st.find(curr)==st.end())
            {
                q.push(curr);
                st.insert(curr);
            }
                 
        }
       vector<string> v(st.begin(),st.end());
       sort(v.begin(),v.end());
       return v[0];
        

        
    }
};
```