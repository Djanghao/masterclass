# ✅ Recursion || Simple Solution || Easy Explanation || Beginner Friendly🔥🔥🔥

**Author:** Sayan98
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/5389298/](https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/5389298/)

---

# Intuition
The intuition behind this solution is to build the triangle row by row, alternating between red and blue balls. The height of the triangle is determined by how many complete rows can be formed using the available balls. The solution tries both possibilities: starting with red balls and starting with blue balls, to find the maximum height.

# Approach
- Define a helper method **getCount** that recursively builds the triangle:
    - Start with a row size of 1 and increment it for each subsequent row.
    - Alternate between using **ball1** and **ball2** for each row.
    - If there aren't enough balls to complete a row, return the current height minus 1.
- In the main method maxHeightOfTriangle:
    - Call **getCount** twice, once starting with red balls and once with blue balls.
    - Return the maximum of these two results.

# Complexity
- Time complexity: **O(Log(Red+Blue))**

- Space complexity: **O(Log(Red+Blue))**

```Java []
class Solution {
    public int maxHeightOfTriangle(int red, int blue) {
        return Math.max(getCount(red, blue, 1), getCount(blue, red, 1));
    }

    private int getCount(int ball1, int ball2, int i) {
        
        if(ball1 - i < 0) return i - 1;
        ball1 -= i++;
        if(ball2 - i < 0) return i - 1;
        ball2 -= i++;
        return getCount(ball1, ball2, i);
    }
}
```
```C++ []
class Solution {
public:
    int maxHeightOfTriangle(int red, int blue) {
        return max(getCount(red, blue), getCount(blue, red));
    }

private: 
    int getCount(int ball1, int ball2, int i = 1) {
        
        if(ball1 - i < 0) return i - 1;
        ball1 -= i++;
        if(ball2 - i < 0) return i - 1;
        ball2 -= i++;
        return getCount(ball1, ball2, i);
    }
};
```
```C# []
public class Solution {
    public int MaxHeightOfTriangle(int red, int blue) {
        return Math.Max(GetCount(red, blue), GetCount(blue, red));
    }

    private int GetCount(int ball1, int ball2, int i = 1) {
        
        if(ball1 - i < 0) return i - 1;
        ball1 -= i++;
        if(ball2 - i < 0) return i - 1;
        ball2 -= i++;
        return GetCount(ball1, ball2, i);
    }
}
```

![image.png](./images/0.png)
