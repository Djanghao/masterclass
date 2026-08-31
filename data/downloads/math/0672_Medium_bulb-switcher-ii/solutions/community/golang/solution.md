# Golang O(1) 0ms Solution, with explanation

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/bulb-switcher-ii/solutions/828794/](https://leetcode.com/problems/bulb-switcher-ii/solutions/828794/)

---

```go
func flipLights(n int, m int) int {
    // state1: all on
    // state2: all off
    // state3: even on odd off
    // state4: even off odd on
    // state5: 3k + 1 on others off
    // state6: 3k + 1 off others on
    // state7: even on odd off and press button4 once
    // state8: even off odd on and press button4 once
    if m == 0 || n == 0 {
        return 1
    }
    switch n {
    case 1:
        // only two status on or off
        return 2
    case 2:
        // button3 & button4 are the same
        if m == 1 {
            // state 2,3,4
            return 3
        }
        // state 1,2,3,4
        return 4
    }
    // n \u2265 3 here
    switch m {
    case 1:
        // state 2,3,4,6
        return 4
    case 2:
        // state 1,2,3,4,5,7,8
        return 7
    }
    return 8
}
```