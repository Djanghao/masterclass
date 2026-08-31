# Python Greedy Concise + Explanation

**Author:** rosemelon
**Votes:** 43
**Link:** [https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/290930/](https://leetcode.com/problems/flower-planting-with-no-adjacent/solutions/290930/)

---

The question points to this connection of gardens being a graph, so we create a graph with a dictionary. For each garden, we have a list of gardens it is connected to. Since this is bidirectional, we append to both gardens in each path. 

How to chose order of which garden to plant flowers in first: I had trouble with this during the competition, until I reread the problem. It says that there are 4 flowers to choose from, but each garden can only have 3 edges. This means that there must be a flower to choose from for each garden and you don't have to worry about choosing the order of the garden to plant flowers in. If there are more than 3 edges connected to a garden, I think you'd have to sort the order of which gardens to plant flowers in by the number of edges it is connected to: #sortedEdges = sorted(((len(g[x]), x) for x in g), reverse = True). 

We create a `plantdict` so we know which flower we're planting in each garden. We go through all the gardens and plant a flower. Everytime we plant a flower, we update our `plantdict` so that gardens that are connected will not plant the same flower. 

For our answer, if the garden is not connected to any other node, we plant flower 1 just for simplicity. For example, one of the test cases is "10,000 []", which means there are 10,000 nodes with no connections, so we return [1]*N. 

Runtime (I think): O(V + E) Space: O(V + E) 

```
class Solution(object):
    def gardenNoAdj(self, N, paths):
        """
        :type N: int
        :type paths: List[List[int]]
        :rtype: List[int]
        """
        g = collections.defaultdict(list)
        for x, y in paths:
            g[x].append(y)
            g[y].append(x)
        plantdict = {i: 0 for i in range(1, N + 1)}
        for garden in g: 
            pick = set(range(1,5))
            for each in g[garden]:
                if plantdict[each] != 0 and plantdict[each] in pick:
                    pick.remove(plantdict[each])
            plantdict[garden] = pick.pop()
        return [plantdict[x] if plantdict[x] != 0 else 1 for x in range(1, N+1)]
```