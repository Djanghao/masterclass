# Python / Kotlin / JavaScript - Double DFS

**Author:** ektegjetost
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-last-marked-nodes-in-tree/solutions/5888048/](https://leetcode.com/problems/find-the-last-marked-nodes-in-tree/solutions/5888048/)

---

# Intuition
We want to find the furthest node from each node.
- in one DFS we can find the furthest two children from each node (we want the furthest two for part 2)
- in a second DFS we can also include the distance of each node's parent, and this will also include the max distance from all other children of our node's parent. We need to track the furthest TWO children because we may need to pass down the second furthest child's distance to the furthest child
- one additional tricky situation is that the furthest child is not necessarily our node's immediate child. If we have ```A <-> B <-> C``` the furthest child to ```A``` is ```C```. But when we do our second DFS and try to pass down a parent distance, ```C``` doesn't match ```B``` so we'll end up passing its own child to ```B```. To remedy this, we'll keep track of which immediate child had a child with the greatest distance.

# Approach
<!-- Describe your approach to solving the problem. -->
1. create adjacency list
2. create 5 arrays (or you could do two arrays of tuples or something along those lines) - ```dist1``` and ```dist2``` which are the distance of the furthest and second furthest child / parent, ```node1``` and ```node2``` which are the furthest and second furthest child / parent nodes, and ```path1``` which is the immediate child / parent path that contains the furthest child
3. First DFS - have each child return its furthest child (or itself) + the distance of the furthest child. If the furthest child gets updated, then also update ```path1``` for the current node to be that child.
4. Second DFS - now update your furthest / second furthest children to include your parent, and pass that down to each child, and if ```path1[node]``` matches the current child, send down the second furthest
5. Return ```node1```
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ --> 

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def lastMarkedNodes(self, edges: List[List[int]]) -> List[int]:
        adj_list = [[] for _ in range(len(edges) + 1)]
        for a, b in edges:
            adj_list[a].append(b)
            adj_list[b].append(a)

        dist1, node1, path1, dist2, node2 = [[-1] * len(adj_list) for _ in range(5)]

        def get_max_child(node, parent):
            for child in adj_list[node]:
                if child == parent: continue
                child_node, child_dist = get_max_child(child, node)
                if child_dist > dist1[node]:
                    dist2[node] = dist1[node]
                    node2[node] = node1[node]
                    dist1[node] = child_dist
                    node1[node] = child_node
                    path1[node] = child
                elif child_dist > dist2[node]:
                    dist2[node] = child_dist
                    node2[node] = child_node
            return (node1[node], dist1[node] + 1) if dist1[node] >= 0 else (node, 1)
        
        get_max_child(0, -1)

        def get_max_dist(node, parent, parent_node, parent_dist):
            if parent_dist > dist1[node]:
                dist2[node] = dist1[node]
                node2[node] = node1[node]
                dist1[node] = parent_dist
                node1[node] = parent_node
                path1[node] = parent
            elif parent_dist > dist2[node]:
                dist2[node] = parent_dist
                node2[node] = parent_node
            for child in adj_list[node]:
                if child == parent: continue

                if child == path1[node]:
                    next_parent_node = node if node2[node] < 0 else node2[node]
                    next_parent_dist = 1 if node2[node] < 0 else dist2[node] + 1
                else:
                    next_parent_node = node if node1[node] < 0 else node1[node]
                    next_parent_dist = 1 if node1[node] < 0 else dist1[node] + 1
                
                get_max_dist(child, node, next_parent_node, next_parent_dist)
        
        get_max_dist(0, -1, -1, -1)

        return node1


```
```kotlin []
class Solution {
    fun lastMarkedNodes(edges: Array<IntArray>): IntArray {
        val adjList = edges.fold(Array(edges.size + 1) { ArrayDeque<Int>() }) { adjList, (a, b) -> adjList.apply {
            this[a].add(b)
            this[b].add(a)
        } }

        val (dist1, node1, path1, dist2, node2) = Array(5) { IntArray(adjList.size) { -1 } }

        fun getMaxChild(node: Int, parent: Int): Pair<Int, Int> {
            for (child in adjList[node]) {
                if (child === parent) continue
                val (childNode, childDist) = getMaxChild(child, node)
                if (childDist > dist1[node]) {
                    dist2[node] = dist1[node]
                    node2[node] = node1[node]
                    dist1[node] = childDist
                    node1[node] = childNode
                    path1[node] = child
                } else if (childDist > dist2[node]) {
                    dist2[node] = childDist
                    node2[node] = childNode
                }
            }
            return if (dist1[node] >= 0) node1[node] to dist1[node] + 1 else node to 1
        }

        getMaxChild(0, -1)

        fun getMaxDist(node: Int, parent: Int, parentNode: Int, parentDist: Int) {
            if (parentDist > dist1[node]) {
                dist2[node] = dist1[node]
                node2[node] = node1[node]
                dist1[node] = parentDist
                node1[node] = parentNode
                path1[node] = parent
            } else if (parentDist > dist2[node]) {
                dist2[node] = parentDist
                node2[node] = parentNode
            }

            for (child in adjList[node]) {
                if (child === parent) continue

                if (child === path1[node]) {
                    val nextParentNode = if (node2[node] < 0) node else node2[node]
                    val nextParentDist = if (dist2[node] < 0) 1 else dist2[node] + 1
                    getMaxDist(child, node, nextParentNode, nextParentDist)
                } else {
                    val nextParentNode = if (node1[node] < 0) node else node1[node]
                    val nextParentDist = if (dist1[node] < 0) 1 else dist1[node] + 1
                    getMaxDist(child, node, nextParentNode, nextParentDist)
                }
            }
        }

        getMaxDist(0, -1, -1, -1)

        return node1
    }
}
```
```javascript []
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var lastMarkedNodes = function(edges) {
    const adjList = edges.reduce((adjList, [a, b]) => {
        adjList[a].push(b);
        adjList[b].push(a);
        return adjList;
    }, new Array(edges.length + 1).fill(0).map(() => []));

    const dist1 = adjList.map(() => -1);
    const node1 = adjList.map(() => -1);
    const path1 = adjList.map(() => -1);
    const dist2 = adjList.map(() => -1);
    const node2 = adjList.map(() => -1);

    function getMaxChild(node, parent) {
        adjList[node].forEach((child) => {
            if (child === parent) return;
            const [childNode, childDist] = getMaxChild(child, node);
            if (childDist > dist1[node]) {
                dist2[node] = dist1[node];
                node2[node] = node1[node];
                dist1[node] = childDist;
                node1[node] = childNode;
                path1[node] = child;
            } else if (childDist > dist2[node]) {
                dist2[node] = childDist;
                node2[node] = childNode;
            }
        })
        return dist1[node] >= 0 ? [node1[node], dist1[node] + 1] : [node, 1];
    }

    getMaxChild(0, -1);

    function getMaxDist(node, parent, parentNode, parentDist) {
        if (parentDist > dist1[node]) {
            dist2[node] = dist1[node];
            node2[node] = node1[node];
            dist1[node] = parentDist;
            node1[node] = parentNode;
            path1[node] = parent;
        } else if (parentDist > dist2[node]) {
            dist2[node] = parentDist;
            node2[node] = parentNode;
        }

        adjList[node].forEach((child) => {
            if (child === parent) return;

            if (child === path1[node]) {
                const nextParentNode = node2[node] < 0 ? node : node2[node];
                const nextParentDist = dist2[node] < 0 ? 1 : dist2[node] + 1;
                getMaxDist(child, node, nextParentNode, nextParentDist)
            } else {
                const nextParentNode = node1[node] < 0 ? node : node1[node];
                const nextParentDist = dist1[node] < 0 ? 1 : dist1[node] + 1;
                getMaxDist(child, node, nextParentNode, nextParentDist)
            }
        })
    }

    getMaxDist(0, -1, -1, -1);

    return node1;
};
```