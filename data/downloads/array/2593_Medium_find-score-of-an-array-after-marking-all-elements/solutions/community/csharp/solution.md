# C# PriorityQueue HashSet

**Author:** anand9589
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/6141072/](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/6141072/)

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
```csharp []
public class Solution {
    
        public long FindScore(int[] nums)
        {
            long result = 0;
            HashSet<int> marked = new HashSet<int>();
            PriorityQueue<int, (int, int)> pq = new PriorityQueue<int, (int,int)>();
            for (int i = 0; i < nums.Length; i++)
            {
                pq.Enqueue(i, (nums[i],i));
            }

            while (pq.Count>0)
            {
                int dq = pq.Dequeue();
                if (!marked.Contains(dq))
                {
                    result += nums[dq];

                    marked.Add(dq);
                    marked.Add(dq - 1);
                    marked.Add(dq + 1);
                }
            }
            return result;
        }
}
```