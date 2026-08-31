# Easy Ruby

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/car-pooling/solutions/1670593/](https://leetcode.com/problems/car-pooling/solutions/1670593/)

---

The idea is simple: for every kilometer where passengers enter or leave the car we calculate the change, and then do rolling sum of changes and see if it fits into car capacity.

```ruby

class CarPooling
    attr_reader :trips
    
    def initialize(trips)
        @trips = trips.inject([]) {|r, (n, f, t)|
            r[f] = (r[f] || 0) + n
            r[t] = (r[t] || 0) - n
            r
        }
    end
    
    def solve(capacity)
        cur = 0
        trips.compact.all? {|n| (cur += n) <= capacity }
    end
    
end

def car_pooling(trips, capacity)
    CarPooling.new(trips).solve(capacity)
end
```