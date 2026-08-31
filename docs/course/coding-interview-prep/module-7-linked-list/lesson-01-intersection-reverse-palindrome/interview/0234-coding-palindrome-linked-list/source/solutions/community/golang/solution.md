# [Go] Multiple Solutions - Clean code with comments

**Author:** krex0r
**Votes:** 11
**Link:** [https://leetcode.com/problems/palindrome-linked-list/solutions/1801437/](https://leetcode.com/problems/palindrome-linked-list/solutions/1801437/)

---

Hello Gophers!

## Solution 1: Convert to Array (Easy)

In this first solution, we first convert the linked list in an array ("slice" in Go),  
and we validate that the array is a palindrome.

Time: `O(n)`
Space: `O(n)`

```go
// Time: O(n+n) = O(2n) = O(n)
// Space: O(n)
func isPalindrome(head *ListNode) bool {
    // Space: O(n)
    current, slice := head, make([]int, 0)
    
    // Time: O(n)
    for current != nil {
        slice = append(slice, current.Val)
        current = current.Next
    }

    // Time: O(n)
    return isSlicePalindrome(slice)
}


// Time: O(n)
// Space: O(1)
func isSlicePalindrome(slice []int) bool {
    for i, j := 0, len(slice) - 1; i < j; i, j = i + 1, j - 1 {
        if slice[i] != slice[j] { return false }
    }
    return true
}
```

## Solution 2: Reverse Second Half In-place (Medium)

> Follow up: Could you do it in O(n) time and O(1) space?

The only way we can avoid using `O(n)` extra space is by modifying the input in-place.  

1. Find the middle of the linked list with the "Fast and Slow Pointer Algorithm" pattern
2. Split the linked list in two (We don't really split them, just for the example. See code)
3. Reverse one of the linked list (We'll reverse the second half)
4. Compare the two linked list

Example 1:

1. `1 -> 2 -> 3 -> 4 ->. 3 -> 2 -> 1` => middle is `3`
2. `1-> 2 -> 3` and `3 -> 2 -> 1`
3. `1-> 2 -> 3` and `1-> 2 -> 3`
4. They are the same: `return true`

Example 2:

1. `1 -> 2 -> 3 ->. 3 -> 2 -> 1` => middle is the second `3`
2. `1-> 2 -> 3` and `3 -> 2 -> 1`
3. `1-> 2 -> 3` and `1-> 2 -> 3`
4. They are the same: `return true`

Example 3:

1. `1 -> 2 -> 3 ->. 4 -> 5 -> 6 -> 7` => middle is `5`
2. `1-> 2 -> 3` and `5 -> 6 -> 7`
3. `1-> 2 -> 3` and `7-> 6 -> 5`
4. They are **not** the same: `return false`

Time: `O(n)`
Space: `O(1)`

```go
// isPalindrome checks whether a Linked List 
// is a palindrome (true) or not (false).
// Uncomment commented print functions to debug.
// Time: O(n+n+n) = O(3n) = O(n)
// Space: O(1)
func isPalindrome(head *ListNode) bool {
    // fmt.Println("Initial linked list: ")
    // print(head)
    
    // 1. Find middle node
	// Time: O(n)
    middle := middleNode(head)
    // fmt.Println("Middle of linked list: ")
    // print(middle)
    
    // 2. Reverse second half
	// Time: O(n)
    middle = reverseList(middle)
    // fmt.Println("Middle of linked list reversed: ")
    // print(middle)
    
    // 3. Compare two halves
	// Time: O(n)
    return areEquals(head, middle)
}

// middleNode returns the middle node of a linked list.
// It uses the "Fast and Slow Algorithm".
// Time: O(n)
// Space: O(1)
func middleNode(node *ListNode) *ListNode {
    var slow, fast *ListNode = node, node
    for slow != nil && fast != nil && fast.Next != nil {
        slow, fast = slow.Next, fast.Next.Next
    }
    return slow
}

// reverseList reverses the linked list.
// Time: O(n)
// Space: O(1)
func reverseList(node *ListNode) *ListNode {
    var previous, current *ListNode = nil, node
    for current != nil {
        previous, current, current.Next = current, current.Next, previous
    }
    return previous
}

// areEquals checks whether two linked lists
// are equals (true) or not (false).
// Time: O(n)
// Space: O(1)
func areEquals(n1, n2 *ListNode) bool {
    var current1, current2 *ListNode = n1, n2
    for current1 != nil && current2 != nil {
        if current1.Val != current2.Val {
            return false
        }
        current1, current2 = current1.Next, current2.Next
    }
    return true
}

// print prints the linked list.
// Useful to debug.
// Time: O(n)
// Space: O(1)
func print(node *ListNode) {
    var current *ListNode = node
    for current != nil {
        fmt.Printf("%v ", current.Val)
        if current.Next != nil {
            fmt.Print("-> ")
        }
        current = current.Next
    }
    fmt.Println()
    fmt.Println()
}
```

For more "Fast and Slow Algorithm" pattern solutions with Linked List problems solved in Go, see my second solution of the  [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/discuss/1787725/go-multiple-solutions-clean-code-0ms-100) and  [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/discuss/1790316/go-multiple-solutions-clean-and-commented-code-0ms-100) problems.


> Follow up: Could you do it in `O(n)` time and `O(1)` space **and the initial linked list must not be changed** ?


Simply re-reverse the half of the linked list that was reversed.  

Example 1:

1. `1 -> 2 -> 3 -> 4 ->. 3 -> 2 -> 1` => middle is `4`, take next (`3`)
2. `1-> 2 -> 3` and `3 -> 2 -> 1` (They are not *really* splited, so `1 -> 2 -> 3 -> 4 ->. 3 -> 2 -> 1`)
3. `1-> 2 -> 3` and `1-> 2 -> 3` (They are not *really* splited, so `1 -> 2 -> 3 -> 4 ->. 1 -> 2 -> 3`)
4. `1-> 2 -> 3` and `3 -> 2 -> 1` (They are not *really* splited, so `1 -> 2 -> 3 -> 4 ->. 3 -> 2 -> 1`)
5. They are the same: `return true`


```
// isPalindrome checks whether a Linked List 
// is a palindrome (true) or not (false).
// Uncomment commented print functions to debug.
// The initial linked list is not changed.
// Time: O(n+n+n+n) = O(3n) = O(n)
// Space: O(1)
func isPalindrome(head *ListNode) bool {
    fmt.Println("Initial linked list: ")
    print(head)
    
    // 1. Find middle node
	// Time: O(n)
    middle := middleNode(head)
    // fmt.Println("Middle of linked list: ")
    // print(middle)
    
    // 2. Reverse second half
	// Time: O(n)
    middle = reverseList(middle)
    // fmt.Println("Middle of linked list reversed: ")
    // print(middle)
    
    // 3. Compare two halves
	// Time: O(n)
    areEquals := areEquals(head, middle)
    
    // 4. Reorder the linked list
	// Time: O(n)
    middle = reverseList(middle)
    // fmt.Println("Linked list after second half is re-reversed: ")
    // print(head)
    
    return areEquals
    
}

// middleNode returns the middle node of a linked list.
// It uses the "Fast and Slow Algorithm".
// Time: O(n)
// Space: O(1)
func middleNode(node *ListNode) *ListNode {
    var slow, fast *ListNode = node, node
    for slow != nil && fast != nil && fast.Next != nil {
        slow, fast = slow.Next, fast.Next.Next
    }
    return slow
}

// reverseList reverses the linked list.
// Time: O(n)
// Space: O(1)
func reverseList(node *ListNode) *ListNode {
    var previous, current *ListNode = nil, node
    for current != nil {
        previous, current, current.Next = current, current.Next, previous
    }
    return previous
}

// areEquals checks whether two linked lists
// are equals (true) or not (false).
// Time: O(n)
// Space: O(1)
func areEquals(n1, n2 *ListNode) bool {
    var current1, current2 *ListNode = n1, n2
    for current1 != nil && current2 != nil {
        if current1.Val != current2.Val {
            return false
        }
        current1, current2 = current1.Next, current2.Next
    }
    return true
}

// print prints the linked list.
// Useful to debug.
// Time: O(n)
// Space: O(1)
func print(node *ListNode) {
    var current *ListNode = node
    for current != nil {
        fmt.Printf("%v ", current.Val)
        if current.Next != nil {
            fmt.Print("-> ")
        }
        current = current.Next
    }
    fmt.Println()
    fmt.Println()
}
```

Here are my solutions to other problems with this same algorithm pattern (Fast and Slow pointer):

- [Happy Number](https://leetcode.com/problems/happy-number/discuss/1790169/go-multiple-solutions-clean-code-0ms-100) 
- [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/discuss/1787725/go-multiple-solutions-clean-code-0ms-100)
- [Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/discuss/1790316/go-multiple-solutions-clean-and-commented-code-0ms-100)
- [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/discuss/1801437/go-multiple-solutions-clean-code-with-comments) (this problem)
- [Delete the Middle Node of a Linked List](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/discuss/1804509/Go-Fast-and-Slow-pointer-Clean-code-(220ms-100))
- [Reorder List](https://leetcode.com/problems/reorder-list/discuss/1804821/Go-Clean-and-commented-code-(4ms-100)) 

I hope it helped :)