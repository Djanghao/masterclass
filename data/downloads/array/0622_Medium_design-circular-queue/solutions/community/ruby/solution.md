# [Ruby] O(1)

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-circular-queue/solutions/1141823/](https://leetcode.com/problems/design-circular-queue/solutions/1141823/)

---

```
class MyCircularQueue
  def initialize(k)
    @queue = [-1]*k
    @size = k
    @num = 0
    @head = 0
  end

  def en_queue(value)
    if @num < @size
      @queue[(@head + @num) % @size] = value
      @num += 1
      
      true
    else
      false
    end
  end

  def de_queue
    if @num == 0
      false
    else
      @queue[@head] = -1
      @head = (@head + 1) % @size
      @num -= 1
      
      true
    end
  end

  def front
    @num == 0 ? -1 : @queue[@head]
  end

  def rear
    @num == 0 ? -1 : @queue[(@head + @num - 1) % @size]
  end

  def is_empty
    @num == 0
  end

  def is_full
    @num == @size
  end
end

```