# Ruby solution

**Author:** ozovalihasan
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-sightseeing-pair/solutions/3600550/](https://leetcode.com/problems/best-sightseeing-pair/solutions/3600550/)

---

# Code
```ruby []
# @param {Integer[]} values
# @return {Integer}
def max_score_sightseeing_pair(values)
  minus_values = values.map.with_index { |value, index| value - index }

  plus_values = values.map.with_index { |value, index| value + index }

  max_upto_index = - Float::INFINITY
  max_score = - Float::INFINITY

  1.upto(values.size - 1) do |index|
    value2 = minus_values[index]
    max_upto_index = plus_values[index - 1] if max_upto_index < plus_values[index - 1]

    score = max_upto_index + value2
    max_score = score if score > max_score
  end

  max_score
end
```