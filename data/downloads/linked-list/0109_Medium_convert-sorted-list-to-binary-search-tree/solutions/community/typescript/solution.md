# Typescript || Divide and Conquer

**Author:** webdot
**Votes:** 2
**Link:** [https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/3285682/](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/3285682/)

---

# Code
```
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedListToBST(head: ListNode | null): TreeNode | null {

    const toBST = (head: ListNode | null, tail: ListNode | null): TreeNode | null => {
        let slow = head;
        let fast = head;

        if(head === tail) return null;

        while (fast !== tail && fast.next !== tail) {
            slow = slow.next;
            fast = fast.next.next;
        }

        const currHead = new TreeNode(slow.val);
        currHead.left = toBST(head, slow);
        currHead.right = toBST(slow.next, tail);
        
        return currHead;
    }

    return head === null ? null : toBST(head, null)
};
```