# Python DFS + DP O(N) trivial solution

**Author:** penolove
**Votes:** 17
**Link:** [https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3256266/](https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3256266/)

---

# Intuition
let n = len(edges)
and # of correct witrh guesses is fixed if we explore from i->j (since it's a tree, which means there always only one path between nodes)

thus we will only have 2n possible values (i->j, j<-i)

and finally let we set each i as root, check how many root  align with guesses >= k


# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code  - Version 1 (Mar 05, 2023 Ver)
this version only when tree is linked-list will be time O(n)
if there are a node as center and every other node link to center it will be O(n^2)


```
class Solution:
    def rootCount(self, edges: List[List[int]], guesses: List[List[int]], k: int) -> int:
        # n memory
        # build graph
        graph = defaultdict(list)
        for i, j in edges:
            graph[i].append(j)
            graph[j].append(i)
        
        gt = set((i, j) for i, j in guesses)

        # dfs traverse from parent -> i
        @cache
        def get_correct_pairs(i, parent):
            next_nodes = graph[i]
            n_correct = 0
            for next_node in next_nodes:
                if next_node == parent:
                    continue
                if (i, next_node) in gt:
                    n_correct += 1
                n_correct += get_correct_pairs(next_node, i)
            return n_correct
        
        ans = 0
        for i in graph:
            if get_correct_pairs(i, None) >= k:
                ans += 1
        return ans
            
```


# Code  - Version 2 (Sep 25, 2023 Ver)
thanks for @cy171's patiently explain I finally realize the blindspot I meet.

the optimization idea is that
```
f(i, next) = f_sum_out(next) - f(next, i)
f_sum_out(j) = sum(f(j, i) for all i in graph[j]) 
```

the only change is add a map `graph_out_sum` used to calculate the out direction sum.

```
class Solution:
    def rootCount(self, edges: List[List[int]], guesses: List[List[int]], k: int) -> int:
        # build graph
        graph = defaultdict(list)
        for i, j in edges:
            graph[i].append(j)
            graph[j].append(i)
        
        gt = set((i, j) for i, j in guesses)

        graph_added = defaultdict(set)
        graph_out_sum = defaultdict(int)

        # random traverse        
        @cache
        def get_correct_pairs(i, parent):
            next_nodes = graph[i]
            if len(graph_added[i]) == next_nodes:
                return graph_out_sum[i] - get_correct_pairs(i, parent)
            else:
                n_correct = 0
                for next_node in next_nodes:
                    if next_node == parent:
                        continue
                    if (i, next_node) in gt:
                        graph_out_sum[i] += 1
                        n_correct += 1

                    n_correct += get_correct_pairs(next_node, i)
                    graph_out_sum[i] += get_correct_pairs(next_node, i)
                    graph_added[i].add((next_node, i))
                    
                return n_correct
        
        ans = 0
        for i in graph:
            if get_correct_pairs(i, None) >= k:
                ans += 1
        return ans
            
            
```