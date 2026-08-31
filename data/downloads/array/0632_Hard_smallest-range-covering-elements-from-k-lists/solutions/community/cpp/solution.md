# Straight-forward Heap(Priority Queue) Solution w Example Walkthrough🧠 Python | Java | C++

**Author:** violet_6
**Votes:** 101
**Link:** [https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/solutions/5905062/](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/solutions/5905062/)

---

# Intuition
The key takeaway is to utilize a **min-heap** to track the minimum element from each list and a **sliding window** to track the range of numbers.
# Approach
1. Initialize a min-heap (`smallest element from each list`, `list index`, `index of element within the list`)
2. Track `current_max` across all the k lists (for range)
3. Iterate through the lists by always **popping** the minimum element from the heap (by heap's nature) and checking the range between the minimum and the current maximum.
4. Update the `smallest range` whenever a smaller one is found.
5. Push the next element from the same list (the list from which the popped element came) into the heap. Update the current maximum as necessary.
6. Stop the iteration once any list runs out of elements.

# Example
```python3
nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
```

```python3
# Heap initialization (element, list_idx, idx)
Heap: [(0, 1, 0), (4, 0, 0), (5, 2, 0)]

# Popping from this heap will result in returning (0, 1, 0)
Heap: [(4, 0, 0), (5, 2, 0)]

# After range updates, push the next element in 1st list to heap
Heap:  [(4, 0, 0), (5, 2, 0), (9, 1, 1)] 
# since it was 9 (bigger than 4 & 5), it goes to the end

# Keep doing this until it reaches one of the lists' end (break)
```
> **Thank you for your upvote in advance \u2B06\uFE0F**
# Complexity
- Time complexity: $$O(Nlogk)$$  
    - $$\uD835\uDC41$$: Total number of elements across all lists
    - $$\uD835\uDC58$$: Number of lists
    - $$O(logk)$$: Heap Operations(add & remove)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(k)$$
    - $$\uD835\uDC58$$: Number of lists
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

**Thank you @perez_mercado for your comment on unnecessary second condition while updating smallRange!**
# Code
```python3 []
class Solution:
    def smallestRange(self, nums: List[List[int]]) -> List[int]:
        heap = []
        cur_max = float('-inf')
        for i in range(len(nums)):
            heapq.heappush(heap, (nums[i][0], i, 0)) 
            cur_max = max(cur_max, nums[i][0])
        small = [float('-inf'), float('inf')]
        while heap:
            cur_min, list_idx, i = heapq.heappop(heap)
            if cur_max - cur_min < small[1] - small[0]:
                small = [cur_min, cur_max]
            if i + 1 < len(nums[list_idx]):
                nxt = nums[list_idx][i + 1]
                heapq.heappush(heap, (nxt, list_idx, i+1))
                cur_max = max(cur_max, nxt)
            else:
                break
        return small
```
```java []
class Solution {
    public int[] smallestRange(List<List<Integer>> nums) {
        // Min-Heap: stores (value, list index, element index)
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        int curMax = Integer.MIN_VALUE;

        // Initialize the heap with the first element of each list
        for (int i = 0; i < nums.size(); i++) {
            minHeap.offer(new int[]{nums.get(i).get(0), i, 0});
            curMax = Math.max(curMax, nums.get(i).get(0));
        }

        // Track the smallest range
        int[] smallRange = new int[]{0, Integer.MAX_VALUE};

        while (true) {
            // Get the minimum element from the heap
            int[] curr = minHeap.poll();
            int curMin = curr[0], listIdx = curr[1], elemIdx = curr[2];

            // Update the smallest range if a better one is found
            if (curMax - curMin < smallRange[1] - smallRange[0]) {
                smallRange[0] = curMin;
                smallRange[1] = curMax;
            }

            // Move to the next element in the same list
            if (elemIdx + 1 < nums.get(listIdx).size()) {
                int nextVal = nums.get(listIdx).get(elemIdx + 1);
                minHeap.offer(new int[]{nextVal, listIdx, elemIdx + 1});
                curMax = Math.max(curMax, nextVal);
            } else {
                // If any list is exhausted, stop
                break;
            }
        }
        return smallRange;
    }
}
```
```C++ []
class Solution {
public:
    vector<int> smallestRange(vector<vector<int>>& nums) {
        // Min-Heap: stores (value, list index, element index)
        priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> minHeap;
        int curMax = numeric_limits<int>::min();

        // Initialize the heap with the first element of each list
        for (int i = 0; i < nums.size(); i++) {
            minHeap.push({nums[i][0], i, 0});
            curMax = max(curMax, nums[i][0]);
        }
        // Track the smallest range
        vector<int> smallRange = {0, numeric_limits<int>::max()};

        while (!minHeap.empty()) {
            // Get the minimum element from the heap
            vector<int> curr = minHeap.top();
            minHeap.pop();
            int curMin = curr[0], listIdx = curr[1], elemIdx = curr[2];

            // Update the smallest range if a better one is found
            if (curMax - curMin < smallRange[1] - smallRange[0]) {
                smallRange[0] = curMin;
                smallRange[1] = curMax;
            }

            // Move to the next element in the same list
            if (elemIdx + 1 < nums[listIdx].size()) {
                int nextVal = nums[listIdx][elemIdx + 1];
                minHeap.push({nextVal, listIdx, elemIdx + 1});
                curMax = max(curMax, nextVal);
            } else {
                // If any list is exhausted, stop
                break;
            }
        }
        return smallRange;
    }
};
```
> **Thank you for your upvote in advance \u2B06\uFE0F**

