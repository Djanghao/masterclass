# Simple ruby implementation

**Author:** rotemrevivo
**Votes:** 0
**Link:** [https://leetcode.com/problems/robot-bounded-in-circle/solutions/5547945/](https://leetcode.com/problems/robot-bounded-in-circle/solutions/5547945/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} instructions
# @return {Boolean}
def is_robot_bounded(instructions)
    @positions = [[0, 0]]
    @direction = [0, 1]
    @lrs = 0

    (0..3).each do |i|
        instructions.split('').each do |c|
            updatePosition(c)
        end
    end

    @positions.first == @positions.last
end

def updatePosition(c)
    case c
    when 'G'
        last = @positions.last
        @positions << [last[0] + @direction[0], last[1] + @direction[1]]
    when 'L'
        @lrs += 1
        @direction = getDirection
    when 'R'
        @lrs -= 1
        @direction = getDirection
    end
end

def getDirection
    case (@lrs % 4)
    when 0
        return [0 , 1]
    when 1
        return [-1, 0]
    when 2
        return [0, -1]
    when 3
        return [1, 0]
    end
end
```