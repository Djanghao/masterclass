# 🔥 Clean 🐍python solution 🔥 simple 🔥 beats 100% 🔥 explanation 🔥

**Author:** thunderp1nk
**Votes:** 13
**Link:** [https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/3832053/](https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/3832053/)

---

# Intuition
When considering this problem, we need to be comfortable with various linked list operations and concepts. These include understanding how to traverse a linked list, reverse a section of it without disrupting the rest of the list, and reconnect reversed segments seamlessly back into the list. With these tools in hand, the problem becomes a matter of grouping nodes, reversing the groups of even length, and then reconnecting these altered groups back into a complete linked list.

# Approach
We use a two-pointer approach to solve this problem. One pointer, `connector`, keeps track of the node preceding the current group. The other, `curr`, navigates the nodes within the current group.

The process begins with `curr` pointing to the head of the list and `connector` being None. We also have two counters, `group_count` to keep track of which group we are in, and `count` to track the length of the current group.

We have a helper function, `reverse_between`, which performs an in-place reversal of a section of the linked list starting from the node after `pre`, and does this for `n` nodes. It uses the classic three-pointer method for list reversal, with a twist to maintain the continuity of the list. Instead of breaking off the section to be reversed, it leaves the start node of this section linked to the rest of the list and moves the remaining nodes one by one to the front. This results in the list being reversed, but the original start node is now the end node of the reversed section and still connected to the rest of the list. After the reversal, the function returns the new end node of the section (which was the original start node).

We proceed with traversing the list, checking at each step whether we are at the end of a group. This is determined either by the counters `group_count` and `count` being equal, or by reaching the end of the list (`curr.next` is None). If we are at the end of a group and the group has an even length, we reverse it with our helper function and update the pointers accordingly. We then increment `group_count` and reset `count` to 0. We repeat this until we have traversed the entire list.

This approach ensures that even-length groups are reversed while maintaining the continuity of the list.

# Complexity
- Time complexity: The time complexity is **O(n)**, where n is the number of nodes in the linked list. We achieve this by traversing the list only once, with each operation (reversing and reconnecting a group) taking constant time.

- Space complexity: The space complexity is **O(1)**. We use a fixed amount of space to store our pointers and counters, and since we perform the reversal in-place, we do not use any additional data structures that scale with the size of the input.

For a detailed explanation of the list reversal process used in reverse_between, you can refer to this [problem](https://leetcode.com/problems/reverse-linked-list-ii/description/).

# Code
```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseEvenLengthGroups(self, head: Optional[ListNode]) -> Optional[ListNode]:
        connector = None
        curr = head
        group_count = 1
        count = 1

        def reverse_between(pre, n):
            start = pre.next
            then = start.next
            after = start

            for _ in range(n - 1):
                start.next = then.next
                then.next = pre.next
                pre.next = then
                then = start.next

            return after

        while curr:
            if group_count == count or not curr.next:
                if count % 2 == 0:
                    curr = reverse_between(connector, count)
                connector = curr
                group_count += 1
                count = 0

            count += 1
            curr = curr.next

        return head

```