# c#, Linq

**Author:** bytchenko
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/2925408/](https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/2925408/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can turn similarity into equality: two words A and B are similar if f(A) equals to f(B) where f takes distinct characters from the word and sorts them:

f(abracadabra) => abcdr

then we can group by similar words and perform a simple arithmetics

# Approach
<!-- Describe your approach to solving the problem. -->
Linq query

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
`O(n * length(word))`

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
`O(n)`

# Code
```
public class Solution {
    public int SimilarPairs(string[] words) => words
        .GroupBy(word => string.Concat(word.Distinct().OrderBy(c => c)))
        .Sum(group => (group.Count() - 1) * group.Count() / 2);    
}
```