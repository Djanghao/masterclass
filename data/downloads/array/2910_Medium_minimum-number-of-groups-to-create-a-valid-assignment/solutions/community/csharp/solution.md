# C# solution beats 100% runtime.

**Author:** cvalingam
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4901216/](https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4901216/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MinGroupsForValidAssignment(int[] balls) {
        int n = balls.Length;
        var map = new Dictionary<int, int>();
        foreach(int ball in balls)
        {
            if(map.ContainsKey(ball))
                map[ball]++;
            else
                map.Add(ball, 1);
        }

        int minFreq = n;
        foreach(int freq in map.Values)
        {
            // Console.WriteLine("Value: " + freq);
            minFreq = Math.Min(minFreq, freq);
        }

        while(minFreq > 0)
        {
            int groupsNeeded = 0;
            foreach(int freq in map.Values)
            {
                int floor = freq/ minFreq;
                int mod = freq % minFreq;
                if(floor < mod)
                {
                    groupsNeeded = 0;
                    break;
                }

                groupsNeeded += (freq + minFreq) / (minFreq + 1);
            }

            if(groupsNeeded > 0)
                return groupsNeeded;

            minFreq--;
        }

        return -1;
    }
}
```