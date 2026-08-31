# Elixir solution using erlang queue

**Author:** NerevarSoul
**Votes:** 0
**Link:** [https://leetcode.com/problems/dota2-senate/solutions/3486200/](https://leetcode.com/problems/dota2-senate/solutions/3486200/)

---


# Code
```
defmodule Solution do
  @spec predict_party_victory(senate :: String.t) :: String.t
  def predict_party_victory(senate) do
    radiant = create_queue(senate, "R")
    dire = create_queue(senate, "D")
    l = String.length(senate)

    compare(radiant, dire, l)

  end 

  def compare(radiant, dire, l) do
    cond do
      :queue.is_empty(dire) -> "Radiant"
      :queue.is_empty(radiant) -> "Dire"
      true -> 
        {{:value, head1}, radiant} = :queue.out(radiant)
        {{:value, head2}, dire} = :queue.out(dire)

        if head1 < head2 do
          compare(:queue.in(head1 + l, radiant), dire, l) 
        else
          compare(radiant, :queue.in(head2 + l, dire), l)
        end
    end

  end

    
  def create_queue(senate, filter) do
    String.codepoints(senate)
      |> Enum.with_index
      |> Enum.filter(fn({elem, index}) -> elem == filter end)
      |> Enum.map(fn({_elem, index}) -> index end)
      |> :queue.from_list
  end

end
```