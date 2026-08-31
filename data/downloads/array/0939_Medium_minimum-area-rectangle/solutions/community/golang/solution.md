# Niave simple approach to minimum rectangle area

**Author:** kirbyhammer64
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-area-rectangle/solutions/4931016/](https://leetcode.com/problems/minimum-area-rectangle/solutions/4931016/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
diagonal points can make a rectangle, so 2 for loops can be used to loop through all the combination of points
# Approach
<!-- Describe your approach to solving the problem. -->
I first made a set abtraction to keep track of what points existed per x and y axis, then created a simple for loop to naively loop through all the points and calculate their area's only if all 4 points existed on the parrallel lines drawn by the 2 points I'm looping through.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
func minAreaRect(points [][]int) int {

    ymap := map[int][]int{}
    xmap := map[int][]int{}

    // go doesn't have sets :(
    for i := range points {
        x := points[i][0]
        y := points[i][1]

        ymap[y] = append(ymap[y], x)
        xmap[x] = append(xmap[x], y)
    }
    
    max := math.MaxInt32

    // search
    for i := range points {
        x1 := points[i][0]
        y1 := points[i][1]
        for j := range points {
            x2 := points[j][0]
            y2 := points[j][1]

            if slices.Contains(ymap[y2], x1) && slices.Contains(xmap[x1],y2) &&
                slices.Contains(ymap[y1], x2) && slices.Contains(xmap[x2],y1) {
                total := math.Abs(float64(y1-y2)) * math.Abs(float64(x1-x2))
                if int(total) < max && total != 0 {
                    max = int(total)
                    //fmt.Printf("(%v,%v),(%v,%v) = %v\
", x1,y1,x2,y2,total)
                }
            }
        }
    }

    if max == math.MaxInt32 {
        return 0
    }
    return max
}
```