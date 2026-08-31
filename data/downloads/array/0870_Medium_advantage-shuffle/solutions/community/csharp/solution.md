# C# greedy

**Author:** rajeshkumar1130
**Votes:** 0
**Link:** [https://leetcode.com/problems/advantage-shuffle/solutions/5910228/](https://leetcode.com/problems/advantage-shuffle/solutions/5910228/)

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
    public int[] AdvantageCount(int[] nums1, int[] nums2) {
        Dictionary<int, Queue<int>> assigned = new();
        Queue<int> unassigned = new();

        foreach(var num in nums2)
        {
            if(!assigned.ContainsKey(num)) 
            {
                assigned[num] = new();
            }
        }

        var sorted1 = nums1.OrderBy(x=> x).ToArray();
        var sorted2 = nums2.OrderBy(x=> x).ToArray();

        int i = 0;

        foreach(var num in sorted1)
        {
            if(num>sorted2[i])
            {
                assigned[sorted2[i++]].Enqueue(num);
            }
            else
            {
                unassigned.Enqueue(num);
            }
        }

        int[] ans = new int[nums1.Length];
        i = 0;
        foreach(var num in nums2)
        {
            if(assigned[num].Count>0)
            {
                ans[i] = assigned[num].Dequeue();
            }
            else
            {
                ans[i] = unassigned.Dequeue();
            }
            i++;
        }

        return ans;
    }
}
```