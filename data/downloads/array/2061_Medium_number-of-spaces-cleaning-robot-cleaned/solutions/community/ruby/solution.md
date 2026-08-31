# Ruby, BFS

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5171760/](https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/solutions/5171760/)

---

# Code
```
def number_of_clean_rooms(room)
  rows = room.length - 1
  columns = room[0].length - 1

  directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

  visited, cleaned = Set.new, Set.new

  bfs = ->() do
    queue = [[0, 0, 0]]
    until queue.empty?
      row, column, direction = queue.shift

      visited.add([row, column, direction])
      cleaned.add([row, column])

      (0...directions.length).each do |i|
        next_direction = (direction + i) % 4
        x, y = directions[next_direction]
        x, y = x + row, y + column

        next unless x.between?(0, rows) && y.between?(0, columns)
        next unless room[x][y].zero?

        queue.append([x, y, next_direction]) unless visited.include?([x, y, next_direction])
        break
      end
    end

    cleaned.length
  end

  bfs.call()
end
```