# Memoize and backtracking

**Author:** dtheriault
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3737045/](https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3737045/)

---



```golang
func minimumBeautifulSubstrings(s string) int {
    // memoize - determine powers of 5 whose binary representation is <= len(s)
    powersOf5 := make([]string, 0)
    power := 1
    for {
        p := fmt.Sprintf("%b", power)
        if len(p) > len(s) {
            break
        }
        powersOf5 = append(powersOf5, p)
        power *= 5
    }

    minSize := math.MaxInt
    var backtrack func(start, size int)
    backtrack = func (start, size int) {
        // a valid solution
        if start == len(s) {
            if size < minSize {
                minSize = size
            }
            return
        }
        // loop through powers of 5 to see which ones work at current start position
        for i := len(powersOf5) - 1; i >= 0; i-- {
            end := start + len(powersOf5[i])
            if end <= len(s) && s[start:end] == powersOf5[i] {
                backtrack(end, size + 1)   
            }
        }
    }
    // begin the backtrack process
    backtrack(0, 0)

    if minSize == math.MaxInt {
        return -1
    }
    return minSize
}

```