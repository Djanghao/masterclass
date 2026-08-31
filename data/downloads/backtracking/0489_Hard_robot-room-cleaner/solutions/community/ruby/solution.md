# Ruby Solution with Explanation

**Author:** Fedhii
**Votes:** 1
**Link:** [https://leetcode.com/problems/robot-room-cleaner/solutions/1026455/](https://leetcode.com/problems/robot-room-cleaner/solutions/1026455/)

---

```
# This is the robot's control interface.
# You should not implement it, or speculate about its implementation
# class Robot
#    def move():
#        Returns true if the cell in front is open and robot moves into the cell.
#        Returns false if the cell in front is blocked and robot stays in the current cell.
#    end
#
#    def turnLeft():
#        Robot will stay in the same cell after calling turnLeft/turnRight.
#        Each turn will be 90 degrees.
#    end
#
#    def turnRight():
#        Robot will stay in the same cell after calling turnLeft/turnRight.
#        Each turn will be 90 degrees.
#    end
#
#    def clean():
#        Clean the current cell.
#    end
# end

# @param {Robot} robot
# @return {}
require 'set'
def cleanRoom(robot)
    visited = Set.new
    backtrack(0, 0, 0, visited, robot)
end

def backtrack(row, col, direction, visited, robot)
    directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    visited.add("#{row}_#{col}")
    robot.clean
    
    for i in 0 ... 4 do
        new_direction = (direction + i) % 4
        new_row = row + directions[new_direction][0]
        new_col = col + directions[new_direction][1]
    
        if !visited.include?("#{new_row}_#{new_col}") && robot.move
            backtrack(new_row, new_col, new_direction, visited, robot)
            go_back(robot)
        end
       
        robot.turnRight
    end
end

def go_back(robot)
    robot.turnRight
    robot.turnRight
    robot.move
    robot.turnRight
    robot.turnRight
end

=begin
Essentially, we have to manually take care of a few things that are usually taken care of
for us in graph traversal algorithms. Normally, we can just set directions and move in them
with out any regard for the direction a robot is oriented in, and we can rely on our call
stack to ensure we get back to where we started if a DFS bottoms out. Since that is not
granted here, we have to build that functionality in.

First, we need to keep track of where we've been. We start on a cell, say, 0, 0, and clean it.
Now since we have to be mindful of direction, we have to loop from 0-3 (inclusive), and add
the number we're on to the direction we're given. To start, the robot is facing north, so
direction is 0, but at other points, it will be anything from 0 - 3, 0 representing North,
1 representing East, 2 representing South, and 3 representing West. We, regardless of the
direction which the robot is already facing, need to explore all those directions. So we
simply add the i we're on to the direction we're given. That gives us a new direction to 
face. We grab x and y as usual from our directions array, and now we have a new cell to explore.

First, check if it is explored. Then, try to move in the direction we're already facing. If
that works out, pass in our new coordinates and direction, and do it again. Eventually, 
we'll either not be able to move forward, or will see that the next cell ahead of us 
has already been visited. At that point, we just turn the robot right around, go back to 
the cell we were at before, and try the next direction. Once we come all the way out,
we turn right again and try the next direction.

This is all manually handling what recursion normally does for us.
=end
```