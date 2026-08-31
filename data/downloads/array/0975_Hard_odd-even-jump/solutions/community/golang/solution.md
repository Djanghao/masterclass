# Golang solution 3600 ms

**Author:** teknoraver
**Votes:** 2
**Link:** [https://leetcode.com/problems/odd-even-jump/solutions/449695/](https://leetcode.com/problems/odd-even-jump/solutions/449695/)

---

```go
func startJump(A []int, pos int, moves [2][]int) bool {
    move := 1
    for {
        if pos == len(A)-1 {
            return true
        }
        if moves[move&1][pos] == 0 {
            return false
        }
        pos = moves[move&1][pos]
        move++
    }
    return false
}

func fillOddsEvens(A []int) [2][]int {
    ret := [2][]int{
        make([]int, len(A)),
        make([]int, len(A)),
    }

    for pos := range A {
        min := math.MaxInt32
        max := math.MinInt32

        for i := pos+1; i < len(A); i++ {
            if A[i] >= A[pos] && A[i] < min {
                min = A[i]
                ret[1][pos] = i
            }
            if A[i] <= A[pos] && A[i] > max {
                max = A[i]
                ret[0][pos] = i
            }
        }
    }

    return ret
}

func oddEvenJumps(A []int) int {
    moves := fillOddsEvens(A)

    goodStarts := 0
    for i := range A {
        if startJump(A, i, moves) {
            goodStarts++
        }
    }

    return goodStarts
}
```