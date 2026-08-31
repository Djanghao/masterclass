# Go stack with class

**Author:** dchooyc
**Votes:** 1
**Link:** [https://leetcode.com/problems/exclusive-time-of-functions/solutions/3361003/](https://leetcode.com/problems/exclusive-time-of-functions/solutions/3361003/)

---

[credit](https://leetcode.com/problems/exclusive-time-of-functions/solutions/153497/java-solution-using-stack-wrapper-class-and-calculation-when-pop-element-from-the-stack/)
Creating ```Log``` class for clarity
```
type Log struct {
    Id, Status, Time int
}

func exclusiveTime(n int, logs []string) []int {
    res := make([]int, n)
    stack := []*Log{}

    for _, message := range logs {
        cur := makeLog(message)

        if cur.Status == 0 {
            stack = append(stack, cur)
        } else {
            prev := stack[len(stack) - 1]
            stack = stack[:len(stack) - 1]
            diff := cur.Time - prev.Time + 1
            res[cur.Id] += diff

            if len(stack) != 0 {
                top := stack[len(stack) - 1]
                res[top.Id] -= diff
            }
        }
    }

    return res
}

func makeLog(message string) *Log {
    parts := strings.Split(message, ":")
    id, _ := strconv.Atoi(parts[0])
    status := 0
    time, _ := strconv.Atoi(parts[2])
    if parts[1] == "end" { status = 1 }
    return &Log{id, status, time}
}
```