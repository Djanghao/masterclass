# Easy understand Python3 clean code | The description of the question could be more classified

**Author:** LZQiao
**Votes:** 5
**Link:** [https://leetcode.com/problems/smallest-common-region/solutions/2002780/](https://leetcode.com/problems/smallest-common-region/solutions/2002780/)

---

1. The description of the question doesn't clarify whether array of `regions` are from the biggest region to the smallest region, we don't know if this case would appear in the test case [["America", "New York"], ["Earth", "America"]], and for the same reason, we cannot know which region should be the root node at the beginning. These are the points I believe the question should clarify clearer.
2. Therefore, we need to use a dictionary to store the connections relationships (Like what we do for graph questions). 

Good luck, guys. Let's keep moving together :)

```
class Solution:
    def findSmallestRegion(self, regions: List[List[str]], region1: str, region2: str) -> str:
        # Use a dictionary to store each node's parent node.
        parents = {}
        for lst in regions:
            for r in lst[1:]:
                parents[r] = lst[0]
        
        # Get path from region1 to root.
        region1Path = set()
        cur = region1
        while cur:
            region1Path.add(cur)
            # if we traverse to root, it is not in the parents, so we break the loop in this case.
            if cur not in parents:
                break
            cur = parents[cur]
        
        # Traverse from region2 to find out the first node that in region1ToRoot's path, that region point should be the LCA. 
        cur = region2
        while cur:
            if cur in region1Path:
                return cur
            cur = parents[cur]
        
        
        
        
        
        

```