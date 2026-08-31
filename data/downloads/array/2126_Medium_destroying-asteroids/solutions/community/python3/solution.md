# [Java/Python 3] Sort then apply greedy algorithm.

**Author:** rock
**Votes:** 25
**Link:** [https://leetcode.com/problems/destroying-asteroids/solutions/1661044/](https://leetcode.com/problems/destroying-asteroids/solutions/1661044/)

---

```java
    public boolean asteroidsDestroyed(int mass, int[] asteroids) {
        long m = mass;
        Arrays.sort(asteroids);
        for (int ast : asteroids) {
            if (m < ast) {
                return false;
            }
            m += ast;
        }
        return true;
    }
```
In case you do NOT like using `long`, we can use the constraints: `1 <= asteroids[i] <= 10^5`: once mass is greater than all asteroids, we can conclude all can be destroyed.\u3000-- inspired by **@Zudas**.

```java
    public boolean asteroidsDestroyed(int mass, int[] asteroids) {
        Arrays.sort(asteroids);
        for (int ast : asteroids) {
            if (mass < ast) {
                return false;
            }else if (mass > 100_000) { // now we can conclude all can be destroyed.
                return true;
            }
            mass += ast;
        }
        return true;
    }
```
```python
    def asteroidsDestroyed(self, mass: int, asteroids: List[int]) -> bool:
        for a in sorted(asteroids):
            if mass < a:
                return False
            mass += a
        return True
```
**Analysis:**

Time: `O(n * log(n))`, space: `O(n)` - including sorting space.