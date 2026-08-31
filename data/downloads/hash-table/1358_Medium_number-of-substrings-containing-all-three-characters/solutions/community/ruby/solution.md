# Ruby Solution. Easy to understand

**Author:** guswhitten
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/3157964/](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/solutions/3157964/)

---

```
# @param {String} s
# @return {Integer}
def number_of_substrings(s)
    return 0 if s.size < 3
    l = count = 0
    freqs = { 'a' => 0, 'b' => 0, 'c' => 0 }
    
    s.each_char.with_index do |abc, i|
        freqs[abc] += 1
        while freqs.values.all? { |freq| freq > 0 }
            count += s.size - i
            freqs[s[l]] -= 1
            l += 1
        end
    end
    
    count
end
```