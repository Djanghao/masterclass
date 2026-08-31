# Elixir - Scala Solutions

**Author:** Pai-Mei
**Votes:** 6
**Link:** [https://leetcode.com/problems/longest-common-prefix/solutions/2106219/](https://leetcode.com/problems/longest-common-prefix/solutions/2106219/)

---

Scala:

```
object Solution {
    def longestCommonPrefix(strs: Array[String]): String = {
      val minBy = strs.minBy(_.length).length

      strs
        .map(_.toList.take(minBy))
        .toList
        .transpose
        .takeWhile(lst => lst.forall(_ == lst.head))
        .map(_.head)
        .mkString
    }
}
```

Elixir:

```
defmodule Solution do
  @spec longest_common_prefix(strs :: [String.t]) :: String.t
  def longest_common_prefix(strs) do
    strs
    |> Enum.map(&String.to_charlist/1)
    |> Enum.zip()
    |> Enum.map(&Tuple.to_list/1)
    |> Enum.map(&Enum.uniq/1)
    |> Enum.take_while(&match?([_], &1))
    |> IO.iodata_to_binary()
  end
end
```