# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/4903769/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/4903769/)

---


# Code
```
# @param {String[]} words
# @param {Integer[]} groups
# @return {String[]}
def get_longest_subsequence(words, groups)
    i_to_remove = {}
    i = 1
    prev = groups[0]
    while i < groups.size
        if groups[i] == prev
            i_to_remove[i] = true
        end
        prev = groups[i]
        i += 1
    end

    new_words = []
    words.each_with_index do |w, i|
        if !i_to_remove[i]
            new_words << w
        end
    end

    new_words
end
```