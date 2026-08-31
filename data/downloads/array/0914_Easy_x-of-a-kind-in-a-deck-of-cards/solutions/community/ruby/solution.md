# Ruby 1 liner

**Author:** staceymck314
**Votes:** 1
**Link:** [https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/5614465/](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/5614465/)

---

# Code
```
# @param {Integer[]} deck
# @return {Boolean}
def has_groups_size_x(deck)
    deck.tally.values.reduce {|acc, val| acc.gcd(val)} > 1
end
```