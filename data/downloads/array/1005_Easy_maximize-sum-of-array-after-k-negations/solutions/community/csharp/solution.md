# C# Prioriry Queue Greedy

**Author:** DanyloKarachentsev
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/3857153/](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/3857153/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    private PriorityQueue<int, int> _queue = new PriorityQueue<int, int>();
    
    public int LargestSumAfterKNegations(int[] nums, int k) {
        foreach (var num in nums)
        {
            _queue.Enqueue(num, num);
        }

        var iteration = k;

        while (iteration > 0)
        {
            iteration--;
            var value = _queue.Dequeue() * -1;
            _queue.Enqueue(value, value);
        }

        int sum = 0;
        
        while (_queue.Count != 0)
        {
            sum += _queue.Dequeue();
        }

        return sum;
    }
}
```