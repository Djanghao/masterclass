# Erlang - Simple recursive solution

**Author:** aozeritsky
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutations-ii/solutions/1494114/](https://leetcode.com/problems/permutations-ii/solutions/1494114/)

---

```
-spec permute_unique(Nums :: [integer()]) -> [[integer()]].

add(X,Before,[],Acc)->
    [(lists:reverse(Before) ++ [X])|Acc];
add(X,Before,[After|Next],Acc)->
    F=lists:reverse(Before) ++ [X] ++ [After|Next],
    add(X,[After|Before],Next,[F|Acc]).

add_all(_,[],Acc)->Acc;
add_all(X,[A|B],Acc)->add_all(X,B,add(X,[],A,Acc)).

permute_unique([]) -> [];
permute_unique([A]) -> [[A]];
permute_unique([A|B]) ->
    Prev=permute_unique(B),
    lists:usort(add_all(A,Prev,[])).
```