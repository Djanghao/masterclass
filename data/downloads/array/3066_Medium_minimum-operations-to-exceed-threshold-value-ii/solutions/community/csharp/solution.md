# ✅Beats 100.00% 🔥|| PriorityQueue || C# || Easy Explanation || Beginner Friendly🔥🔥🔥

**Author:** Sayan98
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4812531/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4812531/)

---

# Intuition
Imagine you have a collection of numbers and need to perform operations to make them all greater than or equal to a specific value (**k**). Intuitively, the more elements are smaller than **k**, the more operations you'll need to perform. Additionally, if you can combine smaller elements efficiently (e.g., multiplying them by 2), fewer total operations might be needed.

# Approach
This code uses a priority queue and greedy approach to solve the problem. Here's the breakdown:

- **PriorityQueue**: It prioritizes elements based on their value (lowest first). This ensures the smallest elements are processed first.
- **Greedy Strategy**: At each step, the two smallest elements (less than **k**) are retrieved from the queue.
- **Combining Elements**: These two elements are combined by multiplying them by 2, potentially creating a larger value closer to or exceeding **k**. The combined value is added back to the queue.
- **Repeating Process**: This process repeats until there's only one element left (or all elements are greater than or equal to **k**). Each repetition counts as one operation.

# Complexity
- Time complexity: **O(n * log n)** (**logarithmic with a linear factor**)
The loop iterates through the array (size n) adding elements to the queue, which takes **O(n * log n)** time in most implementations of priority queues due to the underlying heap data structure.

- Space complexity: **O(n)** (**linear**)
The code uses a priority queue to store all elements from the array. The queue size scales with the input size, resulting in **O(n)** space complexity.

# Code
```
public class Solution {
    public int MinOperations(int[] nums, int k) {

        var count = 0;
        var queue = new PriorityQueue<long, long>();

        foreach (var item in nums) queue.Enqueue(item, item);

        while (queue.Count > 1 && queue.Peek() < k) {

            var temp = queue.Dequeue() * 2 + queue.Dequeue();
            queue.Enqueue(temp, temp);
            count++;
        }
        return count;
    }
}
```