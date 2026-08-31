# ✅ the best recursive solution (0ms)

**Author:** codeninja8
**Votes:** 5
**Link:** [https://leetcode.com/problems/add-one-row-to-tree/solutions/5031010/](https://leetcode.com/problems/add-one-row-to-tree/solutions/5031010/)

---


# Code
``` java []
class Solution {
    public TreeNode addOneRow(TreeNode root, int val, int depth) {
        if (root == null) return null;

        if (depth == 1) {
            root = new TreeNode(val, root, null);
        } else if (depth == 2) {
            root.left = new TreeNode(val, root.left, null);
            root.right = new TreeNode(val, null, root.right);
        } else {
            addOneRow(root.left, val, depth - 1);
            addOneRow(root.right, val, depth - 1);
        }

        return root;
    }
}
```
``` python []
class Solution(object):
    def addOneRow(self, root, val, depth):
        if root == None: return None

        if depth == 1:
            root = TreeNode(val, root, None)
        elif depth == 2:
            root.left = TreeNode(val, root.left, None)
            root.right = TreeNode(val, None, root.right)
        else:
            self.addOneRow(root.left, val, depth - 1)
            self.addOneRow(root.right, val, depth - 1)
        
        return root
```
``` javascript []
var addOneRow = function(root, val, depth) {
    if (root == null) return null;

    if (depth == 1) {
        root = new TreeNode(val, root, null);
    } else if (depth == 2) {
        root.left = new TreeNode(val, root.left, null);
        root.right = new TreeNode(val, null, root.right);
    } else {
        addOneRow(root.left, val, depth - 1);
        addOneRow(root.right, val, depth - 1);
    }

    return root;
};
```
``` c []
struct TreeNode* createTreeNode(int val, struct TreeNode* left, struct TreeNode* right) {
    struct TreeNode* node = malloc(sizeof(struct TreeNode)); 
    node->val = val;
    node->left = left;
    node->right = right;   

    return node;
}

struct TreeNode* addOneRow(struct TreeNode* root, int val, int depth) {
    if (root == NULL) return NULL;

    if (depth == 1) {
        root = createTreeNode(val, root, NULL);
    } else if (depth == 2) {
        root->left = createTreeNode(val, root->left, NULL);
        root->right = createTreeNode(val, NULL, root->right);
    } else {
        addOneRow(root->left, val, depth - 1);
        addOneRow(root->right, val, depth - 1);
    }

    return root;
}
```
``` cpp []
class Solution {
public:
    TreeNode* addOneRow(TreeNode* root, int val, int depth) {
        if (root == NULL) return NULL;

        if (depth == 1) {
            root = new TreeNode(val, root, NULL);
        } else if (depth == 2) {
            root->left = new TreeNode(val, root->left, NULL);
            root->right = new TreeNode(val, NULL, root->right);
        } else {
            addOneRow(root->left, val, depth - 1);
            addOneRow(root->right, val, depth - 1);            
        }

        return root;
    }   
};
```
``` php []
class Solution {
    function addOneRow($root, $val, $depth) {
        if ($root == null) return null;

        if ($depth == 1) {
            $root = new TreeNode($val, $root, null);
        } else if ($depth == 2) {
            $root->left = new TreeNode($val, $root->left, null);
            $root->right = new TreeNode($val, null, $root->right);
        } else {
            $this->addOneRow($root->left, $val, $depth - 1);
            $this->addOneRow($root->right, $val, $depth - 1);
        }

        return $root;
    }
}
```
``` golang []
func addOneRow(root *TreeNode, val int, depth int) *TreeNode {
    if root == nil {
        return nil
    }

    if depth == 1 {
        root = &TreeNode{Val: val, Left: root}
    } else if (depth == 2) {
        root.Left = &TreeNode{Val: val, Left: root.Left}
        root.Right = &TreeNode{Val: val, Right: root.Right}
    } else {
        addOneRow(root.Left, val, depth - 1)
        addOneRow(root.Right, val, depth - 1)
    }

    return root;
}
```
``` ruby []
def add_one_row(root, val, depth)
    return nil if root.nil?

    if depth == 1
        root = TreeNode.new(val, root)
    elsif depth == 2
        root.left = TreeNode.new(val, root.left)
        root.right = TreeNode.new(val, nil, root.right)
    else
        add_one_row(root.left, val, depth - 1)
        add_one_row(root.right, val, depth - 1)
    end

    return root
end
```
``` racket []
(define (add-one-row root val depth)
  (cond [(eq? root #f) #f]
        [(eq? depth 1) (tree-node val root #f)]
        [(eq? depth 2) (tree-node (tree-node-val root) (tree-node val (tree-node-left root) #f) (tree-node val #f (tree-node-right root)))]
        [else (tree-node (tree-node-val root) (add-one-row (tree-node-left root) val (sub1 depth)) (add-one-row (tree-node-right root) val (sub1 depth)))]))
```