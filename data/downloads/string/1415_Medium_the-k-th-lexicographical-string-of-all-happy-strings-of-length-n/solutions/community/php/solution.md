# Backtracking solution (beats 100% runtime)

**Author:** DzmitryBahdanovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/4820935/](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/4820935/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can simply go through all the options in order using recursion and stop at option "k".
We start the recursion with [] empty array that represents curr uniq happy string and at each level of recursion we add a new letter from the array [a, b, c] (to comply with the restrictions, this newsletter should not be queued by the last letter added), when we add "n" letters we check if we reach "k", if yes, we add this string to answer.
<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^3)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return String
     */
    function getHappyString($n, $k) {
        $letters = ['a', 'b', 'c'];
        $ans = '';
        $this->backtrack([], $letters, $n, $k, $ans);

        return $ans;   
    }

    function backtrack($curr, $letters, $n, &$k, &$ans)
    {
        if (count($curr) === $n) {
            $k--;

            if ($k === 0) {
                $ans = implode('', $curr);
            }

            return;
        }

        foreach($letters as $letter) {
            if ($k === 0) {
                break;
            }
            
            if (!empty($curr) && $curr[count($curr) - 1] === $letter) {
                continue;
            }

            $curr[] = $letter;
            $this->backtrack($curr, $letters, $n, $k, $ans);
            array_pop($curr);
        }
    }
}
```