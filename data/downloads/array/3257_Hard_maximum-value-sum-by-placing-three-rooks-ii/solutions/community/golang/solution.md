# Go - Sort the Values and Generate Solutions Until No Chance to Improve.

**Author:** i159181
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-ii/solutions/5651256/](https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-ii/solutions/5651256/)

---

# Approach
Sort the values on the board, then generate solutions by choosing 3 values.
We stop when the values get too small and there is no chance of improving
the best solution found so far.

# Complexity
- Time complexity: $$O(n^3)$$

# Code
```
func maximumValueSum(board [][]int) int64 {
    m := len(board)
    n := len(board[0])

    // We start by storing all data in 1-D arrays sorted
    // descending by the value.
    mn := m*n
    row := make([]int, mn)
    col := make([]int, mn)
    val := make([]int, mn)
    idx := make([]int, mn)
    k := 0
    for i, r := range board {
        for j, value := range r {
            row[k] = i
            col[k] = j
            val[k] = value
            idx[k] = k
            k++
        }
    }
    // We sort index array by the value. This way val[idx[0]] is the largest value
    // on the board and row[idx[0]] and col[idx[0]] are its coordinates.
    sort.Slice(idx, func(i, j int) bool {return val[idx[i]] > val[idx[j]]})

    // The worst possible solution is that we use the 3 lowest value on the board.
    // (we do not check if the rooks attack each other in the lowest bound.)
    best := int64(val[idx[mn-1]]) + int64(val[idx[mn-2]]) + int64(val[idx[mn-3]])

    // Now we generate the solution. We are going to choose
    // val[idx[i]], val[idx[j]], val[idx[k]], where i < j < k
    for i := 0; i < mn; i++ {
        // We are considering the values in descending order, so we can finish if 
        // We can finish if the current value is less than 1/3 of the best solution
        // so far (because we will only consider too small numbers).
        // This pruning gives us efifciency.
        if 3 * int64(val[idx[i]]) < best {
            break
        }
        for j := i; j < mn; j++ {
            // Just pruning.
            if int64(val[idx[i]]) + 2 * int64(val[idx[j]]) < best {
                break
            }
            // Check constrains. Currently considered value must be
            // on a different row and column.
            if row[idx[i]] == row[idx[j]] || col[idx[i]] == col[idx[j]] {
                continue
            }
            for k := j; k < mn; k++ {
                // Pruning for efficiency.
                if int64(val[idx[i]]) + int64(val[idx[j]]) + int64(val[idx[k]]) < best {
                    break
                }
                // Constraint on rooks not attacking each other.
                if row[idx[i]] == row[idx[k]] || col[idx[i]] == col[idx[k]] {
                    continue
                }
                if row[idx[j]] == row[idx[k]] || col[idx[j]] == col[idx[k]] {
                    continue
                }
                cur := int64(val[idx[i]]) + int64(val[idx[j]]) + int64(val[idx[k]])
                best = max(best, cur)
            }
        }
    }
    return best
}
```