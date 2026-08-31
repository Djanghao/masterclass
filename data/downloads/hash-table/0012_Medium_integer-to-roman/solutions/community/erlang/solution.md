# Significantly overengineered solution

**Author:** erikcghedlund
**Votes:** 0
**Link:** [https://leetcode.com/problems/integer-to-roman/solutions/6030638/](https://leetcode.com/problems/integer-to-roman/solutions/6030638/)

---


![image.png](./images/0.png)

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```erlang []
factors(Num) -> factors(Num, []).
factors(Num, Accum) when length(Accum) == 0 -> factors(Num rem 1000, [(Num div 1000)|Accum]);
factors(Num, Accum) when length(Accum) == 1  -> factors(Num rem 500, [(Num div 500)|Accum]);
factors(Num, Accum) when length(Accum) == 2  -> factors(Num rem 100, [(Num div 100)|Accum]);
factors(Num, Accum) when length(Accum) == 3  -> factors(Num rem 50, [(Num div 50)|Accum]);
factors(Num, Accum) when length(Accum) == 4  -> factors(Num rem 10, [(Num div 10)|Accum]);
factors(Num, Accum) when length(Accum) == 5  -> factors(Num rem 5, [(Num div 5)|Accum]);
factors(Num, Accum) -> [Num|Accum].

to_str(List) -> to_str(List, []).
to_str([H|T], Accum) when length(T) == 6 -> to_str(T, [lists:duplicate(H, 73)|Accum]);
to_str([H|T], Accum) when length(T) == 5 -> to_str(T, [lists:duplicate(H, 86)|Accum]);
to_str([H|T], Accum) when length(T) == 4 -> to_str(T, [lists:duplicate(H, 88)|Accum]);
to_str([H|T], Accum) when length(T) == 3 -> to_str(T, [lists:duplicate(H, 76)|Accum]);
to_str([H|T], Accum) when length(T) == 2 -> to_str(T, [lists:duplicate(H, 67)|Accum]);
to_str([H|T], Accum) when length(T) == 1 -> to_str(T, [lists:duplicate(H, 68)|Accum]);
to_str([H], Accum)                       -> [lists:duplicate(H, 77)|Accum].

fix1([86, 73, 73, 73, 73 | T]) -> [73, 88 | fix1(T)];
fix1([73, 73, 73, 73 | T]) -> [73, 86 | fix1(T)];
fix1([H|T]) -> [H|fix1(T)];
fix1([]) -> [].

fix2([76, 88, 88, 88, 88 | T]) -> [88, 67 | fix2(T)];
fix2([88, 88, 88, 88 | T]) -> [88, 76 | fix2(T)];
fix2([H|T]) -> [H|fix2(T)];
fix2([]) -> [].

fix3([68, 67, 67, 67, 67 | T]) -> [67, 77 | fix3(T)];
fix3([67, 67, 67, 67 | T]) -> [67, 68 | fix3(T)];
fix3([H|T]) -> [H|fix3(T)];
fix3([]) -> [].

-spec int_to_roman(Num :: integer()) -> unicode:unicode_binary().
int_to_roman(Num) -> list_to_binary(fix3(fix2(fix1(lists:flatten(to_str(factors(Num))))))).
```