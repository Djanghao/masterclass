# Simplest readable solution simulating process

**Author:** rajkamallashkari
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/2813456/](https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/solutions/2813456/)

---

# Intuition
Just pick up any stone.
Then pick up the stones in same row or column, as of that previous stone, and count the number of stones picked up.
Keep doing the previous step till all the stones are picked up.

Fun fact: This is exactly like asking the number of islands made by the stones, but we don't have to solve this like that question.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
The code is self explanatory.
We're using $$removed$$ to store the list of stones we're picking up currently.
Then for each of those stones, we're finding $$matching\\_stones$$ which are basically the stones in matching row or column.
Just add the number of $$matching\\_stones$$ in the $$count$$, add the stones to the list $$removed$$, and remove them from $$stones$$.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[][]} stones
# @return {Integer}
def remove_stones(stones)
    count = 0
    until stones.empty?
        removed = [stones.shift]
        until removed.empty?
            x, y = removed.pop
            matching_stones = stones.select { |stone| stone[0] == x || stone[1] == y }
            count += matching_stones.size
            removed += matching_stones
            stones -= matching_stones
        end
    end
    count
end

```