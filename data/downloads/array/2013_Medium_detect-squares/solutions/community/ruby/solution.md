# Ruby, Hash, 15 Lines

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-squares/solutions/4754141/](https://leetcode.com/problems/detect-squares/solutions/4754141/)

---

# Code
```
class DetectSquares
  attr_reader :store
  def initialize
    @store = Hash.new(0)
  end

  def add((x, y))
    store[[x, y]] += 1
  end

  def count((x, y))
    result = 0
    store.keys.each do |x_1, y_1|
      next if (x - x_1).abs != (y - y_1).abs || x == x_1 || y == y_1
      result += store[[x_1, y_1]] * store[[x_1, y]] * store[[x, y_1]]
    end
    result
  end
end
```