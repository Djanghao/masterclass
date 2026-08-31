# [Java] 5 clean codes: BFS, Permutations, Backtracking, DP, Lookup table

**Author:** shk10
**Votes:** 13
**Link:** [https://leetcode.com/problems/beautiful-arrangement/solutions/1000589/](https://leetcode.com/problems/beautiful-arrangement/solutions/1000589/)

---

**BFS**

Starting from the base permutation, go to all possible valid permutations with 1 swap. Number of permutations we'll finally end up exploring gives us the result.

```
// 137 ms. 16.18%
class Solution {
    private boolean okay(int a, int b) {
        return a % b == 0 || b % a == 0;
    }
    public int countArrangement(int n) {
        List<Integer> A = new ArrayList<>();
        for(int i = 0; i < n; i++) A.add(i + 1);
        Set<List<Integer>> visited = new HashSet<>();
        Deque<List<Integer>> Q = new LinkedList<>();
        visited.add(A);
        Q.add(A);
        while(!Q.isEmpty()) {
            A = Q.poll();
            for(int i = 0; i < n; i++) {
                for(int j = i + 1; j < n; j++) {
                    if(okay(A.get(i), j + 1) && okay(A.get(j), i + 1)) {
                        List<Integer> next = new ArrayList<>(A);
                        next.set(i, A.get(j));
                        next.set(j, A.get(i));
                        if(visited.add(next)) {
                            Q.add(next);
                        }
                    }
                }
            }
        }
        return visited.size();
    }
}
```

Time complexity: O(k n<sup>2</sup>) where k = number of valid permutations
Space complexity: O(k n)

**Permutations**

Same approach as mentioned in the [solution article](https://leetcode.com/problems/beautiful-arrangement/solution/) but I am generating them backwards.

```
// 2 ms. 98.99%
class Solution {
    private void swap(int[] A, int i, int j) {
        int temp = A[i];
        A[i] = A[j];
        A[j] = temp;
    }
    private int permute(int[] A, int i) {
        if(i == 0) return 1;
        int count = 0;
        for(int j = i; j >= 0; j--) {
            swap(A, i, j);
            if(A[i] % (i + 1) == 0 || (i + 1) % A[i] == 0) {
                count += permute(A, i - 1);
            }
            swap(A, i, j);
        }
        return count;
    }
    public int countArrangement(int n) {
        int[] A = new int[n];
        for(int i = 0; i < n; i++) {
            A[i] = i + 1;
        }
        return permute(A, n - 1);
    }
}
```

Time complexity: O(k)
Space complexity: O(n)

**Backtracking**

Same approach as mentioned in the [solution article](https://leetcode.com/problems/beautiful-arrangement/solution/) except I am trying to place numbers from last index to first index.

```
// 7 ms. 93.38%
class Solution {
    private int backtrack(boolean[] placed, int i) {
        if(i == 1) return 1;
        int count = 0;
        for(int j = placed.length; j >= 1; j--) {
            if(!placed[j - 1] && (i % j == 0 || j % i == 0)) {
                placed[j - 1] = true;
                count += backtrack(placed, i - 1);
                placed[j - 1] = false;
            }
        }
        return count;
    }
    public int countArrangement(int n) {
        return backtrack(new boolean[n], n);
    }
}
```

Time complexity: \u03A9(k), O(n!) [No explanation in the solution article why k is an upper bound]
Space complexity: O(n)

**DP**

This is basically an improvement over previous approach. We can cache (or memoize) the number of ways to place certain collection of numbers starting from a certain index. Since numbers are only 15 at max, we can use an integer as a bitset to represent a collection of numbers. Also, we don't need starting index as part of the dp state because we're always placing numbers from index n-1 (towards index 0) so each collection automatically belongs to a unique starting index based on its size.

```
// 1 ms. 99.34%
class Solution {
    private int n;
    private int get(int i, int placed, Integer[] dp) {
        if(i == 1) return 1;
        if(dp[placed] != null) return dp[placed];
        int count = 0;
        for(int j = n; j >= 1; j--) {
            if((placed & (1 << (j - 1))) == 0 && (i % j == 0 || j % i == 0)) {
                count += get(i - 1, placed | (1 << (j - 1)), dp);
            }
        }
        return dp[placed] = count;
    }
    public int countArrangement(int n) {
        return get(this.n = n, 0, new Integer[1 << n]);
    }
}
```

Time complexity: O(2<sup>n</sup>)
Space complexity: O(2<sup>n</sup>)

**Lookup table**

We can compute results using any reasonable approach and put them in a lookup table to return as needed. This approach might not help a person in an interview but solving problems offline using possibly lots of time, space and other resources and then serving computed results through a server is pretty common in real world.

```
// 0 ms. 100%
class Solution {
    private static final int[] res = {1, 2, 3, 8, 10, 36, 41, 132, 250, 700, 750, 4010, 4237, 10680, 24679};
    public int countArrangement(int n) {
        return res[n - 1];
    }
}
```

Time complexity: O(1)
Space complexity: O(1)