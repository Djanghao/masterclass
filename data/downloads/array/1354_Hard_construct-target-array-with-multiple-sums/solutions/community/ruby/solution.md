# [Ruby] Heap

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/1200560/](https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/1200560/)

---

```
def is_possible(target)
  heap = Heap.new(target)
  total = target.sum
  
  loop do
    largest = heap.pop
    return true if largest == 1
    return false if total == largest
    cand = (largest - 1) % (total - largest) + 1
    return false if cand == largest
    total = total + cand - largest
    heap.push(cand)
  end
end

class Heap
  def initialize(storage = [])
    @heap = []
    @size = 0
    @compare = lambda{|a, b| a > b}
  
    storage.each{|elt| push(elt)}
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

  def push(element)
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