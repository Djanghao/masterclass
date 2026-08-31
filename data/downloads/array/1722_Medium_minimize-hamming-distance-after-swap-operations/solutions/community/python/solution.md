# Python, Union Find

**Author:** peter_chen3301
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/1047781/](https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/1047781/)

---

```
class Solution(object):
    def minimumHammingDistance(self, source, target, allowedSwaps):
        """
        :type source: List[int]
        :type target: List[int]
        :type allowedSwaps: List[List[int]]
        :rtype: int
        """
        
        # Built up graph for each index
        graph = [ n for n in xrange(len(source)) ]
        
        # Define find function
        def find(x):
            while graph[x] != x:
                graph[x] = graph[graph[x]]
                x = graph[x]
            return x
        
        # Define union function
        def union(x, y):
            x1, y1 = find(x), find(y)
            graph[x1] = y1
        
        # Union indices that are allowed to swap between each other
        for x, y in allowedSwaps:
            union(x,y)
        
        # Group indices that belong to the same group 
        groups = collections.defaultdict(list)
        for i in xrange(len(source)):
            i1 = find(i)
            groups[i1].append(i)
        
        # Interate every groups 
        ans = 0
        for ids in groups.values():
            
            # For each group, count different characters
            counter = collections.Counter()
            for idx in ids:
                counter[source[idx]] += 1
                counter[target[idx]] -= 1
                
            # divide by 2 because we need 1 switch for every 2 diff. chars 
            ans += sum( abs(val) for val in counter.values())/2
        
        return ans
```