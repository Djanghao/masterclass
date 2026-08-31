# [Rust / Elixir] KMP implementation

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/3249907/](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/3249907/)

---

# Approach
1. Make a LPS table for `needle`.
2. Run KMP for `haystack` with the LPS table.
3. Return the answer when first match is found.
4. Return -1 if there are no matches.

# Rust
```rust
impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        let lps = Self::make_lps(&needle);
        let bytes = needle.as_bytes();
        let mut lo = 0;
        for (i, &ch) in haystack.as_bytes().iter().enumerate() {
            while lo > 0 && bytes[lo] != ch {
                lo = lps[lo - 1];
            }
            if bytes[lo] == ch {
                lo += 1;
                if lo == needle.len() {
                    return (i - lo + 1) as i32;
                }
            }
        }
        -1
    }

    fn make_lps(s: &str) -> Vec<usize> {
        let bytes = s.as_bytes();
        let mut lps = vec![0; s.len()];
        let mut lo = 0;
        for hi in 1..s.len() {
            while lo > 0 && bytes[lo] != bytes[hi] {
                lo = lps[lo - 1];
            }
            if bytes[lo] == bytes[hi] {
                lo += 1;
                lps[hi] = lo;
            }
        }
        lps
    }
}
```

# Elixir
`needle` is converted to a tuple of code points for random access.
A Map is used for `lps`.
```elixir
defmodule Solution do
  @spec str_str(haystack :: String.t, needle :: String.t) :: integer
  def str_str(haystack, needle) do
    t =
      String.to_charlist(needle)
      |> List.to_tuple()
    lps = make_lps(t)

    String.to_charlist(haystack)
    |> Enum.with_index()
    |> Enum.reduce_while({t, lps, 0}, &do_reduce/2)
    |> then(fn
      {_, _, _} -> -1
      ans -> ans
    end)
  end

  defp make_lps(t, lps \\\\ %{}, lo \\\\ 0, hi \\\\ 1)
  defp make_lps(t, lps, _, hi) when hi == tuple_size(t), do: lps
  defp make_lps(t, lps, lo, hi) do
    cond do
      lo > 0 and elem(t, lo) != elem(t, hi) ->
        make_lps(t, lps, Map.get(lps, lo - 1, 0), hi)
      elem(t, lo) == elem(t, hi) ->
        make_lps(t, Map.put(lps, hi, lo + 1), lo + 1, hi + 1)
      true -> make_lps(t, lps, lo, hi + 1)
    end
  end

  defp do_reduce({ch, i}, {t, lps, lo}) do
    cond do
      lo > 0 and elem(t, lo) != ch ->
        do_reduce({ch, i}, {t, lps, Map.get(lps, lo - 1, 0)})
      elem(t, lo) == ch and lo + 1 == tuple_size(t) -> {:halt, i - lo}
      elem(t, lo) == ch -> {:cont, {t, lps, lo + 1}}
      true -> {:cont, {t, lps, lo}}
    end
  end
end
```