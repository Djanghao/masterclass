# Golang - DFS with memoization

**Author:** adithyasashasai
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/1383705/](https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/1383705/)

---

```
func minFlips(mat [][]int) int {
    // visited will store minimun value at each visited matrix
    visited := map[int]int{}

    var dfs func(node [][]int) int
    dfs = func(node [][]int) int {
        hash := computeHashForMatrix(node)
        if hash == 0 {
            return 0
        }
        if val, ok := visited[hash]; ok {
            return val
        }
        visited[hash] = math.MaxInt32
        for i := range node {
            for j := range node[i] {
                ans := 1 + dfs(flip(node, i, j))
                if ans < visited[hash] {
                    visited[hash] = ans 
                }
            }
        }
        return visited[hash]
    }
    
    ans := dfs(mat)
    // if ans is still MaxInt32 then Given matrix can't be a zero matrix so return -1 
    if ans >= math.MaxInt32 {
        return -1
    }
    
    return ans
}

// computeHashForMatrix computes the hash for the matrix
func computeHashForMatrix(mat [][]int) int {
    key := 0
    for i := range mat {
        for j := range mat[i] {
            key <<= 1
            key += mat[i][j]
        }
    }
    return key
}

// neighbours represents all neighbours for a given index
var neighbours = [][]int{{-1, 0}, {1, 0},{0, 1}, {0, -1}, {0, 0}}

// flip returns a new matrix after flipling i,j index along with neighbours
func flip(mat [][]int, r, c int) [][]int {
    duplicate := make([][]int, len(mat))
    for i := range mat {
        duplicate[i] = make([]int, len(mat[i]))
        copy(duplicate[i], mat[i])
    }
    for _, s := range neighbours {
        i := r + s[0]
        j := c + s[1]
        if i < 0 || i >= len(mat) || j < 0 || j >= len(mat[0]) {
            continue
        }
        duplicate[i][j] = (mat[i][j] + 1) % 2
    }
    return duplicate
}
```