# faster ruby solution

**Author:** qwyzmo
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-word-distance-ii/solutions/4205216/](https://leetcode.com/problems/shortest-word-distance-ii/solutions/4205216/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
This is similar to the other ruby solution, but I short circuit when the distance is 1, which is a little faster.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class WordDistance

=begin
    :type words_dict: String[]
=end
    def initialize(words_dict)
      @wpos = {}
      words_dict.each_with_index do |w, i|
        if @wpos[w]
          @wpos[w] << i
        else 
          @wpos[w] = [i]
        end
      end
      # pp @wpos
    end

=begin
    :type word1: String
    :type word2: String
    :rtype: Integer
=end
    def shortest(word1, word2)
      w1 = @wpos[word1]
      w2 = @wpos[word2]
      # pp w1
      # pp w2
      min = 9999999
      w1.each do |i|
        w2.each do |j|
          return 1 if [i,j].max - [i,j].min == 1
          min = [min, (i-j).abs].min
        end
      end
      min
    end


end

# Your WordDistance object will be instantiated and called as such:
# obj = WordDistance.new(words_dict)
# param_1 = obj.shortest(word1, word2)
```