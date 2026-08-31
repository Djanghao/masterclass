# Bitwise solution

**Author:** Darkie12
**Votes:** 0
**Link:** [https://leetcode.com/problems/sqrtx/solutions/5647590/](https://leetcode.com/problems/sqrtx/solutions/5647590/)

---

**Source: Wikipedia**
This section uses the formalism from the digit-by-digit calculation section above, with the slight variation that we let: $$ N^2 = (a_n + \\dots + a_0)^2 $$ with each  $$ a_m = 2^m $$ or $$ a_m = 0 $$. 
We iterate all $$ 2^m $$ from $$ 2^n $$ down to $$ 2^0 $$,and build up an approximate solution $$ P_m = a_n + a_{n-1} + \\dots + a_m $$, the sum of all $$ a_i $$ for which we have determined the value.

To determine if $$ a_m $$ equals $$ 2^m $$ or $$ 0 $$,we let $$ P_m = P_{m+1} + 2^m $$. If $$ P_m^2 \\leq N^2 $$  (i.e., the square of our approximate solution including $$ 2^m $$ does not exceed the target square), then $$ a_m = 2^m $$, otherwise $$ a_m = 0 $$ and $$ P_m = P_{m+1} $$. 
To avoid squaring $$ P_m $$ in each step, we store the difference 
$$ X_m = N^2 - P_m^2 $$ and incrementally update it by setting $$ X_m = X_{m+1} - Y_m $$ with $$ Y_m = P_m^2 - P_{m+1}^2 = 2P_{m+1}a_m + a_m^2 $$. Initially, we set $$ a_n = P_n = 2^n $$ for the largest $$ n $$ with $$ (2^n)^2 = 4^n \\leq N^2 $$. As an extra optimization, we store $$ P_{m+1}2^{m+1} $$ and $$ (2^m)^2 $$, the two terms of $$ Y_m $$ in case that $$ a_m $$ is nonzero, in separate variables $$ c_m $$,$$ d_m $$: 
$$ c_m = P_{m+1}2^{m+1} $$ 
$$ d_m = (2^m)^2 $$
$$ Y_m = \\begin{cases} 
c_m + d_m & \	ext{if } a_m = 2^m \\\\
0 & \	ext{if } a_m = 0 
\\end{cases} $$
$$ c_m $$ and $$ d_m $$ can be efficiently updated in each step:

$$ c_{m-1} = P_m2^m = (P_{m+1} + a_m)2^m = P_{m+1}2^m + a_m2^m = \\begin{cases} 
c_m / 2 + d_m & \	ext{if } a_m = 2^m \\\\
c_m / 2 & \	ext{if } a_m = 0 
\\end{cases} $$

$$ d_{m-1} = \\dfrac{d_m}{4} $$

Note that: $$ c_{-1} = P_02^0 = P_0 = N $$, which is the final result returned in the function below.
# Code
``` cpp []
class Solution {
public:
    int mySqrt(int x) {
        int c = 0;
        int d = 1 << 30;
        while (d > x) {
            d >>= 2;
        }
        while (d != 0) {
            if (x >= c + d) {
                x -= c + d;
                c = (c >> 1) + d;
            } else {
                c >>= 1;
            }
            d >>= 2;
        }
        return c;
    }
};
``` 
``` java []
class Solution {
    public int mySqrt(int x) {
        int c = 0;
        int d = 1 << 30;
        while (d > x) {
            d >>= 2;
        }
        while (d != 0) {
            if (x >= c + d) {
                x -= c + d;
                c = (c >> 1) + d;
            } else {
                c >>= 1;
            }
            d >>= 2;
        }
        return c;
    }
}
```

``` python []
class Solution(object):
    def mySqrt(self, x):
        c = 0
        d = 1 << 30
        while d > x:
            d >>= 2
        while d != 0:
            if x >= c + d:
                x -= c + d
                c = (c >> 1) + d
            else:
                c >>= 1
            d >>= 2
        return c
```

``` python3 []
class Solution:
    def mySqrt(self, x: int) -> int:
        c = 0
        d = 1 << 30
        while d > x:
            d >>= 2
        while d != 0:
            if x >= c + d:
                x -= c + d
                c = (c >> 1) + d
            else:
                c >>= 1
            d >>= 2
        return c
```
```c []
int mySqrt(int n) {

    // X_(n+1)
    int32_t x = n;

    // c_n
    int32_t c = 0;

    // d_n which starts at the highest power of four <= n
    int32_t d = 1 << 30; // The second-to-top bit is set.
                         // Same as ((unsigned) INT32_MAX + 1) / 2.
    while (d > n) {
        d >>= 2;
    }

    // for d\u2099 \u2026 d\u2080
    while (d != 0) {
        if (x >= c + d) {      // if X_(m+1) \u2265 Y_m then a_m = 2^m
            x -= c + d;        // X_m = X_(m+1) - Y_m
            c = (c >> 1) + d;  // c_(m-1) = c_m/2 + d_m (a_m is 2^m)
        }
        else {
            c >>= 1;           // c_(m-1) = c_m/2      (a\u2098 is 0)
        }
        d >>= 2;               // d_(m-1) = d_m/4
    }
    return c;                  // c_(-1)
}

```
```csharp []
public class Solution {
    public int MySqrt(int x) {
        int c = 0;
        int d = 1 << 30;
        while (d > x) {
            d >>= 2;
        }
        while (d != 0) {
            if (x >= c + d) {
                x -= c + d;
                c = (c >> 1) + d;
            } else {
                c >>= 1;
            }
            d >>= 2;
        }
        return c;
    }
}
```
``` javascript []
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let c = 0;
    let d = 1 << 30;
    while (d > x) {
        d >>= 2;
    }
    while (d != 0) {
        if (x >= c + d) {
            x -= c + d;
            c = (c >> 1) + d;
        } else {
            c >>= 1;
        }
        d >>= 2;
    }
    return c;
};
```
``` typescript []
function mySqrt(x: number): number {
    let c = 0;
    let d = 1 << 30;
    while (d > x) {
        d >>= 2;
    }
    while (d !== 0) {
        if (x >= c + d) {
            x -= c + d;
            c = (c >> 1) + d;
        } else {
            c >>= 1;
        }
        d >>= 2;
    }
    return c;
}
```
``` php []
class Solution {

    /**
     * @param Integer $x
     * @return Integer
     */
    function mySqrt($x) {
        $c = 0;
        $d = 1 << 30;
        while ($d > $x) {
            $d >>= 2;
        }
        while ($d != 0) {
            if ($x >= $c + $d) {
                $x -= $c + $d;
                $c = ($c >> 1) + $d;
            } else {
                $c >>= 1;
            }
            $d >>= 2;
        }
        return $c;
    }
}
```
```swift []
class Solution {
    func mySqrt(_ x: Int) -> Int {
        var c = 0
        var d = 1 << 30
        var x = x
        while d > x {
            d >>= 2
        }
        while d != 0 {
            if x >= c + d {
                x -= c + d
                c = (c >> 1) + d
            } else {
                c >>= 1
            }
            d >>= 2
        }
        return c
    }
}
```
``` kotlin []
class Solution {
    fun mySqrt(x: Int): Int {
        var c = 0
        var d = 1 shl 30
        var x = x
        while (d > x) {
            d = d shr 2
        }
        while (d != 0) {
            if (x >= c + d) {
                x -= c + d
                c = (c shr 1) + d
            } else {
                c = c shr 1
            }
            d = d shr 2
        }
        return c
    }
}
```
``` dart []
class Solution {
  int mySqrt(int x) {
    int c = 0;
    int d = 1 << 30;
    while (d > x) {
      d >>= 2;
    }
    while (d != 0) {
      if (x >= c + d) {
        x -= c + d;
        c = (c >> 1) + d;
      } else {
        c >>= 1;
      }
      d >>= 2;
    }
    return c;
  }
}
```
```golang []
func mySqrt(x int) int {
    c := 0
    d := 1 << 30
    for d > x {
        d >>= 2
    }
    for d != 0 {
        if x >= c + d {
            x -= c + d
            c = (c >> 1) + d
        } else {
            c >>= 1
        }
        d >>= 2
    }
    return c
}
```
``` ruby []
# @param {Integer} x
# @return {Integer}
def my_sqrt(x)
    c = 0
    d = 1 << 30
    while d > x
        d >>= 2
    end
    while d != 0
        if x >= c + d
            x -= c + d
            c = (c >> 1) + d
        else
            c >>= 1
        end
        d >>= 2
    end
    c
end
```
``` scala []
object Solution {
    def mySqrt(n: Int): Int = {
        var c = 0
        var d = 1 << 30
        var x = n
        while (d > x) {
            d >>= 2
        }
        while (d != 0) {
            if (x >= c + d) {
                x -= c + d
                c = (c >> 1) + d
            } else {
                c >>= 1
            }
            d >>= 2
        }
        c
    }
}
```
``` rust []
impl Solution {
    pub fn my_sqrt(x: i32) -> i32 {
        let mut c = 0;
        let mut d = 1 << 30;
        let mut x = x;
        while d > x {
            d >>= 2;
        }
        while d != 0 {
            if x >= c + d {
                x -= c + d;
                c = (c >> 1) + d;
            } else {
                c >>= 1;
            }
            d >>= 2;
        }
        c
    }
}
```
``` racket []
(define (my-sqrt x)
  (define (loop d c x)
    (if (= d 0)
        c
        (if (>= x (+ c d))
            (loop (arithmetic-shift d -2)
                  (+ (arithmetic-shift c -1) d)
                  (- x (+ c d)))
            (loop (arithmetic-shift d -2)
                  (arithmetic-shift c -1)
                  x))))
  (loop (expt 2 30) 0 x))
```

