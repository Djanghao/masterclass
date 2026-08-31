# I simply make hash from array and iterate through it.

**Author:** tsu-na-gu
**Votes:** 0
**Link:** [https://leetcode.com/problems/counting-elements/solutions/4333556/](https://leetcode.com/problems/counting-elements/solutions/4333556/)

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
```
# @param {Integer[]} arr
# @return {Integer}
def count_elements(arr)
  hash = arr.each_with_object(Hash.new(0)) do |element, counts|
    counts[element] += 1
  end

  count = 0
  hash.each do |element, frequency|
    count += frequency if hash[element + 1] > 0
  end
  return count
end
```