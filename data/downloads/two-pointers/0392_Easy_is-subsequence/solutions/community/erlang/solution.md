# Easy erlang solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/is-subsequence/solutions/4326245/](https://leetcode.com/problems/is-subsequence/solutions/4326245/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Check S == LCS(S, T)

(LCS: Longest Common Sequence)

pseudo code
```
n = len(S)
m = len(T)
i = 0, j = 0

while i < n and j < m:
    if S[i] == S[j]:
        i = i + 1
    j = j + 1

return i == n;
```

# Complexity
$$N$$: length of S
$$M$$: length of T
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
real_is_subsequence:$$O(N+M)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
String to List of S: $$O(N)$$
String to List of T: $$O(M)$$
Total: $$O(N + M)$$

# Code
```
-spec is_subsequence(S :: unicode:unicode_binary(), T :: unicode:unicode_binary()) -> boolean().

real_is_subsequence([], _, Len) -> Len;
real_is_subsequence(_, [], _) -> -1;
real_is_subsequence([], [], Len) -> Len;
real_is_subsequence([CS | CSs], [CT | CTs], Len) when CS == CT ->
    real_is_subsequence(CSs, CTs, Len + 1);
real_is_subsequence([CS | CSs], [CT | CTs], Len) ->
    real_is_subsequence([CS | CSs], CTs, Len).

is_subsequence(S, T) ->
    SS = binary_to_list(S),
    TT = binary_to_list(T),
    length(SS) == real_is_subsequence(SS, TT, 0).
```