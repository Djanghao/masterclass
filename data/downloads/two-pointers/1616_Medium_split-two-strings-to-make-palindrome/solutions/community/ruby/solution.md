# Ruby solution

**Author:** ozovalihasan
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/4894610/](https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/4894610/)

---

# Code
```ruby []
# @param {String} a
# @param {String} b
# @return {Boolean}
def check_palindrome_formation(a, b)
  b = b.reverse
  check_strings(a, b) || check_strings(b, a)
end

def check_strings(str1, str2)
  half_size = str1.size / 2
  left_index = half_size - 1
  right_index = half_size * -1
  left_part = str1[..left_index]
  right_part = str1[right_index..].reverse

  found_index = (0..left_index + 1).to_a.bsearch_index do |index|
    left_part[index] == right_part[index] && left_part[index..] == right_part[index..]
  end

  if found_index
    return str1[...found_index] == str2[...found_index] ||
              str2[-found_index..] == str1[-found_index..]
  end 
  
  false
end

```