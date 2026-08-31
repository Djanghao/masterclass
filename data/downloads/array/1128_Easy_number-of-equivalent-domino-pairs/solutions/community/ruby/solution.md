# Simple Solution, O(n), O(n). Comments included.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/5067202/](https://leetcode.com/problems/number-of-equivalent-domino-pairs/solutions/5067202/)

---

# Code
```
# @param {Integer[][]} dominoes
# @return {Integer}
def num_equiv_domino_pairs(dominoes)
    freq_hash = Hash.new(0)
    # Put dominos in a freqency hash.
    dominoes.each do |x, y|
        if y < x
            temp = x
            x = y
            y = temp
        end
        freq_hash[[x,y]] += 1
    end
    
    answer = 0

    # Now traverse the dominoes again but
    # this time we have the data from future
    # indexes, we reduce the freq_hash by one
    # for each and add that number to our answer.
    # We do this because we only need the 
    # number of pairs from current index
    # until the last index(cannot include prior indexes).
    dominoes.each do |x, y|
        if y < x
            temp = x
            x = y
            y = temp
        end
        
        answer += freq_hash[[x,y]] -= 1
    end


    answer
end
```