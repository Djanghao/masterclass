# Ruby Solution. Easy to understand

**Author:** guswhitten
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/4711962/](https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/4711962/)

---

```
# @param {String[]} words
# @return {Integer}
def maximum_number_of_string_pairs(words)
    set = Set.new
    count = 0
    
    words.each do |pair|
        count += 1 if set.include?(pair)
        set.add(pair.reverse)
    end
    
    count
end
```