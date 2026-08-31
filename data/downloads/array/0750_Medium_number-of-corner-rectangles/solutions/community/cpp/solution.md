# C++ | easy | with explanation

**Author:** shubhamchandra01
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-corner-rectangles/solutions/4924079/](https://leetcode.com/problems/number-of-corner-rectangles/solutions/4924079/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

Take two rows - i and j.  
How many valid sides of rectangle can we form using points in rows i and j ?
```
if grid[i][c] is 1 and grid[j][c] is 1, then points / cells 
(i, c) and (j, c) can form a side of the rectangle.
```

Count the total no. of sides we can form using these two rows i, j.

Then, the no. of rectangles we can make from rows i, j are:

```
totalSides C 2  
From P n C, 

totalSides * (totalSides - 1) / 2

```
 

# Complexity
- Time complexity: O(n * n * m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
int countCornerRectangles(vector<vector<int>>& mt) {
    int n = mt.size(), m = mt[0].size(), ans = 0;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            int side = 0;
            for (int k = 0; k < m; k++) {
                side += (mt[i][k] + mt[j][k] == 2); 
            }
            ans += 1LL * side * (side - 1) / 2;
        }
    }
    return ans;
}

```