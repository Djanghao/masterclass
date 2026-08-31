# One line solution

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/5311861/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/5311861/)

---

# Approach
It returns a list of words where the word is included if it's the first word in the group or if it's different from the previous word in the group.

# Complexity
- Time complexity:
$$O(n)$$, where n is the number of elements in the groups list. This is because the list comprehension iterates through the groups list once to filter out the desired words.

- Space complexity:
$$O(n)$$, where n is the number of elements in the groups list. This is because the list comprehension creates a new list to store the filtered words, which can grow up to the size of the groups list.

# Code
``` python3 []
class Solution:
    def getLongestSubsequence(self, words: List[str], groups: List[int]) -> List[str]:
        return [words[i] for i, j in enumerate(groups) if i == 0 or j != groups[i - 1]]  
```
``` javascript []
/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    return words.filter((word, i) => i === 0 || groups[i] !== groups[i - 1]);
};
```
``` php []
class Solution {

    /**
     * @param String[] $words
     * @param Integer[] $groups
     * @return String[]
     */
    function getLongestSubsequence($words, $groups) {
        return array_values(
            array_filter($words, function($i) use ($groups) {
                return $i == 0 || $groups[$i] != $groups[$i - 1]; 
            }, ARRAY_FILTER_USE_KEY)
        );
    }
}
```