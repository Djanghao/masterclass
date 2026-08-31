# Ruby BFS

**Author:** jschroe212
**Votes:** 3
**Link:** [https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3694891/](https://leetcode.com/problems/shortest-path-to-get-all-keys/solutions/3694891/)

---

# Intuition

BFS but allow visit of cells once per key state
Bit manipulation for keys


# Code
```
# @param {String[]} grid
# @return {Integer}
def shortest_path_all_keys(grid)
  m = grid.size
  n = grid[0].size

  start = nil
  key_count = 0
  for i in (0...m) do
    for j in (0...n) do
      start = [i,j] if grid[i][j] == '@'
      key_count += 1 if grid[i][j].ord >= 'a'.ord && grid[i][j].ord <= 'f'.ord
    end
  end

  number_key_states = 2 ** key_count
  all_keys_state = number_key_states - 1 
  visited = Array.new(m) { Array.new(n) { Array.new(number_key_states, false) }}

  start << 0 # distance
  start << 0 # keys
  bfs = [start]

  dirs = [[1,0], [-1,0], [0,1], [0,-1]]

  while !bfs.empty?
     x, y, distance, keys = bfs.shift()

    for dir_x, dir_y in dirs do
      new_x = x + dir_x
      new_y = y + dir_y
    
      if new_x >= 0 && new_x < m && new_y >= 0 && new_y < n && grid[new_x][new_y] != '#' &&
        !visited[new_x][new_y][keys]
        
        bfs_continue = false
        new_keys = keys

         # It's a lock, we need the key
        if grid[new_x][new_y].ord >= 'A'.ord && grid[new_x][new_y].ord <= 'F'.ord
          key_mask = 1 << grid[new_x][new_y].ord - 'A'.ord 
          bfs_continue = key_mask & keys != 0 

        # It's a key, pick it up
        elsif grid[new_x][new_y].ord >= 'a'.ord && grid[new_x][new_y].ord <= 'f'.ord
          bfs_continue = true
          key_mask = 1 << grid[new_x][new_y].ord - 'a'.ord 
          new_keys |= key_mask
        # move freely because it's not a wall. It's open or the start
        else
          bfs_continue = true
        end

        if bfs_continue 
           return distance + 1 if new_keys == all_keys_state
           visited[new_x][new_y][keys] = true
           bfs << [new_x, new_y, distance + 1, new_keys]
        end
      end
    end
  end

  return -1
end
```