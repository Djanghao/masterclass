# Ruby solution using Binary Search

**Author:** ksodha93
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-pick-with-weight/solutions/4169259/](https://leetcode.com/problems/random-pick-with-weight/solutions/4169259/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Initialize: O(n)
Pick_index: O(logn)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Initialize: O(n)
Pick_index: O(1)

# Code
```
class Solution

=begin
    :type w: Integer[]
=end
    def initialize(w)
        @prefix_sums = []
        sum = 0
        w.each_with_index do |weight, i|
            sum += weight
            @prefix_sums[i] = sum.to_f
        end
        @total_sum = sum
    end


=begin
    :rtype: Integer
=end
    def pick_index()
        # perform binary search since prefix_nums is sorted

        target = @total_sum * rand
        left = 0
        right = @prefix_sums.length - 1

        while left<= right
            mid = (left + right) / 2

            if target > @prefix_sums[mid]
                left = mid + 1
            else
                right = mid - 1
            end
        end
        left
    end


end

# Your Solution object will be instantiated and called as such:
# obj = Solution.new(w)
# param_1 = obj.pick_index()
```