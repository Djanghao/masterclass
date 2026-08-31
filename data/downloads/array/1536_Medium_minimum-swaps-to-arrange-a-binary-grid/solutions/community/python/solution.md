# Linked List Solution Fully Explained Python

**Author:** sarthakBhandari
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/2843246/](https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/solutions/2843246/)

---

For each row we count the number of consecutive zeros from the end.
We then store that count in some sequential data structure (in this case linked list)

the count list might look something like this:
`[3,4,4,5,2], if n = 5`
we want to turn this list into something like this:
```
for general n
[a[0]>=n-1, a[1]>=n-2, a[2]>=n-3,.....a[n-1]>=1, a[n] >= whatever]
0th row must have atleast n-1 0s, thats why a[0] >= n-1,
...
n-1th row must have atleast 1 0s
```
so for 0th row we look for the first value in the list that is >=n-1, we then keep swapping that value until we reach 0th index. Instead of actually swapping you just find the index of that "first value" because thats the number of swaps needed.
You also must remove that "first value" from the list because we can not use it again.

If we never find that "first value", then we return -1 because no solution exists

You can remove an element in O(1) using a linked list thats why I decided to use that instead of a list. 
**Time: O(n^2)
Space: O(n)**
```
class Node:
    def __init__(self, val, nex=None):
        self.val = val
        self.nex = None

class Solution:
    def minSwaps(self, grid: List[List[int]]) -> int:
        n = len(grid)
        
        head = c_tail = Node(-1) #dummy node
        for row in grid:
            c = 0
            for v in reversed(row):
                if v: break
                c += 1
            newNode = Node(c)
            c_tail.nex = newNode
            c_tail = newNode

        moves = 0
        for c in range(n-1, 0, -1):
            
            i = 0
            c_node = head
            while c_node.nex:
                if c_node.nex.val >= c:
                    moves += i
                    c_node.nex = c_node.nex.nex
                    break
                i += 1
                c_node = c_node.nex
            else:
                return -1

        return moves

```