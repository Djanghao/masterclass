# Ruby simple solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/5685143/](https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/5685143/)

---

# Code
```ruby []
class Solution

=begin
    :type rects: Integer[][]
=end
    def initialize(rects)
      @rects, @cnt, @pnt = rects, rects.size - 1, []
      rects.inject(0) { |p, (x1, y1, x2, y2)| (@pnt << p + (x2 - x1 + 1) * (y2 - y1 + 1)).last }
    end

=begin
    :rtype: Integer[]
=end
    def pick()
      rnd = rand(@pnt.last) + 1
      i = find_index(rnd)
      (x1, y1, x2, y2), j = @rects[i], @pnt[i] - rnd
      [j % (x2 - x1 + 1) + x1, j / (x2 - x1 + 1) + y1]
    end

  private
    
  def find_index(point_number)
    min, max = 0, @cnt
    (@pnt[mid = (min + max) / 2] >= point_number ? (max = mid) : (min = mid + 1)) while min < max 
    min
  end  


end

# Your Solution object will be instantiated and called as such:
# obj = Solution.new(rects)
# param_1 = obj.pick()
```