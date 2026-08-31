# Ruby solution that beats 100%

**Author:** hydras15
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-swap/solutions/5928720/](https://leetcode.com/problems/maximum-swap/solutions/5928720/)

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
# @param {Integer} num
# @return {Integer}
def maximum_swap(num)
  num_str = num.to_s.chars
  last = Array.new(10, -1)
  
  num_str.each_with_index do |digit, i|
    last[digit.to_i] = i
  end

  num_str.each_with_index do |digit, i|
    (9).downto(digit.to_i + 1) do |d|
      if last[d] > i
        num_str[i], num_str[last[d]] = num_str[last[d]], num_str[i]
        return num_str.join.to_i
      end
    end
  end

  num
end
```