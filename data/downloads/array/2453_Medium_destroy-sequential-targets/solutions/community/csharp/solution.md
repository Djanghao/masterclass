# One Pass O(n) C# Solution

**Author:** Mark0960
**Votes:** 0
**Link:** [https://leetcode.com/problems/destroy-sequential-targets/solutions/4192137/](https://leetcode.com/problems/destroy-sequential-targets/solutions/4192137/)

---

# Intuition
We will need to use modulo (%) to determine whict targets get destroyed in the same seed.

# Approach
1. `Dictionary<modulo, (min, count)>` will store each modulo and its occurrences and minimum num.
2. Iterate nums and get modulo of each num.
3. Update count and minimum num per modulo in the Dictionary.
4. Update the best modulo found based on max count then minimum num.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
public class Solution {
    public int DestroyTargets(int[] nums, int space) {
        Dictionary<int, (int min, int count)> dict = new();
        dict.Add(-1, (-1, 0));
        int bestSeedKey = -1;

        foreach(int num in nums)
        {
            int mod = num % space;
            if(dict.TryGetValue(mod, out (int min, int count) currentSeedValue))
            {
                currentSeedValue = (Math.Min(currentSeedValue.min, num), currentSeedValue.count + 1);
            }
            else
            {
                currentSeedValue = (num, 1);
            }

            dict[mod] = currentSeedValue;

            (int min, int count) bestSeedValue = dict[bestSeedKey];
            if(bestSeedValue.count < currentSeedValue.count)
            {
                bestSeedKey = mod;
            }
            else if(bestSeedValue.count == currentSeedValue.count &&
                bestSeedValue.min > currentSeedValue.min)
            {
                bestSeedKey = mod;
            }
        }

        return dict[bestSeedKey].min;
    }
}
```