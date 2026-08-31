# Extremely simple, clear & fast, 20 lines, Runtime: 100%, Memory: 100%, O(n²)

**Author:** FSGT
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/5221359/](https://leetcode.com/problems/valid-permutations-for-di-sequence/solutions/5221359/)

---

# Intuition & Approach
<!-- Describe your first thoughts on how to solve this problem. -->

Initially I struggled to find a good solution, calculating permutations is very expensive, and with a complicated condition it would be difficult to reuse previously calculated permutations if I also need to keep track of which numbers I have used.

However, after realizing that (for our conditions) the range [1,7,19] would be logically equivalent to the range [0,1,2], the problem could be simplified a lot by normalized all numbers after each removal. If I remove the element 'i', and the next value should be smaller ('D'), I can specify that I will allow usage of all numbers from [0 <= x <= i-1], and if the next value should be bigger ('I'), I can specify that I only allow [i <= x <= totalNumbers].

This allows us to write a very basic memoization solution with time complexity O(n\xB2), using the two keys idx (numbers used) and i (previous number used) in two different layouts (increasing and decreasing), idx & i are both capped by n (length of s), O(n\xB2 + n\xB2) => O(n\xB2)





# Complexity
- Time complexity: O(n\xB2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n\xB2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int NumPermsDISequence(string s)
        => (int)NormalizedMemoization(s, 0, 0, s.Length, new Dictionary<(int,int,int), long>());

    public long NormalizedMemoization(string s, int idx, int min, int max, Dictionary<(int,int,int), long> memoization) {
        if (idx == s.Length)
            return min <= max ? 1 : 0;

        if (memoization.TryGetValue((idx,min,max), out var ways))
            return ways;

        for (int i = min; i <= max; i++) {
            if (s[idx] == 'D') {
                ways += NormalizedMemoization(s, idx+1, 0, i-1, memoization);
            } else {
                ways += NormalizedMemoization(s, idx+1, i, s.Length - idx - 1, memoization);
            }
        }
        ways %= 1_000_000_007;
        memoization[(idx,min,max)] = ways;
        return ways;
    }
}
```