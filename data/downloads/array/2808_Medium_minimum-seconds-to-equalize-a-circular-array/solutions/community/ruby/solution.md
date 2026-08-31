# Desafio semanal Buk - 23 de Mayo - diegoheg

**Author:** diegoheg
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/5228102/](https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/5228102/)

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
# @param {Integer[]} nums
# @return {Integer}
# Se reemplaza la posici\xF3n del array
# consigo mismo o con sus vecinos
def minimum_seconds(nums)
  n = nums.size
  ocurrences = Hash.new { |hash, key| hash[key] = [] }
  nums.each_with_index do |num, index|
    ocurrences[num] << index
  end

  total_seconds = {}
  return 0 if ocurrences.keys.size == 1

  ocurrences.each do |num, indexes|
    max_seconds = 0
    m = indexes.size
    (0..(m - 1)).each do |aux_index|
      if aux_index == (m - 1)
        rms = n - indexes[aux_index] + indexes[0]
      else
        rms = indexes[aux_index + 1] - indexes[aux_index]
      end
      rms = (rms / 2).to_i
      if rms > max_seconds
        max_seconds = rms
      end
    end
    if max_seconds.zero?
      total_seconds[num] = (n / 2).to_i
    else
      total_seconds[num] = max_seconds
    end
  end

  total_seconds.min_by{|_k, v| v}.last
end

```