# 🚀🚀🚀 Depth First Search (DFS) -> BEATS 100% by TC 🚀🚀🚀 by PRODONiK

**Author:** prodonik
**Votes:** 6
**Link:** [https://leetcode.com/problems/leaf-similar-trees/solutions/4533976/](https://leetcode.com/problems/leaf-similar-trees/solutions/4533976/)

---

![image.png](./images/0.png)

# Intuition
The problem involves comparing the leaf values of two binary trees for similarity. The intuition is to perform a depth-first traversal on both trees, collecting the leaf node values into separate lists. After traversal, compare the lists to determine leaf similarity.

# Approach
The approach is to use depth-first traversal (DFS) for both trees, collecting the leaf node values into separate lists (`list1` and `list2`). After the traversal, check if the lists are equal, indicating leaf similarity. The recursion stops when a leaf node is encountered, and its value is added to the list.

# Complexity
- Time complexity: $$O(n + m)$$, where $$n$$ and $$m$$ are the number of nodes in `root1` and `root2` respectively. The DFS traversal is performed on both trees.
- Space complexity: $$O(n + m)$$, as the algorithm uses additional space to store the leaf values in lists (`list1` and `list2`).

The time complexity is influenced by the DFS traversal, and the space complexity is determined by the storage of leaf values in lists. The lists are then compared, which adds to the overall space complexity.

![image.png](./images/1.png)
# CODE
```Java []
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
    public boolean leafSimilar(TreeNode root1, TreeNode root2) {
        List<Integer> list1 = new ArrayList<>();
        List<Integer> list2 = new ArrayList<>();
        recursion(root1, list1);
        recursion(root2, list2);
        return list1.equals(list2);
    }

    private void recursion(TreeNode node, List<Integer> list) {
        if (node == null) return;
        if (node.right == null && node.left == null) {
            list.add(node.val);
            return;
        }
        recursion(node.right, list);
        recursion(node.left, list);
    }
}
```
```C++ []
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode* left, TreeNode* right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    bool leafSimilar(TreeNode* root1, TreeNode* root2) {
        std::vector<int> list1;
        std::vector<int> list2;
        recursion(root1, list1);
        recursion(root2, list2);
        return list1 == list2;
    }

private:
    void recursion(TreeNode* node, std::vector<int>& list) {
        if (node == nullptr) return;
        if (node->right == nullptr && node->left == nullptr) {
            list.push_back(node->val);
            return;
        }
        recursion(node->right, list);
        recursion(node->left, list);
    }
};
```
```Python []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def leafSimilar(self, root1, root2):
        list1, list2 = [], []
        self.recursion(root1, list1)
        self.recursion(root2, list2)
        return list1 == list2

    def recursion(self, node, leaf_list):
        if node is None:
            return
        if node.left is None and node.right is None:
            leaf_list.append(node.val)
            return
        self.recursion(node.left, leaf_list)
        self.recursion(node.right, leaf_list)

```
```C# []
public class Solution
{
    public bool LeafSimilar(TreeNode root1, TreeNode root2)
    {
        List<int> list1 = new List<int>();
        List<int> list2 = new List<int>();
        Recursion(root1, list1);
        Recursion(root2, list2);
        return list1.Count == list2.Count && list1.TrueForAll((val, index) => val == list2[index]);
    }

    private void Recursion(TreeNode node, List<int> leafList)
    {
        if (node == null) return;
        if (node.left == null && node.right == null)
        {
            leafList.Add(node.val);
            return;
        }
        Recursion(node.left, leafList);
        Recursion(node.right, leafList);
    }
}
```
```Ruby []
class Solution
  def leaf_similar(root1, root2)
    list1, list2 = [], []
    recursion(root1, list1)
    recursion(root2, list2)
    list1 == list2
  end

  private

  def recursion(node, leaf_list)
    return if node.nil?

    if node.left.nil? && node.right.nil?
      leaf_list << node.val
      return
    end

    recursion(node.left, leaf_list)
    recursion(node.right, leaf_list)
  end
end

```
```Go []
func leafSimilar(root1 *TreeNode, root2 *TreeNode) bool {
	list1 := make([]int, 0)
	list2 := make([]int, 0)
	recursion(root1, &list1)
	recursion(root2, &list2)
	return reflect.DeepEqual(list1, list2)
}

func recursion(node *TreeNode, leafList *[]int) {
	if node == nil {
		return
	}

	if node.Left == nil && node.Right == nil {
		*leafList = append(*leafList, node.Val)
		return
	}

	recursion(node.Left, leafList)
	recursion(node.Right, leafList)
}
```
```Rust []
impl Solution {
    pub fn leaf_similar(root1: Option<Box<TreeNode>>, root2: Option<Box<TreeNode>>) -> bool {
        let mut list1 = Vec::new();
        let mut list2 = Vec::new();
        recursion(&root1, &mut list1);
        recursion(&root2, &mut list2);
        list1 == list2
    }

    fn recursion(node: &Option<Box<TreeNode>>, leaf_list: &mut Vec<i32>) {
        if let Some(node) = node {
            if node.left.is_none() && node.right.is_none() {
                leaf_list.push(node.val);
            }
            recursion(&node.left, leaf_list);
            recursion(&node.right, leaf_list);
        }
    }
}
```
![image.png](./images/2.png)


