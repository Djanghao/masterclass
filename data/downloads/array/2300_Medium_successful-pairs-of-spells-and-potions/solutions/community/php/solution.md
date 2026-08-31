# 🚨 [JavaScript][php] - Beats 100% - Binary Search - faster than other solutions

**Author:** hobobobo256
**Votes:** 5
**Link:** [https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/3371631/](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/solutions/3371631/)

---


# Approach
Here is my approach to solving the problem using a binary search:

* First, we sort the potions array in ascending order. This ensures that the smallest potions are at the front of the
  array.

* Then, we iterate over the spells array. For each spell, we perform _a binary search_ on the potions array to find the
  first potion that is greater than or equal to the _success_ value.

* The number of potions that are greater than or equal to the spell's power is the number of successful pairs that can
  be formed with that spell.
* We add this number to the pairs result array.
* We continue this process until we have iterated over all of the spells.
* Finally, we return the pairs array.

# Complexity

The **time complexity** of the algorithm is O(n log m), where n is the number of potions, and m is the number of spells.
This is because the algorithm sorts the potions array in O(n log n) time and performs a binary search on the potions
array for each spell, which takes O(n*log m) time. => O( (n+m) * log m) => O(n log m)

The **space complexity** of the algorithm is O(1), since the algorithm only requires a constant amount of space to store
the
potions array, the spells array, the success value, and the pairs array.

```javascript []
/**
 * Binary search approach O((n+m)*log(m))
 *
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
        const pairs = [];
        potions.sort((a, b) => a - b);
        const spellsLength = spells.length;
        const potionsLength = potions.length;

        for (let i = 0; i < spellsLength; i++) {
            let count = 0;
            // binary search
            let left = 0;
            let right = potionsLength - 1;
            while (left <= right) {
                // const mid = Math.floor((left + right) / 2);
                const mid = (left + right) >> 1;
                if (spells[i] * potions[mid] >= success) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            count = potionsLength - left;
            pairs.push(count);
        }
        return pairs;
    };
```

```php []
class Solution
{
    /**
     * @param Integer[] $spells
     * @param Integer[] $potions
     * @param Integer $success
     * @return Integer[]
     */
    function successfulPairs(array $spells, array $potions, int $success): array {
        $pairsResult = [];
        $potionsCount = count($potions);
        $spellsCount = count($spells);
        sort($potions);
        // binary search
        for ($i = 0; $i < $spellsCount; $i++) {
            $left = 0;
            $right = $potionsCount - 1;
            while ($left <= $right) {
                $mid = ($left + $right) >> 1;
                if ($spells[$i] * $potions[$mid] >= $success) {
                    $right = $mid - 1;
                } else {
                    $left = $mid + 1;
                }
            }
            $pairsResult[$i] = $potionsCount - $left;
        }
        return $pairsResult;
    }
}
```

```javascript []
/**
 * Binary search approach with  with small optimization
 *
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
        const pairs = [];
        potions.sort((a, b) => a - b);
        const spellsLength = spells.length;
        const potionsLength = potions.length;

        let maxSpellValueWithZeroSuccess = 0; // Optimize -  max value of a spell that will never be successful

        for (let i = 0; i < spellsLength; i++) {
            let count = 0;
            if (spells[i] > maxSpellValueWithZeroSuccess) {
                // binary search
                let left = 0;
                let right = potionsLength - 1;
                while (left <= right) {
                    const mid = (left + right) >> 1;
                    if (spells[i] * potions[mid] >= success) {
                        right = mid - 1;
                    } else {
                        left = mid + 1;
                    }
                }
                count = potionsLength - left;
                if (count == 0) maxSpellValueWithZeroSuccess = spells[i];
            }
            pairs.push(count);
        }
        return pairs;
    };
```

##### Thanks for reading! If you have any questions or suggestions, please leave a comment below. I would love to hear your thoughts! \uD83D\uDE0A
### **Please upvote if you found this post helpful! \uD83D\uDE4F**