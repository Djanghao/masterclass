# Beats 100%. Bsearch

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-integers-in-intervals/solutions/4802205/](https://leetcode.com/problems/count-integers-in-intervals/solutions/4802205/)

---


# Code
```
class CountIntervals
    def initialize()
        @count = 0
        @intervals = [[0,0], [99999999999, 99999999999]]
    end


=begin
    :type left: Integer
    :type right: Integer
    :rtype: Void
=end
    def add(left, right)
        i = @intervals.bsearch_index{|v| left <= v[1]}

        first_i = nil
        while i < @intervals.size and @intervals[i][0] <= right 
            interval = @intervals[i]
            if interval[1] >= left and interval[0] <= right 
                if first_i == nil
                    first_i = i
                end
                left = [left, interval[0]].min
                right = [right, interval[1]].max
                @count -= interval[1] - interval[0] + 1
            end
            i += 1
        end

        if first_i
            key = first_i
            @intervals[key] = [left, right]
            if first_i + 1 < i
                @intervals = @intervals[0..key].concat @intervals[i..-1]
            end
        else
            sorted_insert [left, right]
        end

        @count += (right - left) + 1
        
         
    end


=begin
    :rtype: Integer
=end
    def count()
       @count 
       #@intervals
    end

    def sorted_insert interval
        i = @intervals.bsearch_index{|v| interval[0] < v[0]}
        if i == nil
            @intervals << interval
        else
            @intervals.insert(i, interval)
        end
    end


end

# Your CountIntervals object will be instantiated and called as such:
# obj = CountIntervals.new()
# obj.add(left, right)
# param_2 = obj.count()
```