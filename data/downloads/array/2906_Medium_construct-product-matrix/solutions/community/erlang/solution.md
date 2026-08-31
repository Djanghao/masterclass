# 8-Lines of Erlang: Forward/Backward Products in One Recursion

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-product-matrix/solutions/4929852/](https://leetcode.com/problems/construct-product-matrix/solutions/4929852/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Calcluating the forward prodcut and the backward product, and each cell can be filled in O(1). My solution in Erlang handles the backward/forward prodcuts in one recurision by using the return value for the backward product. 

# Complexity
- Time complexity: $O(nm)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(nm)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec construct_product_matrix(Grid :: [[integer()]]) -> [[integer()]].
construct_product_matrix(Grid) -> [Ans, _] = solve(Grid, 1), Ans.
solve([], _) -> [[], 1];
solve([[]|T], FP) ->
    [Rows, BP] = solve(T, FP),
    [[[]|Rows], BP];
solve([[V|CT]|R], FP) -> 
    [[Cols|Rows], BP] = solve([CT|R], (FP * V) rem 12345),
    [[[(FP * BP) rem 12345|Cols]|Rows], (BP * V) rem 12345].
```