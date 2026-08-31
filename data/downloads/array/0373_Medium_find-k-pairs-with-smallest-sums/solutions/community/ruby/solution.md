# Ruby || PQ

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/3688112/](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/3688112/)

---

# Intuition
Pick one pair by one

# Approach
PQ

# Complexity
- Time complexity:
$$O(n*log(n))$$

- Space complexity:
$$O(n)$$

# Code
```ruby
require 'set'

module PQ
    class SaPQ
        attr_reader :sa
        
        def initialize
            @sa = []
        end
        
        def cmp(a, b)
            throw "cmp() is abstract, not implemented"
        end
        
        def <<(e)
            @sa.insert(sa.bsearch_index {|w| cmp(w, e) } || -1, e)
        end
        
        def pop
            empty? ? nil : @sa.pop
        end
        
        def first
            sa.last
        end
        
        def empty?
            sa.empty?
        end
    end
end

class MinSaPQ < PQ::SaPQ
    def cmp(v1, v2) = v1[0..1].sum <= v2[0..1].sum
end

class Solver
    attr_reader :n1, :n2, :s1, :s2

    def initialize(nums1, nums2)
        @n1, @n2 = nums1, nums2
        @s1, @s2 = n1.size, n2.size
    end

    def add!(l, r)
        return if l >= s1 || r >= s2 || @visited.include?([l, r])
        @pq << [n1[l], n2[r], l, r]
        @visited << [l, r]
    end

    def solve(k)
        @pq = MinSaPQ.new
        @pq << [n1.first, n2.first, 0, 0]
        @visited = Set[[0, 0]]
        k.times.inject([]) {|res, _|
            break res if @pq.empty?
            nv1, nv2, l, r = @pq.pop
            res << [nv1, nv2]
            add!(l+1, r)
            add!(l,   r+1)
            res
        }.first(k)
    end
end

def k_smallest_pairs(nums1, nums2, k)
    Solver.new(nums1, nums2).solve(k)
end

```