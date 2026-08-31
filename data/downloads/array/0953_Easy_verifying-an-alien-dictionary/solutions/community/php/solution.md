# [PHP] Througly explained solution (100%/100%)

**Author:** egarrido
**Votes:** 1
**Link:** [https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/3063623/](https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/3063623/)

---

# Intuition
We should check every adjacent pair of words, to determine if they are sorted correctly

# Approach
Firstly, skip obviously correct order - one word can't be sorted incorrect.
Than create map from letters order - explode the string to array and flip it to make two things:
- *Letters to be index, so we souldn't use ```array_search``` and save time;*
- *Indeces become the weight of letter, so we can just compare it;*

Good, now we should start comparing adjacent pairs, starting from ```$p = 1```, and comparing with ```$p - 1```.
Left word (```$left```) should have weight lower than right one (```$right```), so we will compare its letters one by one while pointer ```$i``` reaches the end of left word.

If there is no letter ```$right[$i]```, so return false - left word can't be shorter than right, if it have equal weight before, even if the weight is -1;
If ```$left[$i]``` weight higher than ```$right[$i]``` return false;
If the letters have equal weight, compare next;
And if ```$left[$i]``` weight lower than ```$right[$i]```, the sorting is correct, proceed to next pair of words, skipping further compare of current pair.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```
class Solution {

    /**
     * @param String[] $words
     * @param String $order
     * @return Boolean
     */
    function isAlienSorted($words, $order) {
        // Edge case: if there is only one word in array, just return true
        $len = count($words);
        if ($len <= 1) return true;
        
        // Create a map
        $map = array_flip(str_split($order));
        
        // Iterate through words starting from second word
        // Compare every word to its predecessor
        for ($p = 1; $p < $len; $p++) {
            // Here I used & to make code more obvious
            $left = &$words[$p - 1];
            $right = &$words[$p];

            for ($i = 0; $i < strlen($left); $i++) {
                if (empty($right[$i])) return false;
                if ($map[$left[$i]] > $map[$right[$i]]) return false;
                if ($map[$left[$i]] == $map[$right[$i]]) continue;
				break;
            }
        }

        return true;
    }
}
```