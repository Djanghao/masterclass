# Ruby solution that uses internal array, binary search on add, sorted 2-sum sliding window on find

**Author:** thelastdan1
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/4490812/](https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/4490812/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

We'll model our class using an internal array that stores a list of all numbers ever added. `find` uses the sliding window approach for [2-sum with a sorted list](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/), while `add` maintains the sorted order of the instance array. This optimizes the efficiency of `find` so we don't have to sort on-demand, while maintaining a reasonably efficient `add` by leaning on binary search insertion. 

# Complexity
* `O(n)` space to store the instance array.
* [`add`] `O(log(n))` time to binary search insertion, with constant aux space. 
* [`find`] `O(n)` time to iterate through the instance array via sliding window, with constant aux space. 

# Code
```
class TwoSum
    def initialize()
        @arr = []
    end


=begin
    Overview - adds `n` to the instance array, 
               maintaining non-decreasing order for efficient `find`
    Complexity - O(log(n)) time, O(1) space

    :type n: Integer
    :rtype: Void
=end
    def add(n)
        index = @arr.bsearch_index { |x| x >= n } || @arr.length
        @arr.insert(index, n)
    end


=begin
    Overview - sliding window implementation to check for a 2-sum (if one exists)
    Complexity - O(n) time, O(1) space

    :type v: Integer
    :rtype: Boolean
=end
    def find(v)
        # Different from sorted 2-sum:
        # a test-case tries to find before adding
        return false if @arr.empty?

        left, right = 0, @arr.length-1
        while left < right do
            if @arr[left] + @arr[right] == v
                return true
            elsif @arr[left] + @arr[right] < v
                left += 1
            else
                right -= 1
            end
        end

        # Different from sorted 2-sum:
        # we may exhaust our search without satisfying.
        false
    end


end

# Your TwoSum object will be instantiated and called as such:
# obj = TwoSum.new()
# obj.add(number)
# param_2 = obj.find(value)
```