# Ruby simple solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-magic-dictionary/solutions/5992266/](https://leetcode.com/problems/implement-magic-dictionary/solutions/5992266/)

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
```ruby []
class MagicDictionary
    def initialize()

    end


=begin
    :type dictionary: String[]
    :rtype: Void
=end
    def build_dict(dictionary)
      @arr = dictionary.each_with_object([]) { _2 << [_1, _1.size] }             
    end


=begin
    :type search_word: String
    :rtype: Boolean
=end
    def search(search_word, sz = search_word.size)
      @arr.select { _1[1] == sz }.any? { |(w, _)| sz.times.inject(0) { |c, i| search_word[i] == w[i] ? c : c == 1 ? (break 2) : 1} == 1 } 
    end


end

# Your MagicDictionary object will be instantiated and called as such:
# obj = MagicDictionary.new()
# obj.build_dict(dictionary)
# param_2 = obj.search(search_word)
```