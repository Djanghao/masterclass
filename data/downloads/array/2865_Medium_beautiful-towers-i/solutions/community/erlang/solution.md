# O(N) Erlang Solution with Forward/Backward Monotonic Stacks within One Recursion

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-towers-i/solutions/4896108/](https://leetcode.com/problems/beautiful-towers-i/solutions/4896108/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
For each index `i` as the peak, maintain a monotonic increasing forward stack keeping all the elements with indexes in $[0, i-1]$ that are smaller than `MaxHeights[i]` and a monotonic decreasing backward stack keeping all the elements with indexes in $[i+1, N-1]$ that are smaller than `MaxHeights[i]`. Then we can measure the score then `i` is chosen as the peak in $O(1)$. The overall complexity is $O(N)$. In this implementation, I do the forward stack and the backward stck in a single recursion. 

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec maximum_sum_of_heights(MaxHeights :: [integer()]) -> integer().
maximum_sum_of_heights(MaxHeights) -> [S, _] = solve(MaxHeights, 1, [[0, 0, 0]]), S.

solve([], I, [[_,_,S]|FST]) -> [S, [[0, I, 0]]];
solve([H|T], I, [[FSH,_,_]|FST]) when FSH >= H -> solve([H|T], I, FST);
solve([H|T], I, [[FSH,FSI,FSS]|FST]) -> 
    [S, BS] = solve(T, I+1, [[H,I,FSS+H*(I-FSI)],[FSH,FSI,FSS]|FST]),
    [[BSH,BSI,BSS]|BST] = update_bs(H, BS),
    BSS2 = (BSI-I) * H + BSS,
    [max(S, FSS+H*(I-FSI)+BSS2-H), [[H,I,BSS2],[BSH,BSI,BSS]|BST]].

update_bs(H, [[BSH,BSI,BSS]|BST]) when H =< BSH -> update_bs(H, BST);
update_bs(H, [[BSH,BSI,BSS]|BST]) -> [[BSH,BSI,BSS]|BST].
```