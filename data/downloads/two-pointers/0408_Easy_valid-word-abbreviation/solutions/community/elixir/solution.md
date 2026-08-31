# Elixir Solution O(n)

**Author:** frkbmr
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-word-abbreviation/solutions/4678347/](https://leetcode.com/problems/valid-word-abbreviation/solutions/4678347/)

---

# Intuition
Lil ugly with the throw. 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec valid_word_abbreviation(word :: String.t, abbr :: String.t) :: boolean
  def valid_word_abbreviation(word, abbr) do
    # split by letters and numbers, for each number, attempt to make the substitution, if it's valid, then great, otherwise no
    try do
        abbr_list = Regex.scan(~r/[a-zA-Z]|\\d+/, abbr) 
        |> List.flatten 
        |> Enum.map(fn x ->
            case String.starts_with?(x, "0") do
                true -> throw(false)
                false ->
                    case Integer.parse(x) do
                        :error -> x
                        {val, _rem} -> val
                    end
            end
        end) 

        word = word 
        |> String.graphemes()
        
        {valid?, rem} = abbr_list
        |> Enum.reduce_while({true, word}, fn abbr, {valid?, word} ->

            case is_integer(abbr) do
                # if it's an integer, take that many and pass it
                true -> 
                    case abbr > length(word) do
                        true -> {:halt, {false, word}}
                        false -> 
                            {_, rem} = Enum.split(word, abbr)
                            #IO.inspect([abbr, rem])
                            {:cont, {true, rem}}
                    end

                false -> 
                    # not an integer, check if it's equal
                    cur = List.first(word)
                    #IO.inspect([abbr, cur])
                    case cur == abbr do
                        true -> {:cont, {true, tl(word)}}
                        false -> {:halt, {false, word}}
                    end
            end
        end)

        valid? and length(rem) == 0
    catch
        val -> val
    end
  end
end
```