# Straightforward Python Answer

**Author:** StanfordAKPsi
**Votes:** 11
**Link:** [https://leetcode.com/problems/smallest-common-region/solutions/3715967/](https://leetcode.com/problems/smallest-common-region/solutions/3715967/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
In this solution, the findSmallestRegion method takes three arguments: regions (a list of lists representing the regions hierarchy), region1, and region2 (the two regions for which we need to find the smallest common ancestor).

The solution uses a parent map, similar to the previous example, to store the parent-child relationship between regions. It iterates over the regions list and creates the parent map by assigning each region except the first one as a child of the first region in the list.

Then, the solution finds the common ancestor by traversing from region1 to the root, adding all encountered regions to the ancestors set. Finally, it traverses from region2 until it finds the smallest common ancestor in the ancestors set. The smallest common ancestor is returned as the result.

# Complexity
- Time complexity:
The time complexity of the solution is O(n), where n is the total number of regions in the input regions list. This is because the solution iterates over the regions list once to build the parent map, which takes O(n) time. The subsequent traversal to find the common ancestor takes at most O(n) time as well.



- Space complexity:
The space complexity of the solution is O(n), where n is the total number of regions in the input regions list. This is because the solution uses the parent_map dictionary to store the parent-child relationships between regions. In the worst case, the dictionary could store n-1 entries, where each region (except one) has a parent. Therefore, the space complexity is O(n).

# Code
```
class Solution:
    def findSmallestRegion(self, regions: List[List[str]], region1: str, region2: str) -> str:
        #lowest common ancestors
        
        # Map each region to its most direct parent in parentMap
        parentMap = defaultdict(str)

        for region in regions:
            parent = region[0]
            for i in range(1, len(region)):
                parentMap[region[i]] = parent
        
        # Go from region1 all the way back to root to find all the ancestors in a line
        ancestors = set()
        while region1:
            ancestors.add(region1)
            region1 = parentMap[region1]
        
        # Go from region2 until we reach an ancestor that region2 shares in common with region1, which is in ancestors
        while region2 not in ancestors:
            region2 = parentMap[region2]
        
        return region2
```