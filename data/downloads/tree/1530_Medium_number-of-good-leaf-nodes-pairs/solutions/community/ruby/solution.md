# It always DFS | O(N) | All languages

**Author:** deleted_user
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5495221/](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/solutions/5495221/)

---

# Intuition
The problem requires counting pairs of leaf nodes in a binary tree such that the shortest path between them is less than or equal to a given distance. To solve this, we need to consider the distances between leaf nodes and ensure that these distances meet the specified criteria.
# Approach
1. **Depth-First Search (DFS):** Use DFS to traverse the tree and collect distances from each node to its leaf nodes.
2. **Leaf Node Check:** If a node is a leaf (no left or right child), return an array with a single element 0, representing the distance from the leaf to itself.
3. **Distance Collection:** For each non-leaf node, collect distances from its left and right subtrees.
4. **Pair Counting:** For each pair of distances from the left and right subtrees, check if their sum (plus 2, for the edges connecting to the current node) is less than or equal to the given distance. If so, increment the count of good leaf node pairs.
5. **Distance Merging:** Combine the distances from the left and right subtrees, incrementing each by 1 to account for the edge connecting to the current node.
6. **Recursive Aggregation:** Recursively apply the above steps to traverse the entire tree, ensuring all pairs of leaf nodes are considered.
# Complexity
#### Time complexity: $$O(N + d^2)$$
- **DFS Traversal:** The DFS traversal visits each node exactly once, making the time complexity $$O(N)$$, where $$N$$ is the number of nodes in the tree.
- **Pair Counting:** For each node, the distances from the left and right subtrees are compared pairwise. In the worst case, if there are 
$$d$$ distances, comparing them takes $$O(d^2)$$ time. Since 
$$d$$ is generally small and depends on the depth and structure of the tree, this does not significantly affect the overall complexity, keeping it around $$O(N)$$.
#### Space complexity:
- **Recursive Call Stack:** The depth of the recursion tree is the height of the binary tree, which is $$O(H)$$, where $$H$$ is the height of the tree. In the worst case, for a skewed tree, $$H$$ can be $$O(N)$$.
- **Distance Storage:** Each node stores distances to its leaf nodes, which could take $$O(H)$$ space at each node. Summing up for all nodes, this can also be bounded by $$O(N)$$.
# Code
#### TypeScript
```TypeScript
function countPairs(root: TreeNode | null, distance: number): number {
    if (!root) return 0;

    let ans = 0;

    const dfs = (node: TreeNode | null): number[] => {
        if (!node) return [];
        if (!node.left && !node.right) return [0];

        const leftDistances = dfs(node.left);
        const rightDistances = dfs(node.right);

        for (const l of leftDistances) {
            for (const r of rightDistances) {
                if (l + r + 2 <= distance) {
                    ans++;
                }
            }
        }

        const distances: number[] = [];
        for (const l of leftDistances) distances.push(l + 1);
        for (const r of rightDistances) distances.push(r + 1);

        return distances;
    };

    dfs(root);
    return ans;
}
```
#### JavaScript
``` JavaScript
function countPairs(root, distance) {
    if (!root) return 0;

    let ans = 0;

    const dfs = (node) => {
        if (!node) return [];
        if (!node.left && !node.right) return [0];

        const leftDistances = dfs(node.left);
        const rightDistances = dfs(node.right);

        for (const l of leftDistances) {
            for (const r of rightDistances) {
                if (l + r + 2 <= distance) {
                    ans++;
                }
            }
        }

        const distances = [];
        for (const l of leftDistances) distances.push(l + 1);
        for (const r of rightDistances) distances.push(r + 1);

        return distances;
    };

    dfs(root);
    return ans;
}
```
#### Python
```
def countPairs(root, distance):
    def dfs(node):
        nonlocal ans
        if not node:
            return []
        if not node.left and not node.right:
            return [0]
        
        leftDistances = dfs(node.left)
        rightDistances = dfs(node.right)

        for l in leftDistances:
            for r in rightDistances:
                if l + r + 2 <= distance:
                    ans += 1

        return [x + 1 for x in leftDistances + rightDistances]

    ans = 0
    dfs(root)
    return ans
```
#### Java
```
public class Solution {
    public int countPairs(TreeNode root, int distance) {
        int[] ans = new int[1];

        dfs(root, distance, ans);
        return ans[0];
    }

    private int[] dfs(TreeNode node, int distance, int[] ans) {
        if (node == null) return new int[0];
        if (node.left == null && node.right == null) return new int[]{0};

        int[] leftDistances = dfs(node.left, distance, ans);
        int[] rightDistances = dfs(node.right, distance, ans);

        for (int l : leftDistances) {
            for (int r : rightDistances) {
                if (l + r + 2 <= distance) ans[0]++;
            }
        }

        int[] distances = new int[leftDistances.length + rightDistances.length];
        int index = 0;
        for (int l : leftDistances) distances[index++] = l + 1;
        for (int r : rightDistances) distances[index++] = r + 1;
        return distances;
    }
}
```
#### C++
```
class Solution {
public:
    int countPairs(TreeNode* root, int distance) {
        int ans = 0;
        dfs(root, distance, ans);
        return ans;
    }

private:
    vector<int> dfs(TreeNode* node, int distance, int& ans) {
        if (!node) return {};
        if (!node->left && !node->right) return {0};

        auto leftDistances = dfs(node->left, distance, ans);
        auto rightDistances = dfs(node->right, distance, ans);

        for (int l : leftDistances) {
            for (int r : rightDistances) {
                if (l + r + 2 <= distance) ans++;
            }
        }

        vector<int> distances;
        for (int l : leftDistances) distances.push_back(l + 1);
        for (int r : rightDistances) distances.push_back(r + 1);
        return distances;
    }
};
```
#### C#
```
public class Solution {
    public int CountPairs(TreeNode root, int distance) {
        int ans = 0;
        Dfs(root, distance, ref ans);
        return ans;
    }

    private List<int> Dfs(TreeNode node, int distance, ref int ans) {
        if (node == null) return new List<int>();
        if (node.left == null && node.right == null) return new List<int> { 0 };

        var leftDistances = Dfs(node.left, distance, ref ans);
        var rightDistances = Dfs(node.right, distance, ref ans);

        foreach (int l in leftDistances) {
            foreach (int r in rightDistances) {
                if (l + r + 2 <= distance) ans++;
            }
        }

        var distances = new List<int>();
        foreach (int l in leftDistances) distances.Add(l + 1);
        foreach (int r in rightDistances) distances.Add(r + 1);
        return distances;
    }
}
```
#### Ruby
```
def count_pairs(root, distance)
  @ans = 0

  def dfs(node, distance)
    return [] if node.nil?
    return [0] if node.left.nil? && node.right.nil?

    left_distances = dfs(node.left, distance)
    right_distances = dfs(node.right, distance)

    left_distances.each do |l|
      right_distances.each do |r|
        @ans += 1 if l + r + 2 <= distance
      end
    end

    (left_distances + right_distances).map { |x| x + 1 }
  end

  dfs(root, distance)
  @ans
end
```
#### Go
```
func countPairs(root *TreeNode, distance int) int {
    ans := 0

    var dfs func(node *TreeNode) []int
    dfs = func(node *TreeNode) []int {
        if node == nil {
            return []int{}
        }
        if node.Left == nil && node.Right == nil {
            return []int{0}
        }

        leftDistances := dfs(node.Left)
        rightDistances := dfs(node.Right)

        for _, l := range leftDistances {
            for _, r := range rightDistances {
                if l+r+2 <= distance {
                    ans++
                }
            }
        }

        distances := []int{}
        for _, l := range leftDistances {
            distances = append(distances, l+1)
        }
        for _, r := range rightDistances {
            distances = append(distances, r+1)
        }
        return distances
    }

    dfs(root)
    return ans
}
```
#### Kotlin
```
fun countPairs(root: TreeNode?, distance: Int): Int {
    var ans = 0

    fun dfs(node: TreeNode?): List<Int> {
        if (node == null) return emptyList()
        if (node.left == null && node.right == null) return listOf(0)

        val leftDistances = dfs(node.left)
        val rightDistances = dfs(node.right)

        for (l in leftDistances) {
            for (r in rightDistances) {
                if (l + r + 2 <= distance) {
                    ans++
                }
            }
        }

        return (leftDistances + rightDistances).map { it + 1 }
    }

    dfs(root)
    return ans
}
```