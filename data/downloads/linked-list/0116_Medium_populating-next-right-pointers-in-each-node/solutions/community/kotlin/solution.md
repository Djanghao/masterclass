# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 11
**Link:** [https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/2040150/](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solutions/2040150/)

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
class Solution {
    public Node connect(Node root) {
        if(root == null) return null;
        if(root.left != null) root.left.next = root.right;
        if(root.right != null && root.next != null) root.right.next = root.next.left;
        connect(root.left);
        connect(root.right);
        return root;
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
    Node* connect(Node* root) {
        if(root && root->left != NULL) {
            root->left->next = root->right;
            connect(root->left);
            if(root->next != NULL) root->right->next = root->next->left;
            connect(root->right);
        }
        
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
class Solution:
    def connect(self, root: 'Node') -> 'Node':
        # edge case check
        if not root:
            return None
        
        node = root # create a pointer to the root node
        
        # iterate only until we have a new level (because the connections for Nth level are done when we are at N-1th level)
        while node.left:
            head = node
            while head:
                head.left.next = head.right
                if head.next:
                    head.right.next = head.next.left
                    
                head = head.next
                
            node = node.left

        return root
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var connect = function(root) {
    let ptr = root;
    while(root && root.left){
        let temp = root;
        while(temp) {
            temp.left.next = temp.right;
            temp.right.next = temp.next ? temp.next.left : null;
            temp = temp.next;
        }
        root = root.left;
    }
    return ptr;
}
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***Kotlin***
```
class Solution {
    fun connect(root: Node?): Node? =
        if (root?.left == null && root?.right == null) root  //at bottom of tree      
        else root?.apply {  //connect next and recurse downwards
            left?.next = right
            right?.next = next?.left
            connect(left)
            connect(right)
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
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the number of nodes in the binary tree.
    //   - space: O(1), only constant space is used.

    func connect(_ root: Node?) -> Node? {
        var leftMost = root

        while leftMost?.left != nil {
            var head = leftMost
            while head != nil {
                head?.left?.next = head?.right
                if let next = head?.next {
                    head?.right?.next = next.left
                }
                head = head?.next
            }
            leftMost = leftMost?.left
        }

        return root
    }

}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***