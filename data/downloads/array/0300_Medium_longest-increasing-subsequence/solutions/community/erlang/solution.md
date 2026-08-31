# Go, Rust Solutions, Bonus Hideous Erlang Solution

**Author:** hjrand1005
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence/solutions/3061643/](https://leetcode.com/problems/longest-increasing-subsequence/solutions/3061643/)

---

### Go

#### Memoization

```go
func lengthOfLIS(nums []int) int {
    cache := make(map[int]int, len(nums))
    
    var longestRecursive func(int, []int) int 
    longestRecursive = func(idx int, nums []int) int {
        if v, ok := cache[idx]; ok {
            return v
        }
        maxSub := 1
        for i := idx+1; i < len(nums); i++ {
            if nums[idx] < nums[i] {
                maxSub = max(maxSub, 1+longestRecursive(i, nums))
            }
        }
        cache[idx] = maxSub
        return maxSub
    }
    
    longest := 1
    for i := 0; i < len(nums); i++ {
        longest = max(longest, longestRecursive(i, nums))
    }
    return longest
}

func max(a, b int) int {
    if a < b {
        return b
    }
    return a
}
```

#### Tabulation

```go
func lengthOfLIS(nums []int) int {
    table := make([]int, len(nums))
    for i := len(nums)-1; i >= 0; i-- {
        table[i] = 1
        for j := i+1; j < len(nums); j++ {
            if nums[i] < nums[j] {
                table[i] = max(table[i], 1+table[j])
            }
        }
    }
    
    longest := 0
    for _, v := range table {
        longest = max(longest, v)
    }
    return longest
}

func max(a, b int) int {
    if a < b {
        return b
    }
    return a
}
```

#### Binary Search

```go
func lengthOfLIS(nums []int) int {
    table := make([]int, 0, len(nums))
    table = append(table, nums[0])
    seqLen := 1
    for _, n := range nums {
        left, right := 0, len(table)-1
        for left < right {
            midpoint := (left+right)/2
            if table[midpoint] < n {
                left = midpoint+1
            } else {
                right = midpoint
            }
        }
        if table[left] < n {
            table = append(table, n)
            seqLen++
        } else {
            table[left] = n
        }
    }
    return seqLen
}
```

---

### Rust

```rust
impl Solution {
    pub fn length_of_lis(nums: Vec<i32>) -> i32 {
        let n = nums.len() as usize;
        let mut dp = vec![0; n];

        (0..n).rev().fold(i32::MIN, |acc, i| {
            match nums[i] >= acc {
                true => { dp[i] = 1; nums[i] },
                _ => acc,
            }
        });
        (0..n).rev().for_each(|i| {
            (i+1..n).filter(|&j| nums[j] > nums[i]).for_each(|j| {
                dp[i] = dp[i].max(dp[j] + 1);
            })
        });
        *dp.iter().max().unwrap_or(&0)
    }
}
```


```rust
impl Solution{
    pub fn length_of_lis(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let mut sub = Vec::with_capacity(n);

        nums.iter().for_each(|x| {
            match sub.binary_search(x) {
                Err(i) if i == sub.len() => {
                    sub.push(*x);
                },
                Err(i) if i < sub.len() => {
                    sub[i] = *x;
                }
                _ => (),
            }
        });

        sub.len() as i32
    }
}
```

---

#### Erlang

```erlang
-spec length_of_lis(Nums :: [integer()]) -> integer().
length_of_lis(Nums) ->
    Pred = fun(V, Index) -> {{Index, V}, Index + 1} end,
    {IVals, _} = lists:mapfoldl(Pred, 0, Nums),
    [H|T] = IVals,
    Tid = ets:new(lis, []),
    length_of_lis([], T, H, Tid, 0).

length_of_lis(Before, [], {_, Val}, Tid, Max) ->
    max(lis(Before, Val, Tid) + 1, Max);
length_of_lis(Before, [Next|After], Current={Index, Val}, Tid, Max) ->
    Lis = lis(Before, Val, Tid) + 1,
    ets:insert(Tid, {Index, Lis}),
    length_of_lis([Current|Before], After, Next, Tid, max(Max, Lis)).

lis([], _, _) -> 0;
lis(L, N, Tid) ->
    Opts = lists:filter(fun({I, V}) -> V < N end, L),
    Pred = fun({I, _}) -> ets:lookup_element(Tid, I, 2) end,
    case Opts of
        [] -> 0;
        _ ->
            lists:max(lists:map(Pred, Opts))
    end.
```