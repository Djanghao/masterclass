# Ruby solution

**Author:** Volodymyr_Ch
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-population-year/solutions/6081123/](https://leetcode.com/problems/maximum-population-year/solutions/6081123/)

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
# @param {Integer[][]} logs
# @return {Integer}
def maximum_population(logs)
  logs.map { |l| (l[0]...l[1]).to_a }.flatten.tally.sort_by { |y, c| [-c, y]}.first.first

  # hash = Hash.new(0)

  # logs.each do |log|
    # (log[0]...log[1]).each do |year|
      # hash[year] += 1
    # end
  # end

  # hash.max_by { |k, v| v }.first
end
```