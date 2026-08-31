# ruby, fastest/least mem so far ( beats 100%/100%)

**Author:** qwyzmo
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-subsets/solutions/4258109/](https://leetcode.com/problems/word-subsets/solutions/4258109/)

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
def universal?(w1map, w2)
  w1map.each do |k,v|
    return false if w2[k].nil? || w2[k] < v
  end
  true
end

# @param {String[]} words1
# @param {String[]} words2
# @return {String[]}
def word_subsets(words1, words2)
  a = words2.map{|w| w.chars.group_by{|c| c} }
  a.map!{|h| h.map{|k,v| [k,v.size]}}.flatten!(1).uniq!
  h = {}
  a.each do |p|
    if h[p[0]]
      h[p[0]] = [p[1], h[p[0]]].max
    else
      h[p[0]] = p[1]
    end
  end
  result = []
  words1.each do |w|
    cmap = w.chars.group_by{|e| e }
    ccount = cmap.map{|k,v| [k, v.size]}.to_h
    result << w if universal?(h, ccount)
  end

  result
end
```