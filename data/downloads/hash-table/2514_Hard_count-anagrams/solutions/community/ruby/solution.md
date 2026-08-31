# Ruby math combinatorics RT 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-anagrams/solutions/4640309/](https://leetcode.com/problems/count-anagrams/solutions/4640309/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} s
# @return {Integer}
def count_anagrams(s)
  mod = 10 ** 9 + 7
  
  fact = -> (i, max_i = nil) { max_i ? ((max_i + 1)..i).inject(:*) : (1..i).inject(:*) } 

  s.split.inject(1) do |acc, word|
    if word.chars.uniq.size == 1
      cnt = 1
    else
      chars = word.chars.inject(Hash.new(0)) { |h, e| h[e] += 1 ; h }.values.reject {|k| k <=1}
      cnt = fact.call(word.size, chars.max)
      chars.delete_at(chars.index(chars.max)) if chars.max
      chars.each { |k| cnt /= fact.call(k)}    
    end
    acc * cnt  % mod
  end  
end
```