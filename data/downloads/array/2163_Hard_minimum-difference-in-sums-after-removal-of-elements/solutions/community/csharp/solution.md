# Beats 100% on runtime [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/solutions/6010204/](https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/solutions/6010204/)

---

# Intuition
Divide the array into two parts with a minimal difference in their sums after removing n elements. To do this, we need to focus on selecting the smallest n elements from the first 2n elements and the largest n elements from the last 2n elements. This way, we can control how much we subtract from the sum of the first part and add to the sum of the second part, achieving the smallest possible difference.

# Approach
Use two heaps: a max-heap to find the smallest n elements in the first 2n elements and a min-heap to find the largest n elements in the last 2n elements, then calculate the prefix and suffix sums for each partition and find the minimal difference by comparing these sums.

# Complexity
- Time complexity:
O(n log n) because we use heaps, and each heap operation (insert and remove) takes O(log n) time, which we do for each element.

- Space complexity:
O(n) due to the use of two heaps and two arrays to store the prefix and suffix sums.

# Code
```csharp []
public class Solution
{
    public long MinimumDifference(int[] nums)
    {
        int n = nums.Length;
        int k = n / 3;
        long sum = 0;

        // Initialize two priority queues: one for max-heap (using negative values) and one for min-heap
        PriorityQueue<long, long> maxQ = new PriorityQueue<long, long>(Comparer<long>.Create((a, b) => b.CompareTo(a))); // Max-heap
        PriorityQueue<long, long> minQ = new PriorityQueue<long, long>(); // Min-heap

        // Arrays to store the prefix and suffix sums
        long[] pre = new long[n];
        long[] suff = new long[n];

        // Compute the prefix sums using max-heap
        for (int i = 0; i < n; i++)
        {
            sum += nums[i];
            maxQ.Enqueue(nums[i], nums[i]);

            // If the max-heap has more than 'k' elements, pop the largest (to keep the smallest k elements)
            if (maxQ.Count > k)
            {
                sum -= maxQ.Dequeue(); // Remove the largest element
            }

            // When there are at least 'k' elements in the heap, record the sum of the smallest 'k' elements
            if (maxQ.Count >= k)
            {
                pre[i] = sum;
            }
        }

        // Reset sum for suffix calculations
        sum = 0;

        // Compute the suffix sums using min-heap
        for (int i = n - 1; i >= 0; i--)
        {
            sum += nums[i];
            minQ.Enqueue(nums[i], nums[i]);

            // If the min-heap has more than 'k' elements, pop the smallest (to keep the largest k elements)
            if (minQ.Count > k)
            {
                sum -= minQ.Dequeue(); // Remove the smallest element
            }

            // When there are at least 'k' elements in the heap, record the sum of the largest 'k' elements
            if (minQ.Count >= k)
            {
                suff[i] = sum;
            }
        }

        // Initialize the result to the largest possible value
        long ans = long.MaxValue;

        // Compare the pre-sums and suff-sums to find the minimum difference
        for (int i = k - 1; i < n - k; i++)
        {
            ans = Math.Min(ans, pre[i] - suff[i + 1]);
        }

        return ans;
    }
}

```