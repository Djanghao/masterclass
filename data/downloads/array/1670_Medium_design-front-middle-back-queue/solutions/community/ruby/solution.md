# Ruby - T: O(1) S: O(1) 100% 100%

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-front-middle-back-queue/solutions/2666654/](https://leetcode.com/problems/design-front-middle-back-queue/solutions/2666654/)

---

```
class FrontMiddleBackQueue
  def initialize()
    @queue = []
  end


=begin
  :type val: Integer
  :rtype: Void
=end
  def push_front(val)
    @queue.unshift(val)
  end


=begin
  :type val: Integer
  :rtype: Void
=end
  def push_middle(val)
    @queue.insert(@queue.size / 2, val)
  end


=begin
  :type val: Integer
  :rtype: Void
=end
  def push_back(val)
    @queue << val
  end


=begin
  :rtype: Integer
=end
  def pop_front()
    @queue.shift || -1
  end


=begin
  :rtype: Integer
=end
  def pop_middle()
    @queue.delete_at((@queue.size - 1) / 2) || -1
  end


=begin
    :rtype: Integer
=end
  def pop_back()
    @queue.pop || -1
  end


end