# Python recursive solution with detailed comments (operate linked-list directly).

**Author:** OldCodingFarmer
**Votes:** 177
**Link:** [https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/35474/](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/35474/)

---

        
    # recursively
    def sortedListToBST(self, head):
        if not head:
            return 
        if not head.next:
            return TreeNode(head.val)
        # here we get the middle point,
        # even case, like '1234', slow points to '2',
        # '3' is root, '12' belongs to left, '4' is right
        # odd case, like '12345', slow points to '2', '12'
        # belongs to left, '3' is root, '45' belongs to right
        slow, fast = head, head.next.next
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
        # tmp points to root
        tmp = slow.next
        # cut down the left child
        slow.next = None
        root = TreeNode(tmp.val)
        root.left = self.sortedListToBST(head)
        root.right = self.sortedListToBST(tmp.next)
        return root