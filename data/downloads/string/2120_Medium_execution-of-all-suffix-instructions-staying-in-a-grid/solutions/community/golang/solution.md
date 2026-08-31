# Go | Beats 100% | Understandable

**Author:** MichaelGov-ctrl
**Votes:** 0
**Link:** [https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/5598764/](https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/5598764/)

---

```
type location struct {
    Row int
    Col int
}

func executeInstructions(n int, startPos []int, s string) []int {
    var res []int
    for i := 0; i < len(s); i++ {
        loc := location{Row: startPos[0], Col: startPos[1]}
        counter := 0

        for j := i; j < len(s); j++ {
            loc.update(s[j])
            if !loc.validate(n) {
                break
            }

            counter++
        }

        res = append(res, counter)
    }

    return res
}

func (l *location) update(b byte) {
    switch b {
    case 'L':
        l.Col--
    case 'R':
        l.Col++
    case 'U':
        l.Row--
    case 'D':
        l.Row++
    }
}

func (l *location) validate(length int) bool {
    return (0 <= l.Row && l.Row < length) && (0 <= l.Col && l.Col < length)
}
```