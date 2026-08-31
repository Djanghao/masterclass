# Python 3 || 10 lines, list traversal  || T/S: 93% / 70%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5477221/](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5477221/)

---

Here's the plan:
1. We traverse the linked list and reset `head` at the first node for which its value is not in `nums`.
2. We record this node using `ans` and continue to traverse the linked list. 
3. For each node in the traverse, we "leapfrog" over any number of consecutive, subsequent nodes with values in `nums`. 
4. When we encounter a node with a value not in the list, we move to that node and continue the traverse.
5. We return `ans` as the head of the revised linked list.

```
class Solution:
    def modifiedList(self, nums: List[int], head: Optional[ListNode]) -> Optional[ListNode]:
        
        nums = set(nums)        
        
        while head.val in nums:                 # <-- 1)
            head = head.next

        ans = ListNode(head.val, head)          # <-- 2)
 
        while head and head.next:               # <-- 3)
            if head.next.val in nums:
                head.next = head.next.next

            else:                               # <-- 4)
                head = head.next

        return ans.next                         # <-- 5)

```
[https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/submissions/1327797714/](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/submissions/1327797714/)

I could be wrong, but I think that time complexity is *O*(*N* + *M*) and space complexity is *O*(*N*), in which *M* ~ the number of nodes in the linked list and *N* ~ `len(nums)`.