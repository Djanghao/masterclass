# Two Arrays solution ~50ms

**Author:** pernambucano
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/6070220/](https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/6070220/)

---

# Intuition
The ideia is to maintain a second array to save the sums of the two smallest numbers. Since we'll sort the input array once first, we'll always have the smallest numbers up front, and we can then compare it with the smallest sum on the second array.

# Complexity
- Time complexity: $$O(n log n)$$ 
Running `next_min` should be $$O(1)$$ since `Array#shift` is amortized $$O(1)$$.

- Space complexity: $$O(n)$$ for the extra array used to save the sums.

# Code
```ruby []
# @param {Integer[]} sticks
# @return {Integer}
def connect_sticks(sticks)
    sticks.sort!

    min_sum = []
    cost = 0
    num_sticks = sticks.size

    while num_sticks > 1
        n = next_min(sticks, min_sum)
        m = next_min(sticks, min_sum)

        total = n + m
        cost += total
        num_sticks -= 1
        min_sum.push(total)
    end

    cost
end

def next_min(first_array, second_array)
    if second_array.any?
        if first_array.any? && first_array.first < second_array.first
            first_array.shift
        else
            second_array.shift
        end
    elsif first_array.any?
        first_array.shift
    end
end
```