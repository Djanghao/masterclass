# Simple ruby solution.

**Author:** A_r_t_e_m
**Votes:** 0
**Link:** [https://leetcode.com/problems/one-edit-distance/solutions/3484275/](https://leetcode.com/problems/one-edit-distance/solutions/3484275/)

---

# Intuition
Used Levenshtein distance algorithm as a first variant.
It times out on crazy cases where strings have length ~ 5K chars
The second attempt is a simple iteration through strings.

# Approach

when strings have equal sizes:
check if there are more than one different characters in the strings. 

when strings have different sizes:
check if there are more than one different characters in the strings.
Index should be incremented for the bigger string when the first non-equal char found.


# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
# @param {String} s
# @param {String} t
# @return {Boolean}

# Levenshtein algorithm. Does not work on the crazy edge cases with very long strings
# def is_one_edit_distance(s, t)
#   return false if s == t
#   return false if (s.size - t.size).abs > 1

#   m = Array.new(s.size + 1) { Array.new(t.size+1) }
  
#   i = 0
#   m[0][i], i = i, i+1 while i < m.first.size
#   i = 0
#   m[i][0], i = i, i+1 while i < m.size
  
#   1.upto(s.size) do |i|
#     1.upto(t.size) do |j|
#       replace = s[i-1] == t[j-1] ? 0 : 1

#       m[i][j] = [m[i-1][j] + 1, m[i][j-1] + 1, m[i-1][j-1] + replace].min
#     end
#   end

#   m.last.last == 1
# end

def is_one_edit_distance(s, t)
  return false if s == t
  return false if (s.size - t.size).abs > 1

  i = 0
  if s.size == t.size
    s.each_char.with_index do |c, j|
      next if c == t[j]
      return false if i == 1
      
      i+=1
    end
  else
    s, t = t, s if s.size < t.size

    t.each_char.with_index do |c, j|
      next if c == s[j + i]
      return false if i == 1
      return false if c != s[j + 1]

      i+= 1
    end
  end  

  true
end
```