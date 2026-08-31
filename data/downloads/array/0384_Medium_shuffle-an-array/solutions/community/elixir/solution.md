# Elixir solution using Agent module

**Author:** foxesknow
**Votes:** 0
**Link:** [https://leetcode.com/problems/shuffle-an-array/solutions/3764995/](https://leetcode.com/problems/shuffle-an-array/solutions/3764995/)

---

# Intuition
The way the tests are run means that after the first run we need to stop the agent and restart it with a new **nums** list. If we don't do this then the test will fail.

# Code
```
defmodule Solution do
  @name __MODULE__

  defp start(nums) do
    Agent.start_link(fn -> nums end, name: @name)
  end

  defp restart(nums) do
    Agent.stop(@name)
    start(nums)
  end

  @spec init_(nums :: [integer]) :: any
  def init_(nums) do
    case start(nums) do
      {:ok, _} -> nil
      {:error, {:already_started, _}} -> restart(nums)
    end
  end

  @spec reset() :: [integer]
  def reset() do
    Agent.get_and_update(@name, fn nums -> {nums, nums} end)
  end

  @spec shuffle() :: [integer]
  def shuffle() do
    Agent.get_and_update @name, fn nums ->
      {Enum.shuffle(nums), nums}
    end
  end
end


# Your functions will be called as such:
# Solution.init_(nums)
# param_1 = Solution.reset()
# param_2 = Solution.shuffle()

# Solution.init_ will be called before every test case, in which you can do some necessary initializations.
```