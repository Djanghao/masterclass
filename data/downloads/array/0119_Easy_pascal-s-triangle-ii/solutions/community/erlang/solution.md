# Easy Erlang Solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/pascals-triangle-ii/solutions/5831244/](https://leetcode.com/problems/pascals-triangle-ii/solutions/5831244/)

---

# Description


1. make upper layer of pascal's triangle.
2. make new list with (1) to add two continous elements
3. Just make list like [1, (2), 1] recursively
4. Return (3).

# Code
```erlang []
-spec get_row(RowIndex :: integer()) -> [integer()].

get_impl_add_element([], _, List) -> List;
get_impl_add_element([H | T], Prev, List) -> 
    get_impl_add_element(T, H, List ++ [H + Prev]). 

get_impl(RowIndex) when RowIndex =:= 0 -> [1];
get_impl(RowIndex) ->
    Prev = get_impl(RowIndex - 1),
    get_impl_add_element(tl(Prev), hd(Prev), [1]) ++ [1].

get_row(RowIndex) ->
    get_impl(RowIndex).
```