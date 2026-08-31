# Ruby || OOP approach

**Author:** alecn2002
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-paths/solutions/3056344/](https://leetcode.com/problems/number-of-good-paths/solutions/3056344/)

---

# Code
```ruby
class Solver
    attr_reader :vals, :edges, :counts, :grp

    def initialize(vals, edges)
        @vals, @counts, @grp, @edges = vals, Array.new(vals.size, 1), (0...vals.size).to_a, edges.sort_by {|e| e.collect {|ee| vals[ee] }.max }
    end

    def get_grp(n)
        n = @grp[n] = @grp[grp[n]] until n == grp[n]
        n
    end

    def solve
        edges.inject(vals.size) {|r, ns|
            n1, n2 = ns.collect {|n| get_grp(n) }
            case vals[n1] <=> vals[n2]
                when 0
                    r += counts[n1] * counts[n2]
                    @grp[n1] = n2
                    @counts[n2] += counts[n1]
                when 1 then @grp[n2] = n1
                when -1 then @grp[n1] = n2
            end
            r
        }
    end
end

def number_of_good_paths(vals, edges)
    Solver.new(vals, edges).solve
end

```