# Diff langs: Nested Iterative BFS \ Recursive DFS

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/3234352/](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/3234352/)

---

# Intuition
Nested BFS (iterative) and DFS (recursive).

# Approach
1. C++: Iterative nested BFS. Deque, vector, valarray.
2. Java: Iterative nested BFS. Deque, list.
3. Python: Iterative ested BFS. Deque, list.
2. Python3: Iterative nested BFS. Deque, lists.
3. C: Recursive nested preorder DFS. Direct tree nodes manipulation.
5. Javascript: Iterative nested BFS. Removed duplication of cycles (e.g. see C++ solution). Arrays.
5. Ruby: Iterative nested BFS. Removed duplication of cycles (e.g. see C++ solution). Arrays.
6. Swift: Iterative nested BFS. Arrays. 
7. Go: Iterative nested BFS. Slices.
4. Scala: Recursive nested preorder DFS. Direct tree nodes manipulation.
5. Kotlin: Recursive nested preorder DFS.
2. Racket: Recursive nested preorder DFS.
3. Erlang: Recursive nested preorder DFS.
4. Elixir: Recursive nested preorder DFS.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
## C++ - Go

```cpp []
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
  int meanOfSubtree(TreeNode* root) {
    std::vector<int> res; 
    std::deque<TreeNode*> queue;
    queue.push_back(root);
    while (!queue.empty()) {
      int currSize = queue.size();
      while (currSize) {
        TreeNode* currNode = queue.front();
        queue.pop_front();
        currSize -= 1;
        res.push_back(currNode->val);
        if (currNode->left){
          queue.push_back(currNode->left);
        }
        if (currNode->right){
          queue.push_back(currNode->right);
        }
      }
    }    
    std::valarray<int> fin(res.data(), res.size());
    return fin.sum() / fin.size();      
  }
public:
  int averageOfSubtree(TreeNode* root) {
    int res = 0;
    std::deque<TreeNode*> queue;
    queue.push_back(root);
    while (!queue.empty()) {
      int currSize = queue.size();
      while (currSize) {
        TreeNode* currNode = queue.front();
        queue.pop_front();
        currSize -= 1;
        if (currNode->val == meanOfSubtree(currNode)) {
          res++;
        }
        if (currNode->left){
          queue.push_back(currNode->left);
        }
        if (currNode->right){
          queue.push_back(currNode->right);
        }
      }
    }    
    return res;
  }
};
```
```java []
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
  private static int meanOfSubtree(TreeNode root) {
    List<Integer> res = new ArrayList<>(); 
    Deque<TreeNode> queue = new ArrayDeque<>();
    queue.add(root);
    while (!queue.isEmpty()) {
      int currSize = queue.size();
      while (currSize > 0) {
        TreeNode currNode = queue.pop();
        currSize -= 1;
        res.add(currNode.val);
        if (currNode.left != null){
          queue.add(currNode.left);
        }
        if (currNode.right != null){
          queue.add(currNode.right);
        }
      }
    }
    int sum = res.stream().reduce(0, Integer::sum);
    int n = res.size();    
    return sum / n;      
  }
  public int averageOfSubtree(TreeNode root) {
    int res = 0;
    Deque<TreeNode> queue = new ArrayDeque<>();
    queue.add(root);
    while (!queue.isEmpty()) {
      int currSize = queue.size();
      while (currSize > 0) {
        TreeNode currNode = queue.pop();
        currSize -= 1;
        if (currNode.val == meanOfSubtree(currNode)) {
          res++;
        }
        if (currNode.left != null) {
          queue.add(currNode.left);
        }
        if (currNode.right != null) {
          queue.add(currNode.right);
        }
      }
    }    
    return res;
  }
};
```
```python []
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def averageOfSubtree(self, root):
    """
    :type root: Optional[TreeNode]
    :rtype: int
    """
    res = 0
    queue = collections.deque()
    queue.append(root)
    while queue:
      currSize = len(queue)
      while currSize:
        currNode = queue.popleft()
        currSize -= 1
        if currNode.val == meanOfSubtree(currNode):
          res += 1
        if currNode.left:
          queue.append(currNode.left)
        if currNode.right:
          queue.append(currNode.right)
    return res
def meanOfSubtree(root):
  res = []  
  queue = collections.deque()
  queue.append(root)
  while queue:
    currSize = len(queue)
    while currSize:
      currNode = queue.popleft()
      currSize -= 1
      res.append(currNode.val)
      if currNode.left:
        queue.append(currNode.left)
      if currNode.right:
        queue.append(currNode.right)
  return math.floor(mean(res))
def mean(lst):
  return sum(lst) / len(lst)
```
```python3 []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def averageOfSubtree(self, root: Optional[TreeNode]) -> int:
    res = 0
    queue = collections.deque()
    queue.append(root)
    while queue:
      currSize = len(queue)
      while currSize:
        currNode = queue.popleft()
        currSize -= 1
        if currNode.val == meanOfSubtree(currNode):
          res += 1
        if currNode.left:
          queue.append(currNode.left)
        if currNode.right:
          queue.append(currNode.right)
    return res

def meanOfSubtree(root: Optional[TreeNode]) -> int:
  res = []  
  queue = collections.deque()
  queue.append(root)
  while queue:
    currSize = len(queue)
    while currSize:
      currNode = queue.popleft()
      currSize -= 1
      res.append(currNode.val)
      if currNode.left:
        queue.append(currNode.left)
      if currNode.right:
        queue.append(currNode.right)
  return math.floor(mean(res))
```
```c []
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int size(struct TreeNode *root) {
  if (root == NULL){
     return 0;
  }
  if (root->left == NULL && root->right == NULL) {
    return 1;
  }    
  return 1 + size(root->left) + size(root->right);
}
int sum(struct TreeNode *root) {
  if (root == NULL) {
    return 0;
  }
  return root->val + sum(root->left) +  sum(root->right);
}   
int averageOfSubtree(struct TreeNode *root) {
  if (root == NULL){ 
    return 0;
  }        
  if (root->left == NULL && root->right == NULL) {
    return 1;
  } 
  return (sum(root) / size(root) == root->val) + 
    averageOfSubtree(root->left) + 
    averageOfSubtree(root->right);
}
```
```javascript []
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
 * @return {number}
 */
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
 * @return {number}
 */
var averageOfSubtree = function(root) {
  var int_mean = function(x) { 
    return Math.floor(x.reduce((a, b) => a + b, 0) / x.length); 
  }
  var extract_vals = function(x) { 
    return x.val;
  }
  var id = function(x) { 
    return x; 
  }
  values = visit(id, extract_vals, root);
  nodes = visit(id, id, root);
  var res = 0;
  for (let i = 0; i < nodes.length; i++) {
    if(values[i] == visit(int_mean, extract_vals, nodes[i])) {
      res++;
    }
  }
  return res;
};
var visit = function(accumulate, transform, root) {
  var res = [];
  var queue = [];
  queue.push(root);  
  while (queue.length != 0) {
    var currSize = queue.length;
    while (currSize) {
      var currNode = queue.shift();
      res.push(transform(currNode)); 
      currSize -= 1;       
      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
    }
  }    
  return accumulate(res);
};
```
```ruby []
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
# @return {Integer}
def average_of_subtree(root)
  int_mean = lambda { |x|  x.sum / x.length }
  extract_vals = lambda { |x| x.val }
  id = lambda { |x| x }
  values = visit(id, extract_vals, root)
  nodes = visit(id, id, root)
  res = 0
  for i in 0...nodes.length 
    if values[i] == visit(int_mean, extract_vals, nodes[i])
      res += 1
    end
  end
  res
end
def visit (accumulate, transform, root) 
  res = Array.new
  queue = Array.new
  queue.push(root)  
  while queue.length != 0 
    currSize = queue.length
    currList = Array.new
    while currSize > 0
      currNode = queue.shift()
      res.push(transform.call(currNode))         
      currSize -= 1
      if currNode.left 
        queue.push(currNode.left)
      end
      if currNode.right 
        queue.push(currNode.right)
      end
    end    
  end
  accumulate.call(res)
end
```
```swift []
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
  func averageOfSubtree(_ root: TreeNode?) -> Int {
    let nodes = visit(root)
    let node_value = nodes.map { $0.val }
    let subree_average = nodes.map { 
      visit($0).reduce(0, { $0 + $1.val}) / visit($0).count 
    } 
    return zip(node_value, subree_average)
             .filter { $0.0 == $0.1 }
             .count
  };
  func visit( _ root: TreeNode?) -> [TreeNode] {
    var res = [TreeNode]()
    var queue = [TreeNode]()    
    if let rt = root {
      queue.append(rt)
    }
    while !queue.isEmpty {
      var currSize = queue.count
      while currSize > 0 {
        let currNode = queue.removeFirst()
        res.append(currNode)     
        currSize -= 1
        if let cl = currNode.left {
          queue.append(cl)
        }
        if let cr = currNode.right {
          queue.append(cr)
        }
      }
    }    
  return res  
  }       
}
```
```golang []
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func averageOfSubtree(root *TreeNode) int {
  nodes := visit(root)
  node_values := []int{}
  for _, node := range nodes {
    node_values = append(node_values,node.Val)
  }
  subtree_average := []int{}
  for _, node := range nodes {
      subtree := visit(node)
      sum := 0
      for _, subnode := range subtree {
        sum += subnode.Val
      } 
      subtree_average = append(subtree_average, sum / len(subtree))
  }
  res := 0
  for i, _ := range node_values {
    if node_values[i] == subtree_average[i] {
      res += 1
    }
  }
  return res
}
func visit(root *TreeNode) []*TreeNode {
  res := []*TreeNode{}
  queue := []*TreeNode{}
  queue = append(queue, root)
  for len(queue) != 0 {
    currSize := len(queue)   
      for currSize != 0 {
        currNode := queue[0]
        queue = queue[1:]
        res = append(res, currNode)       
        currSize -= 1
        if currNode.Left != nil {
          queue = append(queue, currNode.Left)
        }
        if currNode.Right != nil {
          queue = append(queue, currNode.Right)
        }
      }
    }    
  return res   
}
```

