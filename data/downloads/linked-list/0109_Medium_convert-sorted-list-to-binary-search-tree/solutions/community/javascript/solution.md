# JS, Python, Java, C++ | Easy Recursive Solution w/ Explanation

**Author:** sgallivan
**Votes:** 34
**Link:** [https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/1194228/](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/1194228/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

In order to build a **height-balanced binary tree**, we need to ensure that roughly half of the total number of nodes are on either side of the root, and the only way to know what half of the total number of nodes is requires finding the total number of nodes first.

With this in mind, one easy solution would be to convert the linked list to an array, then we have handy access not only to the total length of the array, but also index-access to the node values, as well. At that point, we could define a **recursive** helper to build a tree from the middle node, recursively calling itself to build subtrees from the nodes on the left and right of the middle node. This option would take an **extra O(N) space** to complete.

Should we not want to use up that much extra space, we could instead keep the linked list and lose the index-access nature of the array, using **Floyd's Cycle Detection Algorithm** to easily find the middle node on each recursion step. This would, however, require iterating through parts of the linked list repeatedly, driving the **time complexity** from **O(N)** to **O(N log N)**.

But we can do even better: We can complete this problem in **O(N) time** with only **O(log N) extra space** (in excess of the output space).

First, we'll have to iterate once through the linked list to count the total number of nodes (**count**). Then, we can define our recursive helper (**treeify()**)using index numbers as our arguments. Even though we won't be able to access the listnodes directly by index number, we can take advantage of an **inorder tree traversal** to force our access to go in iterative order.

We'll need to have our list pointer (**curr**) have global scope in order to update properly via recursion. In an inorder traversal, we recursively process the left subtree, then process the middle node, then recursively process the right subtree. For this solution, we'll just need to make sure we move **curr** to **curr.next** at the end of processing the middle node.

We can then **return** the full tree built by our recursive helper.

 - _**Time Complexity: O(N)** where **N** is the length of the linked list_
 - _**Space Complexity: O(log N)** in excess of the space needed for the input/output, due to the recursion stack_

---

#### ***Implementation:***

For Python, we can store our list index pointer (**curr**) in a list to give it global scope so that it will update properly.

---

#### ***Javascript Code:***

The best result for the code below is **92ms / 43.6MB** (beats 91% / 95%).
```javascript
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

---

#### ***Python Code:***

The best result for the code below is **120ms / 20.0MB** (beats 95% / 60%).
```python
class Solution:
    def sortedListToBST(self, head: ListNode) -> TreeNode:
        curr, count = head, 0
        while curr:
            curr = curr.next
            count += 1
        def treeify(i: int, j: int) -> TreeNode:
            if j < i: return None
            mid, node = i + j >> 1, TreeNode()
            node.left = treeify(i, mid - 1)
            node.val, curr[0] = curr[0].val, curr[0].next
            node.right = treeify(mid + 1, j)
            return node
        curr = [head]
        return treeify(1, count)
```

---

#### ***Java Code:***

The best result for the code below is **0ms / 39.8MB** (beats 100% / 56%).
```java
class Solution {
    ListNode curr;
    public TreeNode sortedListToBST(ListNode head) {
        int count = 0;
        curr = head;
        while (curr != null) {
            curr = curr.next;
            count++;
        }
        curr = head;
        return treeify(1, count);
    }
    private TreeNode treeify(int i, int j) {
        if (j < i) return null;
        int mid = i + j >> 1;
        TreeNode node = new TreeNode();
        node.left = treeify(i, mid - 1);
        node.val = curr.val;
        curr = curr.next;
        node.right = treeify(mid + 1, j);
        return node;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **16ms / 30.9MB** (beats 100% / 68%).
```c++
class Solution {
private:
    ListNode* curr;
    TreeNode* treeify(int i, int j) {
        if (j < i) return nullptr;
        int mid = (i + j) >> 1;
        TreeNode* node = new TreeNode();
        node->left = treeify(i, mid - 1);
        node->val = curr->val, curr = curr->next;
        node->right = treeify(mid + 1, j);
        return node;
    }
public:
    TreeNode* sortedListToBST(ListNode* head) {
        int count = 0;
        curr = head;
        while (curr) curr = curr->next, count++;
        curr = head;
        return treeify(1, count);
    }
};
```