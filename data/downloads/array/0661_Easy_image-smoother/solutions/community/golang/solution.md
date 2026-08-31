# Go 44ms 100% solution

**Author:** tjucoder
**Votes:** 5
**Link:** [https://leetcode.com/problems/image-smoother/solutions/507195/](https://leetcode.com/problems/image-smoother/solutions/507195/)

---

```go
func imageSmoother(M [][]int) [][]int {
    processedImage := make([][]int, len(M))
    for i := range processedImage {
        processedImage[i] = make([]int, len(M[0]))
    }
    for i := range processedImage {
        for j := range processedImage[i] {
            processedImage[i][j] = average(M, i, j)
        }
    }
    return processedImage
}

func average(M [][]int, i, j int) int {
    count, summary := 0, 0
    for m := i-1; m <= i+1; m++ {
        for n := j-1; n <= j+1; n++ {
            if v, exist := gray(M, m, n); exist {
                count++
                summary += v
            }
        }
    }
    return summary / count
}

func gray(M [][]int, i, j int) (int, bool) {
    if i < 0 || i >= len(M) || j < 0 || j >= len(M[0]) {
        return 0, false
    }
    return M[i][j], true
}
```