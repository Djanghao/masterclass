# ✅Beats 96.28% of users || [python|Javascript|Go|Typescript]

**Author:** naweeth03
**Votes:** 5
**Link:** [https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4539708/](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/solutions/4539708/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def amountOfTime(self, root: Optional[TreeNode], start: int) -> int:
    ans = -1
    graph = self._getGraph(root)
    q = collections.deque([start])
    seen = {start}

    while q:
      ans += 1
      for _ in range(len(q)):
        u = q.popleft()
        if u not in graph:
          continue
        for v in graph[u]:
          if v in seen:
            continue
          q.append(v)
          seen.add(v)

    return ans

  def _getGraph(self, root: Optional[TreeNode]) -> Dict[int, List[int]]:
    graph = collections.defaultdict(list)
    q = collections.deque([(root, -1)])  

    while q:
      node, parent = q.popleft()
      if parent != -1:
        graph[parent].append(node.val)
        graph[node.val].append(parent)
      if node.left:
        q.append((node.left, node.val))
      if node.right:
        q.append((node.right, node.val))

    return graph
        
```
### **Javascript**

```
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
  let ans = -1;
  const graph = getGraph(root);
  const q = [start];
  const seen = new Set([start]);

  while (q.length > 0) {
    ans += 1;
    const levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      const u = q.shift();
      if (!(u in graph)) continue;
      for (const v of graph[u]) {
        if (seen.has(v)) continue;
        q.push(v);
        seen.add(v);
      }
    }
  }

  return ans;
};

/**
 * @param {TreeNode} root
 * @return {Object}
 */
var getGraph = function(root) {
  const graph = {};
  const q = [[root, -1]]; // [node, parent]

  while (q.length > 0) {
    const [node, parent] = q.shift();
    if (parent !== -1) {
      if (!(parent in graph)) graph[parent] = [];
      graph[parent].push(node.val);
      if (!(node.val in graph)) graph[node.val] = [];
      graph[node.val].push(parent);
    }
    if (node.left) {
      q.push([node.left, node.val]);
    }
    if (node.right) {
      q.push([node.right, node.val]);
    }
  }

  return graph;
};

```

# **GO**

```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func amountOfTime(root *TreeNode, start int) int {
	ans := -1
	graph := getGraph(root)
	q := []int{start}
	seen := make(map[int]bool)
	seen[start] = true

	for len(q) > 0 {
		ans++
		levelSize := len(q)
		for i := 0; i < levelSize; i++ {
			u := q[0]
			q = q[1:]
			if _, exists := graph[u]; !exists {
				continue
			}
			for _, v := range graph[u] {
				if seen[v] {
					continue
				}
				q = append(q, v)
				seen[v] = true
			}
		}
	}

	return ans
}

func getGraph(root *TreeNode) map[int][]int {
	graph := make(map[int][]int)
	q := [][]*TreeNode{{root, nil}} // {{node, parent}}

	for len(q) > 0 {
		node := q[0][0]
		parent := q[0][1]
		q = q[1:]

		if parent != nil {
			graph[parent.Val] = append(graph[parent.Val], node.Val)
			graph[node.Val] = append(graph[node.Val], parent.Val)
		}

		if node.Left != nil {
			q = append(q, []*TreeNode{node.Left, node})
		}
		if node.Right != nil {
			q = append(q, []*TreeNode{node.Right, node})
		}
	}

	return graph
}

```

# **TypeScript**

```
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

function amountOfTime(root: TreeNode | null, start: number): number {
  let ans: number = -1;
  const graph: { [key: number]: number[] } = getGraph(root);
  const q: number[] = [start];
  const seen: { [key: number]: boolean } = {};
  seen[start] = true;

  while (q.length > 0) {
    ans++;
    const levelSize: number = q.length;
    for (let i: number = 0; i < levelSize; i++) {
      const u: number = q.shift()!;
      if (!(u in graph)) continue;
      for (const v of graph[u]) {
        if (seen[v]) continue;
        q.push(v);
        seen[v] = true;
      }
    }
  }

  return ans;
}

function getGraph(root: TreeNode | null): { [key: number]: number[] } {
  const graph: { [key: number]: number[] } = {};
  const q: [TreeNode | null, TreeNode | null][] = [[root, null]]; // [[node, parent]]

  while (q.length > 0) {
    const [node, parent]: [TreeNode | null, TreeNode | null] = q.shift()!;
    if (parent !== null) {
      if (!(parent.val in graph)) graph[parent.val] = [];
      graph[parent.val].push(node!.val);
      if (!(node!.val in graph)) graph[node!.val] = [];
      graph[node!.val].push(parent.val);
    }
    if (node !== null) {
      if (node.left !== null) {
        q.push([node.left, node]);
      }
      if (node.right !== null) {
        q.push([node.right, node]);
      }
    }
  }

  return graph;
}

```
