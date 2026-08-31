# [C#] Linear-time Prefix-Sum Solution

**Author:** Oleks_V
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-longest-self-contained-substring/solutions/4969397/](https://leetcode.com/problems/find-longest-self-contained-substring/solutions/4969397/)

---

# Intuition
Check every possible pair of characters as starting and ending characters of potential self-contained string (26 * 26 combinations in worst-case scenario).

# Approach
Let's do some preprocessing first. We'll need to maintain the prefix-sum of occurrences of every possible character per index. An `int[s.Length + 1][26]` is the best choice for that. The loop for its building takes the most of the time: `O(N * 26) ~ O(N)`. Also we'll collect first and last occurrences of every possible charcter within the same loop.

The main processing routine just goes through every possible combination of starting and ending characters of a potential self-contained substring:
* effectively calculate starting and ending indexes of a potential self-contained substring for a given pair of characters - using `mins` and `maxes`;
* early skip the iteration if it cannot improve the result we've already found;
* effectively calculate the count of each character occured in the tested substring - using `prefs`;
* effectively check if the substring is self-contained - using `prefs`.
It will take not more than 26 * 26 * 26 iterations, that is constant time `~ O(1)`.

# Complexity
- Time complexity:
O(N) - for pre-processing logic, O(1) - for main routine.

- Space complexity:
O(N) - for storing of pre-processed data.

# Code
```
public class Solution {
    public int MaxSubstringLength(string s) {
        // prefs is the [N + 1][26] array of prefix sums of occurrences of each character
        var prefs = new int[s.Length + 1][];
        prefs[0] = new int[26];
        // mins and maxes maintaint the first and last occurrences of each charater respectively
        var mins = Enumerable.Repeat(s.Length, 26).ToArray();
        var maxes = new int[26];
        // preprocess in N * 26 time
        for (var i = 0; i < s.Length; i++) {
            prefs[i + 1] = prefs[i].ToArray();
            prefs[i + 1][s[i] - 'a']++;
            mins[s[i] - 'a'] = Math.Min(mins[s[i] - 'a'], i);
            maxes[s[i] - 'a'] = i;
        }

        // prepare for iterating throug existing characters only
        var letters = s.Distinct().ToArray();
        var ret = -1;
        // main routine that takes <= 26 * 26 * 26 time
        for (var i = 0; i < letters.Length; i++) {
            for (var j = i; j < letters.Length; j++) {
                // start and end are the indexes of a substring that contains all the occurrences of characters letters[i] & letters[j]
                var start = Math.Min(mins[letters[i] - 'a'], mins[letters[j] - 'a']);
                var end = Math.Max(maxes[letters[i] - 'a'], maxes[letters[j] - 'a']);
                // if it's the original string or if its length cannot improve current result - then skip the iteration
                if (start == 0 && end == s.Length - 1 || end - start + 1 <= ret) continue;
                // 3rd nested loop is hidden here. Get the range sum for every character
                var pr = prefs[end + 1].Select((x, i) => x - prefs[start][i]).ToArray();
                // check if substring is self-contained
                var test = pr.Select((d, i) => d == 0 || d == prefs.Last()[i]).ToArray();
                if (test.All(t => t)) ret = end - start + 1;
            }
        }
        return ret;
    }
}
```