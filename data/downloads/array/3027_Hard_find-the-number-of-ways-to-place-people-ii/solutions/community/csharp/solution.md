# 100% Faster C# Soln

**Author:** harsh007kumar
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4680289/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/solutions/4680289/)

---

# Approach
    1. Sort points in the increasing order of x-axis if 2 points have same then one with higher y-axis comes first
    2. iterate thru the pair of evey possible points (2-loops)
    3. now check if there is even 1 points b/w the pair which exists on the line of inside the rectangle that will be drawn
    4. if no such points is found increament the result by 1

# Complexity
- Time complexity:
O(n^3)

- Space complexity:
O(1)

![image.png](./images/0.png)

# Code
```
public class Solution {
    // Time O(n^3) | Space O(1)
    public int NumberOfPairs(int[][] points) {
        // sort points in increasing order of x-axis if 2 points have same x axis one with higher y-axis gets priority and will show up before 1 with lower y axis
        Array.Sort(points, (p1,p2) => p1[0]!=p2[0] ? p1[0].CompareTo(p2[0]) : p2[1].CompareTo(p1[1]));
        int waysToPlace = 0;
        for(int i=0;i<points.Length;i++)
            for(int j=i+1;j<points.Length;j++)
                if(points[i][1]>=points[j][1])
                {
                    bool foundMiddle = false;
                    for(int k=i+1;k<j;k++)
                        if((points[i][0]<=points[k][0] && points[k][0]<=points[j][0])
                           && (points[i][1]>=points[k][1] && points[k][1]>=points[j][1]))
                        {
                            foundMiddle = true;
                            break;
                        }
                    
                    if(!foundMiddle) waysToPlace++;
                }
        return waysToPlace;
    }
}
```