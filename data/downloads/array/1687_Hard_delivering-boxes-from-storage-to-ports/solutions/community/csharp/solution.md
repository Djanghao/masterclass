# Solution

**Author:** MaksymVoiev
**Votes:** 0
**Link:** [https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/solutions/4379037/](https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/solutions/4379037/)

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
public class Solution 
{
    public int BoxDelivering(int[][] boxes, int portsCount, int maxBoxes, int maxWeight) 
    {
        int n = boxes.Length;
        LinkedList<int[]> queue = new LinkedList<int[]>();
        queue.AddLast(new int[] { -1, 1 });

        int left = -1;
        int weight = 0;
        int currentCost = 0;

        for (int i = 0; i < n; i++)
        {
            weight += boxes[i][1];

            // Remove boxes from the left until the limits are satisfied
            while (i - left > maxBoxes || weight > maxWeight)
            {
                left++;
                weight -= boxes[left][1];
            }

            // Remove outdated entries from the queue
            while (queue.Count > 0 && queue.First.Value[0] < left)
            {
                queue.RemoveFirst();
            }

            // Calculate the current cost
            currentCost = queue.First.Value[1] + 1;
            if (i < n - 1 && boxes[i][0] == boxes[i + 1][0])
            {
                currentCost++;
            }

            // Remove entries with higher cost from the end of the queue
            while (queue.Count > 0 && queue.Last.Value[1] >= currentCost)
            {
                queue.RemoveLast();
            }

            // Add the current entry to the queue
            queue.AddLast(new int[] { i, currentCost });
        }

        // Count additional cost for distinct ports
        for (int i = 0; i < n - 1; i++)
        {
            if (boxes[i][0] != boxes[i + 1][0])
            {
                currentCost++;
            }
        }

        return currentCost;
    }
}

```