# Go Solution - O(n)

**Author:** hjrand1005
**Votes:** 4
**Link:** [https://leetcode.com/problems/basic-calculator-ii/solutions/3027452/](https://leetcode.com/problems/basic-calculator-ii/solutions/3027452/)

---

#### O(n)

```go
func calculate(s string) int {
    isDigit := toSet([]rune{'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'})
    isOp := toSet([]rune{'+', '-', '/', '*'})
    
    current := 0
    lastOp := '+'
    stack := make([]int, len(s))
    
    for _, r := range s + "+" {
        if isDigit[r] {
            current = current * 10 + int(r-'0')
        } else if isOp[r] {
            if lastOp == '+' {
                stack = append(stack, current)
            } else if lastOp == '-' {
                stack = append(stack, -current)
            } else if lastOp == '*' {
                stack[len(stack)-1] = stack[len(stack)-1] * current
            } else if lastOp == '/' {
                stack[len(stack)-1] = stack[len(stack)-1] / current
            }
            lastOp = r
            current = 0
        }
    }
    
    return sumAll(stack)
}

func toSet(r []rune) map[rune]bool {
    set := make(map[rune]bool, len(r))
    for _, v := range r {
        set[v] = true
    }
    return set
}

func sumAll(all []int) int {
    sum := 0
    for _, v := range all {
        sum += v
    }
    return sum
}
```