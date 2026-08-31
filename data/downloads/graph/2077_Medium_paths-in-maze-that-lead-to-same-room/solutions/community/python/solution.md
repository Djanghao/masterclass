# Python | Set Intersection | Brute Force -> Most Optimal

**Author:** AlexSzeto
**Votes:** 22
**Link:** [https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/solutions/1583945/](https://leetcode.com/problems/paths-in-maze-that-lead-to-same-room/solutions/1583945/)

---

**Solution 1 - Brute Force (TLE)**

**Explanation:**
1) Iterate through each trio of nodes.
2) See if a cycle is formed by checking:
- Does the secondNode connect to both the first and third node?
- Does the third node connect to the first node, to complete the cycle?

---

**Code:**
```
class Solution:
    def numberOfPaths(self, n: int, corridors: List[List[int]]) -> int:
        neighbors = defaultdict(set)
        for source,target in corridors:
            neighbors[source].add(target)
            neighbors[target].add(source)
        
        ans = 0
        for firstNode in range(1,n+1):
            for secondNode in range(firstNode+1,n+1):
                for thirdNode in range(secondNode+1,n+1):
				
                    if secondNode in neighbors[firstNode] and \\
						secondNode in neighbors[thirdNode] and \\
                        thirdNode in neighbors[firstNode]:
                            ans += 1
                            
        return ans
```

Time Complexity: O(V^3)

---

**Solution 2 - Intersection of Node Pairs (No TLE)**

**Explanation:**
1) For each cycle, the last node must connect to the first. 
2) Therefore if we have some connected pairing (FirstNode, ThirdNode), and there exists some kind of common node inbetween the two, we can route the cycle to go through that secondNode and extend the cycle length == 3.
3) Iterate through all direct pairings of nodes and try to find some common node inbetween the two. We can use set intersection for detecting commonalities.
4) Divide by 3 to prevent duplicate counting.

---

**Code:**
```
class Solution:
    def numberOfPaths(self, n: int, corridors: List[List[int]]) -> int:
        neighbors = defaultdict(set)
        for source, target in corridors:
            neighbors[source].add(target)
            neighbors[target].add(source)
            
        ans = 0
        for firstNode in range(1,n+1):
            for thirdNode in range(firstNode+1,n+1):
                if firstNode in neighbors[thirdNode]:
                    ans += len(neighbors[firstNode].intersection(neighbors[thirdNode]))
        return ans//3
```

Time Complexity: O(E * V^2)

---

**Solution 3 - Greedy**

**Explanation:**
* Same idea as approach 2, but calculating the intersection on the fly.
* Since we know any pair in corridors is directly connected, we can treat them the same way firstNode & thirdNode was in the previous approach.
* No need to check for duplicates since there was no pre-processing.

---

**Code:**
```
class Solution:
    def numberOfPaths(self, n: int, corridors: List[List[int]]) -> int:
        ans = 0
        neighbors = defaultdict(set)
        for firstNode, thirdNode in corridors:
            neighbors[thirdNode].add(firstNode)
            neighbors[firstNode].add(thirdNode)
            ans += len(neighbors[firstNode].intersection(neighbors[thirdNode]))
        return ans
```

Time Complexity: O(V*E)