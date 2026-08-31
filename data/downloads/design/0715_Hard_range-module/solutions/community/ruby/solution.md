# 200ms. Binary Search

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-module/solutions/4806751/](https://leetcode.com/problems/range-module/solutions/4806751/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n log n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
class RangeModule
    def initialize()
        @intervals = []
    end


=begin
    :type left: Integer
    :type right: Integer
    :rtype: Void
=end
    def add_range(left, right)
        right -= 1
        i = @intervals.bsearch_index{|v| left - 1 <= v[1]}
        inserted = false
        if i 
            i_to_merge = []
            mins = [left]
            maxs = [right]
            while @intervals[i] and @intervals[i][0] <= right + 1
                # disqualify insertion because we already had the range in @intervals.
                if @intervals[i][0] <= left and @intervals[i][1] >= right
                    inserted = true
                    break
                end

                i_to_merge << i
                    
                mins << @intervals[i][0]
                maxs << @intervals[i][1]

                i += 1
            end 

            # Remove all overlapping we found to overlap and replace them at the same index(s) with our new interval.
            if i_to_merge.size > 0
                new_interval = [mins.min, maxs.max]
                @intervals[i_to_merge[0]] = new_interval
                @intervals = @intervals[0..i_to_merge[0]].concat @intervals[(i_to_merge[-1] + 1)..-1]
                
                inserted = true
            end
        end

        if inserted == false
            sorted_insert left, right
        end
    end


=begin
    :type left: Integer
    :type right: Integer
    :rtype: Boolean
=end
    def query_range(left, right)    
        right -= 1
        i = @intervals.bsearch_index{|v| left <= v[1]}
        if i
            while @intervals[i] and @intervals[i][0] <= left
                if @intervals[i][1] >= right
                    return true
                end
                i += 1
            end

            false
        else
            false
        end
    end


=begin
    :type left: Integer
    :type right: Integer
    :rtype: Void
=end
    def remove_range(left, right)
        right -= 1
        i = @intervals.bsearch_index{|v| left <= v[1]}
        if i
            i_to_change = []
            while @intervals[i] and @intervals[i][0] <= right + 1
                # qualify
                if @intervals[i][1] >= left
                    i_to_change << i
                end

                i += 1
            end

            if i_to_change.size > 0
                new_intervals = []
                i = 0
                while i < i_to_change.size
                    interval = @intervals[i_to_change[i]]
                    # 4 situations
                    # 1. Removing part of a beginning of an interval
                    if interval[0] >= left and interval[1] > right
                        new_intervals << [right + 1, interval[1]]
                    
                    # 2. Removing end of an interval

                    elsif interval[0] < left and interval[1] <= right
                            new_intervals << [interval[0], left - 1]

                    # 3. Removing middle of an interval.
                    elsif interval[0] < left and right < interval[1]
                        min = [interval[0], left - 1].min
                        max = [interval[0], left - 1].max
        
                        new_intervals << [min, max]

                        min = [interval[1], right + 1].min
                        max = [interval[1], right + 1].max

                        new_intervals << [min, max]
                        break

                    # 4. Removing an entire interval.
                    elsif interval[0] <= left and interval[1] <= right
                        # Do nothing, the interval will be removed.
                    end
                    i += 1
                end

                if new_intervals.size > 0
                    if i_to_change[0] > 0
                        new_ivals = @intervals[0..i_to_change[0] - 1].concat new_intervals
                        remaining_intervals = @intervals[(i_to_change[-1] + 1)..-1]
                        if remaining_intervals != nil
                           new_ivals.concat remaining_intervals
                        end
                        @intervals = new_ivals
                    else
                        @intervals = new_intervals.concat @intervals[(i_to_change[-1] + 1)..-1]
                    end
                else
                    if i_to_change[0] > 0
                        @intervals = @intervals[0..i_to_change[0] - 1].concat @intervals[(i_to_change[-1] + 1)..-1]
                    else
                        @intervals = @intervals[(i_to_change[-1] + 1)..-1]
                    end
                end
            end
        end
    end

    def sorted_insert left, right
        i = @intervals.bsearch_index {|v| left < v[0]}
        if i
            @intervals.insert(i, [left, right])
        else
            @intervals << [left, right]
        end
    end


end

# Your RangeModule object will be instantiated and called as such:
# obj = RangeModule.new()
# obj.add_range(left, right)
# param_2 = obj.query_range(left, right)
# obj.remove_range(left, right)

#10-19
#10-13, 16-19
```