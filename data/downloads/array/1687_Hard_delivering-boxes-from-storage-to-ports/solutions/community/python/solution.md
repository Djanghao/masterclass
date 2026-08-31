# [Python] O(n). DP + Monotonic Queue (Sliding Window) with Full Explanation

**Author:** delphih
**Votes:** 40
**Link:** [https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/solutions/969560/](https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/solutions/969560/)

---

## **Interpretation**:
Let's think of **one single trip taking all boxes** as a start, then **separate it into small trips** that meet the limitation of `maxBoxes` and `maxWeight`. 

I will use **Example 2** to explain:
| Box Index | 0  | 1  | 2 | 3 | 4  |
|-----------|----|----|---|---|----|
| Port      | 1  | 3  | 3 | 3 | 2  |
| Weight    | 2  | 3  | 1 | 1 | 4  |

Number of trips of that *one single base trip* is easy to calculate:
| Box Index |    | 0 |    | 1 |   | 2 |   | 3 |    | 4 |   | Total Cost |
|-----------|----|---|----|---|---|---|---|---|----|---|---|-------|
| Port      |    | 1 |    | 3 |   | 3 |   | 3 |    | 2 |   |       |
| Weight    |    | 2 |    | 3 |   | 1 |   | 1 |    | 4 |   |       |
| Base Cost (go to different port)     | +1 |   | +1 |   | 0 |   | 0 |   | +1 |   |   | 3     |

When separating this base trip into smaller trips, adding a division between `boxes[i]` and `boxes[i+1]` means going back to storage and take some boxes. **This travelling back is the cost of separating trips.** There are 2 types of divisions:
* Between boxes of **same port**, it costs **2 more trips** (going back to storage and then back to the same port).
* Between boxes of **different ports**, it costs only **1 more trip** (going back to storage), since we already count 1 trip for travelling between different ports.
* (For convenience, think of the final trip back to storage as a division costing 1 trip.)

The solution of **Example 2** is interpreted like this:
| Box Index     |    | 0 |    | 1 |   | 2 |   | 3 |    | 4 |    | Total Cost |
|---------------|----|---|----|---|---|---|---|---|----|---|----|-------|
| Port          |    | 1 |    | 3 |   | 3 |   | 3 |    | 2 |    |       |
| Weight        |    | 2 |    | 3 |   | 1 |   | 1 |    | 4 |    |       |
| Base Cost     | +1 |   | +1 |   | 0 |   | 0 |   | +1 |   |    | 3     |
| Division (Trip) Cost |    |   | +1 |   |   |   |   |   | +1 |   | +1 | 3     |

## **Solution**:

Now the problem is, what's the minimal cost of inserting some divisions to make every trip within the limitation? 

This is one typical structure of **dynamic programming**. Iterate through each `boxes[i]` as if it's the last box of one trip, and calculate the minimal cost of shipping `boxes[0..i]`. I'd associate each division with its previous trip. In other words, `dp[i]` includes the cost of the division between `boxes[i]` and `boxes[i+1]` (the division between `boxes[n-1]` and `boxes[n]` is the final trip back to storage). Then we have: 

* `dp[i] = min{dp[j] | boxes[j..i] satisfy the limitation} + cost_between_boxes(i, i+1)`

Regarding each `dp[i]`, we are looking for the minimum in a range of `j..i-1` where `boxes[j..i]` satisfy certain limitation. This part is the same with [**239. Sliding Window Maximum**](https://leetcode.com/problems/sliding-window-maximum/), a problem of **sliding window using monotonic queue**. **Please check it.**

Time and space complexity: `O(n)`

My python 3 code:
```python
class Solution:
    def boxDelivering(self, boxes: List[List[int]], portsCount: int, maxBoxes: int, maxWeight: int) -> int:
        n = len(boxes)
        que = collections.deque([(-1,0)])  # monotonic queue. item: (division_position, trip_cost)
        pre = -1  # latest end of previous trip
		ws = 0  # maximal weights of current trip
        for i, (p, w) in enumerate(boxes):  # p: port; w: weight
            # update the earliest possible start of current trip:
            ws += w
            while i - pre > maxBoxes or ws > maxWeight:
                pre += 1
                ws -= boxes[pre][1]
            while que[0][0] < pre: que.popleft()  ## pop out the boxes out of range of current trip
            
            # min cost of current trip. front of monotonic queue is always the minimal cost that meets the limitation
            mn = (2 if i+1<n and p==boxes[i+1][0] else 1) + que[0][1]
            while que[-1][1] >= mn: que.pop()  # maintain the queue monotonic
            que.append((i, mn))
        
        base_trip = 1  # calc base trip cost
        for i in range(n-1):
            if boxes[i][0] != boxes[i+1][0]: base_trip += 1
        
        return base_trip + que[-1][1]
```