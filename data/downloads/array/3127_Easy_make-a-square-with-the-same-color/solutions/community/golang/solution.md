# 0ms, 2.20MB, readable solution

**Author:** autoshi-k
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5142949/](https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5142949/)

---

I decided to share my solution because I believe it's both readable and performs well.

# Intuition
I aimed to simplify the graph by grouping every 4 blocks into 1, reducing the complexity. For each block I count the white squeres (res). 
Initially, I overlooked that groups of 4/3 black squares were counted as true, but I quickly fixed this with a single line (by checking if the result was less than or equal to 1).

# Complexity
- Time complexity: O(1)

- Space complexity: O(1)

# Code
```
func canMakeSquare(grid [][]byte) bool {
    for i := 0; i < 2; i++ {
        for j := 0; j < 2; j++ {
            var res int

            calcRes := func (r byte) {
                if r == 'W' {
                    res++
                }
            }

            calcRes(grid[i][j])
            calcRes(grid[i+1][j])
            calcRes(grid[i][j+1])
            calcRes(grid[i+1][j+1])

            if res >= 3 || res <= 1 {
                return true
            }
        }
    }

    return false
}
```