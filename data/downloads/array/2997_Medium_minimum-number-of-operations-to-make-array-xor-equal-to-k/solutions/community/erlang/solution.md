# Easy Erlang Soultion

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/5839084/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/solutions/5839084/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
0(K) xor 2 xor 0 xor 2 xor 0 = 0 -> 0000(2) 
-> do nothing because there is no set bit
1(K) xor 2 xor 1 xor 3 xor 4 = 5 -> 101(2) 
-> we have to flip only 2 bit (number of set bits).

# Code
```erlang []
-spec min_operations(Nums :: [integer()], K :: integer()) -> integer().

xor_arr([], Prev) -> Prev;
xor_arr([H | T], Prev) -> xor_arr(T, Prev bxor H).

%%    0(K) bxor 2 bxor 0 bxor 2 bxor 0 = 0  -> 0000(2) -> do nothing because there is no set bit
%%    1(K) bxor 2 bxor 1 bxor 3 bxor 4 = 5  -> 1001(2) -> we have to flip only 2 bit (number of set bits).

min_operations(Nums, K) ->
    length([X || X <- integer_to_list(xor_arr(Nums, K), 2), X =:= $1]).

```