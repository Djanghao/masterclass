# [golang] stack.

**Author:** laughinggor
**Votes:** 1
**Link:** [https://leetcode.com/problems/basic-calculator-iii/solutions/321377/](https://leetcode.com/problems/basic-calculator-iii/solutions/321377/)

---

```
import "strconv"
type Item struct {
	tag int // 0: '(', 1: '+', 2: '-', 3: '*', 4: '/', 6: number
	val int
}

func calculate(s string) int {
	var stack []Item
	stack = append(stack, Item{tag: 0})
	for i := 0; i <= len(s); i++ {
		var ch byte
		if i < len(s) { ch = s[i] } else { ch = ')' }
		switch ch {
		case '(': stack = append(stack, Item{tag: 0})
		case ')': // Calculate * and -. Eg. (0 - 1 + 2 - 3)
			sum := 0
			for len(stack) != 0 {
				top := stack[len(stack)-1]
				stack = stack[:len(stack)-1]
				if top.tag == 0 { break }
				operator := stack[len(stack)-1]
				stack = stack[:len(stack)-1]
				if operator.tag == 0 {
					sum += top.val
					break
				}
				switch operator.tag {
				case 1:
					sum += top.val
				default:
					sum += -top.val
				}
			}
			stack = append(stack, Item{tag: 5, val: sum})
		case '+': stack = append(stack, Item{tag: 1})
		case '-':
			// dummy effect.
			if stack[len(stack)-1].tag == 0 {
				stack = append(stack, Item{tag: 3, val: 0})
			}
			stack = append(stack, Item{tag: 2})
		case '*': stack = append(stack, Item{tag: 3})
		case '/': stack = append(stack, Item{tag: 4})
		case ' ':
		default: // Number can't be divided by other character, so combine it.
			start := i
			for ; i < len(s) && s[i] >= '0' && s[i] <= '9'; i++ { }
			num, _ := strconv.Atoi(s[start:i])
			i-- // Note!
			stack = append(stack, Item{tag: 5, val: num})
		}
		if len(stack) >= 3 { // calculate * and /.
			o, p, q := stack[len(stack)-3], stack[len(stack)-2], stack[len(stack)-1]
			if o.tag == 5 && q.tag == 5 && (p.tag == 3 || p.tag == 4) {
				stack = stack[:len(stack)-3]
				if p.tag == 3 {
					stack = append(stack, Item{tag: 5, val: o.val * q.val})
				} else {
					stack = append(stack, Item{tag: 5, val: o.val / q.val})
				}
			}
		}
	}
	return stack[0].val
}
```
