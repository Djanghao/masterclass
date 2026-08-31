# Monotonic stack solution | Clean solution

**Author:** vrishikesh
**Votes:** 1
**Link:** [https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/2427928/](https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/2427928/)

---

Honestly it was difficult for me
If someone is struggling with this i am totally with you just try and search monotonic stack on youtube and you will get some good explanation on what it is and why you should use it

```
// To hold values
type Node struct {
    Index, Val int
}

// Created in this way to add some helping functions so that i don't clutter the code
type Stack []Node

func (s *Stack) Push(index, val int) {
    *s = append(*s, Node{index, val})
}

func (s *Stack) Pop() Node {
    l := len(*s)
    n := (*s)[l-1]
    *s = (*s)[:l-1]
    return n
}

// Not sure if this was really needed? please comment on this
func (s *Stack) Top() Node {
    return (*s)[len(*s)-1]
}

func (s *Stack) IsEmpty() bool {
    return len(*s) == 0
}

// Only did this to create a out slice with the length of returned count
func GetLLLength(head *ListNode) int {
    var count int
    for curr := head; curr != nil; curr = curr.Next {
        count += 1
    }
    return count
}

func nextLargerNodes(head *ListNode) []int {
    var stack Stack
    var out = make([]int, GetLLLength(head))
    
	// Iterate over the linked list
    for index, curr := 0, head; curr != nil; index, curr = index+1, curr.Next {
		// We could only pop if the stack is not empty
        for !stack.IsEmpty() {
			// If the top value is less than the current value we probably want to remove it
            if stack.Top().Val < curr.Val {
                top := stack.Pop()
                out[top.Index] = curr.Val
            } else {
                break
            }
        }
        
		// Push to the stack if it is empty or the current value is larger than the top val
        stack.Push(index, curr.Val)
    }
    
    return out
}
```