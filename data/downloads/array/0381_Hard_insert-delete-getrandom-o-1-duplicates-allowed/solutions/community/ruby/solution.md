# Ruby real O(1) Solution

**Author:** Hoaxis
**Votes:** 1
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/759596/](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/759596/)

---

```
class RandomizedCollection
=begin
    Initialize your data structure here.
=end
    def initialize()
      @arr, @hash = [], {}
    end

=begin
    Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
    :type val: Integer
    :rtype: Boolean
=end
    def insert(val)
      (@hash[val] ||= Set.new).add(@arr.size)
      @arr << val
      @hash[val].size == 1
    end

=begin
    Removes a value from the collection. Returns true if the collection contained the specified element.
    :type val: Integer
    :rtype: Boolean
=end
    def remove(val)
      return false if (@hash[val] || Set.new).empty?
      
      index, last = @hash[val].first, @arr.last
      @arr[index] = last
      @arr.pop
      @hash[val].delete(index)
      @hash[last].add(index)
      @hash[last].delete(@arr.size)
      true
    end

=begin
    Get a random element from the collection.
    :rtype: Integer
=end
    def get_random()
      @arr[rand(@arr.size)] 
    end
end
```