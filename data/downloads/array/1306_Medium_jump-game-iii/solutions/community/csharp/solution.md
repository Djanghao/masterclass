# C# Solution without modifying input.

**Author:** ymjoshi
**Votes:** 2
**Link:** [https://leetcode.com/problems/jump-game-iii/solutions/3572906/](https://leetcode.com/problems/jump-game-iii/solutions/3572906/)

---

# Intuition
Simple C# BFS without modifying input.

# Approach
Store the visited indices, use BFS to find zero number.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n): For the seen hashset

# Code
```
public class Solution {

    HashSet<int> seen = new ();
    Queue<int> queue = new();
    public bool CanReach(int[] arr, int start) {
        queue.Enqueue(start);
        seen.Add(start);

        while(queue.Count > 0)
        {
            int index = queue.Dequeue();
            if(arr[index] == 0)
            {
                return true;
            }

            int forward = index + arr[index];
            int backward = index - arr[index];

            if(forward < arr.Length && seen.Contains(forward) == false)
            {
                queue.Enqueue(forward);
                seen.Add(forward);
            }

            if(backward >= 0 && seen.Contains(backward) == false)
            {
                queue.Enqueue(backward);
                seen.Add(backward);
            }
        }

        return false;
    }
}
```