# Jump to Longest Free Path - O(n)

**Author:** benenb
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sideway-jumps/solutions/5538992/](https://leetcode.com/problems/minimum-sideway-jumps/solutions/5538992/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Since each position can only have one obstacle we never need to worry about being unable to proceed, there will always be a path. So we can rely on a greedy solution.

Whenever we are blocked, jump to the lane with the longest free path

# Approach
<!-- Describe your approach to solving the problem. -->
- For each lane, create an array of the indexes of each obstacle in that lane
- From the starting position proceed forward until the position before `next_obstacle`
- While the current position is less than the length of the path
  - Find the longest free path, by comparing the `next_obstacle` of each path
  - Move to the new lane and move to the space before `next_obstacle` (we return this value as part of `clearest_lane`)

# Complexity
Normally this solution would be $$O(n^2)$$ in the worst case, however since $$obstacles <= n$$ and every time we make a lane comparison we reduce the array of obstacles by at least 1 we can say that the complexity for worst case is $$O(n)$$
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
# @param {Integer[]} obstacles
# @return {Integer}
def min_side_jumps(obstacles)
    lanes = [[],[],[]]
    obstacles.each_with_index do |obs,i|
        lanes[obs - 1] << i unless obs.zero?
    end
    lanes.each {|l| l << obstacles.length + 1}


    curr_lane,jumps = 1,0
    curr_pos = next_obstacle(lanes[1],0) - 1
    #puts "starting in lane #{curr_lane + 1}, move to position #{curr_pos}"
    while curr_pos < obstacles.length
        curr_lane,curr_pos = *clearest_lane(lanes, curr_pos)
        #puts "jump to lane #{curr_lane + 1}, move to position #{curr_pos}"
        jumps += 1
    end
    jumps
end

def next_obstacle lane,position
    curr = -1
    while curr < position 
        curr = lane.shift
    end
    lane.unshift(curr)
    curr
end

def clearest_lane lanes,position
    max,clearest = 0,0
    lanes.each_with_index do |lane,i|
        clear_until = next_obstacle(lane,position) - 1
        if  clear_until > max
            max = clear_until
            clearest = i
        end
    end 
    [clearest,max]
end
```