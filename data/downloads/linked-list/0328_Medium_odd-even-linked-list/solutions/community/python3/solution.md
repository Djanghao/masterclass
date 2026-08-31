# 🔥Python3🔥 Two pointers

**Author:** MeidaChen
**Votes:** 81
**Link:** [https://leetcode.com/problems/odd-even-linked-list/solutions/2881885/](https://leetcode.com/problems/odd-even-linked-list/solutions/2881885/)

---

The problem needs to be solved with O(1) space, which leaves us no other choice but to try to use pointers to reorganize the linked list.
(1) We use a ```odd``` pointer to link all the odd-positioned nodes, and a ```even``` pointer to link all the even-positioned nodes.
(2) We connect the two linked lists at the end, i.e., connect the last node in the odd list to the first node in the even list.

A few things we need to take care of:
 - There is a pointer that always points to the first node of the original linked list so we can return it (This is easy, just don't change ```head``` at all).
 - There is a pointer that always points to the second node of the original linked list so that, in the end, we can connect the last odd node to it. (This is also easy, just create ```evenHead``` points to the second node at the beginning)
 - After the iteration of connecting odd nodes to odd nodes and even nodes to even nodes, the ```odd``` pointer has to point to the last odd node (so we can connect it to ```evenHead```).

 ```python
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head: return None
        
        # odd points to the first node 
        odd = head
        # even points to the second node
        # evenHead will be used at the end to connect odd and even nodes
        evenHead = even = head.next
        
        # This condition makes sure odd can never be None, since the odd node will always be the one before the even node.
        # If even is not None, then odd is not None. (odd before even)
        # If even.next is not None, then after we update odd to the next odd node, it cannot be None. (The next odd node is even.next)
        while even and even.next:
            
            # Connect the current odd node to the next odd node
            odd.next = odd.next.next
            # Move the current odd node to the next odd node
            odd = odd.next
            
            #Same thing for even node
            even.next = even.next.next
            even = even.next
        
        # Connect the last odd node to the start of the even node
        odd.next = evenHead

        # head never changed, so return it
        return head
```

**Upvote** if you like this post.

**Connect with me on [LinkedIn](https://www.linkedin.com/in/meida-chen-938a265b/)** if you'd like to discuss other related topics

\uD83C\uDF1F If you are interested in **Machine Learning** || **Deep Learning** || **Computer Vision** || **Computer Graphics** related projects and topics, check out my **[YouTube Channel](https://www.youtube.com/@meidachen8489)**! Subscribe for regular updates and be part of our growing community.
