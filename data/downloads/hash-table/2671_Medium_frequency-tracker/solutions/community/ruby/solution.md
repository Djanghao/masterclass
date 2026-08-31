# Ruby solution (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/frequency-tracker/solutions/3500855/](https://leetcode.com/problems/frequency-tracker/solutions/3500855/)

---

# Intuition
Keep track of the count of each number in one hash and the count of each array in another.  Using two hashes keeps everything $$O(1)$$.

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(n)$$, where *n* is the number of distinct values.

# Code
```
class FrequencyTracker
    def initialize()
        @eles = Hash.new(0)
        @freq = Hash.new(0)
    end


=begin
    :type number: Integer
    :rtype: Void
=end
    def add(number)
        @freq[@eles[number]] -= 1 if @freq[@eles[number]] > 0
        @eles[number] += 1
        @freq[@eles[number]] += 1
    end


=begin
    :type number: Integer
    :rtype: Void
=end
    def delete_one(number)
        @freq[@eles[number]] -= 1 if @eles[number] > 0
        @eles[number] -= 1 if @eles[number] > 0
        @freq[@eles[number]] += 1 if @eles[number] > 0
    end


=begin
    :type frequency: Integer
    :rtype: Boolean
=end
    def has_frequency(frequency)
        @freq[frequency] > 0
    end


end

# Your FrequencyTracker object will be instantiated and called as such:
# obj = FrequencyTracker.new()
# obj.add(number)
# obj.delete_one(number)
# param_3 = obj.has_frequency(frequency)
```