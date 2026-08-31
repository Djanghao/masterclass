# Easiest Solution Have a Look JAVA / C#.

**Author:** uzumakinaruto26
**Votes:** 12
**Link:** [https://leetcode.com/problems/subsets/solutions/3215703/](https://leetcode.com/problems/subsets/solutions/3215703/)

---

Please Upvote \uD83D\uDE0A\uD83D\uDE0A

# Code
```
public class Solution {
    public IList<IList<int>> Subsets(int[] nums) {
        IList<IList<int>> subsets = new List<IList<int>>();
        subsets.Add(new List<int>()); 

        for(int i=0; i<nums.Length; i++)
        {
            int count = subsets.Count;
            for(int j=0; j<count; j++)
            {
                var temp = subsets[j].ToList();
                temp.Add(nums[i]);
                subsets.Add(temp);

            }
        }
        return subsets;
    }
}
```