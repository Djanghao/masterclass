# [Golang] Using Binary Index Tree

**Author:** vasakris
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/solutions/2614238/](https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/solutions/2614238/)

---

```
const N = 101
func countRectangles(rectangles [][]int, points [][]int) []int {
    bitArr := make([]int, N+1)
    res := make([]int, len(points))
    
    // Add index, since we are sorting
    for i := 0; i < len(points); i++ {
        points[i] = append(points[i], i)
    }
    
    // Sort by decreasing width
    sort.Slice(rectangles, func (i, j int) bool {
        return rectangles[i][0] > rectangles[j][0]
    })
    
    // Sort by decreasing width
    sort.Slice(points, func (i, j int) bool {
        return points[i][0] > points[j][0]
    })
    
    i, j := 0, 0
    for i < len(points) {
        // Add all rectangles which have more width then point[i]
        for j < len(rectangles) && rectangles[j][0] >= points[i][0] {
            add(bitArr, rectangles[j][1]) // Add heights to bitArr
            j++
        }
        
        // Get all prefixSum of heights less than points[i][1] and subtract from current rectangles count
        count := j - prefixSum(bitArr, points[i][1]-1)
        res[points[i][2]] = count
        i++
    }
    
    return res
}

func add(bitArr []int, h int) {
    for i := h+1; i <= N; i += lsb(i) {
        bitArr[i]++
    }
}

func prefixSum(bitArr []int, h int) int {
    sum := 0
    for i := h+1; i > 0; i -= lsb(i) {
        sum += bitArr[i]
    }
    return sum
}

func lsb(n int) int {
    return n & (-n)
}
```