# 🧐☝️ 0ms O(1) math solution explained in java, c/c++, javascript, python, ruby, go, php, racket

**Author:** codeninja8
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-pivot-integer/solutions/4869318/](https://leetcode.com/problems/find-the-pivot-integer/solutions/4869318/)

---

use the formala [wiki](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_\u22EF)

$$\\sum_{k=1}^n{k}=\\frac{n(n + 1)}{2}$$

$$sum(1..n) = 1 + 2 + 3 + ... + x + ... + n = \\frac{n * (n + 1)}{2}$$
$$sum(1..x) = 1 + 2 + 3 + ... + x = \\frac{x * (x + 1)}{2}$$
$$sum(x..n) = x + ... + n = \\frac{n * (n + 1)}{2} - \\frac{x * (x + 1)}{2} + x = \\frac{n * (n + 1)}{2} - \\frac{x * (x - 1)}{2}$$
therefore
$$sum(1..n) = \\frac{x * (x + 1)}{2} + \\frac{n * (n + 1)}{2} - \\frac{x * (x - 1)}{2}$$
the condition is
$$sum(1..x) = sum(x..n)$$
so
$$\\frac{x * (x + 1)}{2} =\\frac{n * (n + 1)}{2} - \\frac{x * (x - 1)}{2}$$
getting rid of the division by 2
$$x * (x + 1) = n * (n + 1) - x * (x - 1)$$
simplify
$$x * (x + 1) + x * (x - 1) = n * (n + 1)$$
$$x * (x + 1 + x - 1) = n * (n + 1)$$
$$x * (x + x) = n * (n + 1)$$
$$x * (2 * x) = n * (n + 1)$$
$$2x^2 = n * (n + 1)$$
$$x = \\sqrt{\\frac{n * (n + 1)}{2}}$$
or 
$$ x = \\sqrt{sum(1..n)}$$

now we can calculate $$x = \\sqrt{\\frac{n * (n + 1)}{2}}$$ and if $$x$$ is an integer we return $$x$$ otherwise `-1`

In my solution I check if $$x$$ has a float fraction.
In some languages you can extract float fraction by `x % 1`
for example in java `2.5 % 1` returns `0.5`
or you can do something like `x - floor(x) = 0`

good luck and up vote my post \uD83D\uDC4D


# Code
``` java []
class Solution {
    public int pivotInteger(int n) {
        double x = Math.sqrt((n * (n + 1)) / 2);

        if (x % 1 == 0) {
            return (int) x;
        } else {
            return -1;
        }
    }
}
```
``` c []
int pivotInteger(int n) {
    double x = sqrt((n * (n + 1)) /2);
    if (x - floor(x) == 0) {
        return floor(x);
    } else {
        return -1;
    }
}
```
``` cpp []
class Solution {
public:
    int pivotInteger(int n) {
        double x = sqrt((n * (n + 1)) / 2);
        if (x - floor(x) == 0) {
            return (int) x;
        } else {
            return -1;
        }
    }
};
```
``` python []
class Solution(object):
    def pivotInteger(self, n):
        x = math.sqrt((n * (n + 1)) / 2)
        if x % 1 == 0:
            return int(x)
        else:
            return -1
```
``` javascript []
var pivotInteger = function(n) {
    var x = Math.sqrt((n * (n + 1)) / 2);
    if (x % 1 == 0) {
        return x;
    } else {
        return -1;
    }
};
```
``` php []
class Solution {
    function pivotInteger($n) {
        $x = sqrt(($n * ($n + 1)) / 2);
        if ($x - (int) $x == 0) {
            return $x;
        } else {
            return -1;
        }
    }
}
```
``` golang []
func pivotInteger(n int) int {
    x := math.Sqrt(float64((n * (n + 1)) / 2))
    if x - math.Floor(x) == 0 {
        return int(x);
    } else {
        return -1;
    }
}
```
``` ruby []
def pivot_integer(n)
    x = Math.sqrt((n * (n + 1)) / 2)
    if x % 1 == 0
        x.floor()
    else
        -1
    end
end
```
``` racket []
(define (pivot-integer n)
    (let* ([x (sqrt (/ (* n (add1 n)) 2))]
          [has-fraq? (zero? (- x (floor x)))])
      (if has-fraq? x -1)))
```
