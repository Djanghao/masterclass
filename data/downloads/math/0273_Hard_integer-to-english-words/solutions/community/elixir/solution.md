# Elixir - Binary Search

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/integer-to-english-words/solutions/5600123/](https://leetcode.com/problems/integer-to-english-words/solutions/5600123/)

---

# Code
```Elixir
defmodule Solution do
  @dict {
    {1000000000, "Billion"},
    {1000000, "Million"},
    {1000, "Thousand"},
    {100, "Hundred"},
    {90, "Ninety"},
    {80, "Eighty"},
    {70, "Seventy"},
    {60, "Sixty"},
    {50, "Fifty"},
    {40, "Forty"},
    {30, "Thirty"},
    {20, "Twenty"},
    {19, "Nineteen"},
    {18, "Eighteen"},
    {17, "Seventeen"},
    {16, "Sixteen"},
    {15, "Fifteen"},
    {14, "Fourteen"},
    {13, "Thirteen"},
    {12, "Twelve"},
    {11, "Eleven"},
    {10, "Ten"},
    {9, "Nine"},
    {8, "Eight"},
    {7, "Seven"},
    {6, "Six"},
    {5, "Five"},
    {4, "Four"},
    {3, "Three"},
    {2, "Two"},
    {1, "One"},
    {0, ""}
  }

  @dict_size tuple_size(@dict)

  @spec number_to_words(num :: integer) :: String.t
  def number_to_words(0), do: "Zero"

  def number_to_words(num) do
    num |> num_to_iolist() |> IO.iodata_to_binary()
  end

  defp num_to_iolist(num) when num < 100 do
    {d, eng} = search(num, 4)
    r = rem(num, d)

    if r == 0 do
      [eng]
    else
      [eng, " ", num_to_iolist(r)]
    end
  end
  
  defp num_to_iolist(num) do
    {d, eng} = search(num)

    q = div(num, d)
    r = rem(num, d)

    if r == 0 do
      [num_to_iolist(q), " ", eng]
    else
      [num_to_iolist(q), " ", eng, " ", num_to_iolist(r)]
    end
  end

  defp search(cap, i \\\\ 0, j \\\\ @dict_size)

  defp search(_cap, i, j) when i >= j do
    elem(@dict, i)
  end 

  defp search(cap, i, j) do
    m = div(i + j, 2)
    {d, _} = entry = elem(@dict, m)

    cond do
      d < cap -> search(cap, i, m)
      d > cap -> search(cap, m + 1, j)
      true -> entry
    end
  end
end
```