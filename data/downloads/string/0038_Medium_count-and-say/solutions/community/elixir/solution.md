# Make it easy with chunk_by!

**Author:** ronbrz
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-and-say/solutions/4094547/](https://leetcode.com/problems/count-and-say/solutions/4094547/)

---

# Intuition
The `chunk_by` function can group adjacent values in a list that are equal. Once we have these groupings, it's easy to find the length of each list and glue the length of that list and the contents of that list together.

For example, if you have the grouping 
`[3,3,3,3]`
It's easy to see the length of that list of threes is 4, and you can return the string 
`"#{Enum.count([3,3,3,3])}#{hd([3,3,3,3])}"`
which evals to
`"43"`
for that chunk

# Code
```
defmodule Solution do
  # Base case
  def count_and_say(1), do: "1"

  @spec count_and_say(n :: integer) :: String.t
  def count_and_say(n) do
    count_and_say(n - 1)
      # Retrieve a list of characters
      |> String.split("", trim: true)
      # & &1 is an identity function, returning what was passed into it
      # chunk_by groups by the return value of that function, so this
      # will group by the values in the character array passed to it
      |> Enum.chunk_by(& &1)
      |> Enum.map(fn [ch | _] = chunk -> "#{Enum.count(chunk)}#{ch}" end)
      |> Enum.join
  end
end
```