# UnionFind Ruby Solution

**Author:** mr-kremez
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/3893704/](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/3893704/)

---

# Intuition
Utilize UnionFind data stracture to check graph connectivity 

# Approach
1. Sort logs by timestamp
2. Iterate thru logs and unite friends
3. Return timestamp if after union there is only only one isolated set
4. Return -1 by default

# Code
```
def earliest_acq(logs, n)
  uf = UnionFind.new(n)
  logs = logs.sort { |a, b| a[0] <=> b[0] }
  logs.each do |log|
    uf.union(log[1], log[2])
    return log[0] if uf.num_of_isolated_sets == 1
  end
  -1
end

class UnionFind
  def initialize(n)
    @root = Array.new(n) { |i| i }
    @rank = Array.new(n) { 0 }
  end
  
  def find(x)
    return x if root[x] == x
      
    root[x] = find(root[x])
  end
  
  def union(x, y)
    root_x = find(x)
    root_y = find(y)
    return if root_x == root_y
    
    if rank[root_x] > rank[root_y]
      root[root_y] = root_x
    elsif rank[root_x] < rank[root_y]
      root[root_x] = root_y
    else
      root[root_y] = root_x
      rank[root_x] += 1
    end
  end
  
  def connected?(x, y)
    find(x) == find(y)
  end
  
  def num_of_isolated_sets
    count = 0
    root.each_with_index do |r, i|
      count += 1 if r == i
    end
    count
  end
  
  private
  
  attr_reader :root, :rank
end
```