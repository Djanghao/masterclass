# [Ruby] Use Heap

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/course-schedule-iii/solutions/1191167/](https://leetcode.com/problems/course-schedule-iii/solutions/1191167/)

---

```
# @param {Integer[][]} courses
# @return {Integer}
def schedule_course(courses)
  heap = Heap.new
  start = 0
  
  courses.sort_by{|course| course[1]}.each do |course|
    start += course[0]
    heap.add(-course[0])
    while start > course[1]
      start += heap.pop
    end
  end

  heap.size
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