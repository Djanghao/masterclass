# 3 Liner || Easy To Understand || 100% Efficient Code

**Author:** karanguptadev123
**Votes:** 5
**Link:** [https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/3285318/](https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/3285318/)

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
    int maxDistance(vector<int>& colors) {
        int n=colors.size(),i=0, j=n-1;
        while(colors[j]==colors[0]) j--;
        while(colors[i]==colors[n-1]) i++;
        return max(j,n-1-i);
    }
};
```