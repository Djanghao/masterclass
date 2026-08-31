# Elixir using topological sorting

**Author:** tsycho
**Votes:** 0
**Link:** [https://leetcode.com/problems/course-schedule-ii/solutions/5460278/](https://leetcode.com/problems/course-schedule-ii/solutions/5460278/)

---

# Code
```elixir []
defmodule Solution do
  @spec find_order(num_courses :: integer, prerequisites :: [[integer]]) :: [integer]
  def find_order(num_courses, prerequisites) do
    case topo_sort(num_courses, prerequisites) do
      {:ok, order} -> order |> Enum.reverse()
      _ -> []
    end
  end

  def topo_sort(num_courses, prerequisites) do
    # Put empty list for every course
    graph =
      0..(num_courses - 1)
      |> Enum.reduce(%{}, fn course, acc ->
        acc |> Map.put(course, [])
      end)

    # Populate the graph using the given prerequisites
    graph =
      prerequisites
      |> Enum.reduce(graph, fn [course, prereq], acc ->
        acc |> Map.put(course, [prereq | Map.get(acc, course)])
      end)

    # |> IO.inspect()

    res =
      0..(num_courses - 1)
      |> Enum.reduce_while({%{}, []}, fn course, {states, order} ->
        # Check whether the node is already processed if not processed then process it
        if states[course] == nil do
          {can?, states, order} = dfs([course], states, order, graph)

          # If at any point we encounter failure then halt suddenly
          if can? do
            {:cont, {states, order}}
          else
            {:halt, :cannot_finish}
          end
        else
          {:cont, {states, order}}
        end
      end)

    if res |> is_tuple() do
      {:ok, res |> elem(1)}
    else
      {:error, res}
    end
  end

  @spec dfs(stack :: list(), states :: map(), order :: list(), graph :: map()) ::
          {can? :: boolean(), states :: map(), order :: list()}
  def dfs([], states, order, _), do: {true, states, order}

  def dfs([head | tail] = stack, states, order, graph) do
    case states[head] do
      nil ->
        # If we are visiting the head first time
        states = states |> Map.put(head, :process)

        # Check all the neighbors if any neighbor is in process then there is a cycle
        # Otherwise push them into the stack
        stack =
          graph[head]
          |> Enum.reduce_while(stack, fn neighbor, stack ->
            if states[neighbor] == :process do
              {:halt, :cannot_finish}
            else
              {:cont, [neighbor | stack]}
            end
          end)

        if stack |> is_list() do
          dfs(stack, states, order, graph)
        else
          {false, states, order}
        end

      # head was processing it means it has been processed
      :process ->
        states = %{states | head => :done}
        dfs(tail, states, [head | order], graph)

      # if head is processed then process rest of the stack
      :done ->
        dfs(tail, states, order, graph)
    end
  end
end
```