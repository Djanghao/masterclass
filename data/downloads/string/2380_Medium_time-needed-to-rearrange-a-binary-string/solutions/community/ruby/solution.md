# Ruby w/ reduce

**Author:** FNkWJgsm3QruaF
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/3565584/](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/3565584/)

---


```ruby
# @param {String} s
# @return {Integer}
def seconds_to_remove_occurrences(s)
  s.each_char.reduce([0, 0]) {|(num_zeros, num_rounds), char|
    if char == "0"
      num_zeros += 1
    elsif num_zeros > 0
      num_rounds = [num_rounds + 1, num_zeros].max
    end
    [num_zeros, num_rounds]
  }[1]
end
```