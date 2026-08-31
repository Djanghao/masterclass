# Go, Erlang Solutions

**Author:** hjrand1005
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5137018/](https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5137018/)

---

### Go

```go
func maximumHappinessSum(happiness []int, k int) int64 {
    n := len(happiness)
    sort.Ints(happiness)
    top := happiness[n-k:n]

    total := 0
    turns := 0
    for i := k-1; i >= 0; i-- {
        total += max(top[i] - turns, 0)
        turns++
    }
    return int64(total)
}
```

---

### Erlang

```erlang
-spec maximum_happiness_sum(Happiness :: [integer()], K :: integer()) -> integer().
maximum_happiness_sum(Happiness, K) ->
    {Top, _} = lists:split(K, lists:reverse(lists:sort(Happiness))),
    {_, Total} = lists:foldl(fun(X, {Turn, Total}) -> {Turn + 1, Total + max(X - Turn, 0)} end, {0, 0}, Top),
    Total.
```