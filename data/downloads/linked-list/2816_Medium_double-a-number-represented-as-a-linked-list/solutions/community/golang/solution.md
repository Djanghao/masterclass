# Golang O(n)/O(1) solution with explanations

**Author:** rison
**Votes:** 5
**Link:** [https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/3918500/](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/3918500/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to double the value of each node in the linked list, while considering carryover.
If the current node's value is 5 or greater, we need to carry over 1 to the next node.

# Approach
<!-- Describe your approach to solving the problem. -->
 1. Initialize a variable `ans` to keep track of the original head of the linked list.
 2. Check if the value of the current `head` node is greater than or equal to 5.
    a. If yes, create a new node with value 1 and set it as the new `head`.
    b. Update the `ans` and move `head` to the next node.
 3. Traverse through the linked list:
    a. If the next node's value is less than 5, update the current node's value to double of its original value.
    b. If the next node's value is 5 or greater, update the current node's value to double of its original value plus 1 (considering carryover) and then take modulo 10.
 4. Finally, update the value of the last node (handled outside the loop) with the doubled value considering carryover.

# Complexity
- Time complexity: O(n), where n is the number of nodes in the linked list.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1), as we are using a constant amount of extra space.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func doubleIt(head *ListNode) *ListNode {

	ans:=head
	if head.Val>=5{
		head=&ListNode{Val: 1, Next: head}
		ans=head
		head=head.Next
	}

	for head!=nil && head.Next!=nil{

		if head.Next.Val<5{
			head.Val=(head.Val*2)%10
		}else{
			head.Val=(head.Val*2+1)%10
		}
		
		head=head.Next
	}

	head.Val=(head.Val*2)%10
	return ans
}

```