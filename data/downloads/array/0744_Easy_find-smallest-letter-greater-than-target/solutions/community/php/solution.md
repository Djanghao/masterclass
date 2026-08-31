# One line

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/5489487/](https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/5489487/)

---

# Approach
The function uses a generator expression within the next() function to find the first letter greater than the target in the list, or returns the first letter if none are found.

# Complexity
- Time complexity:
$$O(n)$$, where n is the number of letters in the input list. This is because the function iterates through the list of letters to find the next letter greater than the target.

- Space complexity:
$$O(1)$$ because it uses a constant amount of extra space regardless of the size of the input list.

# Code
``` python3 []
class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        return next((x for x in letters if x > target), letters[0])
        
```
``` javascript []
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    return letters.find(x => x > target) || letters[0];
};
```
``` php []
class Solution {

    /**
     * @param String[] $letters
     * @param String $target
     * @return String
     */
    function nextGreatestLetter($letters, $target) {
        return array_reduce($letters, function ($carry, $letter) use ($target) {
            return $carry === null && $letter > $target ? $letter : $carry;
        }, null) ?? $letters[0];
    }
}
```