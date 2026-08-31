# Elixir solution using DFS and Memoization

**Author:** kkhaniffff
**Votes:** 0
**Link:** [https://leetcode.com/problems/parallel-courses-iii/solutions/4183378/](https://leetcode.com/problems/parallel-courses-iii/solutions/4183378/)

---

# Code
```
defmodule Solution do
  @spec minimum_time(n :: integer, relations :: [[integer]], time :: [integer]) :: integer
  def minimum_time(n, relations, time) do
    graph = 
        Enum.reduce(relations, %{}, fn [prev, next], graph ->
            Map.update(graph, next - 1, [prev - 1], &[prev - 1 | &1])
        end)

    time = List.to_tuple(time)

    Enum.reduce(0..(n - 1), {0, %{}}, fn course, {total, memo} ->
        {total_prereq, memo} = get_time(course, graph, time, memo)
        {max(total_prereq, total), memo}
    end)
    |> then(fn {total, _memo} -> total end)
  end

  defp get_time(course, graph, time, memo) do
    case memo[course] do
        nil -> 
            {total_prereq, memo} = 
                Enum.reduce(Map.get(graph, course, []), {0, memo}, fn prereq, {total, memo} ->
                    {prereq_time, memo} = get_time(prereq, graph, time, memo)
                    {max(total, prereq_time), memo}
                end)

            val = total_prereq + elem(time, course)
            {val, Map.put(memo, course, val)}

        val -> 
            {val, memo}
    end
  end
end
```