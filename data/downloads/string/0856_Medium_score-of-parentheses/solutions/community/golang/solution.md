# EXPLAINED Go clean solution using Stack (beats 100% on runtime, 92% on memory)

**Author:** vladiq
**Votes:** 4
**Link:** [https://leetcode.com/problems/score-of-parentheses/solutions/2860335/](https://leetcode.com/problems/score-of-parentheses/solutions/2860335/)

---

# Approach
<!-- Describe your approach to solving the problem. -->

The Stack is a common data structure we use when dealing with parentheses problems.

So let's implement a simple slice-based Stack:
    1. Create a Stack structure that holds the data field of type []rune.
    2. Define the Push method to add a new value to the Stack using simple append().
    3. Define the Pop method to remove the top element from the Stack returning this very element. We can remove the last element of the array using slicing: slice = slice[:len(slice)-1].

Then we implement our business logic:
1. Initialize an empty stack and a multiplier equal to 1. The multiplier variable will be added to the answer every time we see the "()" in our input string.
2. Let's loop through the input string: 
    a. Pop the element from the top of the stack.
    b. If the top element is '(' and we got ')' as the current character, add the multiplier to the answer.
    c. If we get two consecutive "((", then, as stated in the problem description, multiply the multiplier by 2.
    d. If we get two consecutive "))", then we divide the multiplier by 2.
    e. Push the current character to the stack.

# Complexity
- Time complexity: $O(n)$ - one pass through the input string.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$ - we need to store **at most** half of the input string in our stack.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type Stack struct {
    data []rune
}

func (s *Stack) Push(val rune) {
    s.data = append(s.data, val)
}

func (s *Stack) Pop() rune {
    if len(s.data) == 0 {
        var r rune
        return r
    }

    top := s.data[len(s.data) - 1]
    (*s).data = s.data[:len(s.data) - 1]
    return top
}

func scoreOfParentheses(s string) int {
    var stack Stack

    ans := 0
    multiplier := 1
    for _, c := range s {
        top := stack.Pop()

        switch {
        case top == '(' && c == ')':
            ans += multiplier
        case top == '(' && c == '(':
            multiplier *= 2
        case top == ')' && c == ')':
            multiplier /= 2
        }

        stack.Push(c)
    }

    return ans
}
```