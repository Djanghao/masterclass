# 3 Times BFS || With intuition explained || O(n)

**Author:** stevenhgs2
**Votes:** 8
**Link:** [https://leetcode.com/problems/time-taken-to-mark-all-nodes/solutions/5581120/](https://leetcode.com/problems/time-taken-to-mark-all-nodes/solutions/5581120/)

---

# Intuition
There is pair of nodes $(a, b)$ in the tree for which: $dist(a, b) >= dist(x, y)$ for every other pair $(x, y)$ of nodes in the tree. $(a, b)$ is the pair of nodes with the largest distance between them. For every other node $c$ in in the tree the following holds: $max(dist(a,c), dist(b, c)) >= dist(c, x)$ for every node $x$.

Informally, there is a pair of nodes $(a, b)$ which has the largest distance between any pair of nodes. For every node $c$ in the tree the largest distance to any other node is either the distance to node $a$ or the distance to node $b$.

So to solve this problem, find the pair of nodes $(a, b)$ with the largest distance between them and then find the distance from node $a$ to every other node and find the distance from node $b$ to every other node. Save this in an array where `arr_a[i]` = $dist(a, i)$, the distance going from node $a$ to node $i$. `arr_b[i]` is calculated in an analogous manner.

For a node $i$, we know the length of  the path going from node $a$ to node $i$, $path_1$: $a$ -> $x_n$ -> ... -> $x_2$ -> $x_1$ -> $i$, `arr_a[i]` = $dist(a, i)$. However, we want to know $dist(i, a)$, the distance of going from node $i$ to node $a$. This has the $path_2$: $i$ -> $x_1$ -> $x_2$ -> ... -> $x_n$ -> $a$. Both paths have all edges ... -> $x_j$ for $1 <= j <= n$. The only difference is the fact that $path_1$ has the edge ... -> $i$ and $path_2$ has the edge ... -> $a$. So, the length of $path_1$ has $1$ length extra if $i$ is even. The length of $path_2$ has $1$ length extra if $a$ is even.

Let $minus$ be $1$ if $i$ is even, otherwise let it be $0$. Let $plus_a$ be $1$ if $a$ is even, otherwise let it be $0$. This then gives $dist(i, a) = dist(a, i) - minus + plus_a$. $dist(i, b)$ can be found analogously.

The result for node $i$ can then be calculated: `result[i]` = $max(dist(i,a), dist(i,b))$.



# Approach
Find the two nodes furthest away from each other. To get the first node do the first BFS from a random node. The last node seen in this BFS will be `last_seen1`. To find the other node start a BFS from `last_seen1`. During this BFS keep track of the distance from `last_seen1` to every node encountered, store this in `distance_going_from_last_seen1`. The last node seen in this BFS will be `last_seen2`. Now start a last BFS from `last_seen2` and keep track of the distance from `last_seen2` to every node encountered, store this in `distance_going_from_last_seen2`.

For every starting node `i` the last marked node will be either `last_seen1` or `last_seen2`. So for every starting node `i` calculate the distance from node `i` to `last_seen1`, `distance_from_i_to_last_seen1 = distance_going_from_last_seen1[i] + plus1 - minus`. `plus1` is `1` if `last_seen1` is even and `minus` is `1` if node `i` is even, otherwise `0`. `distance_from_i_to_last_seen2` can be calculated analogously. Then store the max of `distance_from_i_to_last_seen1` and `distance_from_i_to_last_seen2` as the result for node `i`.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
# Code
```
class Solution:
    def timeTaken(self, edges: List[List[int]]) -> List[int]:
        # store the edges per node
        adj = defaultdict(list)
        n = 0
        for x, y in edges:
            adj[x].append(y)
            adj[y].append(x)
            n = max(n, x)
            n = max(n, y)
        n += 1

        # first BFS, to find last_seen1
        # we start from a random node, here node 0
        n_t_h = [(0, None)]
        n_n_t_h = []
        last_seen1 = None
        while n_t_h or f_n_t_h:
            f_n_t_h = []
            for node, prev in n_t_h:
                for n_n in adj[node]:
                    if n_n == prev:
                        continue
                    if n_n % 2 == 0:
                        f_n_t_h.append((n_n, node))
                    else:
                        n_n_t_h.append((n_n, node))
                last_seen1 = node
            n_t_h = n_n_t_h
            n_n_t_h = f_n_t_h
        
        # second BFS, to find last_seen2
        # we start from last_seen1
        # at the same time calulate the distance from last_seen1 to every other node
        # and store it in distance_going_from_last_seen1
        n_t_h = [(last_seen1, None)]
        n_n_t_h = []
        last_seen2 = None
        time1 = 0
        distance_going_from_last_seen1 = [0 for _ in range(n)]
        while n_t_h or f_n_t_h:
            f_n_t_h = []
            for node, prev in n_t_h:
                distance_going_from_last_seen1[node] = time1
                for n_n in adj[node]:
                    if n_n == prev:
                        continue
                    if n_n % 2 == 0:
                        f_n_t_h.append((n_n, node))
                    else:
                        n_n_t_h.append((n_n, node))
                last_seen2 = node
            n_t_h = n_n_t_h
            n_n_t_h = f_n_t_h
            time1 += 1

        # third BFS, starting from last_seen2
        # this is to get the distance from last_seen2 to every other node
        # and store it in distance_going_from_last_seen2
        n_t_h = [(last_seen2, None)]
        n_n_t_h = []
        time2 = 0
        distance_going_from_last_seen1 = [0 for _ in range(n)]
        while n_t_h or f_n_t_h:
            f_n_t_h = []
            for node, prev in n_t_h:
                distance_going_from_last_seen2[node] = time2
                for n_n in adj[node]:
                    if n_n == prev:
                        continue
                    if n_n % 2 == 0:
                        f_n_t_h.append((n_n, node))
                    else:
                        n_n_t_h.append((n_n, node))
            n_t_h = n_n_t_h
            n_n_t_h = f_n_t_h
            time2 += 1

        # calculate the result for each node
        plus1 = int(last_seen1 % 2 == 0)
        plus2 = int(last_seen2 % 2 == 0)
        result = [None for _ in range(n)]
        for i in range(n):
            minus = int(i % 2 == 0)
            distance_from_i_to_last_seen1 = distance_going_from_last_seen1[i] + plus1 - minus
            distance_from_i_to_last_seen2 = distance_going_from_last_seen2[i] + plus2 - minus
            result[i] = max(distance_from_i_to_last_seen1, distance_from_i_to_last_seen2)
        
        return result

```