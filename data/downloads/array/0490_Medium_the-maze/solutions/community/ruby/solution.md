# Ruby DFS Solution

**Author:** woahlag
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-maze/solutions/599192/](https://leetcode.com/problems/the-maze/solutions/599192/)

---

```
# @param {Integer[][]} maze
# @param {Integer[]} start
# @param {Integer[]} destination
# @return {Boolean}
def has_path(maze, start, destination)
    @maze = maze
    @x_length = maze.count
    @y_length = maze.first.count    

    @destination = destination
    
    @valid = false
    
    move_from_path(start)
    
    @valid
end

def move_from_path(location)
    return if @valid || location.nil? || @maze[location[0]][location[1]] == -1
    if location == @destination
        @valid = true
        return
    end
    
    @maze[location[0]][location[1]] = -1 # Stopped at this location already
    
    move_from_path(left_most_valid(location))
    move_from_path(up_most_valid(location))
    move_from_path(down_most_valid(location))
    move_from_path(right_most_valid(location))
end

def left_most_valid(location)
    counter = previous = location[1]

    while counter >= 0
        break if @maze[location[0]][counter] == 1
        
        previous = counter
        counter -= 1
    end
    
    [location[0], previous]
end

def right_most_valid(location)
    counter = previous = location[1]

    while counter < @y_length
        break if @maze[location[0]][counter] == 1
        
        previous = counter
        counter += 1
    end
    
    [location[0], previous]
end

def up_most_valid(location)
    counter = previous = location[0]
    
    while counter >= 0
        break if @maze[counter][location[1]] == 1
        
        previous = counter
        counter -= 1
    end
    
    [previous, location[1]]
end

def down_most_valid(location)
    counter = previous = location[0]
    
    while counter < @x_length
        break if @maze[counter][location[1]] == 1
        
        previous = counter
        counter += 1
    end
    
    [previous, location[1]]
end
```