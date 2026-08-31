# C++ 100% Beats.

**Author:** ramudarsingh46
**Votes:** 7
**Link:** [https://leetcode.com/problems/student-attendance-record-i/solutions/5644762/](https://leetcode.com/problems/student-attendance-record-i/solutions/5644762/)

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
    bool checkRecord(string s) {
        int late =0;
        int count=0;
        int absent=0;

        int i=0;
        while(i<s.size()){
            if(s[i]=='A')absent++;

            if(s[i]=='L' ){
                while(i<s.size()){
                    if(s[i]!='L'){
                        if(s[i]=='A') absent++;
                        break;
                    }
                    count++;
                    i++;

                }
                late=max(count, late);
                count=0;
            }
            if(absent>1 || late>2) return false; 
            i++;
        }
        return true;
        
    }
};
```