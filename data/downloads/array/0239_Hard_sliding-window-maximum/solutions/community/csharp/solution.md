# C# Deque solution.

**Author:** bafenghan
**Votes:** 9
**Link:** [https://leetcode.com/problems/sliding-window-maximum/solutions/2912234/](https://leetcode.com/problems/sliding-window-maximum/solutions/2912234/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The brute force solution exceeds the time limit. We can mimic the max heap behaviour by maintaining a descending dequeue.

# Approach
<!-- Describe your approach to solving the problem. -->
Use Deque to solve this problem. We store the index in the deque so that we can easily remove the outdated items from the window. We need to make sure the queue is in descending order to get the max item of the window by getting the first item of the dequeue.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
we process each item only once, so the time complexity would be $$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
We use a queue to store the items in the window, the max size of the window would be k. So the space complexity would be $$O(k)$$

# Code
```csharp
public class Solution {
    public int[] MaxSlidingWindow(int[] nums, int k)
    {
        LinkedList<int> queue = new LinkedList<int>(); // we store the index in the queue
        List<int> res = new List<int>();

        for (int i = 0; i < nums.Length; i++)
        {
            while (queue.Count > 0 && queue.First.Value < i - k + 1)
            {
                // if the largest value in the queue is out of window, we remove it
                queue.RemoveFirst();
            }

            var currentVal = nums[i];

            // we need to make sure that the queue is in descending order, we achieve this by removing all the item in the queue that is smaller than the current val
            // we only need to track the largest value, so removing the smaller item does not matter.
            while (queue.Count > 0 && nums[queue.Last.Value] < currentVal)
                queue.RemoveLast();

            queue.AddLast(i);
            
            // we start to add max item to the result set when i = k-1.
            if (i >= k-1)
                res.Add(nums[queue.First.Value]);
        }

        return res.ToArray();
    }
}
```