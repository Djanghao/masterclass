# Recursive solution using idiomatic elixir

**Author:** elbasti
**Votes:** 0
**Link:** [https://leetcode.com/problems/walking-robot-simulation/solutions/5738564/](https://leetcode.com/problems/walking-robot-simulation/solutions/5738564/)

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
```elixir []
defmodule Solution do
  @spec robot_sim(commands :: [integer], obstacles :: [[integer]]) :: integer
  def robot_sim(commands, obstacles) do
    obstacle_mapset = Enum.reduce(obstacles, MapSet.new(), &(MapSet.put(&2, &1)))

    move(commands, :north, [0,0], obstacle_mapset, 0)
  end

  # When no new instructions, return the max of the current position and the previously known max position  
  def move([], _facing, [x, y], obstacles, max_distance), do: max(max_distance, eucl(x,y))

  # If the instruction is to turn, move but in the new direction.
  def move([-1 | tail], facing, current_pos, obstacles, max_distance), do: move(tail, turn(:right, facing), current_pos, obstacles, max_distance)
  def move([-2 | tail], facing, current_pos, obstacles, max_distance), do: move(tail, turn(:left, facing),  current_pos, obstacles, max_distance)
  def move([0 | tail], facing, [x,y], obstacles, max_distance),  do: move(tail, facing, [x,y], obstacles, max(max_distance, eucl(x,y)))

  # Move
  def move([steps | tail], direction, [x,y] = current_pos, obstacles, max_distance) do
    candidate_pos = get_candidate(current_pos, direction)

    # If the next position is not obstructed, move to it. 
    # Note we only calculate the max of the position when the steps
    # to move are 0 (can't move further) or when there's an obstruction
    case Enum.member?(obstacles, candidate_pos) do
        true ->  move(tail,                 direction, current_pos,   obstacles, max(max_distance, eucl(x,y)))
        false -> move([steps - 1 ] ++ tail, direction, candidate_pos, obstacles, max_distance)
    end
  end

  # Get new position based on direction of travel and current position
  def get_candidate([x, y], :north),  do: [x, y+1]
  def get_candidate([x, y], :east),   do: [x+1, y]
  def get_candidate([x, y], :south),  do: [x, y-1]
  def get_candidate([x, y], :west),   do: [x-1, y]

  def turn(:left, :north),  do: :west
  def turn(:left, :west),   do: :south
  def turn(:left, :south),  do: :east
  def turn(:left, :east),   do: :north

  def turn(:right, :north), do: :east
  def turn(:right, :east),  do: :south
  def turn(:right, :south), do: :west
  def turn(:right, :west),  do: :north

  def eucl(x,y), do: x*x + y*y
end
```