# GO: Evaluate Nested Ternary Expressions

**Author:** evald24
**Votes:** 0
**Link:** [https://leetcode.com/problems/ternary-expression-parser/solutions/3818887/](https://leetcode.com/problems/ternary-expression-parser/solutions/3818887/)

---

# Intuition
At a first glance, the problem seems to be revolving around evaluation of nested ternary operations. Since the grouping of the operations is from right to left, a reverse traversal of the given expression combined with stack operations seems like a natural approach. We will maintain a stack and perform operations according to the encountered characters in the expression.

# Approach
We traverse the given string in reverse and when we encounter a digit, 'T' or 'F', we simply push it to the stack. When we encounter the '?' character, we know that the next character will be the condition 'T' or 'F' and the top two elements of the stack would be the possible results of the ternary operation. We then pop the two results from the stack and push the appropriate result (based on whether the condition is 'T' or 'F') back into the stack. The reason we use a stack here is to handle the nested ternary operations in a right-to-left grouping fashion.

# Complexity
- Time complexity:
The time complexity of the solution is O(N), where N is the length of the expression. We are essentially scanning the entire string once, performing stack operations that take constant time.

- Space complexity:
The space complexity is also O(N), where N is the length of the expression. This is because in the worst-case scenario, we might have to push all the characters of the expression into the stack.

# Code
```
// parseTernary parses a ternary expression and returns its result.
func parseTernary(expression string) string {
	var stack Stack  // We use a stack to store temporary results.

	N := len(expression)
	for i := N - 1; i >= 0; i -= 2 {
		// If the character is not '?' or if we are at the end of the expression,
		// we simply push the character to the stack.
		if i > N-3 || expression[i+1] != '?' {
			stack.Push(expression[i])
			continue
		}

		// If the character is '?', we pop the two topmost elements from the stack.
		// These elements are the possible results of the ternary expression.
		charTrue := stack.Pop()
		charFalse := stack.Pop()

		// We then push the appropriate result to the stack depending on whether
		// the current character is 'T' or 'F'.
		if expression[i] == 'T' {
			stack.Push(charTrue)
		} else {
			stack.Push(charFalse)
		}
	}

	// At the end, the stack should contain only one element,
	// which is the result of the expression.
	return string(stack.Pop())
}

// Since all elements in the stack are characters,
// we can optimize memory usage by using byte.

// Stack represents a stack data structure.
type Stack []byte

// Push adds an element to the stack.
func (s *Stack) Push(v byte) {
	*s = append(*s, v)
}

// Pop removes the last element from the stack and returns it.
func (s *Stack) Pop() byte {
	res := (*s)[len(*s)-1]
	*s = (*s)[:len(*s)-1]
	return res
}

```