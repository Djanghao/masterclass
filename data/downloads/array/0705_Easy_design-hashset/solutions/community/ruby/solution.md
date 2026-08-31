# Ruby Array

**Author:** woahlag
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-hashset/solutions/594497/](https://leetcode.com/problems/design-hashset/solutions/594497/)

---

Runtime: 100 ms, faster than 60.00% of Ruby online submissions for Design HashSet.

```
class MyHashSet

=begin
    Initialize your data structure here.
=end
    def initialize()
        @array = Array.new(1000000)
    end


=begin
    :type key: Integer
    :rtype: Void
=end
    def add(key)
        @array[key] = true
    end


=begin
    :type key: Integer
    :rtype: Void
=end
    def remove(key)
        @array[key] = nil
    end


=begin
    Returns true if this set contains the specified element
    :type key: Integer
    :rtype: Boolean
=end
    def contains(key)
        !!@array[key]
    end


end
```