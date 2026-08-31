# Ruby solution, faster and more mem efficient that 100%. bit ugly though imho.

**Author:** qwyzmo
**Votes:** 0
**Link:** [https://leetcode.com/problems/bold-words-in-string/solutions/4241238/](https://leetcode.com/problems/bold-words-in-string/solutions/4241238/)

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
# @param {String[]} words
# @param {String} s
# @return {String}
def bold_words(words, s)
  barr = Array.new(s.length, false)
  barr.each_with_index do |e,i|
    barr[i] = [false, s[i]]
  end
  words.each do |w|
    # find every index that w is in s 
    # pp w
    offset = 0
    while(true) do
      # pp "offset: " + offset.to_s
      i = s.index(w, offset)
      # pp i
      break if i.nil?
      (i..(i+w.length-1)).each do |j|
        barr[j] = [true, s[j]]
      end
      offset = i + 1
    end
  end
  # pp barr
  barr.each_with_index do |e, i|
    # when at beginning of array
    if i == 0 && e[0]
      e[1] = "<b>" + e[1]
      next
    end
    next if i == 0
    # when at end of array
    if i == barr.size - 1 && e[0]
      if barr[i-1][0]
        e[1] = e[1] + "</b>"
      else
        e[1] = "<b>" + e[1] + "</b>"
      end
      next
    end
    # when bold tag needs to be added
    if !barr[i-1][0] && e[0]
      e[1] = "<b>" + e[1]
      next 
    end
    # when bold tag needs to be closed
    if barr[i-1][0] && !e[0]
      e[1] = "</b>" + e[1]
      next
    end
  end
  # pp barr
  result = ""
  barr.each do |e|
    result += e[1]
  end
  result
end
```