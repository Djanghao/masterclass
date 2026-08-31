# Recursive Approach gave O(N) Beats 100 % | 0 - ms

**Author:** Solution_Assist
**Votes:** 4
**Link:** [https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/5665889/](https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/5665889/)

---

### Intuition

Try to understand the fundamental difference between postorder traversal and other types of tree traversal, such as preorder or inorder. In postorder traversal, the order of visit is important \u2013 we must first visit all the children of a node before visiting the node itself. This bottom-up approach is the opposite of preorder traversal, where we visit the node first and then its children. The postorder traversal starts from the leaf nodes and gradually works the way up to the root.
Now Trees, by their very definition, are recursively defined \u2013 each node in a tree can be seen as the root of a smaller subtree. This recursive structure suggests that we can tackle the problem by breaking down the larger tree into smaller, more manageable subproblems i.e by processing the children of a node before the node itself, we can naturally capture the postorder traversal order. 


In short:
- For any node, you should first traverse all of its children. This means you need to visit each subtree rooted at the children before processing the current node.
- After you have visited all of the children you then add the value of the current node itself to the result.
```
        1
       /|\\
      3 2 4
     / \\
    5   6
```
Input: root = [1,null,3,2,4,null,5,6]
Understand it like this 

vist 1 explore its children - 3,2,4

visit 3 explore its childern -5,6

visit 5 no children to explore (add 5 to traversal)

visit 6 no children to explore ( add 6 to traversal)

visit 3 no children left to explore (add 3 to traversal)

visit 2 no children to explore (add 3 to traversla )

visit 4 no children to explore (add 4 to travesal)

Output: [5,6,3,2,4,1]
### Approach



My approach to solving this is:

1. **Initialization**:
   - We start by initializing an empty `result` list to store the postorder traversal of the n-ary tree.
   - This `result` list will store the values of the nodes in the correct postorder sequence.

2. **Base Case**:
   - We define a base case for the recursion: if the `root` node is `null`, we simply return the empty `result` list, as there is nothing to traverse.

3. **Recursive Traversal Function**:
   - We define a helper function called `traverse` that performs the recursive postorder traversal.
   - The `traverse` function takes two parameters: the current `node` being processed and the `result` list to store the traversal.

4. **Recursive Exploration of Children**:
   - Inside the `traverse` function, we first recursively call the `traverse` function on each child of the current `node`.
   - By recursively calling `traverse` on each child, we ensure that we visit all the children of the current `node` from left to right before visiting the `node` itself. This aligns with the postorder traversal order.

5. **Adding Node Value**:
   - After all the children have been visited, we add the current `node`'s value to the `result` list.
   - This step ensures that the node's value is only added to the result after all its descendants have been processed, following the postorder traversal principle.

6. **Initiating the Traversal**:
   - To start the postorder traversal, we call the `traverse` function with the `root` node and the `result` list as arguments.

7. **Returning the Result**:
   - Once the recursive traversal is complete, the `result` list contains the postorder traversal sequence, which we return as the final output.

The pseudocode for this approach can be summarized as follows:

```pseudo
function postorder(root):
    result = empty list
    if root is null:
        return result
    traverse(root, result)
    return result

function traverse(node, result):
    for each child in node.children:
        traverse(child, result)
    result.add(node.val)
```





### Complexity Analysis

 **Time Complexity $O(N)$**
The time complexity of this solution is **O(N)**, where N is the total number of nodes in the n-ary tree Because:

1. We visit each node exactly once during the postorder traversal. The recursive calls to the `traverse` function ensure that we explore the entire depth of each subtree before moving on to the next sibling subtree.
2. The loop that iterates over the children of each node has a time complexity of O(k), where k is the number of children for the current node. However, since the sum of the number of children for all nodes in the tree is equal to N (the total number of nodes), the overall time complexity remains O(N).
3. The constant-time operations, such as adding a value to the `result` list, do not contribute significantly to the overall time complexity.



 **Space Complexity $O(N)$**
The space complexity of this solution is also **O(N)**, where N is the total number of nodes in the n-ary tree Because:

1. We need to store the result of the postorder traversal in the `result` list. In the worst case, the n-ary tree could be a linear structure (i.e., each node has only one child), in which case the depth of the recursion would be N, and we would need to store N values in the `result` list.
2. The space used for the function call stack during the recursive calls is proportional to the depth of the tree, which is O(N) in the worst case.
3. Apart from the `result` list and the function call stack, the solution does not require any additional data structures that would contribute significantly to the space complexity.





