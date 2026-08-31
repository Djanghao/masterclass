# my erlang solution

**Author:** drizhiloda
**Votes:** 0
**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/1657921/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/1657921/)

---

```
calculate(true) -> 1;
calculate(false) -> -1.
    
determineOp(Op) -> lists:member(hd("+"),unicode:characters_to_list(Op)).

operation([Op | T], Value) -> operation(T, Value + calculate(determineOp(Op)));
operation([], Value) -> Value.

-spec final_value_after_operations(Operations :: [unicode:unicode_binary()]) -> integer().

final_value_after_operations(Operations) ->
    operation(Operations, 0)
  .

```