# Ruby solution

**Author:** ozovalihasan
**Votes:** 2
**Link:** [https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3108776/](https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3108776/)

---

# Code
```ruby []
class SummaryRanges
  def initialize()
    @ranges = []
  end

=begin
  :type value: Integer
  :rtype: Void
=end
  def add_num(value)
    index = @ranges.bsearch_index {|first, last| last >= value}

    if index
      return if value.between?(*@ranges[index])
    else
      index = @ranges.size
    end

    @ranges.insert(index, [value, value])

    if index > 0 && necessary_merge_with_previous_one?(index)
      merge_interval_with_previous_one(index)
    else
      index += 1
    end
    
    if @ranges[index] && necessary_merge_with_previous_one?(index)
      merge_interval_with_previous_one(index)
    end

  end

  def necessary_merge_with_previous_one?(index)
    (@ranges[index].first - @ranges[index - 1].last) <= 1
  end

  def merge_interval_with_previous_one(index)
    @ranges[index - 1][1] = @ranges.delete_at(index).last
  end
  
=begin
  :rtype: Integer[][]
=end
  def get_intervals()
    @ranges
  end

end

# Your SummaryRanges object will be instantiated and called as such:
# obj = SummaryRanges.new()
# obj.add_num(value)
# param_2 = obj.get_intervals()
```