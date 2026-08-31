# [Python] DFS incredibly simple solution (5 lines)

**Author:** AndrewZaw
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/2096051/](https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/2096051/)

---


    def isValidSequence(self, root: Optional[TreeNode], arr: List[int]) -> bool:
        if root and arr and root.val == arr[0]:
            if len(arr) == 1 and not root.left and not root.right:
                return True
            return self.isValidSequence(root.left, arr[1:]) or self.isValidSequence(root.right, arr[1:])
        return False