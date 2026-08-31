# c#, simple nested loops

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/sequence-reconstruction/solutions/3005084/](https://leetcode.com/problems/sequence-reconstruction/solutions/3005084/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The answer is `true` *if and only if* for each `i` in `0 .. n - 1` range `(nums[i], nums[i + 1])` pair appears somewhere in `sequences`. Here we use the fact that `sequences` are valid (no loops, no items that are not in `nums`).

# Approach
<!-- Describe your approach to solving the problem. -->
Just a simple nested loop to check each pair within `sequence`  

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(m)$$ where $$m$$ is number of `int` items in all `sequences` 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ where $$n$$ is length of `nums`

# Code
```
public class Solution {
    public bool SequenceReconstruction(int[] nums, IList<IList<int>> sequences) {
        Dictionary<int, int> dict = new (nums.Length - 1);
        
        for (int i = 0; i < nums.Length - 1; ++i)
            dict.Add(nums[i], nums[i + 1]);

        foreach (var seq in sequences) 
            for (int i = 0; i < seq.Count - 1; ++i) 
                if (dict.TryGetValue(seq[i], out int v) && v == seq[i + 1])
                    dict.Remove(seq[i]);

        return dict.Count == 0;
    }
}
```