# Ruby solution

**Author:** ozovalihasan
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/3097757/](https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/3097757/)

---

# Code
```ruby []
# @param {Integer[]} edges
# @param {Integer} node1
# @param {Integer} node2
# @return {Integer}
def closest_meeting_node(edges, node1, node2)
  return node1 if node1 == node2

  Graph.new(edges).find_min_distance(node1, node2)
end

class Graph
  attr_reader :nodes
  def initialize(edges)
    @nodes = edges.map.with_index do |_, index|
      GraphNode.new(index)
    end
    
    edges.each_with_index do |edge2, edge1| 
      next if edge2 == -1 
      
      @nodes[edge1].next = @nodes[edge2]
    end
  end

  def find_min_distance(node1, node2)
    step = 1
    branches = [Branch.new(:first, nodes[node1]), Branch.new(:second, nodes[node2])]
    branches_count = branches.size
    result = []
    
    until branches.all?(&:nodes_empty?)
      
      branches.each {|branch| branch.check_nodes(result, branches_count, step) }

      break min_distance_node = result.min unless result.empty?
      
      step += 1
    end

    min_distance_node || -1
  end


end

class GraphNode
  attr_accessor :next
  attr_reader :val, :distances
  
  def initialize(val)
    @val = val
    @next = nil
    @distances = {}
  end
end

class Branch
  attr_accessor :nodes
  attr_reader :name
  
  def initialize(name, first_node)
    @name = name
    @nodes = [first_node]
    first_node.distances[name] = 0
  end
  
  def nodes_empty? 
    nodes.empty?
  end

  def check_nodes(result, branches_count, step)
    nodes.map! { |node| node.next }.compact!
    
    nodes.each do |node| 
      next nodes.delete(node) if node.distances[name] 
        
      node.distances[name] = step
      result << node.val if node.distances.size == branches_count
      
    end
    
  end
end
```