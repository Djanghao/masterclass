# Hash + Sort solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/relocate-marbles/solutions/4525139/](https://leetcode.com/problems/relocate-marbles/solutions/4525139/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n log n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer[]} nums
# @param {Integer[]} move_from
# @param {Integer[]} move_to
# @return {Integer[]}
def relocate_marbles(nums, move_from, move_to)
    hash = {}
    nums.each do |v|
        hash[v] = true
    end

    i = 0
    while i < move_from.size
        if hash[move_from[i]]

            hash.delete move_from[i]
            hash[move_to[i]] = true
        end

        i += 1
    end

    hash.keys.sort
end
```