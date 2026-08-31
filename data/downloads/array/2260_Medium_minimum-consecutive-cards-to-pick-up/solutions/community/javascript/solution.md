# JS | HashMap | Easy + Clean | 142 ms - 94%, 69 MB - 96%

**Author:** NatalyaV
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/3061202/](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/3061202/)

---

# Intuition
Use the hash map to store the last met card's index by card, when you meet the repetitive card recalculate the answer and move forward.

# Approach
Hash map

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    let dic = new Map();
    let ans = Infinity;

    for (let i = 0; i < cards.length; i++) {
        if (dic.has(cards[i])) {
            ans = Math.min(ans, i - dic.get(cards[i]) + 1);
        }
        
        dic.set(cards[i], i);
    }

    return ans == Infinity ? -1 : ans;
};

```