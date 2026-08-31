# [Ruby] With or without cheating/trick

**Author:** suryart
**Votes:** 1
**Link:** [https://leetcode.com/problems/peeking-iterator/solutions/1981192/](https://leetcode.com/problems/peeking-iterator/solutions/1981192/)

---

Ruby has `instance_variable_get` which allows you to violate the OOP principles. Here's how you can use it to solve this problem:

```ruby
class PeekingIterator
  # @param {Iterator} iter
  def initialize(iter)
    @iterator = iter
  end

  # Returns true if the iteration has more elements.
  # @return {boolean}
  def hasNext()
    @iterator.hasNext
  end

  # Returns the next element in the iteration.
  # @return {integer}
  def next()
    @iterator.next
  end

  # Returns the next element in the iteration without advancing the iterator.
  # @return {integer}
  def peek()
    return @iterator.instance_variable_get(:@v)[@iterator.instance_variable_get(:@index)]
  end
end
```

Now, without the trick. The idea is to always keep the next value in the peek and update it when `PeekingIterator#next` is called:

```ruby
class PeekingIterator
  # @param {Iterator} iter
  def initialize(iter)
    @iterator = iter
    @peek = @iterator.next
  end

  # Returns true if the iteration has more elements.
  # @return {boolean}
  def hasNext()
    return @peek > 0
  end

  # Returns the next element in the iteration.
  # @return {integer}
  def next()
    next_num = @peek
    @peek = @iterator.next
    return next_num
  end

  # Returns the next element in the iteration without advancing the iterator.
  # @return {integer}
  def peek()
    return @peek
  end
end
```