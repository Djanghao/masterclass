# Simulation

**Author:** caovanbi235
**Votes:** 1
**Link:** [https://leetcode.com/problems/walking-robot-simulation/solutions/5735124/](https://leetcode.com/problems/walking-robot-simulation/solutions/5735124/)

---

# Code
```ruby []
# @param {Integer[]} commands
# @param {Integer[][]} obstacles
# @return {Integer}
def robot_sim(commands, obstacles)
  x = 0
  y = 0
  dx = 0
  dy = 1
  obstacles = obstacles.to_set
  max = 0

  commands.each do |command|
    if command == -2
      dx, dy = -dy, dx
    elsif command == -1
      dx, dy = dy, -dx
    else
      command.times do
        if obstacles.include?([x + dx, y + dy])
          break
        else
          x += dx
          y += dy
          max = [max, x * x + y * y].max
        end
      end
    end
  end

  max
end
```