# O(1) Valid Boomerang Solution in C++

**Author:** The_Kunal_Singh
**Votes:** 13
**Link:** [https://leetcode.com/problems/valid-boomerang/solutions/3499025/](https://leetcode.com/problems/valid-boomerang/solutions/3499025/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Slopes are matched : (y2-y1)/(x2-x1)
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {
public:
    bool isBoomerang(vector<vector<int>>& points) {
        float a,b,c,d;
        a = (points[1][1]-points[0][1]);
        b = (points[1][0]-points[0][0]);
        c = (points[2][1]-points[1][1]);
        d = (points[2][0]-points[1][0]);
        if((b!=0 && d!=0 && a*d==b*c) || (b==0 && d==0 && points[0][0]==points[1][0]))
        {
            return false;
        }
        if((points[0][0]==points[1][0] && points[0][1]==points[1][1]) || (points[0][0]==points[2][0] && points[0][1]==points[2][1]) || (points[1][0]==points[2][0] && points[1][1]==points[2][1]))
        {
            return false;
        }
        return true;
    }
};
```
![upvote new.jpg](./images/0.jpeg)