### Code
```java []
public class Solution {
    public List<Integer> postorder(Node root) {
        List<Integer> result = new ArrayList<>();
        if (root != null) {
            traverse(root, result);
        }
        return result;
    }
    private void traverse(Node node, List<Integer> result) {
        for (Node child : node.children) {
            traverse(child, result);
        }
        result.add(node.val);
    }
}

```

```C++ []
class Solution {
public:
    vector<int> postorder(Node* root) {
        vector<int> result;
        if (root != nullptr) {
            traverse(root, result);
        }
        return result;
    }

private:
    void traverse(Node* node, vector<int>& result) {
        for (auto* child : node->children) {
            traverse(child, result);
        }
        result.push_back(node->val);
    }
};

```
```C# []
public class Solution {
    public IList<int> Postorder(Node root) {
        List<int> result = new List<int>();
        if (root != null) {
            Traverse(root, result);
        }
        return result;
    }

    private void Traverse(Node node, List<int> result) {
        foreach (var child in node.children) {
            Traverse(child, result);
        }
        result.Add(node.val);
    }
}


```
```Python []
class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        result = []
        if root:
            self.traverse(root, result)
        return result

    def traverse(self, node: 'Node', result: List[int]):
        for child in node.children:
            self.traverse(child, result)
        result.append(node.val)


```
```kotlin []
class Solution {
    fun postorder(root: Node?): List<Int> {
        val result = mutableListOf<Int>()
        if (root != null) {
            traverse(root, result)
        }
        return result
    }

    private fun traverse(node: Node, result: MutableList<Int>) {
        for (child in node.children) {
            child?.let { traverse(it, result) }
        }
        result.add(node.`val`)
    }
}


```
```Go []
func postorder(root *Node) []int {
    result := []int{}
    if root != nil {
        traverse(root, &result)
    }
    return result
}

func traverse(node *Node, result *[]int) {
    for _, child := range node.Children {
        traverse(child, result)
    }
    *result = append(*result, node.Val)
}


```
```JavaScript []
/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const result = [];
    if (root !== null) {
        traverse(root, result);
    }
    return result;
};

function traverse(node, result) {
    for (const child of node.children) {
        traverse(child, result);
    }
    result.push(node.val);
}


```
```TypeScript []
function postorder(root: _Node | null): number[] {
    const result: number[] = [];
    if (root !== null) {
        traverse(root, result);
    }
    return result;
}

function traverse(node: _Node, result: number[]): void {
    for (const child of node.children) {
        traverse(child, result);
    }
    result.push(node.val);
}


```
```Rust []
impl Solution {
    pub fn postorder(root: Option<Rc<RefCell<Node>>>) -> Vec<i32> {
        let mut result = Vec::new();
        if let Some(node) = root {
            Self::traverse(&node, &mut result);
        }
        result
    }

    fn traverse(node: &Rc<RefCell<Node>>, result: &mut Vec<i32>) {
        for child in node.borrow().children.iter() {
            Self::traverse(child, result);
        }
        result.push(node.borrow().val);
    }
}


```
---


### Example 1

**Input:** `root = [1,null,3,2,4,null,5,6]`

**Tree Structure:**
```
        1
       /|\\
      3 2 4
     / \\
    5   6
```


**Dry Run:**

1. **Initialize:**
   - Call `postorder(root)` with `root` being the node with value `1`.
   - Initialize `result` as an empty list: `result = []`.

2. **Start Traversal:**
   - Call `traverse(root, result)` with `node = 1`.

3. **Traverse Node 1:**
   - Node `1` has children `[3, 2, 4]`.

4. **Traverse Child 3:**
   - Call `traverse(3, result)`.
   - Node `3` has children `[5, 6]`.

5. **Traverse Child 5 of Node 3:**
   - Call `traverse(5, result)`.
   - Node `5` has no children.
   - Add `5` to `result`: `result = [5]`.
   - Return to the previous call (Node `3`).

6. **Traverse Child 6 of Node 3:**
   - Call `traverse(6, result)`.
   - Node `6` has no children.
   - Add `6` to `result`: `result = [5, 6]`.
   - Return to the previous call (Node `3`).

7. **Complete Node 3 Traversal:**
   - Add `3` to `result` after processing all its children: `result = [5, 6, 3]`.
   - Return to the previous call (Node `1`).

8. **Traverse Node 2:**
   - Call `traverse(2, result)`.
   - Node `2` has no children.
   - Add `2` to `result`: `result = [5, 6, 3, 2]`.
   - Return to the previous call (Node `1`).

9. **Traverse Node 4:**
   - Call `traverse(4, result)`.
   - Node `4` has no children.
   - Add `4` to `result`: `result = [5, 6, 3, 2, 4]`.
   - Return to the previous call (Node `1`).

