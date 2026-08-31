# Ruby Solution

**Author:** woahlag
**Votes:** 2
**Link:** [https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/603690/](https://leetcode.com/problems/cheapest-flights-within-k-stops/solutions/603690/)

---

```
class Node
    attr_accessor :val, :mapping
    
    def initialize(val) 
        @val = val 
        @mapping = {}
    end
end

def find_cheapest_price(n, flights, src, dst, k)
    @routes = {}
    @destination = dst
    @cheapest_cost = Float::INFINITY

    build_graph(n)
    map_flights(flights)
        
    find_cheapest(src, k, 0)
    
    @cheapest_cost == Float::INFINITY ? -1 : @cheapest_cost
end

def build_graph(n)
    n.times do |i|
      @routes[i] = Node.new(i) 
    end    
end

def map_flights(flights)
    flights.each do |flight|
        from, to, cost = flight
        
        @routes[from].mapping[to] = cost
    end
end

def find_cheapest(current_location, stops_allowed, current_cost)
    return if current_cost > @cheapest_cost
    
    if current_location == @destination 
        @cheapest_cost = [@cheapest_cost, current_cost].min
        return 
    end
    
    return if stops_allowed < 0
    
    @routes[current_location].mapping.each do |destination, cost|
        find_cheapest(destination, stops_allowed - 1, current_cost + cost)
    end
end
```