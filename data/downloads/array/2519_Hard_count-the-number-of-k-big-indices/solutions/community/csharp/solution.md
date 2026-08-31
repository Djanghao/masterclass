# c#, priority queue

**Author:** bytchenko
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/2971546/](https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/2971546/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can scan the array from left to right (and then from right to left) while keeping up to `k` max items so far.  

# Approach
<!-- Describe your approach to solving the problem. -->
Two passes (from left to right and then from right to left)
`PriorityQueue` to keep `k` max items
`HashSet<int> first` to keep indexes which are selected during the first pass

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n * log(n))$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
public class Solution {
    public int KBigIndices(int[] nums, int k) {
        int result = 0;  

        PriorityQueue<int, int> kMin = new();

        HashSet<int> first = new();
 
        for (int i = 0; i < nums.Length; ++i) {
            if (kMin.Count == k && nums[i] > kMin.Peek()) 
                first.Add(i);
            
            kMin.Enqueue(nums[i], -nums[i]);

            while (kMin.Count > k)
                kMin.Dequeue();
        }         

        kMin.Clear();

        for (int i = nums.Length - 1; i >= 0; --i) {
            if (kMin.Count == k && nums[i] > kMin.Peek() && first.Contains(i))
                result += 1;

            kMin.Enqueue(nums[i], -nums[i]);

            while (kMin.Count > k)
                kMin.Dequeue();
        }

        return result;
    }
}
```