# Beats 100%. NO ALGO NEEDED. O(N) TIME O(1) SPACE. This entire problem is an illusion/genjutsu

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/4165439/](https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/solutions/4165439/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I was attempting to practice Union Find problems and thats how I ran into this problem. I soon realized there is no reason to use Union Find and in fact you don't even need any graph algo like bfs or dfs.

All you need to do is 1. Keep track of visited cells in a hash, 2. Traverse the grid until you run out of valid next steps. 3. Check your hash to see if it has visited the bottom right cell.

The problem itself is very elusive because it looks like a typical figure out a path to get to bottom right cell like unique paths or some other graph problem BUT it actually is much more simpler because if you look at each streets you should notice there is only 1 way to go after entering from the other direction. For example with street 2 if you enter from the top, you can only go to the next cell down. There is 1 edge case with street 4 being the starting point and thats it. For the street 4 starting point edge case, you can actually go in two directions BUT this only happens if it is the starting point. Either way for this edge case, you just choose one path, see if it makes it to the end and if not try the other.

The approach I am suggesting is the optimal solution as in any answer to this question you would need to keep track of visited cells and traverse the paths anyways, anything else you do on top of those things is just unnecessary and will slow down execution.

EDIT: 

Actually this can be optimized to only keep track of the last cell visited which can be used to prevent going backwards and can be checked to see if this last cell is the bottom right cell after traversing the grid. 

EDIT #2:
Updated to O(1) space.

# Approach
<!-- Describe your approach to solving the problem. -->
I SEARCHED FOR UNION FIND AND DIDNT GET A UNION FIND QUESTION LOL
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[][]} grid
# @return {Boolean}
def has_valid_path(grid)
    
    validate_next_street = {}
    validate_next_street[1] = {}
    validate_next_street[1][1] = true
    validate_next_street[1][3] = true
    validate_next_street[1][4] = true

    validate_next_street[2] = {}
    validate_next_street[2][2] = true
    validate_next_street[2][4] = true
    validate_next_street[2][5] = true
    validate_next_street[2][6] = true

    validate_next_street[3] = {}
    validate_next_street[3][1] = true
    validate_next_street[3][2] = true
    validate_next_street[3][3] = true
    validate_next_street[3][4] = true
    validate_next_street[3][5] = true

    validate_next_street[4] = {}
    validate_next_street[4][1] = true
    validate_next_street[4][2] = true
    validate_next_street[4][3] = true
    validate_next_street[4][5] = true
    validate_next_street[4][6] = true

    validate_next_street[5] = {}
    validate_next_street[5][1] = true
    validate_next_street[5][2] = true
    validate_next_street[5][3] = true
    validate_next_street[5][4] = true

    validate_next_street[6] = {}
    validate_next_street[6][1] = true
    validate_next_street[6][2] = true
    validate_next_street[6][3] = true
    validate_next_street[6][4] = true
    validate_next_street[6][5] = true

    # We only use n for the edge case of street 4 being the starting point. This is the only edge case.
    # When street 4 is the starting point, you can go two directions unlike every other street where you can only go 1 direction.
    n = 1
    current_street = grid[0][0]
    if current_street == 4
        n = 2
    end

    current_coordinates = [0, 0]
    visited = {}
    visited[current_coordinates] = true

    n.times do |i|  
        
        current_coordinates = [0, 0]
        visited = {}
        visited[current_coordinates] = true
        current_street = grid[0][0]

        # Block a path when starting point is street 4. 
        # First run will block going down and will mean you will go right instead.
        # Second run will block going right forcing you to go down instead.
        if current_street == 4 
            if i == 0
                visited[[1,0]] = true
            else
                visited[[0,1]] = true
            end
        end
        
        prev_coordinates = nil
        j = 0
        while current_street 
            next_coordinates = nil
            visited[ current_coordinates ]  = true
            
            case current_street
            when 1
                if (current_coordinates[1] > 0) and (!visited[[current_coordinates[0], current_coordinates[1] - 1]]  )
                    next_coordinates = [current_coordinates[0], current_coordinates[1] - 1]
                elsif (current_coordinates[1] + 1 < grid[0].size) and (!visited[[current_coordinates[0], current_coordinates[1] + 1] ]  )
                    next_coordinates = [current_coordinates[0], current_coordinates[1] + 1]
                end

            when 2
                if (current_coordinates[0] > 0) and (!visited[[current_coordinates[0] - 1, current_coordinates[1] ] ] )
                    next_coordinates = [current_coordinates[0] - 1, current_coordinates[1]]
                elsif (current_coordinates[0] + 1 < grid.size) and (!visited[[current_coordinates[0] + 1, current_coordinates[1] ] ]  )
                    next_coordinates = [current_coordinates[0] + 1, current_coordinates[1]]
                end

            when 3
                if (current_coordinates[1] > 0) and (!visited[[current_coordinates[0], current_coordinates[1] - 1 ] ] )
                    next_coordinates = [current_coordinates[0] - 1, current_coordinates[1]]
                elsif (current_coordinates[0] + 1 < grid.size) and (!visited[[current_coordinates[0] + 1, current_coordinates[1] ] ] )
                    next_coordinates = [current_coordinates[0] + 1, current_coordinates[1]]
                end
            when 4
                if (current_coordinates[0] + 1 < grid.size) and (!visited[[current_coordinates[0] + 1, current_coordinates[1] ] ] )
                    next_coordinates = [current_coordinates[0] + 1, current_coordinates[1]]
                elsif (current_coordinates[1] + 1 < grid[0].size) and (!visited[[current_coordinates[0], current_coordinates[1] + 1 ] ] )
                    next_coordinates = [current_coordinates[0], current_coordinates[1] + 1]
                end
                
                # Reset cache when starting point is street 4,(j == 0 means this is the starting point).
                # This is to remove the block put in place so we only go one direction.
                if j == 0
                    visited = {}
                    visited[current_coordinates] = true
                end

            when 5
                if (current_coordinates[0] > 0) and (!visited[ [current_coordinates[0] - 1, current_coordinates[1] ]]  )
                    next_coordinates = [current_coordinates[0] - 1, current_coordinates[1]]
                elsif (current_coordinates[1] > 0) and (!visited[[current_coordinates[0], current_coordinates[1] - 1 ] ] )
                    next_coordinates = [current_coordinates[0], current_coordinates[1] - 1]
                end

            when 6
                if (current_coordinates[0] > 0) and (!visited[ [current_coordinates[0] - 1, current_coordinates[1] ] ]  )
                    next_coordinates =[current_coordinates[0] - 1, current_coordinates[1]]
                elsif (current_coordinates[1] + 1 < grid[0].size) and (!visited[[current_coordinates[0], current_coordinates[1] + 1] ] )
                    next_coordinates = [current_coordinates[0], current_coordinates[1] + 1]
                end
            end 

            if next_coordinates and validate_next_street[current_street][grid[next_coordinates[0]][next_coordinates[1]]]
                prev_coordinates = current_coordinates
                current_coordinates = next_coordinates
                current_street = grid[current_coordinates[0]][current_coordinates[1]]
            else
                current_coordinates = nil
                current_street = nil
            end
            

            j += 1
        end
        
        if visited[[grid.size - 1, grid[0].size - 1]] 
            return true
        end
    end

    return false
end

```