10. **Complete Node 1 Traversal:**
    - Add `1` to `result` after processing all its children: `result = [5, 6, 3, 2, 4, 1]`.

11. **Return Result:**
    - The final output of the traversal is `[5, 6, 3, 2, 4, 1]`.

### Example 2

**Input:** `root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]`

**Tree Structure:**
```
        1
     / |   \\  \\
    /  |    \\  \\
    2  3     4  5
      /|     |  | \\
     6 7     8  9 10
       |     |  |
       11    12 13
       |        
       14       
```




**Dry Run:**

1. **Initialize:**
   - Call `postorder(root)` with `root` being the node with value `1`.
   - Initialize `result` as an empty list: `result = []`.

2. **Start Traversal:**
   - Call `traverse(root, result)` with `node = 1`.

3. **Traverse Node 1:**
   - Node `1` has children `[2, 3, 4, 5]`.

4. **Traverse Child 2 of Node 1:**
   - Call `traverse(2, result)`.
   - Node `2` has no children.
   - Add `2` to `result`: `result = [2]`.
   - Return to the previous call (Node `1`).

5. **Traverse Child 3 of Node 1:**
   - Call `traverse(3, result)`.
   - Node `3` has children `[6, 7]`.

6. **Traverse Child 6 of Node 3:**
   - Call `traverse(6, result)`.
   - Node `6` has no children.
   - Add `6` to `result`: `result = [2, 6]`.
   - Return to the previous call (Node `3`).

7. **Traverse Child 7 of Node 3:**
   - Call `traverse(7, result)`.
   - Node `7` has children `[11]`.

8. **Traverse Child 11 of Node 7:**
   - Call `traverse(11, result)`.
   - Node `11` has children `[14]`.

9. **Traverse Child 14 of Node 11:**
   - Call `traverse(14, result)`.
   - Node `14` has no children.
   - Add `14` to `result`: `result = [2, 6, 14]`.
   - Return to the previous call (Node `11`).

10. **Complete Node 11 Traversal:**
    - Add `11` to `result`: `result = [2, 6, 14, 11]`.
    - Return to the previous call (Node `7`).

11. **Complete Node 7 Traversal:**
    - Add `7` to `result`: `result = [2, 6, 14, 11, 7]`.
    - Return to the previous call (Node `3`).

12. **Complete Node 3 Traversal:**
    - Add `3` to `result`: `result = [2, 6, 14, 11, 7, 3]`.
    - Return to the previous call (Node `1`).

13. **Traverse Child 4 of Node 1:**
    - Call `traverse(4, result)`.
    - Node `4` has children `[8]`.

14. **Traverse Child 8 of Node 4:**
    - Call `traverse(8, result)`.
    - Node `8` has children `[12]`.

15. **Traverse Child 12 of Node 8:**
    - Call `traverse(12, result)`.
    - Node `12` has no children.
    - Add `12` to `result`: `result = [2, 6, 14, 11, 7, 3, 12]`.
    - Return to the previous call (Node `8`).

16. **Complete Node 8 Traversal:**
    - Add `8` to `result`: `result = [2, 6, 14, 11, 7, 3, 12, 8]`.
    - Return to the previous call (Node `4`).

17. **Complete Node 4 Traversal:**
    - Add `4` to `result`: `result = [2, 6, 14, 11, 7, 3, 12, 8, 4]`.
    - Return to the previous call (Node `1`).

18. **Traverse Child 5 of Node 1:**
    - Call `traverse(5, result)`.
    - Node `5` has children `[9, 10]`.

19. **Traverse Child 9 of Node 5:**
    - Call `traverse(9, result)`.
    - Node `9` has children `[13]`.

20. **Traverse Child 13 of Node 9:**
    - Call `traverse(13, result)`.
    - Node `13` has no children.
    - Add `13` to `result`: `result = [2, 6, 14, 11, 7, 3, 12, 8, 4, 13]`.
    - Return to the previous call (Node `9`).

21. **Complete Node 9 Traversal:**
    - Add `9` to `result`: `result = [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9]`.
    - Return to the previous call (Node `5`).

22. **Traverse Child 10 of Node 5:**
    - Call `traverse(10, result)`.
    - Node `10` has no children.
    - Add `10` to `result`: `result = [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10]`.
    - Return to the previous call (Node `5`).

23. **Complete Node 5 Traversal:**
    - Add `5` to `result`: `result = [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5]`.
    - Return to the previous call (Node `1`).

24. **Complete Node 1 Traversal:**
    - Add `1` to `result`: `result = [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1]`.

25. **Return Result:**
    - The final output of the traversal is `[2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1]`.

