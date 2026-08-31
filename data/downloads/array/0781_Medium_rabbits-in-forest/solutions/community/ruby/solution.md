# Ruby solution

**Author:** ozovalihasan
**Votes:** 0
**Link:** [https://leetcode.com/problems/rabbits-in-forest/solutions/3599866/](https://leetcode.com/problems/rabbits-in-forest/solutions/3599866/)

---

# Code
```ruby []
# @param {Integer[]} answers
# @return {Integer}
def num_rabbits(answers)
  rabbit_groups = answers.group_by(&:itself).transform_values {|val| val.size.to_f}

  rabbit_groups.map { |key, value| ((value / (key + 1)).ceil) * (key + 1) }
               .sum
end
```