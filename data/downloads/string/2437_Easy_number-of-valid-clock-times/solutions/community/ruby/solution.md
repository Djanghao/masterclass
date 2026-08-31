# solution with ruby

**Author:** ghest128
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-clock-times/solutions/5833947/](https://leetcode.com/problems/number-of-valid-clock-times/solutions/5833947/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {String} time
# @return {Integer}
def count_time(time)
    rep = time.count("?") 
    return 1 if rep == 0
    prob=1
    time.chars.each_with_index.select { |c, i| c == "?" }.map(&:last).each do |h|
        case h
        when 0
            if time[h..h+1]=="??"
                prob= prob*24
            else
                 prob= prob*(time[h+1]=="?" || time[h+1].to_i < 4 ? 3 : 2 )
            end
        when 1
             prob= prob*(time[h-1]=="?" || time[h-1].to_i < 2 ? 10 : 4) unless time[h-1..h]=="??"
        when 3
            time[h..h+1]=="??" ?  prob= prob*60 :  prob= prob*6
        when 4
             prob= prob*10 unless time[h-1..h]=="??"
        else
            break
        end
    end
    prob
end
```