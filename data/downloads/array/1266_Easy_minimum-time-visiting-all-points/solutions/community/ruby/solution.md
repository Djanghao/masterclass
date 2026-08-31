# 🚀🚀 Easy To Understand 🔥🔥

**Author:** The_Sanket_Deshmukh
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4356490/](https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4356490/)

---

# Intuition
IF YOU REALLY WANT TO UNDERSTAND THIS CODE , JUST TAKE A PEN AND PAPER AND DRY RUN ON IT. IT IS VERY EASY TO UNDERSTAND AND NEEDS ONLY 5 MINUTES.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int solve(vector<int> a, vector<int> b)
    {
        int x1 = a[0], y1 = a[1];
        int x2 = b[0], y2 = b[1];

        int diff1 = abs(x2 - x1);
        int diff2 = abs(y2 - y1);

        return max(diff1,diff2);
    }

    int minTimeToVisitAllPoints(vector<vector<int>>& points) {
        int time = 0;

        for(int i = 1; i < points.size(); i++)
        {
            time += solve(points[i-1],points[i]);
        }

        return time;
    }
};
```
![lc.gif](./images/0.gif)
<----------------------------------------UPVOTE-------------------------------------->
