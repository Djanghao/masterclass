# Using set (hashmap)

**Author:** ifelsethenthat
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/4745126/](https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/4745126/)

---

# Code
```
# @param {Integer[]} arr1
# @param {Integer[]} arr2
# @return {Integer}
def longest_common_prefix(arr1, arr2)
  result, set = 0, Set.new
  
  arr2.each do |num|
    set.add(num)
    set.add(num /= 10) while num > 9
  end

  arr1.each do |num|
    while num > 0
      result = [result, num.to_s.length].max if set.include?(num)
      num /= 10
    end
  end

  result
end

```