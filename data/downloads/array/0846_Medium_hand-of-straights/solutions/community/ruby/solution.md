# Ruby || Hash with sorted keys

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/hand-of-straights/solutions/5267859/](https://leetcode.com/problems/hand-of-straights/solutions/5267859/)

---


# Code
```ruby
def is_n_straight_hand(hand, group_size)
    return false unless (hand.size % group_size).zero?
    tally = hand.tally
    i, tv = 0, tally.keys.sort
    while i <= tv.size - group_size do
        i += 1 while i < tv.size && !tally[tv[i]].positive?
        if i <= (tv.size - group_size) then
            return false unless (i...i+group_size).all? {|j|
                    ((j == i || j > i && tv[j] == tv[j-1] + 1) && !(tally[tv[j]] -= 1).negative?)
                }
        end
    end
    return i == tv.size
end
```