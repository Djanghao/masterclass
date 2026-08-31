# Beats 100%, negabinary to decimal then decimal to negabinary

**Author:** vsrfiles
**Votes:** 0
**Link:** [https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/5283145/](https://leetcode.com/problems/adding-two-negabinary-numbers/solutions/5283145/)

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
# @param {Integer[]} arr1
# @param {Integer[]} arr2
# @return {Integer[]}
def add_negabinary(arr1, arr2)
    num1 = find_value(arr1)
    num2 = find_value(arr2)
    to_base_neg2(num1 + num2)
end

def find_value(arr)
    sum = 0
    arr.each_with_index do |el, i|
        pos = arr.size - 1 - i
        sum =  sum + (el *(-2) ** pos)
    end
    sum
end

def to_base_neg2(num)
  return [0] if num == 0

  result = []
  while num != 0
    remainder = num % -2
    num = num / -2

    if remainder < 0
      remainder += 2
      num += 1
    end

    result << remainder
  end

  result.reverse
end
```