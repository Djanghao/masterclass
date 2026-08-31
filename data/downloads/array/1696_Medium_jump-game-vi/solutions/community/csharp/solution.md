# c# : Easy Solution

**Author:** rahul89798
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-vi/solutions/5289805/](https://leetcode.com/problems/jump-game-vi/solutions/5289805/)

---

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(n)

# Code
```
public class Solution {
    public int MaxResult(int[] nums, int k) {
        var max_result = nums[^1];
        PriorityQueue<(int, int), (int, int)> pq = new(Comparer<(int, int)>.Create((a, b) => b.Item1.CompareTo(a.Item1)));

        pq.Enqueue((nums[^1], nums.Length - 1), (nums[^1], nums.Length - 1));

        for (int idx = nums.Length - 2; idx >= 0; idx--) {
            while(pq.Count > 0 && pq.Peek().Item2 - idx > k)
                pq.Dequeue();

            max_result = pq.Peek().Item1 + nums[idx];
            pq.Enqueue((max_result, idx), (max_result, idx));
        }

        return max_result;
    }
}
```