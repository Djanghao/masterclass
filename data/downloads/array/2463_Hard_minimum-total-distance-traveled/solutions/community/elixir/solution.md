# Elixir Solution

**Author:** jowi-dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-total-distance-traveled/solutions/6007066/](https://leetcode.com/problems/minimum-total-distance-traveled/solutions/6007066/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I knew I wanted to eagerly get the minimum available distances and solve the problems that came from that. Doing so meant allowing limits to go into negative numbers so that I could later reallocate necessary droids to other markets.

# Approach
<!-- Describe your approach to solving the problem. -->
Using the intuition I assigned all robots optimally regardless of capacity. I then attempted to reassign factories that were negative capped by either 
- finding the next minimum distance and taking the smallest for each robot
- finding the smallest delta between the new distance of a robot and an old one

Taking the smallest overall change in distance of the total system would net a result

Overall my biggest failure with these style problems in elixir has been my data modeling is exceptionally bad. Outside of that elixir's recursion primatives and functional programming primatives make this a breeze

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N) - although there is a lot of subsequent looping, there is never a loop within a loop

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N) - same reason as above

# Code
```elixir []
defmodule Solution do
  @spec minimum_total_distance(robot :: [integer], factory :: [[integer]]) :: integer
  def minimum_total_distance(robot, factory) do
    robot = Enum.sort(robot, :asc)

    factories = 
        factory
        |> Enum.sort_by(fn [pos, _] -> pos end, :asc)
        |> Enum.into(%{}, fn [pos, limit] ->
            {pos, {limit, []}}
        end)
        |> assign_factory(robot)

    delta_d = reassign_capacities(factories, :dist_delta) |> get_distances()
    min_d = reassign_capacities(factories, :alt_dist) |> get_distances()

    min(delta_d, min_d)
  end

  defp get_distances(factories) do
    factories
    |> Map.values()
    |> Enum.map(&elem(&1, 1))
    |> List.flatten()
    |> Enum.map(fn {_, distance} -> distance end)
    |> Enum.sum()
  end

  # Find the most optimal location for each droid to go
  defp assign_factory(factories, []), do: factories
  defp assign_factory(factories, [droid_pos | droids]) do
    %{position: factory_position, data: factory_data} = calculate_factory(factories, droid_pos)

    factories
    |> Map.put(factory_position, factory_data)
    |> assign_factory(droids)
  end

  defp calculate_factory(factories, droid_pos) do 
    calculated =  
        factories
        |> Map.to_list()
        |> Enum.map(fn {factory_pos, {remaining, repaired_droids}} ->
            distance = factory_pos - droid_pos |> Kernel.abs()
            {distance, {factory_pos, {remaining - 1, [{droid_pos, distance} | repaired_droids]}}}
        end)
    {distance, {factory_pos, factory_data}} = 
    calculated
    |> Enum.min_by(fn tuple -> elem(tuple, 0) end)

    %{position: factory_pos, data: factory_data, distance: distance}
  end
  
  # If a factory is overburdened, find the droids with the shortest alternate path and send them
  defp reassign_capacities(factories, key) do
    {needs_reassignment, ok_factories} = 
    factories
    |> Map.to_list()
    |> Enum.split_with(fn {_, {limit, _}} -> limit < 0 end)

    # only show factories that can take more
    ok_factories = Enum.filter(ok_factories, fn {_, {limit, _}} -> limit > 0 end)

    factories = process_reassignment(factories, ok_factories, needs_reassignment, key)

    factories
    |> Map.to_list()
    |> Enum.filter(fn {_, {limit, _}} -> limit < 0 end)
    |> case do
        [] -> factories
        _ -> reassign_capacities(factories, key)
    end
  end

  defp process_reassignment(factories, _, [], _), do: factories
  defp process_reassignment(factories, ok_factories, needs_reassignment, key) do 
    {_factory_pos, {remaining, droids_assigned}} = factory = hd(needs_reassignment)

    ok_factories
    |> Enum.into(%{})
    |> get_reassignment(droids_assigned, Kernel.abs(remaining), key)
    |> handle_reassignment(factories, factory)
    |> process_reassignment(ok_factories, tl(needs_reassignment), key)
  end

  defp get_reassignment(factories, droids_assigned, num_to_reassign, key) do
    droids_assigned
    |> Enum.map(fn {droid_pos, curr_dist} -> 
        %{position: alternate_factory, distance: alternate_distance} = calculate_factory(factories, droid_pos)
        %{
            droid: droid_pos, 
            curr_dist: curr_dist, 
            alt_dist: alternate_distance, 
            dist_delta: alternate_distance - curr_dist,
            alt_factory: alternate_factory
        }
    end)
    |> Enum.sort_by(fn map -> Map.get(map, key) end, :asc)
    |> Enum.split(num_to_reassign)
  end

  defp handle_reassignment({reassign, keep}, factories, current_factory) do
    # Keep what's good
    {current_pos, {_old_limit, _old_droids}} = current_factory
    keep = Enum.map(keep, fn %{droid: pos, curr_dist: dist} -> {pos, dist} end)
    factories = Map.put(factories, current_pos, {0, keep})

    #reassign what is bad
    Enum.reduce(reassign, factories, fn %{droid: droid_pos, alt_dist: alternate_distance, alt_factory: alt_factory}, acc ->
        {limit, droids} = Map.get(acc, alt_factory) 
        droid_data = {droid_pos, alternate_distance} 
        alt_factory_data = { limit - 1, [droid_data | droids]}
        Map.put(acc, alt_factory, alt_factory_data)
    end)
  end
end
```