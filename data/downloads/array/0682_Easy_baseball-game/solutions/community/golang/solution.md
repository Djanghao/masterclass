# [golang] using stack

**Author:** oizg
**Votes:** 2
**Link:** [https://leetcode.com/problems/baseball-game/solutions/1933401/](https://leetcode.com/problems/baseball-game/solutions/1933401/)

---

```go
func calPoints(ops []string) int {
    stack := []int{}
    
    for _, op := range ops {
        switch op {
        case "+":
            num1, num2 := stack[len(stack)-1], stack[len(stack)-2]
            stack = append(stack, num1+num2)
        case "D":
            stack = append(stack, stack[len(stack)-1]*2)
        case "C":
            stack = stack[:len(stack)-1]
        default:
            num, _ := strconv.Atoi(op)
            stack = append(stack, num)    
        }
    }
    
    sum := 0
    for _, num := range stack { sum += num }
    return sum
}
```