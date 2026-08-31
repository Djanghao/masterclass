# Z Algorithm || O(n)

**Author:** nikhil_2002_singh
**Votes:** 5
**Link:** [https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/3519078/](https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/3519078/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
class Solution {
public:
    long long sumScores(string s) {
        long long val=s.length();
        vector<long long>z(s.length(),0);
        int l,r;
        l=0,r=0;
        for(int i=1;i<s.length();i++)
        {
            if(i>r)
            {
                l=i;
                r=i;
                while(r<s.length() && s[r]==s[r-l])
                r++;
                r--;
                z[i]=r-l+1;
            }
            else
            {
                int x=i-l;
                if(z[x]<r-i+1)
                {
                    z[i]=z[x];
                }
                else
                {
                    l=i;
                    while(r<s.length() && s[r]==s[r-l])
                    r++;
                    r--;
                    z[i]=r-l+1;
                }
            }
        }
        for(int i=0;i<z.size();i++)
        {
            val+=z[i];
        }
        return val;

        
    }
};
```