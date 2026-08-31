# Dart Solution

**Author:** moessam00
**Votes:** 0
**Link:** [https://leetcode.com/problems/destroying-asteroids/solutions/5140874/](https://leetcode.com/problems/destroying-asteroids/solutions/5140874/)

---

# Code
```
class Solution {
  bool asteroidsDestroyed(int mass, List<int> asteroids) {
    asteroids = asteroids..sort();

    for (var asteroid in asteroids) {
      if (mass < asteroid) return false;
      mass += asteroid;
    }

    return true;
  }
}

```