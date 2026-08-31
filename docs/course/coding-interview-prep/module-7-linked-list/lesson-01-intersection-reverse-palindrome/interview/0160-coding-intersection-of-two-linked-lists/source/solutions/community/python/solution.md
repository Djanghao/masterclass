# Concise python code with comments

**Author:** icrtiou
**Votes:** 787
**Link:** [https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/49798/](https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/49798/)

---

    class Solution:
        # @param two ListNodes
        # @return the intersected ListNode
        def getIntersectionNode(self, headA, headB):
            if headA is None or headB is None:
                return None
    
            pa = headA # 2 pointers
            pb = headB
    
            while pa is not pb:
                # if either pointer hits the end, switch head and continue the second traversal, 
                # if not hit the end, just move on to next
                pa = headB if pa is None else pa.next
                pb = headA if pb is None else pb.next
    
            return pa # only 2 ways to get out of the loop, they meet or the both hit the end=None
    
    # the idea is if you switch head, the possible difference between length would be countered. 
    # On the second traversal, they either hit or miss. 
    # if they meet, pa or pb would be the node we are looking for, 
    # if they didn't meet, they will hit the end at the same iteration, pa == pb == None, return either one of them is the same,None