# Brute force with bit counting

**Author:** ilya-pimenov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/4346019/](https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/4346019/)

---

# Intuition & Approach

N and m are max 12, which is 4096, which fits well with brute force.

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
func maximumRows(matrix [][]int, numSelect int) int {
    rows, cols := len(matrix), len(matrix[0])

    covered := func(selected uint32) int {
        var ans int
        row_loop:
        for row := 0; row < rows; row++ {
            for col := 0; col < cols; col++ {
                if matrix[row][col] != 0 &&
                1 << col & selected == 0 {
                    continue row_loop
                }
            }
            ans++
        }
        return ans
    }

    countBits := func(selected uint32) int {
        var ans int
        for col := 0; col < cols; col++ {
            if 1 << col & selected > 0 {
                ans++
            }
        }
        return ans
    }

    var ans int
    for i := uint32(0); i < 4096; i++ {
        if countBits(i) != numSelect {
            continue
        }
        covers := covered(i)
        if covers > ans {
            ans = covers
        }
    }
    return ansbi
}
```