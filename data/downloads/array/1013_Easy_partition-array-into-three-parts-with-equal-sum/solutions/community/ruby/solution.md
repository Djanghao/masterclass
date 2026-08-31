# Prefix sum O(n) O(1)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/4390811/](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/4390811/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[]} arr
# @return {Boolean}
def can_three_parts_equal_sum(arr)
    sum = arr.sum

    partition_value_incrementor = arr.sum/3
    seeking = partition_value_incrementor
    seeking_count = 0
    total = 0
    i = 0
    while i < arr.size - 1
        total += arr[i]
        if total == seeking and seeking_count < 2
            seeking += partition_value_incrementor 
            seeking_count += 1
        end
        i += 1
    end

    if seeking_count == 2 and total + arr[-1] == seeking
        return true
    end

    false
end
```