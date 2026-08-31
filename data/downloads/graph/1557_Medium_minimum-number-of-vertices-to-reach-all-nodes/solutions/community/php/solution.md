# [PHP] Simple solution with description

**Author:** verborum
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/3536527/](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/3536527/)

---

# Approach
1. Initialize an array notReached with all vertices. The keys of this array are the vertex numbers (0 to n-1) and the values are also the vertex numbers (0 to n-1). This array represents all vertices that haven't been reached yet.

1. For each edge in edges, the solution checks if the destination node of that edge (i.e., the second element of each subarray in edges, represented by `$edges[$i][1]`) is in the notReached array. If it is, the solution removes that vertex from the notReached array. The removal of the vertex is based on the fact that this vertex can be reached from another vertex and hence it does not need to be in our smallest set of vertices.

1. At the end of the loop, the notReached array will contain only the vertices that have no incoming edges. These are the nodes that cannot be reached from any other node.

1. It then returns the keys of the notReached array, which are the vertex numbers of those vertices. As these vertices are not reachable from any other vertex, they form the smallest set of vertices from which all nodes in the graph are reachable.

# Complexity
- Time complexity:
$$O(E)$$ - where **E** is the number of edges.

- Space complexity:
$$O(N)$$ - where **N** is the number of vertices

# Code
```PHP
class Solution
{
    function findSmallestSetOfVertices($n, $edges)
    {
        $notReached = range(0, $n-1);
        $edgesCount = count($edges);

        for($i = 0; $i < $edgesCount; $i++) {
            if (isset($notReached[$edges[$i][1]])) {
                unset($notReached[$edges[$i][1]]);
            }
        }

        return array_keys($notReached);
    }
}
```