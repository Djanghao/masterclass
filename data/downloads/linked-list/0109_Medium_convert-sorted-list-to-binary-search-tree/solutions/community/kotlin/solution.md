# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 5
**Link:** [https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/2010993/](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/2010993/)

---

```
```

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

```
```

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* ***Java***
```
public class Solution {
public TreeNode sortedListToBST(ListNode head) {
    if(head==null) return null;
    return toBST(head,null);
}
public TreeNode toBST(ListNode head, ListNode tail){
    ListNode slow = head;
    ListNode fast = head;
    if(head==tail) return null;
    
    while(fast!=tail&&fast.next!=tail){
        fast = fast.next.next;
        slow = slow.next;
    }
    TreeNode thead = new TreeNode(slow.val);
    thead.left = toBST(head,slow);
    thead.right = toBST(slow.next,tail);
    return thead;
}
}
```

```
```

```
```

The best result for the code below is ***0ms / 7.0MB*** (beats 100.00% / 100.00%).
* ***C++***
```
class Solution {
public:
    TreeNode* sortedListToBST(ListNode* head, ListNode* tail = NULL) {
        if (head == tail) 
            return NULL;
        
        ListNode* fast = head, *slow = head;
        while (fast != tail && fast->next != tail) {
            slow = slow->next;
            fast = fast->next->next;
        }
        
        TreeNode* root = new TreeNode(slow->val);
        root->left = sortedListToBST(head, slow);
        root->right = sortedListToBST(slow->next, tail);
        
        return root;
    }
    
};
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
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
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var sortedListToBST = function(head) {
    let curr = head, count = 0
    while (curr) curr = curr.next, count++
    const treeify = (i, j) => {
        if (j < i) return null
        let mid = i + j >> 1, node = new TreeNode()
        node.left = treeify(i, mid - 1)
        node.val = curr.val, curr = curr.next
        node.right = treeify(mid + 1, j)
        return node
    }
    curr = head
    return treeify(1, count)
};
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***Kotlin***
```
fun sortedListToBST(head: ListNode?): TreeNode? {
        val N = size(head) // size of LL
        if (N == 0) return null
        if (N == 1) return TreeNode(head!!.`val`)
        val A = IntArray(N) // LL data in array
        populate(A, head) // fill the array
        return construct(head, A, 0, N - 1)
    }
    
    private fun construct(head: ListNode?, A: IntArray, start: Int, end: Int): TreeNode? {
        if (start > end) return null
        val mid = (start + end) / 2
        val root = TreeNode(A[mid])
        root.left = construct(head, A, start, mid - 1)
        root.right = construct(head, A, mid + 1, end)
        return root
    }
    
    private fun size(head: ListNode?): Int {
        if (head == null) return 0
        if (head.next == null) return 1
        var ans = 0
        var node = head
        while (node != null) {
            ans++
            node = node.next
        }
        return ans
    }
    
    private fun populate(A: IntArray, head: ListNode?) {
        var node = head
        for (i in A.indices) {
            A[i] = node!!.`val`
            node = node?.next
        }
    }
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
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

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***
