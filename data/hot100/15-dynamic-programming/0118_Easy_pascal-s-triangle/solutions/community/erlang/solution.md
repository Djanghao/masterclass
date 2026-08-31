# Easy Erlang Solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/pascals-triangle/solutions/5831221/](https://leetcode.com/problems/pascals-triangle/solutions/5831221/)

---

# Functions do :
- generate/1: Entry point of this program. Call the function which really generate Pascal's Triangle list
- generate/2: Loop exactly 'NumRows' times. While looping, it call the function "gen_impl" to generate $$n$$th list of Pascal's Triangle
- gen_impl/1: generate $$n$$th list of Pascal's Triangle. It works like [1] ++ [gen_impl_add_element] ++ [1]
- gen_impl_add_element/3: Sum of two continuous elements from previous list of, $$n-1$$th list

# Problems (not for this leetcode problem)
It calls gen_impl function redundantly. So It is tooo slow to use for giant number of NumRows. But, it can be solved by using memoization.

# Code
```erlang []
-spec generate(NumRows :: integer()) -> [[integer()]].

gen_impl_add_element([], _, List) -> List;
gen_impl_add_element([H | T], Prev, List) -> 
    gen_impl_add_element(T, H, List ++ [Prev + H]).

gen_impl(Current) when Current =:= 1 -> [1];
gen_impl(Current) ->
    Prev = gen_impl(Current - 1),
    gen_impl_add_element(tl(Prev), hd(Prev), [1]) ++ [1].

generate(NumRows) ->
    generate(NumRows, 1).

generate(NumRows, Current) when NumRows < Current ->
    [];
generate(NumRows, Current) ->
    [gen_impl(Current)] ++ generate(NumRows, Current + 1).
```