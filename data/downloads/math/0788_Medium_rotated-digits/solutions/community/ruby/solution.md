# Ruby Solution with Explanation (104ms)

**Author:** seanyewest
**Votes:** 2
**Link:** [https://leetcode.com/problems/rotated-digits/solutions/829096/](https://leetcode.com/problems/rotated-digits/solutions/829096/)

---

```
# @param {Integer} n
# @return {Integer}

# Runtime: 104 ms, faster than 82.35% of Ruby online submissions for Rotated Digits.
# Memory Usage: 10.1 MB, less than 35.29% of Ruby online submissions for Rotated Digits.
def rotated_digits(n)
  return (1..n).count do |i|
    digits = i.digits
     
    # if [3,4,7] is inside digits, it is no good
    # if [0,1,8] are the only types of numbers that "digits" have it is no good
    !digits.any? { |digit| [3, 4, 7].include?(digit) } && !digits.all? { |digit| [0, 1, 8].include?(digit) }
  end
end
```