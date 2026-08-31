# Simple Solution O(n/2)

**Author:** vsrfiles
**Votes:** 0
**Link:** [https://leetcode.com/problems/watering-plants-ii/solutions/5234071/](https://leetcode.com/problems/watering-plants-ii/solutions/5234071/)

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
# @param {Integer[]} plants
# @param {Integer} capacity_a
# @param {Integer} capacity_b
# @return {Integer}
def minimum_refill(plants, capacity_a, capacity_b)
    t1 = capacity_a
    t2 = capacity_b
    l = 0
    r = plants.size - 1
    steps = 0

    while l <=r
        if l == r
            if plants[l] > capacity_a && plants[l] > capacity_b
                steps += 1
            end
            break
        end
        if plants[l] > capacity_a
            steps += 1
            capacity_a = t1
        end
        capacity_a -= plants[l]

        if plants[r] > capacity_b
            steps += 1
            capacity_b = t2
        end
        capacity_b -= plants[r]
        l += 1
        r -= 1
    end
    return steps
end
```