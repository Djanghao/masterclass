# Easy - Min Max Logic

**Author:** user1081y
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2949126/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2949126/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
First we'll get the indices of the target into a list. Then we'll loop over the list and compare two things.

- Distance between target and StatIndex by going right.
- Ditance between startIndex and target by going backward.

We'll get the 2 distance at each point and we'll comapre them and store in MinDistance and in end We'll return it.

# Case
- What if startIndex is coming after the target to check this case :
```
list[i] - startIndex > 0 -> this loop will be false and else part will be executed.
```

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: I used one list to maintain the indexes of the targets so O(N).
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

Please go throught the solution and let me know.

# Code
```
public class Solution {
    public int ClosetTarget(string[] words, string target, int startIndex) {
           if (!words.Contains(target))
            {
                return -1;
            }

            List<int> list= new List<int>();    
            for (int i = 0; i < words.Length; i++)
            {
                if (words[i] == target)
                {
                    list.Add(i);
                }
            }
           
            int total = 0;
            int distance = 0;
            int MinDistance = Int32.MaxValue;
            for (int i = 0; i < list.Count; i++)
            {
                if (list[i] - startIndex > 0)
                {
                    distance = Math.Min(list[i] - startIndex, words.Length  - list[i] +startIndex );
                    MinDistance = Math.Min(distance, MinDistance);
                }
                else {
                    total = Math.Min( startIndex - list[i], words.Length -  startIndex  + list[i]);
                    MinDistance = Math.Min(total, MinDistance);
                }
            }
            return MinDistance;
    }
}
```