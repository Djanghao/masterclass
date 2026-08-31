# Erlang BEATS 100%

**Author:** melkyWay
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3069830/](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3069830/)

---

# Code
```
-spec difference_of_sum(Nums :: [integer()]) -> integer().

difference_of_sum(Nums) -> difference_of_sum(Nums, 0, 0).

difference_of_sum([], Elem_sum, Digit_sum) -> abs(Elem_sum - Digit_sum);
difference_of_sum([H|T], Elem_sum, Digit_sum) -> difference_of_sum(T, Elem_sum + H, Digit_sum + digit_sum(H)).
 
    
digit_sum(D) -> digit_sum(D, 0).

digit_sum(D, Acc) when D div 10 =< 0 -> Acc + D;
digit_sum(D, Acc) -> digit_sum(D div 10, Acc + (D rem 10)).
    
```