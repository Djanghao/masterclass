# A solution for those who suck at DP like me

**Author:** aalmos
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/2853283/](https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/2853283/)

---

# TL;DR
The final code is [here](#the-final-code). It is a top-down linear solution with memoization, that I think is more intuitive than most of the solutions posted here. It beats 95% of the solutions time-wise. The post elaborates on my way of thinking when working on this.

# Introduction
I suck at DP. When approaching a DP problem I always start with a top-down brute force recursive solution and then improve it by adding memoization. I don't even bother with the bottom-up approach. We'll do the same here. I found most of the solutions here to require some brilliant insight, and I don't appreciate that. I'll try to show you how I landed a solution with just using common sense.

# Start with brute force
The algorithm needs to optimally make the following two decisions again and again until there are no more laps left in the race:
- Which tire to select?
- For how many laps do we keep the selected tire?

See below the code that implements this in a brute force manner:
```cpp
int MinFinishTime(const vector<vector<int>>& tires, int laps, int change_time,
                  bool is_first_lap = true) {
  if (laps == 0) {
    return 0;
  }
  int result = numeric_limits<int>::max();
  // When we start the race the first tire is "free" to put on.
  int c = is_first_lap ? 0 : change_time;
  for (auto& t : tires) {
    // Try a tire.
    int time_with_tire = 0;
    for (int lap_time = t[0], remaining_laps = laps; remaining_laps > 0;
         lap_time *= t[1], --remaining_laps) {
      // Keep tire for consecutive laps, then change tire by a recursive call
      // after each lap.
      time_with_tire += lap_time;
      result = min(c + time_with_tire + MinFinishTime(tires, remaining_laps - 1,
                                                      change_time, false),
                   result);
    }
  }
  return result;
}
```
Once we selected our tire (outer foreach loop), we try to keep it for the remaining laps (inner for loop). After each lap with the same tire we try to change to a new one, and continue the race for the remaining laps (recursive call). We'll bubble up the minimum from each recursive call. The minimum of minimums will be the answer.

This code is obviously going to TLE, but even before that it will produce some integer overflows, so let's get rid of that first.

The `lap_time` variable will grow exponentially as we keep taking laps with the same tire. It can quickly get out of the 32 bit integer range if `t[1]` is large. For a moment let's assume we have a single tire type available. It doesn't make sense to keep the tire when `lap_time` is greater or equal `change_time + t[0]` (or $$f*r^0 = f*1$$ as per the problem statement). It's not hard to see that this also applies if we have multiple tires, so let's add this to our loop condition:

```cpp
for (int lap_time = t[0], remaining_laps = laps;
         remaining_laps > 0 && lap_time < change_time + t[0];
         lap_time *= t[1], --remaining_laps) { /* ... */ }
```
Still, this algorithm is of exponential time complexity, and will TLE even for early test cases. We'll work on improving on this in the following sections.

# Add memoization
Notice that `laps` is the only parameter of `MinFinishTime` that changes throughout the recursive calls (`is_first_lap` doesn't matter as it's always `false` except for the topmost call). This makes the function a good candidate for 1-dimensional memoization. In general, when you do top-down DP you should be aiming for minimizing the variables in the parameter set of your recursive function, because that's what fundamentally defines how effective your memoization will be.

The code below adds memoization to the brute force recursive solution. We save the results from previous calls in a `vector<int>` that is of size `laps` initialized to all `-1`'s.

```cpp
int MinFinishTime(const vector<vector<int>>& tires, int laps, int change_time,
                  vector<int>& memo, bool is_first_lap = true) {
  if (laps == 0) {
    return 0;
  }
  if (memo[laps - 1] != -1) {
    // We have already computed the optimal solution for racing this number
    // of laps.
    return memo[laps - 1];
  }
  int result = numeric_limits<int>::max();
  // When we start the race the first tire is "free" to put on.
  int c = is_first_lap ? 0 : change_time;
  for (auto& t : tires) {
    // Try a tire.
    int time_with_tire = 0;
    for (int lap_time = t[0], remaining_laps = laps;
         remaining_laps > 0 && lap_time < change_time + t[0];
         lap_time *= t[1], --remaining_laps) {
      // Keep tire for consecutive laps, then change tire by a recursive call
      // after each lap.
      time_with_tire += lap_time;
      result = min(c + time_with_tire + MinFinishTime(tires, remaining_laps - 1,
                                                      change_time, memo, false),
                   result);
    }
  }
  return memo[laps - 1] = result;
}
```
I was very disappointed when this code TLE'd on the late test cases. Let's examine the time complexity here:
- The `MinFinishTime` function will run `laps` times in total thanks to the memoization.
- Within the function we'll loop over `tires`.
- Within the loop on `tires` we try to take consecutive laps with the same tire.

It's worth thinking about the maximum number of consecutive laps with the same tire. As per the problem definition the following conditions hold:

- `t[0] >= 1`
- `t[1] >= 2`
- `change_time <= 100000`

If we consider the extreme case when `t[0]` and `t[1]` is minimal and `change_time` is maximal, we see that we can run at most 16 laps with the same tire because we anyways change tires when `lap_time >= change_time + t[0]`. Since $$log_2 (10^5+1) = 16.6$$ we'll never take more than 16 laps with the same tire. This leaves with us $$O(L*T*16)=O(L*T)$$ time complexity (where $$L$$ is the number of laps and $$T$$ is the number of tires). It seems though it is not good enough, so we have to work a bit more. The 1-dimensional search space here hints us that we can somehow land a linear algorithm. 

# Go linear

We can use our intuition to see that we can't save ourselves from trying all the `laps` so we'll have to get rid of the loop on `tires` somehow to reduce time complexity. Let's examine the loop:

```cpp
for (auto& t : tires) {
  int time_with_tire = 0;
  for (int lap_time = t[0], remaining_laps = laps;
       remaining_laps > 0 && lap_time < change_time + t[0];
       lap_time *= t[1], --remaining_laps) {
    // Keep tire for consecutive laps, then change tire by a recursive call
    // after each lap.
    time_with_tire += lap_time;
    result = min(c + time_with_tire + MinFinishTime(tires, remaining_laps - 1,
                                                    change_time, memo, false),
                 result);
  }
}
```
Notice that the inner loop is nothing more than a rolling sum on `lap_time`. The `laps` parameter only determines the number of iterations, it doesn't affect the sum itself (i.e., `time_with_tire`) in any way. We could precompute this rolling sum for all tires and store it in a 2-dimensional array `precomputed_time_with_tire`:
```cpp
for (int i = 0; i < tires.size(); ++i) {
  int attempts = min((int)precomputed_time_with_tire[i].size(), laps);
  for (int j = 0; j < attempts; ++j) {
    int remaining_laps = laps - j;
    int time_with_tire = precomputed_time_with_tire[i][j];
    result = min(c + time_with_tire +
                     MinFinishTime(tires, remaining_laps - 1, change_time,
                                   precomputed_time_with_tire, memo, false),
                 result);
  }
}
```
Note that the time complexity remains the same. However we can make a key observation: `c + MinFinishTime(...)` doesn't depend on `i` (the current tire) at all, it only depends on `remaining_laps` AKA `laps - j`. To minimize `time_with_tire + c + MinFinishTime(...)` it's enough to consider the minimum `i` for `precomputed_time_with_tire[i][j]` for all `j`'s. We don't care about the `i`'s for a particular `j` when `precomputed_time_with_tire[i][j]` is not minimal. Following this logic you can reduce the dimensionality of the precomputed rolling sum to 1 and get rid of the outer loop:
```cpp
for (int i = 0; i < min((int)min_time_with_tire.size(), laps); ++i) {
  result = min(c + min_time_with_tire[i] +
                   MinFinishTime(tires, laps - i - 1, change_time,
                                 min_time_with_tire, memo, false),
               result);
}
```

Here `min_time_with_tire` is a 1-dimensional array that holds the precomputed minimum value for each `j` from `precomputed_time_with_tire[i][j]`.

Intuitively, you can think about `precomputed_time_with_tire[i][j]` as a plot of functions $$g_i(j) = f_i * r_i^j$$. However `min_time_with_tire[j]` only stores the minimum $$g_i(j)$$ for each $$j$$.

After these amendments the code is of $$O(L*16)=O(L)$$ time complexity, and passes all the test cases. The space complexity is $$O(L+16)=O(L)$$. We beat 95% of the solutions time-wise.

# The final code

```
int MinFinishTime(const vector<vector<int>>& tires, int laps, int change_time,
                  const vector<int>& min_time_with_tire, vector<int>& memo,
                  bool is_first_lap = true) {
  if (laps == 0) {
    return 0;
  }
  if (memo[laps - 1] != -1) {
    return memo[laps - 1];
  }
  int result = numeric_limits<int>::max();
  int c = is_first_lap ? 0 : change_time;
  for (int i = 0; i < min((int)min_time_with_tire.size(), laps); ++i) {
    result = min(c + min_time_with_tire[i] +
                     MinFinishTime(tires, laps - i - 1, change_time,
                                   min_time_with_tire, memo, false),
                 result);
  }
  return memo[laps - 1] = result;
}

class Solution {
 public:
  int minimumFinishTime(vector<vector<int>>& tires, int change_time, int laps) {
    vector<int> min_time_with_tire;
    for (auto& t : tires) {
      int lap_time = t[0];
      int time_with_tire = 0;
      for (int lap = 0; lap < laps; ++lap) {
        time_with_tire += lap_time;
        if (lap == min_time_with_tire.size()) {
          min_time_with_tire.push_back(time_with_tire);
        } else {
          min_time_with_tire[lap] =
              min(time_with_tire, min_time_with_tire[lap]);
        }
        if (lap_time > (t[0] + change_time) / t[1]) {
          break;
        }
        lap_time *= t[1];
      }
    }
    vector<int> memo(laps, -1);
    return MinFinishTime(tires, laps, change_time, min_time_with_tire, memo);
  }
};
```