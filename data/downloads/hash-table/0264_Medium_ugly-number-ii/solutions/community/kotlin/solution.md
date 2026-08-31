# Optimal C, Java, C++, PHP Solution with 100% Runtime Efficiency || With explanation  🔥🔥💯💯

**Author:** PrinceHiremath
**Votes:** 4
**Link:** [https://leetcode.com/problems/ugly-number-ii/solutions/5652825/](https://leetcode.com/problems/ugly-number-ii/solutions/5652825/)

---

![Screenshot 2024-08-18 073257.png](./images/0.png)


# Approach
<!-- Describe your approach to solving the problem. -->
 - Three Pointers (i2, i3, i5): These pointers track the indices for the next multiples of 2, 3, and 5.
 - Ugly Array: Stores the sequence of ugly numbers.
 - Next Values: next2, next3, and next5 store the next possible ugly number derived by multiplying by 2, 3, and 5, respectively.
 - Efficiency: The solution ensures that every ugly number is generated in order by incrementing the appropriate pointer whenever a new ugly number is added to the sequence. This avoids generating duplicates and ensures minimal operations.

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    int nthUglyNumber(int n) {
        vector<int> ugly(n);
        ugly[0] = 1;
        int i2 = 0, i3 = 0, i5 = 0;
        int next2 = 2, next3 = 3, next5 = 5;

        for (int i = 1; i < n; i++) {
            int nextUgly = min(next2, min(next3, next5));
            ugly[i] = nextUgly;

            if (nextUgly == next2) {
                i2++;
                next2 = ugly[i2] * 2;
            }
            if (nextUgly == next3) {
                i3++;
                next3 = ugly[i3] * 3;
            }
            if (nextUgly == next5) {
                i5++;
                next5 = ugly[i5] * 5;
            }
        }

        return ugly[n - 1];
    }
};

```
```java []
class Solution {
    public int nthUglyNumber(int n) {
        int[] ugly = new int[n];
        ugly[0] = 1;
        int i2 = 0, i3 = 0, i5 = 0;
        int next2 = 2, next3 = 3, next5 = 5;

        for (int i = 1; i < n; i++) {
            int nextUgly = Math.min(next2, Math.min(next3, next5));
            ugly[i] = nextUgly;

            if (nextUgly == next2) {
                i2++;
                next2 = ugly[i2] * 2;
            }
            if (nextUgly == next3) {
                i3++;
                next3 = ugly[i3] * 3;
            }
            if (nextUgly == next5) {
                i5++;
                next5 = ugly[i5] * 5;
            }
        }

        return ugly[n - 1];
    }
}
```
```python3 []
class Solution:
    def nthUglyNumber(self, n: int) -> int:
        ugly = [0] * n
        ugly[0] = 1
        i2 = i3 = i5 = 0
        next2, next3, next5 = 2, 3, 5

        for i in range(1, n):
            nextUgly = min(next2, next3, next5)
            ugly[i] = nextUgly

            if nextUgly == next2:
                i2 += 1
                next2 = ugly[i2] * 2
            if nextUgly == next3:
                i3 += 1
                next3 = ugly[i3] * 3
            if nextUgly == next5:
                i5 += 1
                next5 = ugly[i5] * 5

        return ugly[n - 1]
```
```c []
int min(int a, int b, int c) {
    if (a < b) {
        return (a < c) ? a : c;
    } else {
        return (b < c) ? b : c;
    }
}

int nthUglyNumber(int n) {
    int *ugly = (int*)malloc(n * sizeof(int));
    ugly[0] = 1;
    int i2 = 0, i3 = 0, i5 = 0;
    int next2 = 2, next3 = 3, next5 = 5;

    for (int i = 1; i < n; i++) {
        int nextUgly = min(next2, next3, next5);
        ugly[i] = nextUgly;

        if (nextUgly == next2) {
            i2++;
            next2 = ugly[i2] * 2;
        }
        if (nextUgly == next3) {
            i3++;
            next3 = ugly[i3] * 3;
        }
        if (nextUgly == next5) {
            i5++;
            next5 = ugly[i5] * 5;
        }
    }

    int result = ugly[n - 1];
    free(ugly);
    return result;
}
```


```javascript []
var nthUglyNumber = function(n) {
    let ugly = new Array(n);
    ugly[0] = 1;
    let i2 = 0, i3 = 0, i5 = 0;
    let next2 = 2, next3 = 3, next5 = 5;

    for (let i = 1; i < n; i++) {
        let nextUgly = Math.min(next2, Math.min(next3, next5));
        ugly[i] = nextUgly;

        if (nextUgly === next2) {
            i2++;
            next2 = ugly[i2] * 2;
        }
        if (nextUgly === next3) {
            i3++;
            next3 = ugly[i3] * 3;
        }
        if (nextUgly === next5) {
            i5++;
            next5 = ugly[i5] * 5;
        }
    }

    return ugly[n - 1];
};
```
```php []
class Solution {
    function nthUglyNumber($n) {
        $ugly = array_fill(0, $n, 0);
        $ugly[0] = 1;
        $i2 = 0; $i3 = 0; $i5 = 0;
        $next2 = 2; $next3 = 3; $next5 = 5;

        for ($i = 1; $i < $n; $i++) {
            $nextUgly = min($next2, min($next3, $next5));
            $ugly[$i] = $nextUgly;

            if ($nextUgly == $next2) {
                $i2++;
                $next2 = $ugly[$i2] * 2;
            }
            if ($nextUgly == $next3) {
                $i3++;
                $next3 = $ugly[$i3] * 3;
            }
            if ($nextUgly == $next5) {
                $i5++;
                $next5 = $ugly[$i5] * 5;
            }
        }

        return $ugly[$n - 1];
    }
}

```
```kotlin []
class Solution {
    fun nthUglyNumber(n: Int): Int {
        val ugly = IntArray(n)
        ugly[0] = 1
        var i2 = 0
        var i3 = 0
        var i5 = 0
        var next2 = 2
        var next3 = 3
        var next5 = 5

        for (i in 1 until n) {
            val nextUgly = minOf(next2, next3, next5)
            ugly[i] = nextUgly

            if (nextUgly == next2) {
                i2++
                next2 = ugly[i2] * 2
            }
            if (nextUgly == next3) {
                i3++
                next3 = ugly[i3] * 3
            }
            if (nextUgly == next5) {
                i5++
                next5 = ugly[i5] * 5
            }
        }

        return ugly[n - 1]
    }
}

```

