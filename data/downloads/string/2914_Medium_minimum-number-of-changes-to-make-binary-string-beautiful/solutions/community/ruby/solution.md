# Ruby - one line solution

**Author:** amaydell
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6011044/](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6011044/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$
# Code
```ruby []
# @param {String} s
# @return {Integer}
def min_changes(s)
  s.each_char.each_slice(2).count { |l| l[0] != l[1] }
end
```