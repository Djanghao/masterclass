# Explained | DP | Recursionn

**Author:** dinar
**Votes:** 19
**Link:** [https://leetcode.com/problems/decremental-string-concatenation/solutions/3677531/](https://leetcode.com/problems/decremental-string-concatenation/solutions/3677531/)

---

**Solution**:
```
class Solution:
    def minimizeConcatenatedLength(self, words: List[str]) -> int:
        n = len(words)

        @lru_cache(None)
        def dp(i, last1, first2):
            if i == n:
                return 0

            len1 = len(words[i]) - (last1 == words[i][0])
            res1 = len1 + dp(i + 1, words[i][-1], first2)

            len2 = len(words[i]) - (first2 == words[i][-1])
            res2 = len2 + dp(i + 1, last1, words[i][0])

            return min(res1, res2)

        return len(words[0]) + dp(1, words[0][-1], words[0][0])

```
**Introduction:**
When given a list of strings, we want to perform a series of join operations to minimize the length of the final concatenated string. However, there is a rule that if the last character of one string is equal to the first character of the next string, one of them must be deleted during the concatenation. In this article, we will explore an efficient solution to this problem using dynamic programming and memoization.

**Solution Explanation:**
To solve this problem, we can use dynamic programming with memoization to avoid redundant calculations. Let's walk through the provided solution step by step:

1. Initialize the length of the array of strings as n.
2. Define a recursive function `dp` that takes three parameters: `i`, `last1`, and `first2`. Here, `i` represents the current index of the string we are considering, `last1` represents the last character of the previous string, and `first2` represents the first character of the current string.
3. Create a base case for the recursive function. If `i` is equal to n (i.e., we have reached the end of the array), return 0 to indicate that no more join operations are needed.
4. Calculate the length of the current string `words[i]` by subtracting 1 from its length if `last1` is equal to `words[i][0]`. This ensures that we don't double-count characters when joining strings with matching first and last characters.
5. Recursively calculate the minimum length of the concatenated string for two cases:
   - Case 1 (res1): Join `words[i]` to the end of the concatenated string by calling `dp(i + 1, words[i][-1], first2)`. Add the length of `words[i]` after removing the duplicated character (if any).
   - Case 2 (res2): Join `words[i]` to the beginning of the concatenated string by calling `dp(i + 1, last1, words[i][0])`. Add the length of `words[i]` after removing the duplicated character (if any).
6. Return the minimum of `res1` and `res2`.
7. In the main function `minimizeConcatenatedLength`, start with `i = 1` (since we have already considered the first string) and initialize `last1` and `first2` with the last and first characters of the first string, respectively.
8. Return the length of the first string plus the result of `dp(1, words[0][-1], words[0][0])`. This represents the minimum possible length of the concatenated string.

**Why it Works:**
The solution works by recursively exploring all possible join operations while considering the length of the concatenated string. The memoization technique, implemented using the `@lru_cache` decorator, stores the results of previous function calls, preventing redundant calculations and significantly improving the overall efficiency.

By considering both cases of joining the current string (`words[i]`) either at the end or the beginning of the concatenated string, the algorithm ensures that all possible combinations are explored. Taking the minimum of the two cases guarantees that we choose the option that results in the shortest possible concatenated string.

The trick lies in calculating the length of each string while accounting for the removal of the duplicated character when necessary. By subtracting 1 from the length of `words[i]` if the first character matches the last character of the previous string, we avoid counting the duplicated character twice.

**Time Complexity:**
The time complexity of this solution is O(n * 26 * 26) = O(n), where n is the number of strings in the input array. This is because the `dp` function is called recursively for each string, and each string can start and in one of 26 characters. The memoization technique ensures that each unique combination of parameters is computed only once, reducing the overall time complexity.
