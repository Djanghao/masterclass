# [Python] In-place DP with Explanation

**Author:** zayne-siew
**Votes:** 34
**Link:** [https://leetcode.com/problems/triangle/solutions/2144882/](https://leetcode.com/problems/triangle/solutions/2144882/)

---

### Intuition

We can use the ```triangle``` array to perform our DP. This allows us to use O(1) auxiliary space. Why?

- For any given coordinate in the triangle ```(x, y)``` where ```0 <= x < len(triangle)``` and ```0 <= y < len(triangle[x])```, the minimum path sum of the path that ends up on ```(x, y)``` is given by **```triangle[x][y]``` plus the minimum path sum of the previous coordinate**.
- Once we compute the minimum path sum at ```(x, y)```, we **no longer require the standalone value for ```(x, y)``` to perform any calculation**. Instead, per above, we will use the minimum sum.

Which coordinates are considered "previous" to any given coordinate ```(x, y)```? Since from any ```(x, y)``` in the ```triangle``` we can move to ```(x+1, y)``` or ```(x+1, y+1)```, we can use this information in reverse: **For any given coordinate ```(x, y)```, its "previous" coordinates are either ```(x-1, y-1)``` or ```(x-1, y)```**.

---

### Approach 1: Top-Down Approach

From the discussion above, we can implement a top-down DP using the following pseudocode:

- For each row in the ```triangle```, calculate the minimum sum at each element.
- After all computation is complete, return the minimum sum from the last row (i.e. ```min(triangle[-1])```).

```python
class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        for i in range(1, len(triangle)):  # for each row in triangle (skipping the first),
            for j in range(i+1):           # loop through each element in the row
                triangle[i][j] += min(triangle[i-1][j-(j==i)],  # minimum sum from coordinate (x-1, y)
                                      triangle[i-1][j-(j>0)])   # minimum sum from coordinate (x-1, y-1)
        return min(triangle[-1])  # obtain minimum sum from last row
```

**TC: O(n<sup>2</sup>)**, since we visit each element in the array
**SC: O(1)**, as discussed above.

---

### Approach 2: Bottom-Up Approach

We can use the same pseudocode but implement it in reverse. This saves on the min check at the end (which runs in O(n) time), since we know that **the last element for a bottom-up approach has to be `triangle[0][0]`, and therefore that is where our answer is stored**.

```python
class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        for i in range(len(triangle)-2, -1, -1):  # for each row in triangle (skipping the last),
            for j in range(i+1):                  # loop through each element in the row
                triangle[i][j] += min(triangle[i+1][j],    # minimum sum from coordinate (x+1, y)
                                      triangle[i+1][j+1])  # minimum sum from coordinate (x+1, y+1)
        return triangle[0][0]
```

**TC: O(n<sup>2</sup>)**, as discussed above.
**SC: O(1)**, as discussed above.

---

Please upvote if this has helped you! Appreciate any comments as well :)