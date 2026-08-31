# Ruby || UnionFind

**Author:** alecn2002
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/solutions/3931584/](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/solutions/3931584/)

---


# Code
```ruby
class NilClass
    def >(v) = true
end

class Graph
    class UnionFind
        attr_reader :parents

        def initialize(n) = @parents = (0...n).to_a
    
        def find_parent(i) = (parents[i] == i ? i : (@parents[i] = find_parent(parents[i])))

        def union(*uv)
            pu, pv = uv.collect {|e| find_parent(e) }
            @parents[pu] = pv
        end

    end

    attr_reader :n, :edges

    def initialize(n, edges)
        @n = n
        (@edges = edges.each_with_index.collect {|a, idx| a << idx }).sort_by! {|e| e[2] }
    end

    def findMST(blk = nil, e = nil)
        w, uf = 0, UnionFind.new(n)
        unless e.nil? then
            w += edges[e][2]
            uf.union(*edges[e][0..1])
        end
        edges.each_with_index {|e, i|
            unless i == blk || uf.find_parent(e[0]) == uf.find_parent(e[1]) then
                uf.union(*e[0..1])
                w += e[2]
            end
        }
        p0 = uf.find_parent(0)
        (1...n).any? {|i| uf.find_parent(i) != p0 } ? nil : w
    end

    def solve
        mstw = findMST
        edges.each_with_index.each_with_object([[], []]) {|(e, i), (c, pc)|
            if findMST(i) > mstw then
                c << e.last
            else
                pc << e.last if mstw == findMST(nil, i)
            end
        }
    end
end

def find_critical_and_pseudo_critical_edges(n, edges)
    Graph.new(n, edges).solve
end
```