# Two Ruby solutions, based on size (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-pick-with-blacklist/solutions/3397887/](https://leetcode.com/problems/random-pick-with-blacklist/solutions/3397887/)

---

# Intuition
The most efficient method depends on the size of the blacklist relative to n.

# Approach
If n is small (below 10**6), it's efficient enough to generate an array with all the numbers and remove the ones on the blacklist, then sample from that.
If n is large, it's more efficient to randomly sample the numbers 0 to n-1 and resample whenever you get something on the blacklist.

# Complexity
- Time complexity:
For small n: $$O(n)$$ to initialize, $$O(1)$$ to sample.
For large n: $$O(1)$$ to initialize, $$O(1)$$ on average to sample, but worst case is $$O(\u221E)$$

- Space complexity:
For small n: $$O(n)$$
For large n: $$O(1)$$

# Code
```
class Solution

    def initialize(n, blacklist)
        if n < 10**6
            nums = (0...n).to_set
            blacklist.each { |ele| nums.delete(ele) }
            @nums = nums.to_a
        else
            @blacklist = blacklist
            @nums = n
        end
    end

    def pick()
        if @nums.is_a?(Array)
            @nums.sample
        else
            num = rand(0...@nums)
            while @blacklist.include?(num)
                num = rand(0...@nums)
            end
            num
        end
    end

end