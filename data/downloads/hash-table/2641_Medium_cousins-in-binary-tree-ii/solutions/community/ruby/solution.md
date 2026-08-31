# 🌳 Dynamic Tree Value Replacement Using Depth-First Search (DFS) 🌟 || 100%

**Author:** MaheshSavant
**Votes:** 0
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree-ii/solutions/5957944/](https://leetcode.com/problems/cousins-in-binary-tree-ii/solutions/5957944/)

---

# \uD83C\uDF1F Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve the problem of replacing each node's value in the binary tree, we need to traverse the tree level by level. For each level, the new value of a node is calculated as the sum of all node values in that level, minus the sum of its own child node values.

# \uD83D\uDE80 Approach
<!-- Describe your approach to solving the problem. -->
1. **Depth-First Search (DFS) Traversal**: We use a DFS approach where we traverse the tree in a level-wise manner using an array. This array holds the nodes at each level.
2. **Sum Calculation**: For each level, compute the total sum of all node values. This will help in determining the new value for each node in the next step.
3. **Value Replacement**: For each node at the current level, update its child nodes' values to `totalSum - sum of child node values`.
4. **Recursive DFS Call**: Recursively process the child nodes at the next level.

# \u23F1\uFE0F Complexity
- **Time Complexity**:  
  The time complexity is $$O(n)$$, where $$n$$ is the number of nodes in the tree, as each node is processed once.

- **Space Complexity**:  
  The space complexity is $$O(n)$$ due to the space used by the recursive stack and the array storing the nodes at each level.

# video Solution \uD83D\uDC47
<iframe width="560" height="315" src="https://www.youtube.com/embed/UIrargaZ61M?si=KoO75S_CjWtMD_dJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# \uD83D\uDCBB Code
```java []
class Solution {
    public TreeNode replaceValueInTree(TreeNode root) {
        dfs(new TreeNode[] {root});
        root.val = 0; // Setting root's value to 0
        return root;
    }

    private void dfs(TreeNode[] arr) {
        if (arr.length == 0) return;

        int sum = 0;
        for (TreeNode node : arr) {
            if (node == null) continue;
            if (node.left != null) sum += node.left.val;
            if (node.right != null) sum += node.right.val;
        }

        TreeNode[] childArr = new TreeNode[arr.length * 2];
        int index = 0;
        for (TreeNode node : arr) {
            int curSum = 0;
            if (node.left != null) curSum += node.left.val;
            if (node.right != null) curSum += node.right.val;

            if (node.left != null) {
                node.left.val = sum - curSum; 
                childArr[index++] = node.left;
            }
            if (node.right != null) {
                node.right.val = sum - curSum;
                childArr[index++] = node.right;
            }
        }

        dfs(java.util.Arrays.copyOf(childArr, index));
    }
}

```
```C []
#include <stdio.h>
#include <stdlib.h>

typedef struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
} TreeNode;

TreeNode* createNode(int val) {
    TreeNode* node = (TreeNode*)malloc(sizeof(TreeNode));
    node->val = val;
    node->left = node->right = NULL;
    return node;
}

void replaceValueInTree(TreeNode* root);
void dfs(TreeNode** arr, int length);

int main() {
    // Example tree creation and function call
    TreeNode* root = createNode(1);
    root->left = createNode(2);
    root->right = createNode(3);

    replaceValueInTree(root);
    printf("Root value after replacement: %d\
", root->val);
    return 0;
}

void replaceValueInTree(TreeNode* root) {
    TreeNode* arr[1] = {root};
    dfs(arr, 1);
    root->val = 0;
}

void dfs(TreeNode** arr, int length) {
    if (length == 0) return;

    int sum = 0;
    for (int i = 0; i < length; i++) {
        if (arr[i] == NULL) continue;
        if (arr[i]->left != NULL) sum += arr[i]->left->val;
        if (arr[i]->right != NULL) sum += arr[i]->right->val;
    }

    TreeNode* childArr[length * 2];
    int index = 0;

    for (int i = 0; i < length; i++) {
        int curSum = 0;
        if (arr[i]->left != NULL) curSum += arr[i]->left->val;
        if (arr[i]->right != NULL) curSum += arr[i]->right->val;

        if (arr[i]->left != NULL) {
            arr[i]->left->val = sum - curSum;
            childArr[index++] = arr[i]->left;
        }
        if (arr[i]->right != NULL) {
            arr[i]->right->val = sum - curSum;
            childArr[index++] = arr[i]->right;
        }
    }

    dfs(childArr, index);
}

```
```CPP []
#include <iostream>
#include <vector>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

void dfs(vector<TreeNode*>& arr);
TreeNode* replaceValueInTree(TreeNode* root);

int main() {
    // Example tree creation
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);

    replaceValueInTree(root);
    cout << "Root value after replacement: " << root->val << endl;
    return 0;
}

TreeNode* replaceValueInTree(TreeNode* root) {
    vector<TreeNode*> arr = {root};
    dfs(arr);
    root->val = 0;
    return root;
}

void dfs(vector<TreeNode*>& arr) {
    if (arr.empty()) return;

    int sum = 0;
    for (TreeNode* node : arr) {
        if (!node) continue;
        if (node->left) sum += node->left->val;
        if (node->right) sum += node->right->val;
    }

    vector<TreeNode*> childArr;
    for (TreeNode* node : arr) {
        int curSum = 0;
        if (node->left) curSum += node->left->val;
        if (node->right) curSum += node->right->val;

        if (node->left) {
            node->left->val = sum - curSum;
            childArr.push_back(node->left);
        }
        if (node->right) {
            node->right->val = sum - curSum;
            childArr.push_back(node->right);
        }
    }

    dfs(childArr);
}

```
```C# []
using System;
using System.Collections.Generic;

public class TreeNode {
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution {
    public TreeNode ReplaceValueInTree(TreeNode root) {
        DFS(new List<TreeNode> { root });
        root.val = 0;
        return root;
    }

    private void DFS(List<TreeNode> arr) {
        if (arr.Count == 0) return;

        int sum = 0;
        foreach (var node in arr) {
            if (node.left != null) sum += node.left.val;
            if (node.right != null) sum += node.right.val;
        }

        var childArr = new List<TreeNode>();
        foreach (var node in arr) {
            int curSum = 0;
            if (node.left != null) curSum += node.left.val;
            if (node.right != null) curSum += node.right.val;

            if (node.left != null) {
                node.left.val = sum - curSum;
                childArr.Add(node.left);
            }
            if (node.right != null) {
                node.right.val = sum - curSum;
                childArr.Add(node.right);
            }
        }

        DFS(childArr);
    }

    public static void Main(string[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        var solution = new Solution();
        solution.ReplaceValueInTree(root);
        Console.WriteLine("Root value after replacement: " + root.val);
    }
}

```
```Python []
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def replace_value_in_tree(root):
    def dfs(arr):
        if not arr:
            return
        total_sum = sum((node.left.val if node.left else 0) + (node.right.val if node.right else 0) for node in arr)
        children = []
        for node in arr:
            current_sum = (node.left.val if node.left else 0) + (node.right.val if node.right else 0)
            if node.left:
                node.left.val = total_sum - current_sum
                children.append(node.left)
            if node.right:
                node.right.val = total_sum - current_sum
                children.append(node.right)
        dfs(children)
    
    dfs([root])
    root.val = 0
    return root

# Example usage
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
replace_value_in_tree(root)
print("Root value after replacement:", root.val)

```
```JavaScript []
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function replaceValueInTree(root) {
    function dfs(arr) {
        if (arr.length === 0) return;
        
        let sum = arr.reduce((acc, node) => {
            if (node.left) acc += node.left.val;
            if (node.right) acc += node.right.val;
            return acc;
        }, 0);
        
        let children = [];
        for (let node of arr) {
            let curSum = 0;
            if (node.left) curSum += node.left.val;
            if (node.right) curSum += node.right.val;
            
            if (node.left) {
                node.left.val = sum - curSum;
                children.push(node.left);
            }
            if (node.right) {
                node.right.val = sum - curSum;
                children.push(node.right);
            }
        }
        
        dfs(children);
    }

    dfs([root]);
    root.val = 0;
    return root;
}

// Example usage
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
replaceValueInTree(root);
console.log("Root value after replacement:", root.val);

```
```Rust []
use std::rc::Rc;
use std::cell::RefCell;

#[derive(Debug)]
struct TreeNode {
    val: i32,
    left: Option<Rc<RefCell<TreeNode>>>,
    right: Option<Rc<RefCell<TreeNode>>>,
}

fn replace_value_in_tree(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
    fn dfs(arr: &Vec<Option<Rc<RefCell<TreeNode>>>>) {
        if arr.is_empty() {
            return;
        }

        let sum: i32 = arr.iter().map(|node| {
            node.as_ref().map_or(0, |n| {
                let n = n.borrow();
                let left_val = n.left.as_ref().map_or(0, |l| l.borrow().val);
                let right_val = n.right.as_ref().map_or(0, |r| r.borrow().val);
                left_val + right_val
            })
        }).sum();

        let mut children = vec![];

        for node in arr.iter() {
            if let Some(n) = node {
                let mut n = n.borrow_mut();
                let cur_sum = n.left.as_ref().map_or(0, |l| l.borrow().val)
                            + n.right.as_ref().map_or(0, |r| r.borrow().val);
                
                if let Some(left) = n.left.as_mut() {
                    left.borrow_mut().val = sum - cur_sum;
                    children.push(Some(left.clone()));
                }

                if let Some(right) = n.right.as_mut() {
                    right.borrow_mut().val = sum - cur_sum;
                    children.push(Some(right.clone()));
                }
            }
        }

        dfs(&children);
    }

    dfs(&vec![root.clone()]);
    if let Some(r) = root.clone() {
        r.borrow_mut().val = 0;
    }
    root
}

fn main() {
    let root = Some(Rc::new(RefCell::new(TreeNode {
        val: 1,
        left: Some(Rc::new(RefCell::new(TreeNode {
            val: 2,
            left: None,
            right: None,
        }))),
        right: Some(Rc::new(RefCell::new(TreeNode {
            val: 3,
            left: None,
            right: None,
        }))),
    })));

    replace_value_in_tree(root);
}

```
```Ruby []
class TreeNode
  attr_accessor :val, :left, :right

  def initialize(val = 0, left = nil, right = nil)
    @val = val
    @left = left
    @right = right
  end
end

def replace_value_in_tree(root)
  dfs([root])
  root.val = 0
  root
end

def dfs(arr)
  return if arr.empty?

  sum = arr.reduce(0) do |acc, node|
    acc += node.left.val if node.left
    acc += node.right.val if node.right
    acc
  end

  children = []
  arr.each do |node|
    cur_sum = 0
    cur_sum += node.left.val if node.left
    cur_sum += node.right.val if node.right

    if node.left
      node.left.val = sum - cur_sum
      children << node.left
    end

    if node.right
      node.right.val = sum - cur_sum
      children << node.right
    end
  end

  dfs(children)
end

# Example usage
root = TreeNode.new(1)
root.left = TreeNode.new(2)
root.right = TreeNode.new(3)
replace_value_in_tree(root)
puts "Root value after replacement: #{root.val

```
```Go []
package main

import "fmt"

type TreeNode struct {
    Val   int
    Left  *TreeNode
    Right *TreeNode
}

func replaceValueInTree(root *TreeNode) *TreeNode {
    dfs([]*TreeNode{root})
    root.Val = 0
    return root
}

func dfs(arr []*TreeNode) {
    if len(arr) == 0 {
        return
    }

    sum := 0
    for _, node := range arr {
        if node.Left != nil {
            sum += node.Left.Val
        }
        if node.Right != nil {
            sum += node.Right.Val
        }
    }

    children := []*TreeNode{}
    for _, node := range arr {
        curSum := 0
        if node.Left != nil {
            curSum += node.Left.Val
        }
        if node.Right != nil {
            curSum += node.Right.Val
        }

        if node.Left != nil {
            node.Left.Val = sum - curSum
            children = append(children, node.Left)
        }
        if node.Right != nil {
            node.Right.Val = sum - curSum
            children = append(children, node.Right)
        }
    }

    dfs(children)
}

func main() {
    root := &TreeNode{Val: 1}
    root.Left = &TreeNode{Val: 2}
    root.Right = &TreeNode{Val: 3}

    replaceValueInTree(root)
    fmt.Printf("Root value after replacement: %d\
", root.Val)
}

```
```Kotlin []
class TreeNode(var `val`: Int, var left: TreeNode? = null, var right: TreeNode? = null)

fun replaceValueInTree(root: TreeNode?): TreeNode? {
    dfs(listOf(root))
    root?.`val` = 0
    return root
}

fun dfs(arr: List<TreeNode?>) {
    if (arr.isEmpty()) return

    val sum = arr.sumOf { node ->
        (node?.left?.`val` ?: 0) + (node?.right?.`val` ?: 0)
    }

    val children = mutableListOf<TreeNode?>()
    for (node in arr) {
        var curSum = 0
        curSum += node?.left?.`val` ?: 0
        curSum += node?.right?.`val` ?: 0

        node?.left?.`val` = sum - curSum
        node?.right?.`val` = sum - curSum

        node?.left?.let { children.add(it) }
        node?.right?.let { children.add(it) }
    }
    dfs(children)
}

fun main() {
    val root = TreeNode(1)
    root.left = TreeNode(2)
    root.right = TreeNode(3)

    replaceValueInTree(root)
    println("Root value after replacement: ${root.`val`}")
}

```
