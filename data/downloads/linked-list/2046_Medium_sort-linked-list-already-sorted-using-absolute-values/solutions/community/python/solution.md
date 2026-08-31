# Explanation: simple python with O(N) time and O(1) space

**Author:** ymin1103
**Votes:** 8
**Link:** [https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/1534387/](https://leetcode.com/problems/sort-linked-list-already-sorted-using-absolute-values/solutions/1534387/)

---

We use two pointer node, `prev` and `curr`, which starts from `head` and `head.next` respectively.

`answer` indicates the head of the linked list and it is same as `head` at very first time.
If there is no node with negative value, `answer` will be not changed.

`prev` and `curr` move right until `curr` reaches to the end of the linked list.

We can only just decide what to do based on sign of `curr.val`.

1. `curr.val` < 0
	We can move `curr` to the first of this linked list.
	Because the absolute value of the node is guranteed to increase, 
	We don't have to swap `curr` and its previous node one by one.
	
	So it takes `O(1)` time complexity.
	
	Swtich `curr` to `prev.next` because `curr` moved to the head.
	`prev` does not need to move.
	
	Do not forget to update the `answer` because the head of the linked list is modified.
	
2. `curr.val` > 0
	We don't need to swap the node. 
	We just move `prev` and `curr` node to the right one time.

We do not need to think about `0` because the linked list is already sorted by the absolute value.

As we do a linear search once in the linked list, the time complexity is `O(N)`.
And we only use three `ListNode` variable, so the space complexity is `O(1)`.
```
class Solution:
    def sortLinkedList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev, curr = head, head.next
        answer = head
        while(curr):
            if(curr.val < 0):
                prev.next = curr.next
                curr.next = answer
                answer = curr
                prev, curr = prev, prev.next
            else:
                prev, curr = curr, curr.next
        return answer
```

As I am not native to english, so grammer may be broken.
I wish you understand it.
And if you find any wrong point in this post, please let me know as I need to learn more.

Thanks for reading.
