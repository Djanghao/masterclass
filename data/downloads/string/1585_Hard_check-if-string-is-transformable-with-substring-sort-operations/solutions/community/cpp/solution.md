# Simple C++ greedy solution(14 lines)

**Author:** Srivardhan_M
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/solutions/4134701/](https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/solutions/4134701/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
public:
    bool isTransformable(string s, string t) {
        int n = s.length();
        vector<int> pos(10, n);
        for(int i=0; i<n; i++){
            if(pos[s[i]-'0'] == n) pos[s[i]-'0'] = i;
        }
        for(int i=0; i<n; i++){
            int num = t[i]-'0';
            if(pos[num] == n) return 0;
            for(int j=0; j<num; j++){
                if(pos[j] < pos[num]) return 0;
            }
            pos[num]++;
            while(pos[num]<n && s[pos[num]]-'0' != num) pos[num]++;
        }
        return 1;
    }
};
```