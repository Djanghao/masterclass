# Easy Ruby solution

**Author:** Aksafan
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/5939843/](https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/5939843/)

---

# Approach
- Split and iterate through `target`
- Use range from `a` to everyt target's letter and add to previous

# Complexity
- Time complexity:
O(n*m)


# Code
```ruby []
# @param {String} target
# @return {String[]}
def string_sequence(target)
  result = []
  prev = ''

  target.split('').each_with_index do |letter, i|
    ('a'..letter).each do |char|
      result << (i.zero? ? char : "#{prev}#{char}")
    end
    prev = "#{prev}#{letter}"
  end

  result
end


```