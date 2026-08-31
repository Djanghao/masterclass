# [Java/Python 3] Mod and Sqrt, O(sqrt(n)) code.

**Author:** rock
**Votes:** 9
**Link:** [https://leetcode.com/problems/closest-divisors/solutions/517594/](https://leetcode.com/problems/closest-divisors/solutions/517594/)

---

```java
    public int[] closestDivisors(int num) {
        int[] res = {1, num + 1};
        int min = num;
        for (int n : new int[]{num + 1, num + 2}) {
            int d = (int)Math.floor(Math.sqrt(n)); 
            while (d > 0 && n % d != 0) {--d; }
            if (min > n / d - d) {
                min = n / d - d;
                res = new int[]{n / d, d};
            } 
        }
        return res;        
    }
```

The following code inspired by /copied from **@WilmerKrisp**

```java
    public int[] closestDivisors(int num) {
        for (int i = 1 + (int)Math.floor(Math.sqrt(num)); i > 1; --i) {
            if ((num + 1) % i == 0) {
                return new int[]{i, (num + 1) / i};
            }else if ((num + 2) % i == 0) {
                return new int[]{i, (num + 2) / i};
            }
        }
        return new int[]{1, num + 1};
    }
```
```python
    def closestDivisors(self, num: int, o=0) -> List[int]:
        for i in range(int(math.sqrt(num)) + 1, 1, -1):
            if (num + 1) % i == 0 or (o := (num + 2) % i == 0):
                return [i, (num + 1 + o) // i]
```