# loop pattern

**Author:** junhyk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/4204643/](https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/4204643/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

-spec largest_values(Root :: #tree_node{} | null) -> [integer()].
largest_values({tree_node, N, null, null}) ->
  [N];
largest_values([]) ->
  [];
largest_values(null) ->
  [];
largest_values(Root) ->
  {tree_node, N, L, R} = Root,
  T = [L, R],
  % io:format("T ~p  ~n", [T]),
  % Count = length(lists:filter(fun(Y) -> Y =:= null end, T)),
  Result = loop_node(T, [N]),
  Result.

loop_node([], Result) ->
  Result;
loop_node(NodeList, Result) ->
  % io:format("NodeList ~p  ~p  ~n", [NodeList,Result]),
  {NextList, Max} = loop_convert(NodeList, [], -576460752303423489),
  % io:format("NextList ~p ~p  ~n", [NextList,Max]),

  case Max of
    -576460752303423489 ->
      loop_node(NextList, Result);
    _ ->
      loop_node(NextList, Result ++ [Max])
  end.

loop_convert([], NextList, Max) ->
  {NextList, Max};
loop_convert([null | T], NextList, Max) ->
  loop_convert(T, NextList, Max);
loop_convert([{tree_node, N, L, R} | T], NextList, Max) ->
  loop_convert(T, NextList ++ [L] ++ [R], max(N, Max)).

```