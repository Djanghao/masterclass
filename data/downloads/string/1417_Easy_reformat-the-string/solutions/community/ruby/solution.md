# Ruby solution

**Author:** Volodymyr_Ch
**Votes:** 0
**Link:** [https://leetcode.com/problems/reformat-the-string/solutions/6140933/](https://leetcode.com/problems/reformat-the-string/solutions/6140933/)

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
# @param {String} s
# @return {String}
def reformat(s)
  arr_s = s.scan(/\\D/)
  arr_d = s.scan(/\\d/)
  return s if s.size == 1
  return '' if arr_d.empty? || arr_s.empty? || (arr_d.size - arr_s.size).abs > 1

  if arr_s.size >= arr_d.size
    arr_s.zip(arr_d).join
  else
    arr_d.zip(arr_s).join
  end
end
```