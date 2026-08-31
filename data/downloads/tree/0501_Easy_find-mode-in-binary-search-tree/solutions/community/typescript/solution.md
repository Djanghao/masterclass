# ✅ Beats 95.48% 🔥 || Inorder Traversal 🚀

**Author:** Gourav-2002
**Votes:** 19
**Link:** [https://leetcode.com/problems/find-mode-in-binary-search-tree/solutions/4233112/](https://leetcode.com/problems/find-mode-in-binary-search-tree/solutions/4233112/)

---

![Screenshot 2023-11-01 at 8.20.28\u202FAM.png](./images/0.png)

# Intuition:
**In this problem, we need to find the mode of the given BST. Mode is the element that occurs the most number of times in the given BST. We can solve this problem by using the inorder traversal of the BST. The inorder traversal of the BST gives us the elements in the sorted order. So, we can keep track of the previous element and the count of the current element. If the current element is equal to the previous element, we can increment the count. Otherwise, we can reset the count to 1. We can also keep track of the maximum count and the mode elements. If the current count is greater than the maximum count, we can reset the maximum count and the mode elements. If the current count is equal to the maximum count, we can append the current element to the mode elements. After the inorder traversal, we can return the mode elements.**

# Algorithm:
1. Initialize the mode elements, maximum count, previous element and the count of the previous element.
2. Traverse the BST in the inorder fashion.
3. If the previous element is None, set the previous element to the current element and set the count to 1.
4. If the previous element is equal to the current element, increment the count.
5. If the previous element is not equal to the current element, set the previous element to the current element and set the count to 1.
6. If the count is greater than the maximum count, set the maximum count to the count and reset the mode elements to the current element.
7. If the count is equal to the maximum count, append the current element to the mode elements.
8. Return the mode elements.

# Complexity Analysis:
- Time Complexity: **O(N)**, where N is the number of nodes in the BST.
- Space Complexity: **O(N)**, where N is the number of nodes in the BST.

## Please UpVote \u2B06\uFE0F if this helps you

# Code
``` Python []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findMode(self, root: Optional[TreeNode]) -> List[int]:
        
        if root is None:
            return []
        
        self.mode = []
        self.max_count = 0
        self.prev = None
        self.count = 0
        
        self.inorder(root)
        
        return self.mode
    
    def inorder(self, root):
            
            if root is None:
                return
            
            self.inorder(root.left)
            
            if self.prev is None:
                self.prev = root.val
                self.count = 1
            elif self.prev == root.val:
                self.count += 1
            else:
                self.prev = root.val
                self.count = 1
            
            if self.count > self.max_count:
                self.max_count = self.count
                self.mode = [root.val]
            elif self.count == self.max_count:
                self.mode.append(root.val)
            
            self.inorder(root.right)
```
``` C++ []
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
private:
    vector<int> mode;
    int max_count;
    int prev;
    int count;

public:
    vector<int> findMode(TreeNode* root) {
        if (root == NULL) {
            return mode;
        }

        mode.clear();
        max_count = 0;
        prev = -1;
        count = 0;

        inorder(root);

        return mode;
    }

    void inorder(TreeNode* root) {
        if (root == NULL) {
            return;
        }

        inorder(root->left);

        if (prev == -1) {
            prev = root->val;
            count = 1;
        } else if (prev == root->val) {
            count++;
        } else {
            prev = root->val;
            count = 1;
        }

        if (count > max_count) {
            max_count = count;
            mode = {root->val};
        } else if (count == max_count) {
            mode.push_back(root->val);
        }

        inorder(root->right);
    }
};
```
``` Java []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private List<Integer> mode = new ArrayList<>();
    private int max_count = 0;
    private int prev = -1;
    private int count = 0;

    public int[] findMode(TreeNode root) {
        if (root == null) {
            return new int[0];
        }

        mode.clear();
        max_count = 0;
        prev = -1;
        count = 0;

        inorder(root);

        int[] result = new int[mode.size()];
        for (int i = 0; i < mode.size(); i++) {
            result[i] = mode.get(i);
        }

        return result;
    }

    private void inorder(TreeNode root) {
        if (root == null) {
            return;
        }

        inorder(root.left);

        if (prev == -1) {
            prev = root.val;
            count = 1;
        } else if (prev == root.val) {
            count++;
        } else {
            prev = root.val;
            count = 1;
        }

        if (count > max_count) {
            max_count = count;
            mode = new ArrayList<>();
            mode.add(root.val);
        } else if (count == max_count) {
            mode.add(root.val);
        }

        inorder(root.right);
    }
}
```
``` JavaScript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let mode = [];
    let maxCount = 0;
    let prev = -1;
    let count = 0;

    const inorder = function(node) {
        if (node === null) {
            return;
        }

        inorder(node.left);

        if (prev === -1) {
            prev = node.val;
            count = 1;
        } else if (prev === node.val) {
            count++;
        } else {
            prev = node.val;
            count = 1;
        }

        if (count > maxCount) {
            maxCount = count;
            mode = [node.val];
        } else if (count === maxCount) {
            mode.push(node.val);
        }

        inorder(node.right);
    };

    inorder(root);

    return mode;
};
```
``` C# []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    List<int> mode = new List<int>();
    int maxCount = 0;
    int prev = -1;
    int count = 0;

    public int[] FindMode(TreeNode root) {
        InOrder(root);
        return mode.ToArray();
    }

    private void InOrder(TreeNode node) {
        if (node == null) return;

        InOrder(node.left);

        if (prev == -1) {
            prev = node.val;
            count = 1;
        } else if (prev == node.val) {
            count++;
        } else {
            prev = node.val;
            count = 1;
        }

        if (count > maxCount) {
            maxCount = count;
            mode.Clear();
            mode.Add(node.val);
        } else if (count == maxCount) {
            mode.Add(node.val);
        }

        InOrder(node.right);
    }
}
```
``` TypeScript []
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

function findMode(root: TreeNode | null): number[] {
    let mode: number[] = [];
    let maxCount = 0;
    let prev = -1;
    let count = 0;

    function inorder(node: TreeNode | null) {
        if (node === null) {
            return;
        }

        inorder(node.left);

        if (prev === -1) {
            prev = node.val;
            count = 1;
        } else if (prev === node.val) {
            count++;
        } else {
            prev = node.val;
            count = 1;
        }

        if (count > maxCount) {
            maxCount = count;
            mode = [node.val];
        } else if (count === maxCount) {
            mode.push(node.val);
        }

        inorder(node.right);
    }

    inorder(root);

    return mode;
}
```
``` PHP []
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($val = 0, $left = null, $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */
class Solution {

    /**
     * @param TreeNode $root
     * @return Integer[]
     */
    function findMode($root) {
        $this->mode = [];
        $this->maxCount = 0;
        $this->prev = null;
        $this->count = 0;
        
        $this->inOrder($root);
        
        return $this->mode;
    }
    
    function inOrder($node) {
        if ($node === null) {
            return;
        }

        $this->inOrder($node->left);

        if ($this->prev === null || $this->prev === $node->val) {
            $this->count++;
        } else {
            $this->count = 1;
        }

        if ($this->count > $this->maxCount) {
            $this->maxCount = $this->count;
            $this->mode = [$node->val];
        } elseif ($this->count === $this->maxCount) {
            $this->mode[] = $node->val;
        }

        $this->prev = $node->val;
        $this->inOrder($node->right);
    }
}
```
``` Ruby []
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Integer[]}
def find_mode(root)
    @mode = []
    @max_count = 0
    @prev = nil
    @count = 0
    
    in_order(root)
    
    return @mode
end

def in_order(node)
    return if node.nil?

    in_order(node.left)

    if @prev.nil? || @prev == node.val
        @count += 1
    else
        @count = 1
    end

    if @count > @max_count
        @max_count = @count
        @mode = [node.val]
    elsif @count == @max_count
        @mode << node.val
    end

    @prev = node.val
    in_order(node.right)
end
```

![image.png](./images/1.png)
