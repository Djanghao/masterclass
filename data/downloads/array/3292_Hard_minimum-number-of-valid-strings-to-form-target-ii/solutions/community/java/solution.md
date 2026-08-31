# Easy Java Solution | Beginner Friendly

**Author:** Royal4365
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/solutions/5788600/](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/solutions/5788600/)

---

# Intuition
To solve the problem of finding the minimum number of valid strings required to construct a target string, we need to determine how each word from the list can contribute to forming the target. The goal is to efficiently track the minimum number of words needed through dynamic programming (DP). The problem essentially boils down to a variant of the "minimum number of coins" problem, where the "coins" are the valid strings and the "amount" is the target string.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Preprocessing Matches:

- For each word in the list, use the Knuth-Morris-Pratt (KMP) algorithm to determine all the positions in the target string where each word can match.
- This preprocessing will help us quickly find where each word can be placed within the target string.
2. Dynamic Programming (DP) Table:
- Use a DP array where dp[i] represents the minimum number of words needed to form the substring target[0:i].
- Initialize dp[0] = 0 because zero words are needed to form an empty string.
- For each position i in the target, update the DP table based on the matches found during preprocessing. If a word can match starting at position i, update the DP value for the end of that match position.
3. Result:

- The value dp[n] (where n is the length of the target string) will give us the minimum number of words needed to form the entire target. If dp[n] remains as Integer.MAX_VALUE, it means it\u2019s impossible to form the target with the given words.
<!-- Describe your approach to solving the problem. -->

# Complexity
## Time complexity: $$O(m * n + n * k)$$,
where:
- $$O(m * n)$$ is the time complexity for preprocessing each word using the KMP algorithm, where m is the length of a word and n is the length of the target string.
- $$O(n * k)$$ is the time complexity for updating the DP table, where k is the number of matches found for each position in the target.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

## Space complexity: $$O(n + m * k)$$, 
where:
- $$O(n)$$ is for the DP array.
- $$O(m * k)$$ is for storing the matches found, where m is the length of the words and k is the number of matches.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int minValidStrings(String[] words, String target) {
        int n = target.length();
        int[] dp = new int[n + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;

        List<List<Integer>> matches = new ArrayList<>(n);
        for (int i = 0; i < n; i++) {
            matches.add(new ArrayList<>());
        }
        char[] targetChars = target.toCharArray();
        for (String word : words) {
            char[] wordChars = word.toCharArray();
            int m = wordChars.length;
            int[] pi = new int[m];
            for (int i = 1, j = 0; i < m; i++) {
                while (j > 0 && wordChars[i] != wordChars[j]) {
                    j = pi[j - 1];
                }
                if (wordChars[i] == wordChars[j]) {
                    j++;
                }
                pi[i] = j;
            }

            for (int i = 0, j = 0; i < n; i++) {
                while (j > 0 && targetChars[i] != wordChars[j]) {
                    j = pi[j - 1];
                }
                if (targetChars[i] == wordChars[j]) {
                    j++;
                }
                if (j > 0) {
                    matches.get(i - j + 1).add(j);
                    if (j == m) {
                        j = pi[j - 1]; 
                    }
                }
            }
        }
        for (int i = 0; i < n; i++) {
            if (dp[i] == Integer.MAX_VALUE) continue;
            for (int len : matches.get(i)) {
                if (i + len <= n) {
                    dp[i + len] = Math.min(dp[i + len], dp[i] + 1);
                }
            }
        }
        return dp[n] == Integer.MAX_VALUE ? -1 : dp[n];
    }
}
```