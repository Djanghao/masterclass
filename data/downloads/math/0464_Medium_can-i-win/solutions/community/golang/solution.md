# Go dfs with comments

**Author:** dchooyc
**Votes:** 1
**Link:** [https://leetcode.com/problems/can-i-win/solutions/3223529/](https://leetcode.com/problems/can-i-win/solutions/3223529/)

---

```
func canIWin(max int, target int) bool {
    if target <= max { return true }

    // formula for calculating 1 + 2 .. + n - 1 + n
    total := (max * (max + 1)) >> 1

    if target > total { return false }

    // records cases where can win with certainty
    cases := make(map[int]bool)
    used := make([]int, max + 1)

    return win(cases, used, target)
}

// returns whether when given a case, is there a number
// that when chosen, opponent cannot win
func win(cases map[int]bool, used []int, target int) bool {
    // opponent has won
    if target <= 0 { return false }

    key := conv(used)

    // check if case is known
    if _, ok := cases[key]; !ok {
        // case is not known, so test by choosing each number
        for i := 1; i < len(used); i++ {
            // number already used for this case
            if used[i] == 1 { continue }

            // use the number
            used[i] = 1

            // if opponent cannot win
            if !win(cases, used, target - i) {
                // set back the used number
                used[i] = 0
                // if this case happens, will win
                cases[key] = true
                return true
            }

            // set back the used number
            used[i] = 0
        }
    }

    // for this case, for all possible number draws
    // there is no win or this is a known case
    return cases[key]
}

// represents used as a number by setting bits by position
func conv(bits []int) int {
    num := 0

    for _, bit := range bits {
        num <<= 1
        num |= bit
    }

    return num
}
```