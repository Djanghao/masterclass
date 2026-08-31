# 💥Python 3 | Memory beats 100.00%, Runtimebeats 88.89% [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/5783165/](https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/5783165/)

---

# Intuition
To solve this problem, I need to build all blocks as quickly as possible using the fewest workers. I can either split a worker (which takes time) or use an existing worker to build a block. The goal is to minimize the total time needed.

# Approach
Min-Heap: Use a heap to manage blocks by their build times efficiently.

Combine Blocks:

Extract: Get the two blocks that take the least time.
Combine: Create a new block with combined time plus the split cost.
Reinsert: Put the new block back into the heap.

Repeat until one block is left. Its time is the answer.

# Complexity
- Time complexity:
O(NlogN) \u2013 due to heap operations.

- Space complexity:
O(N) \u2013 for storing blocks in the heap.

# Code
```python3 []
class Solution:
    def minBuildTime(self, blocks: List[int], split: int) -> int:
        # Convert the list of blocks into a min-heap
        heapq.heapify(blocks)

        # Process until only one block is left in the heap
        while len(blocks) > 1:
            # Extract the two smallest blocks from the heap
            block_1 = heapq.heappop(blocks)
            block_2 = heapq.heappop(blocks)

            # Combine the two blocks and add the split time
            new_block = max(block_1, block_2) + split

            # Push the new combined block back into the heap
            heapq.heappush(blocks, new_block)

        # Return the time required to build the last remaining block
        return blocks[0]

```