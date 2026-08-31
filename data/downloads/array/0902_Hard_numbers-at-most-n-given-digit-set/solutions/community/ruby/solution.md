# [Ruby] O(logn)

**Author:** mistersky
**Votes:** 3
**Link:** [https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/943797/](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/943797/)

---

```
# @param {String[]} digits
# @param {Integer} n
# @return {Integer}
def at_most_n_given_digit_set(digits, n)
  n_str = n.to_s
  n_length = n_str.length
  result = (1...n_length).to_a.map{|i| digits.count**i}.sum

  index = 0
  while index < n_length
    suitable_digits_count = digits.select{|digit| digit < n_str[index]}.count
    result += suitable_digits_count*(digits.count**(n_length - index - 1))
    break unless digits.include?(n_str[index])
    index += 1
  end

  index == n_length ? result + 1 : result
end
```