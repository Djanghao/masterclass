# [Ruby] Heap

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/seat-reservation-manager/solutions/1192087/](https://leetcode.com/problems/seat-reservation-manager/solutions/1192087/)

---

```
class SeatManager
  def initialize(n)
    @heap = Heap.new
    (1..n+1).each{|i| @heap.add(i)}
  end

  def reserve
    @heap.pop
  end

  def unreserve(seat_number)
    @heap.add(seat_number)
  end
end

class Heap
  def initialize
    @heap = []
    @size = 0
    @compare = lambda{|a, b| a < b}
  end
 
  attr_reader :size

  def peak
    @heap[0]
  end

  def pop
    result = peak

    if size > 1
      @size -= 1
      @heap[0] = @heap[@size]
      rebalance_down(0)
    else
      @size = 0
    end

    @heap[@size] = nil

    result
  end

  def add(element)
    @heap[@size] = element
    @size += 1
    rebalance_up(size - 1)
    self
  end

  private

  def compare(a, b)
    @compare.call(a, b)
  end

  def rebalance_up(i)
    parent_i = parent(i)

    if has_parent(i) and compare(@heap[i], @heap[parent_i])
      @heap[i], @heap[parent_i] = @heap[parent_i], @heap[i]
      rebalance_up(parent_i)
    end
  end

  def rebalance_down(i)
    left_i = left(i)
    right_i = right(i)

    if has_left(i) and compare(@heap[left_i], @heap[i]) and (not has_right(i) or compare(@heap[left_i], @heap[right_i]))
      @heap[i], @heap[left_i] = @heap[left_i], @heap[i]
      rebalance_down(left_i)
    elsif has_right(i) and compare(@heap[right_i], @heap[i])
      @heap[i], @heap[right_i] = @heap[right_i], @heap[i]
      rebalance_down(right_i)
    end
  end

  def has_parent(i)
    i >= 1
  end

  def parent(i)
    ((i - 1) / 2).floor
  end

  def has_left(i)
    left(i) < size
  end

  def left(i)
    i * 2 + 1
  end

  def has_right(i)
    right(i) < size
  end

  def right(i)
    i * 2 + 2
  end
end
```