# tolower()||Beats 100%|| Easy Solution62

**Author:** prathamesh45_
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-changing-keys/solutions/4636715/](https://leetcode.com/problems/number-of-changing-keys/solutions/4636715/)

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
    int countKeyChanges(string s) {
        int cnt =0;
        if(isupper(s[0])){
                s[0]=tolower(s[0]);
            }
        for(int i=1;i<s.size();i++){
            char a = s[i];
            if(isupper(a)){
                s[i]=tolower(a);
            }
             if(s[i]!=s[i-1])cnt++;
        }
        return cnt;
    }
};
```