# Beats 100% runtime. O(n), O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-poker-hand/solutions/4101920/](https://leetcode.com/problems/best-poker-hand/solutions/4101920/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer[]} ranks
# @param {Character[]} suits
# @return {String}
def best_hand(ranks, suits)

    if suits.uniq.size == 1
        return "Flush"
    else
        max_char = 1
        hash = {}
        ranks.each do |r|
            if !hash[r] 
                hash[r] = 1
            else
                hash[r] = hash[r] + 1
                if hash[r] > max_char
                    max_char = hash[r]
                end
            end
        end

        if max_char > 2
            return "Three of a Kind"
        elsif max_char == 2
            return "Pair"
        else
            return "High Card"
        end
    end
    
end
```