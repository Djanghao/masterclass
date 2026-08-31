# Ruby Solution (Prim's + Kruskal's Algorithm)

**Author:** nischay_dhiman
**Votes:** 0
**Link:** [https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/1614899/](https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/1614899/)

---

```

# KRUSKAL'S  MST ALGORITHM

class UnionFind
    attr_accessor :no_of_components
	def initialize(n)
		@parent = (0..n).to_a
		@rank = [0]*(n+1)
		@no_of_components = n
	end

	def find(node)
		return node if node == @parent[node]
		return (@parent[node] = find(@parent[node]))
	end

	def union(node1, node2)
		parent1 = find(node1)
		parent2 = find(node2)
		return false if parent1 == parent2
		if @rank[parent1] > @rank[parent2]
		    parent1, parent2 = parent2, parent1
		end
		@parent[parent1] = parent2
		@rank[parent2] += 1
		@no_of_components -= 1
		return true
	end
end

def minimum_cost(n, connections)
	disjoint_set = UnionFind.new(n)
	connections = connections.sort_by {|city1, city2, cost| cost }
	min_cost = 0
	connections.each do |city1, city2, cost|
		min_cost += cost if disjoint_set.union(city1, city2)
	end
	return disjoint_set.no_of_components == 1 ? min_cost : -1
end 	

# COMPLEXITY OF UINION FIND 
# O(N) building
# O(LOG*N) for uinion & find O(LOG*N) (constant)
# SPACE COMPLEXITY - O(N)
# SORTING CONNECTIONS - O(E Log E)
# TOTAL COMPLEXITY - O(Elog(E))  # used for sort

```

```
# PRIMS MST ALGORITHM

require "algorithms"
def minimum_cost(n, connections)
	city_connectivity = Hash.new {|hash, city| hash[city] = Array.new  }
	least_cost_cities = Containers::PriorityQueue.new {|cost1, cost2| (cost1 <=> cost2) == -1 }
	
    connections.each do |city1, city2, cost|
		city_connectivity[city1] << [city2, cost]
		city_connectivity[city2] << [city1, cost]
	end
    
    # least_cost_city = connections.min_by {|city1, city2, cost| cost}
	least_cost_cities.push([1,0], 0)
	visited = [false]*n
	minimum_cost = 0
	no_of_cities_visited = 0
	while(!least_cost_cities.empty?)
		city, cost = least_cost_cities.pop
		next if visited[city] == true
        visited[city] = true
		no_of_cities_visited += 1
		minimum_cost += cost
		city_connectivity[city].each do |city_connected, cost|
			least_cost_cities.push([city_connected, cost], cost)
		end
	end
	no_of_cities_visited == n ? minimum_cost : -1
end 
		
# COMPLEXITY OF PRIMS ALOGORITHM
# TIME COMPLEXITY - O(E LOG V)
# SPACE COMPLEXITY - O(E)





```