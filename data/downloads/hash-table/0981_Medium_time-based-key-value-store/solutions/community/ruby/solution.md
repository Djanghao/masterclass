# Ruby TimeMap

**Author:** jleigh91
**Votes:** 2
**Link:** [https://leetcode.com/problems/time-based-key-value-store/solutions/438084/](https://leetcode.com/problems/time-based-key-value-store/solutions/438084/)

---

```
class TimeMap
    attr_accessor :cache
    
    def initialize
        @cache = Hash.new { |h, k| h[k] = [] } 
    end

    def set(key, value, timestamp)
        cache[key][timestamp] = value
    end

    def get(key, timestamp)
        return "" unless cache[key]
        return cache[key][timestamp] if cache[key][timestamp]
		
        timestamp.downto(0) do |n|
            return cache[key][n] if cache[key][n]
        end
        ""
    end
end
```