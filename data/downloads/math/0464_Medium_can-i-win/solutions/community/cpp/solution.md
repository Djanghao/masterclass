# Clean C++ beat 98.4%, DFS with early termination check (detailed explanation)

**Author:** zzg_zzm
**Votes:** 202
**Link:** [https://leetcode.com/problems/can-i-win/solutions/95320/](https://leetcode.com/problems/can-i-win/solutions/95320/)

---

For short notation, let `M = maxChoosableInteger` and `T = desiredTotal`.

**Key Observation:** the state of the game is completely determined by currently available numbers to pick in the common pool.

**State of Game:** initially, we have all `M` numbers `[1, M]` available in the pool. Each number may or may not be picked at a state of the game later on, so we have maximum `2^M` different states. Note that `M <= 20`, so `int` range is enough to cover it. For memorization, we define `int k` as the key for a game state, where 
* the `i`-th bit of `k`, i.e., `k&(1<<i)` represents the availability of number `i+1` (`1`: picked; `0`: not picked).

At state `k`, the current player could pick any unpicked number from the pool, so state `k` can only go to one of the valid next states `k'`:
* if `i`-th bit of `k` is `0`, set it to be `1`, i.e., next state `k' = k|(1<<i)`.

**Recursion:** apparently
* the current player can win at state `k` iff opponent can't win at some valid next state `k'`. 

**Memorization:** to speed up the recursion, we can use a `vector<int> m` of size `2^M` to memorize calculated results `m[k]` for state key `k`:
* ` 0` : not calculated yet;
* ` 1` : current player can win;
* `-1`: current player can't win.

**Initial State Check:**
There are several checks to be done at initial state `k = 0` for early termination so we won't waste our time for DFS process:
1. if `T < 2`, obviously, the first player wins by simply picking `1`.
2. if the sum of entire pool `S = M*(M+1)/2` is less than `T`, of course, nobody can reach `T`.
3. if the sum `S == T`, the order to pick numbers from the pool is irrelevant. Whoever picks the last will reach `T`. So the first player can win iff `M` is odd. 
```
  bool canIWin(int M, int T) 
  {
    int sum = M*(M+1)/2; // sum of entire choosable pool

    // I just pick 1 to win
    if (T < 2) return true;
    
    // Total is too large, nobody can win
    else if (sum < T) return false;
    
    // Total happens to match sum, whoever picks at odd times wins
    else if (sum == T) return M%2;
    
    // Non-trivial case: do DFS
    // Initial total: T
    // Initial game state: k = 0 (all numbers are not picked)
    else return dfs(M, T, 0);
  }

  // DFS to check if I can win
  // k: current game state
  // T: remaining total to reach
  bool dfs(int M, int T, int k) 
  {
    // memorized
    if (mem[k] != 0) return mem[k] > 0;
    
    // total is already reached by opponent, so I lose
    if (T <= 0) return false;

    // try all currently available numbers
    for (int i = 0; i < M; ++i)
      // if (i+1) is available to pick and my opponent can't win after I picked, I win!
      if (!(k&(1<<i)) && !dfs(M, T-i-1, k|(1<<i))) {
        mem[k] = 1;
        return true;
      } 
    
    // Otherwise, I will lose
    mem[k] = -1;
    return false;      
  }

  // m[key]: memorized game result when pool state = key
  // 0: un-computed; 1: I win; -1: I lose
  int mem[1<<20] = {};
```