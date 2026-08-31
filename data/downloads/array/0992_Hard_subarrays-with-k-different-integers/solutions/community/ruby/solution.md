# Ruby || OOP approach, sliding window

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/4946937/](https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/4946937/)

---


# Code
```ruby
class MultiSet
    attr_reader :set

    def initialize
        @set = Hash.new(0)
    end

    def add(v) = (@set[v] += 1)

    def del(v)
        unless (@set[v] -= 1).positive? then
            @set.delete(v)
        end
    end

    def size = set.size
end

class Solver
    attr_reader :nums

    def initialize(nums)
        @nums = nums
    end

    def solve(k)
        i, met = -1, MultiSet.new
        nums.each_with_index.inject(0) {|ans, (v, idx)|
            met.add(v)
            met.del(nums[i += 1]) while met.size > k
            ans + idx - i + 1
        }
    end
end

def subarrays_with_k_distinct(nums, k)
    solver = Solver.new(nums)
    solver.solve(k) - solver.solve(k-1)
end
```