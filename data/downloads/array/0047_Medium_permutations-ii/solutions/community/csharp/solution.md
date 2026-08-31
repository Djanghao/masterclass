# Concise backtracking, briefly explained

**Author:** ilya-chumakov
**Votes:** 3
**Link:** [https://leetcode.com/problems/permutations-ii/solutions/3396951/](https://leetcode.com/problems/permutations-ii/solutions/3396951/)

---

# Intuition
Modify https://leetcode.com/problems/permutations/solutions/3367546/classic-backtracking-solution-briefly-explained solution to avoid duplicates.

# Approach
In contrast to https://leetcode.com/problems/subsets-ii/solutions/3396948/concise-briefly-explained-sorting/, we can't use sorting and `nums[i-1]` check to skip duplicated candidates. Because of swapping, the `nums` array is unsorted most of the time. Therefore, let's allocate a hash set.


# Complexity
- Time complexity: $$O(n!)$$ - total permutations count

- Space complexity: $$O(n)$$ - max depth of recursion stack

# Code
```
public class Solution
{
    private List<IList<int>> _result;

    public IList<IList<int>> PermuteUnique(int[] nums)
    {
        _result = new List<IList<int>>();
        Backtrack(nums, 0);
        return _result;
    }

    private void Backtrack(IList<int> nums, int begin)
    {
        //stop case
        if (begin == nums.Count - 1)
        {
            _result.Add(nums.ToArray());
        }

        var set = new HashSet<int>();

        for (int i = begin; i < nums.Count(); i++)
        {
            //skip duplicates
            if (!set.Add(nums[i])) continue;

            (nums[i], nums[begin]) = (nums[begin], nums[i]);

            Backtrack(nums, begin + 1);

            (nums[i], nums[begin]) = (nums[begin], nums[i]);
        }
    }
}
```