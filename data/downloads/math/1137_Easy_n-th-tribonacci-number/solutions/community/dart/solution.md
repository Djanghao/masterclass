# 🔥 3 Approaches 🔥 || Simple Fast and Easy || with Explanation

**Author:** ayoubzulfiqar
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-th-tribonacci-number/solutions/3116486/](https://leetcode.com/problems/n-th-tribonacci-number/solutions/3116486/)

---

# \uD83D\uDD25 3 Approaches \uD83D\uDD25 || Simple Fast and Easy || with Explanation

## Solution

### Intuition of this Problem

T[n] = T[n-1] + T[n-2] + T[n-3]

NOTE - PLEASE READ APPROACH FIRST THEN SEE THE CODE. YOU WILL DEFINITELY UNDERSTAND THE CODE LINE BY LINE AFTER SEEING THE APPROACH.

### Approach for this Problem

1. Initialize a vector "Tribonacci" with n+1 elements
2. Check if n is 0, if true return 0
3. Check if n is 1, if true return 1
4. Check if n is 2, if true return 1
5. Set Tribonacci[0] = 0, Tribonacci[1] = 1, Tribonacci[2] = 1
6. Iterate from i = 3 to n+1
7. Set Tribonacci[i] = Tribonacci[i-1] + Tribonacci[i-2] + Tribonacci[i-3]
8. Return Tribonacci[n]

### Code - Memoization

```dart
class Solution {
  int tribonacci(int n) {
    if (n == 0) return 0;
    if (n == 1 || n == 2) return 1;
    List<int> Tribonacci = List.filled(n + 1, 0);
    Tribonacci[0] = 0;
    Tribonacci[1] = 1;
    Tribonacci[2] = 1;
    for (int i = 3; i < n + 1; i++) {
      Tribonacci[i] = Tribonacci[i - 1] + Tribonacci[i - 2] + Tribonacci[i - 3];
    }
    return Tribonacci[n];
  }
}
```

### Code - Iterative

```dart
class Solution {
  int tribonacci(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 1;
    int a = 0, b = 1, c = 1, d = 0;
    for (int i = 3; i <= n; i++) {
      d = a + b + c;
      a = b;
      b = c;
      c = d;
    }
    return d;
  }
}
```

### Code - Recursive

```dart
class Solution {
  int tribonacci(int n) {
    if (n < 2) return n;
    if (n == 2) return 1;
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  }
}
```

#### Disclaimer:-
This Solution is not available in DART Programing language with is a bummer. Hurts my feeling. But as a man we should implement it no matter what. We are not bunch of wussies who gonna skip it if it's not available in one language we love. Instead we will conquer the seas and rivers and cross the mountains so see what's lies beyond the horizons.

## [GitHub Link](https://github.com/ayoubzulfiqar/leetcode)
