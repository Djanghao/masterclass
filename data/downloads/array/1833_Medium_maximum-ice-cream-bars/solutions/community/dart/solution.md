# 🔥 4 Approaches 🔥 || Simple Fast and Easy || with Explanation

**Author:** ayoubzulfiqar
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3008050/](https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3008050/)

---

# \uD83D\uDD25 4 Approaches \uD83D\uDD25 || Simple Fast and Easy || with Explanation

## Solution - 1

```dart
class Solution {
  int maxIceCream(List<int> costs, int coins) {
    costs.sort();
    int i = 0;
    while (i < costs.length && coins >= costs[i]) {
      coins -= costs[i++];
    }
    return i;
  }
}
```

## Solution - 2

```dart
class Solution {
  int maxIceCream(List<int> costs, int coins) {
    int ans = 0;
    costs.sort();
    for (int cost in costs) {
      coins -= cost;
      if (coins < 0) {
        break;
      }
      ans++;
    }
    return ans;
  }
}
```

## Solution - 3

```dart
class Solution {
  int maxIceCream(List<int> costs, int coins) {
    int n = costs.length;
    int ans = 0;
    costs.sort();
    for (int i = 0; i < n; i++) {
      if (ans + costs[i] > coins) return i;
      ans += costs[i];
    }
    return costs.length;
  }
}
```

## Solution - 4

```dart
class Solution {
  int maxIceCream(List<int> costs, int coins) {
    costs.sort();
    int result = 0;
    int sum = 0;
    for (int cost in costs) {
      sum += cost;
      if (sum > coins) {
        return result;
      }
      result++;
      if (sum == coins) {
        return result;
      }
    }
    return result;
  }
}
```
## [GitHub Link](https://github.com/ayoubzulfiqar/leetcode)

### Disclaimer:-
###### This Solution is not available in DART Programing language with is a bummer. Hurts my feeling. But as a man we should implement it no matter what. We are not bunch of wussies who gonna skip it if it's not available in one language we love. Instead we will conquer the sea and rivers and cross the mountains so see what's lies beyond our horizons.