# [Python 3] O(log(n)) fetch and O(n*log(n)) constructor using SortedList

**Author:** kjellwinblad
**Votes:** 7
**Link:** [https://leetcode.com/problems/design-most-recently-used-queue/solutions/1061040/](https://leetcode.com/problems/design-most-recently-used-queue/solutions/1061040/)

---

We use a SortedList (with O(log(n)) operations for inserting and finding the kth smallest item). We store tuples in this data structure where the first element is a helper item that is used to make the tuple go to the right location in the SortedList and the second element represent the actual item.

```python
from sortedcontainers import SortedList

class MRUQueue:

    def __init__(self, n: int):
        self.sl = SortedList((i-1, i) for i in range(1, n+1))
    
    def fetch(self, k: int) -> int:
	    # 1. Find the kth item
        _, item = self.sl[k-1]
        # 2. Find the helper element of the last item in the SortedList
        lastItemHelper, _ = self.sl[-1]
		# 3. Remove the kth item
        del self.sl[k-1]
		# 4. Place the removed item last in the SortedList
        self.sl.add((lastItemHelper+1, item))
        return item
```

**Time complexity Contructor:** O(n*log(n))
**Explanation:**  A self-balancing binary search tree with n items can be constucted in O(n*log(n)) time

**Time complexity Fetch:** O(log(n))
***Explanation:***  Fetch does 4 operations on a SortedList that all take O(log(n)) time. SortedList can be implemented using a self-balancing search tree where the nodes are annotated with the number of items under them.

**Space complexity:** O(n)
***Explanation:*** A self-balancing binary search tree containing n items requires O(n) space)
