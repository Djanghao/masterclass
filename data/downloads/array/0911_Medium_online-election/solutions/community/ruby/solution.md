# Ruby solution, translated from Python (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/online-election/solutions/3302133/](https://leetcode.com/problems/online-election/solutions/3302133/)

---

# Intuition
This is just a Ruby translation of geom1try's solution here:
https://leetcode.com/problems/online-election/solutions/173468/easy-to-understand-python-3/?q=python&orderBy=most_relevant
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class TopVotedCandidate

    def initialize(persons, times)
        @lead = {}
        @p = Hash.new(0)
				
        @times = times
        prev_vote = -1
        prev_lead = nil
        
        times.each_with_index do |time,i|
            @p[persons[i]] += 1
            
            if @p[persons[i]] >= prev_vote
                prev_vote = @p[persons[i]]
                prev_lead = persons[i]
                @lead[time] = persons[i]
            else
                @lead[time] = prev_lead
            end
        end
    end


    def q(t)
        timing = nil
        l, r = 0, @times.length - 1
        
        ''' use binary search; otherwise TLE '''
        while l <= r
            mid = (r+l) / 2
            if @times[mid] == t
                timing = @times[mid]
                break
            elsif @times[mid] > t
                r = mid-1
            else
                l = mid+1
            end
        end
            
        if timing == nil
            # which means that t doesn't exist
            # therefore, we find the max(time < t)
            timing = @times[l-1]
        end
            
        @lead[timing]
    end

end
```