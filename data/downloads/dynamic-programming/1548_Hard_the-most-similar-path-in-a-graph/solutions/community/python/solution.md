# Python - dijakstra with heap and set

**Author:** polasprawka
**Votes:** 13
**Link:** [https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/1011732/](https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/1011732/)

---

Let `level` be an index of a node in `targets` - in other words, it can be considered as a "depth" of solution or number of the nodes we already processed. 

My solution is based on dijakstra. From every possible node, I will expand through neighbouring nodes and check if they corespond to `targets`. If so, I will add all the neighbours to heap with the same cost, but one node further in targets list. Otherwise same action will be performed, but with cost increased. by 1. I will keep processed nodes, their level and edit_dist in a visted set to avoid recomputing the same thing. I keep on doind that until I get first (best) solution with len(target) nodes.

```
class Solution:
    def mostSimilar(self, n: int, roads: List[List[int]], names: List[str], targets: List[str]) -> List[int]:
        graph = defaultdict(list)
        heap = []
        
		# building graph with adjencency list 
        for x, y in roads:      # O(n+e) time, space
            graph[x] += [y]
            graph[y] += [x]
        
		# adding each node as starting to min heap (by default, all operations done on heapq module (our heap) support min heap)
		# (0, 0, i, [i]) means (edit_cost, node_nb_in_targets/level, city_nb, [path_so_far])
        for i in range(n):     # O(n) time
            heapq.heappush(heap, (0, 0, i, [i]))     # O(logn) time, O(n) space
			
        #seen set to prevent recomputing the same entires multiple times
        seen = set()
        while heap:    # O(len(t) * n) time, space - for every node in targets we have n-1 ~ n neighbours at most
            ed, i, city_nb, path = heapq.heappop(heap) O(logn)
			
			# -i because when adding to out min heap, we will be using negative indexing. Why? To extract the most possible path with
			# min edit distanceas soon as possible. Consider 3 following entries in heap:
			#    (1,-3, _, _)
			#    (1, -2, _, _)
			#    (2, -2, _, _)
			# Entry 1 and2 have the best edit distance so far. They are on 3rd (-3) and 2nd (-2) levels (nodes in target). 
			# That means we want to process (1,-3, _, _) first because it went further down the target path with the same
			# edit distance as (1, -2, _, _), so the chance of getting the best result (in our case min edit distance) are
			# higher in first, rather than second case. Since we use min heap, negative indexing is needed for the best result.
			
            if -i == len(targets):
                return path[:-1] #one last element in path is always redundant as it was added one level before
				
			#  if current city we are considering is different that city in targets at corresponding level, edit dist has to be increased
            if names[city_nb] != targets[-i]: 
                ed += 1
            
            for nbr in graph[city_nb]: 
			    # if we did not process a node 'nbr' on 'i'th-1 level with 'ed' edit distance, let's add it as a possibilty for a path 
                if (ed, i-1, nbr) not in seen:
                    heapq.heappush(heap, (ed, i-1, nbr, path + [nbr])) # add current ed, one level deeper (negative indexing, remember!), neighbouring node, and path so far
                    seen.add((ed, i-1, nbr))
        return 0
        
```
I hope this will help someone understand my solution. I am not 100% sure about complexity, so do not take my complexity computations very seriously. Let me know if I am mistaken anywhere or if more explanation is needed! :)