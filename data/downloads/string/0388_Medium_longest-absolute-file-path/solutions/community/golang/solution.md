# Go stack and split string

**Author:** dchooyc
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-absolute-file-path/solutions/3056572/](https://leetcode.com/problems/longest-absolute-file-path/solutions/3056572/)

---

```
func lengthLongestPath(input string) int {
    lines := strings.Split(input, "\
")
    res, stack := 0, []string{}

    for i := 0; i < len(lines); i++ {
        place := strings.Split(lines[i], "\	")
        target := place[len(place) - 1]

        if len(place) > len(stack) {
            stack = append(stack, target)
        } else if len(place) == len(stack) {
            stack[len(stack) - 1] = target
        } else {
            stack = stack[:len(place)]
            stack[len(stack) - 1] = target
        }

        if strings.Contains(target, ".") {
            absolute := strings.Join(stack, "\\\")

            if len(absolute) > res {
                res = len(absolute)
            }
        }
    }

    return res
}
```