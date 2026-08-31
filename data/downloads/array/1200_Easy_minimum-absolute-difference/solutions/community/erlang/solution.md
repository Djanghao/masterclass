# Solution using Erlang, Elixir, PHP and JavaScript

**Author:** jacintolutrezehue
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-difference/solutions/5623884/](https://leetcode.com/problems/minimum-absolute-difference/solutions/5623884/)

---

# Intuition

To solve the problem of finding all pairs of elements with the minimum absolute difference, start by thinking about the following:

---

1. **Sorting**: Sorting the list of integers will help you easily identify the smallest differences between consecutive numbers. When the list is sorted, the smallest difference will always be between some pair of adjacent elements.

2. **Finding the Minimum Difference**: After sorting, compare each pair of adjacent elements to determine the smallest difference between them.

3. **Collecting Pairs**: Once you know the smallest difference, you can go through the list again and collect all pairs of adjacent elements that have this smallest difference.

# Approach

1. **Sort the List**: Begin by sorting the list of integers. This will help you find the minimum difference more efficiently.

2. **Find the Minimum Absolute Difference**:
   - Compare each element with the next element in the sorted list.
   - Keep track of the smallest difference you encounter.

3. **Collect Pairs with Minimum Difference**:
   - Iterate through the sorted list again.
   - Collect pairs of adjacent elements where the difference between them equals the smallest difference found earlier.

# Complexity

- **Time Complexity**: The time complexity is mainly determined by the sorting step, which is \\(O(n \\log n)\\), where \\(n\\) is the number of elements in the list. Finding the minimum difference and collecting pairs both take linear time, \\(O(n)\\). So overall, the time complexity is \\(O(n \\log n)\\).

- **Space Complexity**: The space complexity is \\(O(n)\\) because we need extra space to store the sorted list and the pairs of elements with the minimum difference.

# Code

```Erlang []
-spec minimum_abs_difference([integer()]) -> [[integer()]].
minimum_abs_difference(Arr) ->
    Sorted = lists:sort(Arr),
    MinDiff = find_min_abs_difference(Sorted),
    find_pairs(Sorted, MinDiff).

find_min_abs_difference([_]) ->
    inf;
find_min_abs_difference([_H1, _H2]) ->
    abs(_H2 - _H1);
find_min_abs_difference([H1, H2 | T]) ->
    MinDiff = find_min_abs_difference([H2 | T]),
    min(abs(H2 - H1), MinDiff).

find_pairs([], _) ->
    [];
find_pairs([_], _) ->
    [];
find_pairs([H1, H2 | T], MinDiff) ->
    Pairs = if
        abs(H2 - H1) == MinDiff ->
            [[H1, H2] | find_pairs([H2 | T], MinDiff)];
        true ->
            find_pairs([H2 | T], MinDiff)
    end,
    Pairs.
```
```Elixir []
defmodule Solution do
    @spec minimum_abs_difference(arr :: [integer]) :: [[integer]]
    def minimum_abs_difference(arr) do
        arr
        |> Enum.sort()
        |> find_min_abs_difference()
    end

    defp find_min_abs_difference(sorted_arr) do
        min_diff = 
        sorted_arr
        |> Enum.chunk_every(2, 1, :discard)
        |> Enum.map(fn [a, b] -> b - a end)
        |> Enum.min()

        sorted_arr
        |> Enum.chunk_every(2, 1, :discard)
        |> Enum.filter(fn [a, b] -> b - a == min_diff end)
    end
end
```
```PHP []
class Solution {
    /**
     * @param Integer[] $arr
     * @return Integer[][]
     */
    function minimumAbsDifference($arr) {
        sort($arr);

        $n = count($arr);
        $minDiff = PHP_INT_MAX;
        $result = [];

        for ($i = 1; $i < $n; $i++) {
            $diff = $arr[$i] - $arr[$i - 1];
            if ($diff < $minDiff) {
                $minDiff = $diff;
            }
        }

        for ($i = 1; $i < $n; $i++) {
            if ($arr[$i] - $arr[$i - 1] == $minDiff) {
                $result[] = [$arr[$i - 1], $arr[$i]];
            }
        }

        return $result;
    }
}
```
```JS []
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);

    let minDiff = Infinity;
    let result = [];

    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i - 1];

        if (diff < minDiff) {
            minDiff = diff;
            result = [[arr[i - 1], arr[i]]];
        } else if (diff === minDiff) {
            result.push([arr[i - 1], arr[i]]);
        }
    }
    
    return result;
};
```