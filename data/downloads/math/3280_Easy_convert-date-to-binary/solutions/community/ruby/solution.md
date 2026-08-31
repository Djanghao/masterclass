# Ruby one line solution

**Author:** Aksafan
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-date-to-binary/solutions/5753360/](https://leetcode.com/problems/convert-date-to-binary/solutions/5753360/)

---

# Approach
- Split a Date string into 3 pieces by `-`.
- Cast each piece to binary string.
- Merge binary strings into the Date one with `-`.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(n)

# Code
```ruby []
# @param {String} date
# @return {String}
def convert_date_to_binary(date)
  date.split('-').map { _1.to_i.to_s(2) }.join('-')
end
```