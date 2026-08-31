# Erlang recursion

**Author:** MPMPMP88
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-paths-from-source-to-target/solutions/3716579/](https://leetcode.com/problems/all-paths-from-source-to-target/solutions/3716579/)

---

# Intuition

# Approach
Storing the Graph in a map for quick index access.
Then we iteratively go through every node, starting with the node 0 until Target node = Len(Graph)-1. If we find the target we add the solution to the list of results. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec all_paths_source_target(Graph :: [[integer()]]) -> [[integer()]].
all_paths_source_target(Graph) ->
   {DB, Len} = lists:foldl(
        fun(Elements, {Acc, Index}) ->
            {Acc#{Index => Elements}, Index+1}
        end,
    {#{}, 0}, Graph),
  do(DB, 0, Len-1, []).

do(DB, Target, Target, Path) ->
    [lists:reverse([Target|Path])];
do(DB, Node, Target, Path) ->
    lists:foldl(
                fun(Dest, Acc2) ->
                     do(DB, Dest, Target, [Node | Path]) ++ Acc2
                 end, [], 
                 maps:get(Node, DB)
                 ).
```