# ❤ [Python3] RESERVOIR SAMPLING ໒(＾ᴥ＾)७, Explained

**Author:** artod
**Votes:** 44
**Link:** [https://leetcode.com/problems/linked-list-random-node/solutions/1671889/](https://leetcode.com/problems/linked-list-random-node/solutions/1671889/)

---

In the follow-up, the problem asks us to find an algorithm for an extremely large list and with no additional space. This immediately recalls us about reservoir sampling - an online algorithm for uniformly choosing `k` random elements from a stream. In our case, `k` is equal to 1 (we need to sample just one element). We create a reservoir and put there the first node. Then iterate over nodes and replace the node in the reservoir with the current one with probability `1/i`, where `i` is the index of the current node. In the end, we end up with the reservoir containing a node chosen with the uniform probability `1/n`, where `n` is the number of nodes.

<img src="https://assets.leetcode.com/users/images/062defda-d542-4aec-9708-126a21f3fd26_1641516842.6092827.jpeg" width="500">

Why does it work? Intuitively we can see that elements from the start of the list can get to the reservoir relatively easily since the probability is pretty high at the beginning. But to stay there they have to survive the whole list of elements in front of them. The actual math proof can be found in this article https://florian.github.io/reservoir-sampling/

Time: **O(n)** - scan
Space: **O(1)** - nothing is stored

Runtime: 80 ms, faster than **71.58%** of Python3 online submissions for Linked List Random Node.
Memory Usage: 17.2 MB, less than **85.41%** of Python3 online submissions for Linked List Random Node.

```
class Solution:
    def __init__(self, head: Optional[ListNode]):
        self.head = head
        
    def getRandom(self) -> int:
        reservoir = self.head.val
        
        i = 2
        next = self.head.next
        while next:
            if random.random() < 1/i:
                reservoir = next.val
                
            i += 1
            next = next.next
            
        return reservoir
```