# Clean elixir solution

**Author:** victor-teles
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/3042228/](https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/3042228/)

---


# Code
```
defmodule Solution do
  @spec arrange_words(text :: String.t) :: String.t
  def arrange_words(text) do
    rearrange_text_by_length(text) |> String.capitalize()
  end


  def rearrange_text_by_length(text) do
    text |> String.split(" ") |> Enum.sort_by(&String.length/1) |> Enum.join(" ")
  end

end
```