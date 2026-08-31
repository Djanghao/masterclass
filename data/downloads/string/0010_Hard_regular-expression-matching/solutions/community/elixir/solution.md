# Elixir (15 ms, beats 100%): binary pattern matching, recursion/backtracking, memoization

**Author:** pul-paulsen
**Votes:** 0
**Link:** [https://leetcode.com/problems/regular-expression-matching/solutions/5797925/](https://leetcode.com/problems/regular-expression-matching/solutions/5797925/)

---

# Intuition
On first sight, this is a perfect match (pun was not intended) for **Elixirs excellent and fast binary pattern matching**, which can quickly **match and consume tokens in both parameters recursively**.

But a simple recursive approach would be too naive. 
The **`*` means 0..n matches**, so that we need **backtracking between at most 3 choices**: Consume either of string and pattern token or both. With many * wildcards this **would lead to ugly complexity**. 

So, **memoization** is in order. During the recursive consumption of string and pattern we can easily track the **respective indices of their tokens**. We can use **these coordinates `{i_s, i_p}` to cache already checked constellations**. 

# Approach
* Spawn off a task (not for concurrency, but for isolated process memory)
* Write a function that wraps the match of s and p with analog indices in a cache look up using the process dictionary. On a cache miss, call the actual matching function and store its result
* The actual matching needs binary pattern matching clauses for all successful matching combinations to handle. It consumes the input strings and increases the indices accordingly and recurs (via the caching function!)
* When the `*` is involved in the pattern, the recursion needs backtracking and is done in at max 3 choices (consume string, pattern or both), one of which must be true
* When both strings are consumed, a matching path was found
* In any other case this combination does not match

# Complexity
- Time complexity: **O(n (1+2m))**, where n is the length of the input string and **m is the count of * directives** in the pattern; in the best case it is linear (like in comparing equal strings); for an appropriate number of *, it still should have appropiate efficiency (one could even optimize by throwing out repeated patterns in e.g. `".*.*.*"`, which is equivalent to `".*"`)

- Space complexity: **O(np))**; where n is the length of the input string and p the number of tokens in the pattern; this is only the theoretical maximum of the caching table; normally only a subset will be on the tracking pathes

# Code
```elixir []
defmodule Solution do
  @spec is_match(s :: String.t, p :: String.t) :: boolean
  def is_match(s, p), do: Task.await(Task.async(fn -> matches?(s, p, 0, 0) end))

  # memoize matches for coordinates 
  defp matches?(s, p, i_s, i_p) do 
    case Process.get({i_s, i_p}) do
        nil -> 
            match? = m?(s, p, i_s, i_p)
            Process.put({i_s, i_p}, match?)
            match?

        match? -> 
            match?
    end
  end

  # 0..n character wildcards
  defp m?(<<_c, s_tail::binary>> = s, <<?., ?*, p_tail::binary>> = p, i_s, i_p), 
    do: matches?(s_tail, p, i_s + 1, i_p) 
        or matches?(s_tail, p_tail, i_s + 1, i_p + 1)
        or matches?(s, p_tail, i_s, i_p + 1)
  # 0..n specific chars, matching one
  defp m?(<<c, s_tail::binary>> = s, <<c, ?*, p_tail::binary>> = p, i_s, i_p), 
    do: matches?(s_tail, p, i_s + 1, i_p) 
        or matches?(s_tail, p_tail, i_s + 1, i_p + 1)
        or matches?(s, p_tail, i_s, i_p + 1)
  # 0..n specific chars, no match
  defp m?(s, <<_, ?*, p_tail::binary>>, i_s, i_p), 
    do: matches?(s, p_tail, i_s, i_p + 1)
  # exactly one character wildcard  
  defp m?(<<_, s_tail::binary>>, <<?., p_tail::binary>>, i_s, i_p), 
    do: matches?(s_tail, p_tail, i_s + 1, i_p + 1)
  # exactly one character match  
  defp m?(<<c, s_tail::binary>> = s, <<c, p_tail::binary>> = p, i_s, i_p), 
    do: matches?(s_tail, p_tail, i_s + 1, i_p + 1)
  # string and pattern consumed
  defp m?(<<>>, <<>>, _, _), do: true
  # not everything consumed
  defp m?(_, _, _, _), do: false

end
```