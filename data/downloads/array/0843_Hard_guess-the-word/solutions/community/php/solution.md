# PHP solution

**Author:** Vladislav001
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-the-word/solutions/2865374/](https://leetcode.com/problems/guess-the-word/solutions/2865374/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * // This is the Master's API interface.
 * // You should not implement it, or speculate about its implementation
 * interface Master {
 *     function guess($word) {}
 * }
 */

class Solution {
    /**
     * @param String[] $words
     * @param Master $master
     * @return 
     */
 function findSecretWord($words, $master)
    {
        // P.S: It is necessary to take a random one, and not the first one,
        // because for some tests you need 11 steps - a feature of the task.
        // But there is a chance that the test will fail.
        $keyRand = rand(0, count($words) - 1);
        $guessedWord = $words[$keyRand];
        $matchesWithSecret = $master->guess($guessedWord);

        if ($matchesWithSecret === 6) {
            return $guessedWord;
        } else {
            foreach ($words as $key => $word) {
                if ($keyRand === $key || $this->countMatch($guessedWord, $word) != $matchesWithSecret) {
                    unset($words[$key]);
                }
            }
            $words = array_values($words);
            $this->findSecretWord($words, $master);
        }
    }

    function countMatch(string $word1, string $word2): int
    {
        $res = 0;

        for ($i = 0; $i < 6; $i++) {
            if ($word1[$i] === $word2[$i]) {
                $res++;
            }
        }

        return $res;
    }
}
```