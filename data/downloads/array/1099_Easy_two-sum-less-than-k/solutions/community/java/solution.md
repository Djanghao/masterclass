# [Java] Brute-Force and Sorting + Two Pointers (comments)

**Author:** junhaowanggg
**Votes:** 5
**Link:** [https://leetcode.com/problems/two-sum-less-than-k/solutions/417810/](https://leetcode.com/problems/two-sum-less-than-k/solutions/417810/)

---

Reference: [LeetCode](https://leetcode.com/problems/two-sum-less-than-k/)
Difficulty: <span class="green">Easy</span>



## Problem

> Given an array `A` of integers and integer `K`, return the maximum `S` such that there exists `i < j` with `A[i] + A[j] = S` and `S < K`. If no `i`, `j` exist satisfying this equation, return `-1`.

**Example:** 

```java
Input: A = [34,23,1,24,75,33,54,8], K = 60
Output: 58
Explanation: 
We can use 34 and 24 to sum 58 which is less than 60.

Input: A = [10,20,30], K = 15
Output: -1
Explanation: 
In this case it's not possible to get a pair sum less that 15.
```

**Note:** 

- `1 <= A.length <= 100`
- `1 <= A[i] <= 1000`
- `1 <= K <= 2000`



## Analysis

### Brute-Force



```java
public int twoSumLessThanK(int[] A, int K) {
  // Assume A[i] >= 1, K >= 1
  int n = A.length;
  int maxSum = -1;
  for (int i = 0; i < n; ++i) {
    for (int j = i + 1; j < n; ++j) {
      int sum = A[i] + A[j];
      if (sum < K && sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}
```

**Time:** `O(N^2)`
**Space:** `O(1)`



### Sorting & Two Pointers


```java
public int twoSumLessThanK(int[] A, int K) {
  // Assume A[i] >= 1, K >= 1
  // Sorting
  Arrays.sort(A);
  // Two Pointers
  int maxSum = -1;
  int n = A.length;
  int lo = 0, hi = n - 1;
  while (lo < hi) {
    int sum = A[lo] + A[hi];
    if (sum >= K) {
      --hi;
    } else { // sum < K
      if (sum > maxSum) maxSum = sum; // update
      ++lo;
    }
  }
  return maxSum;
}
```

**Time:** `O(NlogN)`
**Space:** `O(1)`


## Amazon OA | Movies on Flight

Problem: [Amazon | OA 2019 | Movies on Flight](https://leetcode.com/discuss/interview-question/313719/)

```java
public static void main(String[] args) {
  List<Integer> movieDurations = new ArrayList<>();
  movieDurations.add(90);
  movieDurations.add(85);
  movieDurations.add(75);
  movieDurations.add(60);
  movieDurations.add(120);
  movieDurations.add(150);
  movieDurations.add(125); // [0, 6]
  int d = 250;
  System.out.println(Arrays.toString(pairOfLongestMovies(movieDurations, d)));
}

static class Movie {
  int id;
  int duration;
  Movie(int i, int d) {
    id = i;
    duration = d;
  }
}

public static int[] pairOfLongestMovies(List<Integer> movieDurations, int d) {
  // Assume movieDurations is not null, size >= 2
  int n = movieDurations.size();
  List<Movie> movies = new ArrayList<>();
  for (int i = 0; i < n; ++i) {
    movies.add(new Movie(i, movieDurations.get(i)));
  }
  // Sort
  Collections.sort(movies, (m1, m2) -> {
    return m1.duration - m2.duration;
  });
  // Two Pointers
  int lo = 0, hi = n - 1;
  int maxLen = -1;
  int maxLo = -1, maxHi = -1;
  while (lo < hi) {
    int sum = movies.get(lo).duration + movies.get(hi).duration;
    if (sum > d - 30) {
      --hi;
    } else { // sum <= d - 30
      if (sum > maxLen) { // update
        maxLen = sum;
        maxLo = lo;
        maxHi = hi;
      }
      if (sum == d - 30) break;
      ++lo;
    }
  }
  return new int[] { movies.get(maxLo).id, movies.get(maxHi).id };
}
```
