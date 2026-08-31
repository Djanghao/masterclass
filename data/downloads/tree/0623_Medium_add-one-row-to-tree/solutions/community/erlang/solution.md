# Erlang || Straightforward recursion || Includes test cases

**Author:** taconite
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-one-row-to-tree/solutions/2661816/](https://leetcode.com/problems/add-one-row-to-tree/solutions/2661816/)

---

Code:
```erlang
-spec add_one_row(Root :: #tree_node{} | null, Val :: integer(), Depth :: integer()) -> #tree_node{} | null.
add_one_row(Root, Val, Depth) ->
    add_one_row(Root, Val, Depth-1, true).

add_one_row(Root, Val, Depth, IsLeft) when Depth == 0, IsLeft == true ->
    #tree_node{val=Val, left=Root, right=null};
add_one_row(Root, Val, Depth, IsLeft) when Depth == 0, IsLeft == false ->
    #tree_node{val=Val, left=null, right=Root};
add_one_row(Root, Val, Depth, IsLeft) when Root == null ->
    null;
add_one_row(Root, Val, Depth, IsLeft) ->
    #tree_node{
        val=Root#tree_node.val,
        left=add_one_row(Root#tree_node.left, Val, Depth-1, true),
        right=add_one_row(Root#tree_node.right, Val, Depth-1, false)
    }.
```

Test cases:
```
[4,2,6,3,1,5]
1
2
[4,2,null,3,1]
1
3
[4,2,null,3,1]
99
1
[4,2,null,3,1]
99
4
[5]
99
1
[5]
99
2
[5,null,6]
99
1
[5,null,6]
99
2
[5,null,6]
99
3
```

These are the same as my [Java post](https://leetcode.com/problems/add-one-row-to-tree/discuss/2661809/Java-oror-Straightforward-recursion-oror-Includes-test-cases).
