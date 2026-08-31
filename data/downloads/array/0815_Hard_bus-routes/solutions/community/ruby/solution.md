# Ruby ||hand-made BitSet || 442 ms

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/bus-routes/solutions/4279202/](https://leetcode.com/problems/bus-routes/solutions/4279202/)

---

# Code
```ruby
class BitSet
    include Enumerable

    attr_accessor :set

    def initialize(init = 0)
        @set = init
    end

    def BitSet.[](v = 0)
        BitSet.new(v)
    end

    def <<(v) = @set |= (1 << v)

    def merge(s)
        if s.kind_of?(Integer) then
            @set |= s
        elsif s.kind_of?(BitSet) then
            @set |= s.set
        else
            s.each {|v| self << v }
        end
        self
    end

    def include?(v)
        !set[v].zero?
    end

    def intersects?(bs) = !(set & bs.set).zero?

    def -(s)
        ans = BitSet.new(set)
        ans.set ^= (set & s.set)
        ans
    end

    def empty?
        set.zero?
    end

    def each
        set.bit_length.times.inject(1) {|b, i|
            yield(i) unless (set & b).zero?
            b << 1
        }
    end
end

class NilClass
    def -(v) = BitSet[]
end

class Solver
    attr_reader :routes

    def initialize(routes)
        @routes = routes.collect {|r| BitSet[].merge(r) }
    end

    def solve(source, target)
        return 0 if source == target
        cur, visited = BitSet[1 << source], BitSet[1 << source]
        routes.size.times {|t|
            cur = routes.inject(BitSet[]) {|res, route|
                if route.intersects?(cur) then
                    return t + 1 if route.include?(target)
                    res.merge(route)
                end
                res
            } - visited
            visited.merge(cur)
        }
        nil
    end
end

def num_buses_to_destination(routes, source, target)
    Solver.new(routes).solve(source, target) || -1
end
```