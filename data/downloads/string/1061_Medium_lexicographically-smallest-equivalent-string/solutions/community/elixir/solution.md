# [Rust / Elixir] union find solution

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3047699/](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3047699/)

---

Always assign the smaller value as root of set. Then it's easy to find the lexicographically smallest string.
# Rust
```rust
impl Solution {
    pub fn smallest_equivalent_string(s1: String, s2: String, base_str: String) -> String {
        let mut parent: Vec<usize> = (0..26).collect();
        for (&b1, &b2) in s1.as_bytes().iter().zip(s2.as_bytes().iter()) {
            let i = Self::byte_to_usize(b1);
            let j = Self::byte_to_usize(b2);
            Self::union(i, j, &mut parent);
        }
        base_str.as_bytes().iter().map(|&b| {
            let i = Self::byte_to_usize(b);
            (Self::find_set(i, &mut parent) as u8 + b'a') as char
        })
        .collect()
    }

    fn byte_to_usize(b: u8) -> usize {
        (b - b'a') as usize
    }

    fn find_set(i: usize, parent: &mut Vec<usize>) -> usize {
        if i != parent[i] {
            parent[i] = Self::find_set(parent[i], parent);
        }
        parent[i]
    }

    fn union(i: usize, j: usize, parent: &mut Vec<usize>) {
        let mut i = Self::find_set(i, parent);
        let mut j = Self::find_set(j, parent);
        if i > j {
            std::mem::swap(&mut i, &mut j);
        }
        parent[j] = i;
    }
}
```
# Elixir
```elixir
defmodule Solution do
  @spec smallest_equivalent_string(s1 :: String.t, s2 :: String.t, base_str :: String.t) :: String.t
  def smallest_equivalent_string(s1, s2, base_str) do
    chars1 = String.to_charlist(s1)
    chars2 = String.to_charlist(s2)
    Enum.zip(chars1, chars2)
    |> Enum.reduce(%{}, &union/2)
    |> then(fn parent ->
      String.to_charlist(base_str)
      |> Enum.map_reduce(parent, &find_set/2)
      |> elem(0)
      |> List.to_string()
    end)
  end

  defp union({i, j}, parent) do
    {i, parent} = find_set(i, parent)
    {j, parent} = find_set(j, parent)
    cond do
      i < j -> Map.put(parent, j, i)
      i > j -> Map.put(parent, i, j)
      true -> parent
    end
  end

  defp find_set(i, parent) do
    case Map.get(parent, i) do
      nil -> {i, parent}
      p ->
        {root, parent} = find_set(p, parent)
        {root, Map.put(parent, i, root)}
    end
  end
end
```