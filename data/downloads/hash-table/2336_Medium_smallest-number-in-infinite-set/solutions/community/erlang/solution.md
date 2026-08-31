# O(log N) solution with gb_sets in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/4933641/](https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/4933641/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
With an ordered dictionary such as binary search tree, this problem is very trivial. In Erlang, the nice `gb_sets` fits perfectly to this problem. Only few lines of Erlang code are required to implement the three functions. 

# Complexity
- Time complexity: $O(\\log N)$ for both `pop()` and `add_back()`, according to [the official document](https://www.erlang.org/doc/man/gb_sets).

# Code
```
-spec smallest_infinite_set_init_() -> any().
smallest_infinite_set_init_() -> 
    erlang:erase(),
    erlang:put(current, 1), 
    erlang:put(tree, gb_sets:new()).

-spec smallest_infinite_set_pop_smallest() -> integer().
smallest_infinite_set_pop_smallest() ->
    case gb_sets:is_empty(erlang:get(tree)) of
        true -> Ret = erlang:get(current), erlang:put(current, Ret + 1), Ret;
        false -> 
            {Ret, Tree} = gb_sets:take_smallest(erlang:get(tree)),
            erlang:put(tree, Tree),
            Ret
    end.

-spec smallest_infinite_set_add_back(Num :: integer()) -> any().
smallest_infinite_set_add_back(Num) ->
  case erlang:get(current) > Num of
    true -> erlang:put(tree, gb_sets:add_element(Num, erlang:get(tree)));
    false -> ok
  end.
```