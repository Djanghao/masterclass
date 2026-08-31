# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 11
**Link:** [https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/1928048/](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/1928048/)

---

```
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
class Solution {
    func sortedListToBST(_ head: ListNode?) -> TreeNode? {
        var nums: [ListNode] = []
        var curr = head
        
        while curr != nil {
            nums.append(curr!)
            curr = curr?.next
        }
        
        return sortedArrayToBST(nums)
    }
    
    
    func sortedArrayToBST(_ nums: [ListNode]) -> TreeNode? {
        let count = nums.count
        guard count > 0 else { return nil }
        
        let rootIndex = count / 2
        let root = TreeNode(nums[rootIndex].val)
        
        root.left = rootIndex > 0 ? sortedArrayToBST(Array(nums[0..<rootIndex])) : nil
        root.right = rootIndex < count - 1 ? sortedArrayToBST(Array(nums[rootIndex + 1..<count])) : nil
        return root
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.