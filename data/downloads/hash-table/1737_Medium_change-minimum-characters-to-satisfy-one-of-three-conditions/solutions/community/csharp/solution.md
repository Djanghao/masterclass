# c#, Linq

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/3032609/](https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/3032609/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First, we can group string by characters and get a dictionary with at most `26` entries. Having this dictionary created, we can easily compute steps required to meet each criteria:

- Greedy approach if we want to make all characters equal (all symbols must be equal to the most frequent one)
- Brute force for `a < b`: if `a < b` then exists a character `middle` such that all chars in `a` a less than `middle`, while all chars in `b` are greater or equal to `middle`. We can just try all symbols in `b..z` range. 

# Approach
<!-- Describe your approach to solving the problem. -->
Linq query

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ (`GroupBy`), but can be turned into $$O(1)$$ if we create and dictionary without Linq. 

# Code
```
public class Solution {
    
    private static int StrictlyLess(Dictionary<char, int> a, Dictionary<char, int> b) => Enumerable
          .Range('b', 'z' - 'a')
          .Min(middle => a.Where(pair => pair.Key >= middle).Sum(pair => pair.Value) + 
                         b.Where(pair => pair.Key < middle).Sum(pair => pair.Value));
    
    public int MinCharacters(string a, string b) {
        Dictionary<char, int> ha = a
            .GroupBy(c => c)
            .ToDictionary(g => g.Key, g => g.Count());

        Dictionary<char, int> hb = b
            .GroupBy(c => c)
            .ToDictionary(g => g.Key, g => g.Count());

        return new int[] {
            a.Length - ha.Values.Max() + b.Length - hb.Values.Max(),
            StrictlyLess(ha, hb),
            StrictlyLess(hb, ha)
        }.Min();
    }
}
```