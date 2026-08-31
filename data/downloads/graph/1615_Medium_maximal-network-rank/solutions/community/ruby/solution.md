# Ruby || O(n^2)/O(n) || OOP approach

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximal-network-rank/solutions/3927034/](https://leetcode.com/problems/maximal-network-rank/solutions/3927034/)

---

# Code
```ruby
require 'set'

class Numeric
    def max(v) = (self < v ? v : self)
end

class City
    attr_reader :id, :roads

    def initialize(id) = (@id, @roads = id, Set[])

    def <<(city) = roads << city

    def rank = roads.size

    def conn?(city) = roads.include?(city)
end

class Cities
    attr_reader :cities

    def initialize(n, roads)
        @cities = Array.new(n) {|i| City.new(i) }
        roads.each {|(c1, c2)|
            @cities[c1] << c2
            @cities[c2] << c1
        }
    end

    def max_rank
        cities.inject(0) {|res, c1|
            cities[c1.id+1 .. -1].inject(res) {|res1, c2| 
                res1.max(c1.rank + c2.rank - (c1.conn?(c2.id) ? 1 : 0))
            }
        }
    end
end

def maximal_network_rank(n, roads)
    Cities.new(n, roads).max_rank
end
```