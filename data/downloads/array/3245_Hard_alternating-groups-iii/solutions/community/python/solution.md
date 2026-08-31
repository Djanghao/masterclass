# ✅ Python Beats 100% || Beginner Friendly ||  Easy Solution || With Comments || Winner's Solution ✅

**Author:** alpha_777
**Votes:** -1
**Link:** [https://leetcode.com/problems/alternating-groups-iii/solutions/5583403/](https://leetcode.com/problems/alternating-groups-iii/solutions/5583403/)

---

**The below solution is not mine, it is of @hxu10  who ranked 5th in this contest**

```
from sortedcontainers import SortedList

class fenwick(object):
    def __init__(self, n):
        self.n = n
        self.cul = [0] * n
        self.maxd = len(bin(n)) - 3  # Depth for BIT operations

    # Update BIT: add diff to index
    def update(self, index, diff):
        i = index
        while i < self.n:
            self.cul[i] += diff
            i += (i + 1) & (-i - 1)

    # Get cumulative sum up to index
    def getaccu(self, index):
        output = 0
        i = index
        while i >= 0:
            output += self.cul[i]
            i -= (i + 1) & (-i - 1)
        return output

class Solution(object):
    def numberOfAlternatingGroups(self, colors, queries):
        """
        :type colors: List[int]
        :type queries: List[List[int]]
        :rtype: List[int]
        """
        n = len(colors)
        blocks = SortedList()  # To keep track of boundaries of alternating groups

        # Fenwick Trees for maintaining group sizes and counts
        fencount = fenwick(n + 1)
        fentot = fenwick(n + 1)

        ans = []

        def update(index, flag):
            if flag:  # Removing a boundary
                if len(blocks) == 1:
                    blocks.clear()
                    return

                loc = blocks.bisect_left(index)
                # Determine the left and right boundaries of the group to be updated
                if loc == 0:
                    left = blocks[-1] - n
                else:
                    left = blocks[loc - 1]
                
                if loc == len(blocks) - 1:
                    right = blocks[0] + n
                else:
                    right = blocks[loc + 1]

                # Update Fenwick Trees
                fentot.update(right - left, (right - left))
                fencount.update(right - left, 1)
                
                fentot.update(index - left, -(index - left))
                fencount.update(index - left, -1)
                
                fentot.update(right - index, -(right - index))
                fencount.update(right - index, -1)

                blocks.pop(loc)
                
            else:  # Adding a boundary
                if len(blocks) == 0:
                    blocks.add(index)
                    return

                loc = blocks.bisect_left(index)
                if loc == 0:
                    left = blocks[-1] - n
                else:
                    left = blocks[loc - 1]
                    
                if loc == len(blocks):
                    right = blocks[0] + n
                else:
                    right = blocks[loc]
                    
                # Update Fenwick Trees
                fentot.update(right - left, -(right - left))
                fencount.update(right - left, -1)
                
                fentot.update(index - left, (index - left))
                fencount.update(index - left, 1)
                
                fentot.update(right - index, (right - index))
                fencount.update(right - index, 1)
                
                blocks.add(index)

        # Initialize the Fenwick Trees with the full circle size
        fentot.update(n, n)
        fencount.update(n, 1)

        # Process initial color blocks
        for i in range(n):
            if colors[i] == colors[i - 1]:
                update(i, False)

        # Process each query
        for ele in queries:
            if len(ele) == 2:
                l = ele[1]
                if len(blocks) == 0:
                    ans.append(n)
                    continue

                # Calculate count and total for groups of size l
                count = fencount.getaccu(n) - fencount.getaccu(l - 1)
                tot = fentot.getaccu(n) - fentot.getaccu(l - 1)
                ans.append(tot - count * (l - 1))
                
            else:
                index = ele[1]
                c = ele[2]
                
                if colors[index] == c:
                    continue
                
                # Update boundaries affected by the color change
                if colors[index] == colors[index - 1]:
                    update(index, True)
                else:
                    update(index, False)
                    
                if colors[index] == colors[(index + 1) % n]:
                    update((index + 1) % n, True)
                else:
                    update((index + 1) % n, False)
                    
                colors[index] = c
                
        return ans

```

**Approach in Steps**

1. Initialization:

* Create a Fenwick Tree class (fenwick) for efficiently managing cumulative sums and updates.
* Initialize two Fenwick Trees (fencount and fentot) to handle the count and total size of alternating groups, respectively.
* Use a SortedList (blocks) to keep track of the boundaries of alternating color groups.

2. Update Function:

* Removing a Boundary: If an index changes from alternating to non-alternating, update the Fenwick Trees to reflect the removal of a group boundary.
* Adding a Boundary: If an index changes from non-alternating to alternating, update the Fenwick Trees to reflect the addition of a new group boundary.

3. Processing Initial Colors:

* Traverse through the color array and initialize the group boundaries and Fenwick Trees based on the initial colors.

4. Processing Queries:

* Type 1 Query: Calculate the number of alternating groups of a given size by querying the Fenwick Trees.
* Type 2 Query: Update the color at a specified index, adjust the boundaries, and update the Fenwick Trees accordingly.

5. Return Results:

* After processing all queries, return the results of type 1 queries as a list.