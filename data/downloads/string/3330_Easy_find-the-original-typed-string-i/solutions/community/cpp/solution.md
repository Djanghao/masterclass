# Easiest approach ever beats 100% time-> O(N) Space-> O(1)

**Author:** deep94725kumar
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-original-typed-string-i/solutions/5971309/](https://leetcode.com/problems/find-the-original-typed-string-i/solutions/5971309/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Easiest approach ever beats 100% 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(1)
# Code
```cpp []
class Solution {
public:
    int possibleStringCount(string word) {
        int ans=0;

        for(int i=1;i<word.length();i++){
            if(word[i]==word[i-1]) ans++;
        }
        return ans+1;
    }
};
```