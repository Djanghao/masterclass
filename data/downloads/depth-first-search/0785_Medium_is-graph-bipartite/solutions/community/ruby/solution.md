# Ruby | Solution with construction of graph partition

**Author:** davidmiheev
**Votes:** 1
**Link:** [https://leetcode.com/problems/is-graph-bipartite/solutions/2007409/](https://leetcode.com/problems/is-graph-bipartite/solutions/2007409/)

---

We building parts `A` and `B` of given graph step by step. In code snippet below the part `A` is a Set `@a` and the part `B` is a Set `@b`. On each step we get a vertex of given graph and decide in which part this vertex belongs. If a vertex has adjacent vertices don't belong in the part `A`  we decide that this vertex belong the part `A` and vice versa. If a vertex has some adjacent vertices belong in the part `A` and some in the part `B` we try correct the current partition of given graph to all adjacent vertices belong only in one part. In code snippet below this operation execute by method `correct(graph, e)`. If we can't correct the current partition, given graph is not bipartite. If in such process we build given graph partition then graph is bipartite

```
# @param {Integer[][]} graph
# @return {Boolean}
def is_bipartite(graph)
  @a = Set.new
  @b = Set.new
  @to_b = false
  @to_a = false
  graph.each do |vertex|
    vertex.each do |adj_vertex| 
      @to_b = true if @a.include? adj_vertex
      @to_a = true if @b.include? adj_vertex
    end
    if @to_b and @to_a
      correct graph, vertex 
    else
      if @to_a
        @a << (graph.index vertex)
        vertex.each { |adj_vertex|  @b << adj_vertex }
      else
        @b << (graph.index vertex)
        vertex.each { |adj_vertex|  @a << adj_vertex }
      end
    end
    return false if @to_a and @to_b
    @to_b = false
    @to_a = false
  end
  true  
end

def correct(graph, vertex)
  @a.delete(graph.index vertex)
  @b.delete(graph.index vertex)
  to_a = true
  to_b = true
  vertex.each do |adj_vertex|
      graph[adj_vertex].each do |j| 
        if @b.include? j
          to_a = false 
          break
        end
      end
  end
  if to_a
    @to_b = false
    @a << (graph.index vertex)
    vertex.each { |adj_vertex|  @b << adj_vertex; @a.delete adj_vertex }
    return
  end
  vertex.each do |adj_vertex|
      graph[adj_vertex].each do |j| 
        if @a.include? j
          to_b = false 
          break
        end
      end
  end
  if to_b
    @to_a = false
    @b << (graph.index vertex)
    vertex.each { |adj_vertex|  @a << adj_vertex; @b.delete adj_vertex }
  end
end
```
If this material was useful, please upvote!