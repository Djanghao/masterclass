# Ruby Solution. Easy to understand

**Author:** guswhitten
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/3172785/](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/3172785/)

---

```
# @param {Integer[]} cards
# @return {Integer}
def minimum_card_pickup(cards)
    min = cards.size + 1
    past_cards = {} # { key => value } -> { card => index_last_seen }
    
    (0...cards.size).each do |r|
        # record dist btwn current idx and last idx if card has already been seen
        min = [min, r - past_cards[cards[r]] + 1].min if past_cards.has_key?(cards[r])  
        past_cards[cards[r]] = r
    end
    
    min == cards.size + 1 ? -1 : min
end
```