## Scala - Dart
```scala []
/**
 * Definition for a binary tree node.
 * class TreeNode(_value: Int = 0, _left: TreeNode = null, _right: TreeNode = null) {
 *   var value: Int = _value
 *   var left: TreeNode = _left
 *   var right: TreeNode = _right
 * }
 */
object Solution {
  def size(root: TreeNode ): Int = root match {
    case null => 0
    case _ => { 
      if (root.left == null && root.right == null) {
        return 1;
      }    
      1 + size(root.left) + size(root.right);
    }
  }
  def sum(root: TreeNode) : Int = root match {
    case null => 0
    case _ => { 
      root.value + sum(root.left) +  sum(root.right);
    }
  }
  def averageOfSubtree(root: TreeNode): Int = root match {
    case null => 0
    case _ => {        
      if (root.left == null && root.right == null) {
        return 1;
      } 
      bool_to_int((sum(root) / size(root)).floor == root.value) + 
        averageOfSubtree(root.left) + 
        averageOfSubtree(root.right);
    }
  }
  def bool_to_int(x: Boolean): Int = x match {
    case true => 1
    case false => 0
  }
}
```
```kotlin []
/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
  fun size(node: TreeNode?): Int {
    if (node ==null) {
      return 0 
    }
    if ((node.left == null) and (node.right == null)) {
      return 1;
    }    
    return 1 + size(node.left) + size(node.right)
  }
  fun sum(node: TreeNode?) : Int {
    if (node == null) {
      return 0;
    }
    return node.`val` + sum(node.left) +  sum(node.right);
  }

  fun bool_to_int(x: Boolean): Int {
    when (x) {
      true -> return 1
      false -> return 0
    }
  }
  fun averageOfSubtree(root: TreeNode?): Int {
    if (root ==null) {
      return 0
    }     
    if ((root.left == null )and (root.right == null)) {
      return 1;
    } 
    return bool_to_int((sum(root)  / size(root)) == root.`val`) + 
          averageOfSubtree(root.left) + 
          averageOfSubtree(root.right);
  }   
}
```
```racket []
; Definition for a binary tree node.
#|

; val : integer?
; left : (or/c tree-node? #f)
; right : (or/c tree-node? #f)
(struct tree-node
  (val left right) #:mutable #:transparent)

; constructor
(define (make-tree-node [val 0])
  (tree-node val #f #f))

|#
(define/contract (average-of-subtree root)
  (-> (or/c tree-node? #f) exact-integer?)
  (match root  
    [#f 0]          
    [node (if (and 
            (boolean? (tree-node-right root)) 
            (boolean? (tree-node-left root))) 
            1 
          (+ (bool-to-int (equal? 
                                (quotient (sum root)(size root)) 
                                (tree-node-val root))) 
            (average-of-subtree (tree-node-left root))  
            (average-of-subtree (tree-node-right root))))]))
(define/match (bool-to-int x)
  [(#t) 1]
  [(#f) 0])
(define/match (size node) 
  [(#f) 0]       
  [(node)(if (and 
               (boolean? (tree-node-right node)) 
               (boolean? (tree-node-left node))) 
            1 
          (+  1
              (size (tree-node-left node))  
              (size (tree-node-right node)))) ])
(define/match (sum node)   
  [(#f) 0] 
  [(node) (+ (tree-node-val node)
             (sum (tree-node-left node)) 
             (sum (tree-node-right node)))])
```
```Erlang []
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).
-spec average_of_subtree(Root :: #tree_node{} | null) -> integer().
average_of_subtree(null) -> 0;
average_of_subtree(Root) ->
  LLeaf = Root#tree_node.left,
  RLeaf = Root#tree_node.right,
  Value = Root#tree_node.val,
  if (RLeaf =:= null) and (LLeaf =:= null) ->
    Value;
  true -> ok end,
  bool_to_int(floor(sum(Root) / tree_size(Root)) =:= Value) + 
    average_of_subtree(LLeaf) + 
    average_of_subtree(RLeaf).
%% Convert boolean value to integer
bool_to_int(true) -> 1;
bool_to_int(false)->0.
%% Calculate the subtree size 
tree_size(null) -> 0;
tree_size(Node) ->
  LLeaf = Node#tree_node.left,
  RLeaf = Node#tree_node.right,
  if (RLeaf =:= null) and (LLeaf =:= null)->
    1;
  true -> ok end,
  1 + tree_size(LLeaf) + tree_size(RLeaf).
%% Culaculate sum of the subtree nodes.
sum(null) -> 0;
sum(Node) ->
  Node#tree_node.val + 
    sum(Node#tree_node.left) +  
    sum(Node#tree_node.right).  
```
```Elixir []
# Definition for a binary tree node.
#
# defmodule TreeNode do
#   @type t :: %__MODULE__{
#           val: integer,
#           left: TreeNode.t() | nil,
#           right: TreeNode.t() | nil
#         }
#   defstruct val: 0, left: nil, right: nil
# end
defmodule Solution do
  @spec average_of_subtree(root :: TreeNode.t | nil) :: integer
  def average_of_subtree(nil), do: 0;
  def average_of_subtree(root) do
    if (root.left == nil) and (root.right == nil) do
      root.val;
    end
    bool_to_int(Float.floor(sum(root) / tree_size(root)) == root.val) + 
      average_of_subtree(root.left) + 
      average_of_subtree(root.right)
  end
  #Convert boolean val to integer
  def bool_to_int(true), do: 1 
  def bool_to_int(false), do: 0
  # Calculate the subtree size 
  def tree_size(nil), do: 0
  def tree_size(node) do
    if (node.left == nil) and (node.right == nil) do
      1;
    end
    1 + tree_size(node.left) + tree_size(node.right)
  end
  # Calculate sum of the subtree nodes.
  def sum(nil), do: 0
  def sum(node) do
    node.val + 
      sum(node.left) +  
      sum(node.right)
  end
end
```
