# Go | Brute Force | Followed the hints

**Author:** b3k3r
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4679037/](https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4679037/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Started to think about trying to do some sort of prefix-y sum solution. Soon found that any optimization gains from a solution like that would probably be outweighed by the complexity of the solution. Personally dont think I could implement something like that within any reaonsable timeframe without too much debugging. Instead resotred to looking at the hint and implemented what it said.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N*M)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N*M)

# Code
```
func resultGrid(image [][]int, threshold int) [][]int {
    N, M := len(image), len(image[0])
    sum := make([][]int, N)
    num := make([][]int, N)
    for i := range sum {
        sum[i] = make([]int, M)
        num[i] = make([]int, M)
    }

    for i := 0; i < N; i++ {
        for j := 0; j < M; j++ {
            traverseRegion(i, j, N, M, threshold, sum, num, image)
        }
    }
    
    res := make([][]int, N)
    for i := 0; i < N; i++ {
        res[i] = make([]int, M)
        for j := 0; j < M; j++ {
            v := image[i][j]
            if num[i][j] > 0 {
                v = sum[i][j] / num[i][j]
            }
            res[i][j] = v            
        }
    }
    return res
}

var xDir = []int{0, 1}
var yDir = []int{-1, 0}

func traverseRegion(row, col, N, M, t int, sum, num [][]int, image [][]int) {
    avg := 0
    for i := row; row+3 <= N && i < row+3; i++ {
        for j := col; col+3 <= M && j < col+3; j++ {
            for d := 0; d < 2; d++ {
                adji, adjj := i+xDir[d], j+yDir[d]                
                if adji >= row && adji < row+3 && adjj >= col && adjj < col+3 && 
                    abs(image[i][j] - image[adji][adjj]) > t {                        
                        return
                    }
            }
            avg += image[i][j]
        }
    }
    for i := row; row+3 <= N && i < row+3; i++ {
        for j := col; col+3 <= M && j < col+3; j++ {            
            sum[i][j] = sum[i][j] + (avg / 9)
            num[i][j]++
        }
    }
}

func abs(x int) int { 
    if x < 0 { return -x }
    return x 
}
```