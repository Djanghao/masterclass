# Elixir Approach and Solution

**Author:** bpfaust
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-and-replace-pattern/solutions/2348175/](https://leetcode.com/problems/find-and-replace-pattern/solutions/2348175/)

---

Not the most elegant Elixir solution this time, and would welcome to see if there may exist a more direct approach to solving this problem. 
# Approach
## `find_and_replace_pattern/2`
1. Use `List.foldr\\3` to step across each `word` in `words` from right-most to left-most and evaluate if it satisfies the problem statement. This right to left operation is preferred as we will store words satisfying the problem description into the returned `acc` list head-first. If using `List.foldl\\3`, the returned list will need to be reversed. 

## `check/4`
### In short: 
Keep a map of letters in `word` and `pattern` that tracks how letters in each correspond with letters of the other. Letters between each must have a one to one relationship. If this is violated, the word should not be returned in the result. 

### In detailed explanation: 
Receive the `word` to check and the `pattern` in character list format, as provided by `String.to_charlist\\1`. As each letter in `word` and `pattern` is encountered, `w_letter` and `p_letter`, respectively, store it as the key and its partner as the value into `w_map` and `p_map`, respectively. 

For each letter ...
1. Check if the `w_letter` is in `w_map`. If it is, save the corresponding letter from `pattern` into `mapped_letter`, and check that `p_map` contains `p_letter` and its value is `w_letter`. 
2. If `w_letter` is not in `w_map`, check if `p_map` contains `p_letter`. If it does not, move onto the next letter in `word` and `pattern`, and store the letters and their partner as approrpiate into `w_map` and `p_map` using `Map.put\\3`. 
3. If `w_letter` is in `w_map`, confirm the saved `mapped_letter` is `p_letter`, and that `p_map` has `p_letter` as a key with `w_letter` as its value. 
4. If all of the above returns truthy results, move onto the next letter in `word` and `pattern`. When all letters have been checked, the problem statement has been met and the `word` should be returned in the answer. Return `true` for `check\\4`. 
5. If any of the above conditions returns false, the problem statement has been violated and the `word` should not be returned in the answer. Return `false` for `check\\4`. 
# Solution
```
defmodule Solution do
  @spec find_and_replace_pattern(words :: [String.t], pattern :: String.t) :: [String.t]
  def find_and_replace_pattern(words, pattern) do
    List.foldr(words, [], fn word, acc -> if check(word |> String.to_charlist, pattern |> String.to_charlist, %{},  %{}), do: [word | acc], else: acc end)
  end
  
  def check([], [], _, _), do: true
  def check([w_letter | w_tail], [p_letter | p_tail], w_map, p_map) do
    if (mapped_letter = Map.get(w_map, w_letter, false)) do
      if (p_letter == mapped_letter) and (Map.get(p_map, p_letter, nil) == w_letter) do
        check(w_tail, p_tail, w_map, p_map)
      else
        false
      end
    else
      if !Map.has_key?(p_map, p_letter) do
        check(w_tail, p_tail, w_map |> Map.put(w_letter, p_letter), p_map |> Map.put(p_letter, w_letter))
      else
        false
      end
    end
  end
end
```