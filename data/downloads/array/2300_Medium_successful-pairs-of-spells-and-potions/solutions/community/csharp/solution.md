# C# Prefix Sum O(m + n) time O(1) space

**Author:** HarrowinG
**Votes:** 5
**Link:** [https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/3370088/](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/3370088/)

---

# Intuition
To get to ```success``` we need to check if we can compensate potion power with our spell power. So we need to calculate ```neededSpellCost``` for each potion. As it is an integer division we need to add 1 when it can't be divided to satisfy the requirement. After that we can see which spell can be used with which potion to make needed power.

# Approach
```neededSpellCost``` can be quite big, such that we won't have any possible spell at all, such cases just ignored.

During the calculation of ```neededSpellCost``` we starting to build up our ```prefixSum```. After the loop on potions we will have ```prefixSum``` sloted with the number of each spell required.

But any ```k``` spell power can also be used to cover any less powerful spell. So we are going through ```prefixSum``` and accumulate it.

Last run just goes through potions and sees how many each potion can cover.

# Complexity
- Time complexity: ```O(m + n + 100000)``` => ```O(m + n)```

- Space complexity: ```O(100000)``` => ```O(1)```

# Code C#
```
public class Solution {
    public int[] SuccessfulPairs(int[] spells, int[] potions, long success)
        {
            var limit = 100001;
            var prefixSum = new int[limit];
            for (var i = 0; i < potions.Length; i++)
            {
                var neededSpellCost = success % potions[i] == 0
                    ? success / potions[i]
                    : success / potions[i] + 1;

                if (neededSpellCost < limit)
                    prefixSum[neededSpellCost]++;
            }

            for (var i = 1; i < prefixSum.Length; i++)
                prefixSum[i] += prefixSum[i - 1];

            var result = new int[spells.Length];
            for (var i = 0; i <  spells.Length; i++)
                result[i] = prefixSum[spells[i]];

            return result;
        }
}
```