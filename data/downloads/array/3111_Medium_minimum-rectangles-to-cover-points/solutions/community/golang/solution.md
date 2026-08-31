# Golang Solution ||| Explanations

**Author:** https_whxyan
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-rectangles-to-cover-points/solutions/5017603/](https://leetcode.com/problems/minimum-rectangles-to-cover-points/solutions/5017603/)

---

# Intuition
Greedily going from one point to another

# Approach
**First,** 
* let us realize that it is always to our advantage to put the largest possible rectangle. **Its dimensions should be** $$(length = w, height = inf)$$.
* Then we define that it **is always advantageous to place the origin of the rectangle at (iPointX, 0) (y = 0 by convention), where iPointX is the x-coordinate of point i.**

By observing these 2 conditions, **we guarantee that our rectangle will cover the maximum number of points with maximum probability, and hence the number of rectangles will be minimized.**

# The algorithm itself

Let's have 3 variables 
* counter - responsible for the number of placed rectangles
* x - denotes on which x-coordinate we are now located
* index - index of the point we are covering

**Let's start the while loop.**
We need to cover all points, so the **conditions for exiting the while loop are index != n** (possibly index <= n - 1).
When we enter while, **we immediately mark that we put a rectangle, (counter++)**, and **shift x by w** (since we are putting a rectangle with length w).
**After that we run the second while, where we mark (shift index) the points that are already covered.** 
```go
        for index != n && points[index][0] <= x {
            index++
        }
```
After that **index will point either to n** (we exit the first while immediately) or **to the next point that is not covered yet.** So we **put x at the position points[index][0]** to put the next rectangle there.

**return counter**

# Important clarification
**The algorithm works if our points are sorted**. Therefore, let's **remember to sort the points by x coordinate at the beginning of the algorithm.**
```go
    sort.Slice(points, func(i, j int) bool {
        return points[i][0] < points[j][0]
    })
```

# If my solution was helpful, don't forget to upvote \uD83D\uDDA4
![Upvote Please.jpeg](./images/0.jpeg)

# Complexity
- Time complexity:
$$O(N)$$    

- Space complexity:
$$O(1)$$

# Code
```
func minRectanglesToCoverPoints(points [][]int, w int) int {
    sort.Slice(points, func(i, j int) bool {
        return points[i][0] < points[j][0]
    })
    
    counter := 0
    n := len(points)
    x := points[0][0]
    index := 0
    for index != n {
        x += w
        counter++
        for index != n && points[index][0] <= x {
            index++
        }
        if index == n {
            break
        }
        x = points[index][0]
    }
    
    return counter
}
```