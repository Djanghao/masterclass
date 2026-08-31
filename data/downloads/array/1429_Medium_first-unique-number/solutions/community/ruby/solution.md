# Simples solution using Map and queue

**Author:** user2755N
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-unique-number/solutions/5985178/](https://leetcode.com/problems/first-unique-number/solutions/5985178/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
class FirstUnique

=begin
    :type nums: Integer[]
=end
    def initialize(nums)
        @map = Hash.new(0)
        @queue = []

        nums.each do |num|
            add(num)
        end
    end


=begin
    :rtype: Integer
=end
    def show_first_unique()
        while !@queue.empty? && @map[@queue.first] > 1
            @queue.shift
        end
        @queue.empty? ? -1 : @queue.first
    end


=begin
    :type value: Integer
    :rtype: Void
=end
    def add(value)
        if @map[value] == 0
            @queue << value
        end
        @map[value] += 1
    end


end

# Your FirstUnique object will be instantiated and called as such:
# obj = FirstUnique.new(nums)
# param_1 = obj.show_first_unique()
# obj.add(value)
```