# 82. Remove Duplicates from Sorted List II - with method Dummy node

**Author:** VladimirEliseev
**Votes:** 6
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/4414062/](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/4414062/)

---

# Intuition
Use dummy node.

# Approach
Dummy node.

# Complexity
- Time complexity: $$O(n)$$


- Space complexity: $$O(1)$$


# Code
```
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
	// \u0421\u043E\u0437\u0434\u0430\u0435\u043C \u0444\u0438\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0443\u0437\u0435\u043B, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043D\u0430 \u043D\u0430\u0447\u0430\u043B\u043E \u0441\u043F\u0438\u0441\u043A\u0430
	dummy := &ListNode{0, head}

	// \u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u0434\u0432\u0430 \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044F: prev \u0438 curr
	prev := dummy
	curr := head

	// \u041F\u0440\u043E\u0445\u043E\u0434\u0438\u043C \u043F\u043E \u0441\u043F\u0438\u0441\u043A\u0443
	for curr != nil {
		// \u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C, \u0435\u0441\u0442\u044C \u043B\u0438 \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0442\u044B
		for curr.Next != nil && curr.Val == curr.Next.Val {
			curr = curr.Next
		}

		// \u0415\u0441\u043B\u0438 curr \u043D\u0435 \u0441\u0434\u0432\u0438\u043D\u0443\u043B\u0430\u0441\u044C, \u0437\u043D\u0430\u0447\u0438\u0442, \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0442\u043E\u0432 \u043D\u0435\u0442
		if prev.Next == curr {
			prev = prev.Next
		} else {
			// \u0415\u0441\u043B\u0438 \u0441\u0434\u0432\u0438\u043D\u0443\u043B\u0430\u0441\u044C, \u0437\u043D\u0430\u0447\u0438\u0442, \u0435\u0441\u0442\u044C \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0442\u044B, \u0438 \u043C\u044B \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u0438\u0445
			prev.Next = curr.Next
		}

		curr = curr.Next
	}

	// \u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C \u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A
	return dummy.Next
}
```