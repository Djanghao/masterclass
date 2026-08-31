# Ruby, Union Find

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-islands-ii/solutions/5076217/](https://leetcode.com/problems/number-of-islands-ii/solutions/5076217/)

---

# Code
```
def num_islands2(m, n, positions)
  directions = ->(row, column) { [[1, 0],[-1, 0],[0, 1],[0, -1]].map { |x, y| [ row + x, column + y ] } }
  in_bounds = ->(row, column) { row.between?(0, m - 1) && column.between?(0, n - 1) }
  directions_in_bounds = ->(row, column) { directions.call(row, column).select { |r, c| in_bounds.call(r, c) } }

  parent = Array.new(m * n, -1)
  rank = Array.new(m * n, 0)

  find = ->(n) do
    return parent[n] if parent[n] == n
    parent[n] = find.call(parent[n])
  end

  union = ->(n1, n2) do
    p_1, p_2 = find.call(n1), find.call(n2)

    return false if p_1 == p_2

    if rank[p_1] > rank[p_2]
      parent[p_2] = p_1
      rank[p_1] += rank[p_2]
    else
      parent[p_1] = p_2
      rank[p_2] += rank[p_1]
    end

    true
  end

  is_land = ->(n) { parent[n] != -1 }

  results = []

  count = 0
  positions.each do |row, column|
    land_position = row * n + column

    if !is_land.call(land_position)
      parent[land_position] = land_position
      count += 1
    end

    directions_in_bounds.call(row, column).each do |r, c|
      neighbour_position = r * n + c

      if is_land.call(neighbour_position)
        count -= 1 if union.call(land_position, neighbour_position)
      end
    end
    results << count
  end

  results    
end
```