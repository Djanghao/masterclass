# Ruby simple solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/map-sum-pairs/solutions/5998298/](https://leetcode.com/problems/map-sum-pairs/solutions/5998298/)

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
```ruby []
class MapSum
    def initialize()
        @h = {}
    end


=begin
    :type key: String
    :type val: Integer
    :rtype: Void
=end
    def insert(key, val)
       @h[key] = val 
    end


=begin
    :type prefix: String
    :rtype: Integer
=end
    def sum(prefix)
        @h.select { _1.start_with? prefix }.values.sum
    end


end

# Your MapSum object will be instantiated and called as such:
# obj = MapSum.new()
# obj.insert(key, val)
# param_2 = obj.sum(prefix)
```