# Go solution with explanation

**Author:** alekseiapa
**Votes:** 3
**Link:** [https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/5763145/](https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/5763145/)

---

# Intuition
To solve this problem, we need to insert a new node containing the Greatest Common Divisor (GCD) between every two adjacent nodes in a linked list. The GCD of two numbers is the largest positive integer that divides both numbers without leaving a remainder. By computing the GCD for each pair of adjacent nodes and inserting it as a new node, we can transform the list as required.

The intuition here is to traverse the linked list and for each pair of nodes, calculate their GCD and insert a new node with this GCD value in between them. This will require iterating through the list once, and for each pair, performing an O(log(min(a, b))) operation to compute the GCD.

# Approach
1. **Define the Linked List Node Structure**: Start by defining a `ListNode` struct to represent each node in the linked list.

2. **Implement the GCD Calculation Function**: Use the Euclidean algorithm to compute the GCD of two numbers efficiently. This is a well-known mathematical algorithm for finding the GCD.

3. **Traverse the Linked List**: Iterate through the linked list starting from the head. For each pair of adjacent nodes:
   - Compute the GCD of their values.
   - Create a new node with the computed GCD.
   - Insert this new node between the two nodes.
   - Move to the next pair of nodes.

4. **Return the Modified Linked List**: After processing all nodes, return the head of the modified linked list.

5. **Helper Functions**: Implement helper functions to create a linked list from an array, print the linked list, and handle any other utility tasks.

# Complexity
- **Time complexity**:  
  The time complexity of this approach is $$O(n \\cdot \\log(\\min(a, b)))$$, where:
  - $$n$$ is the number of nodes in the linked list.
  - $$\\log(\\min(a, b))$$ is the time complexity of the GCD calculation for each pair of adjacent nodes using the Euclidean algorithm.
  - Since we are iterating through the linked list once and inserting nodes in constant time, the overall complexity is dominated by the GCD calculations.

- **Space complexity**:  
  The space complexity is $$O(1)$$ if we don't consider the input and output space because the new nodes are inserted directly into the linked list. There is no additional space used apart from a few variables for computation. However, the space required to store the new nodes in the list is $$O(n)$$.


# Code
```golang []
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
// gcd calculates the greatest common divisor (GCD) of two integers using the Euclidean algorithm.
func gcd(a, b int) int {
	if b == 0 {
		return a
	}
	return gcd(b, a%b)
}

func insertGreatestCommonDivisors(head *ListNode) *ListNode {
	// Start from the head of the linked list
	current := head

	// Traverse the linked list
	for current != nil && current.Next != nil {
		// Calculate GCD of the current node and the next node
		gcdValue := gcd(current.Val, current.Next.Val)

		// Create a new node with the GCD value
		newNode := &ListNode{Val: gcdValue}

		// Insert the new node between current and next node
		newNode.Next = current.Next
		current.Next = newNode

		// Move to the next pair of nodes
		current = newNode.Next
	}

	return head
}
```