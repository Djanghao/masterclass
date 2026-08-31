# actual one liners using a binet-like formula, w/ explanation | O(1) time & space

**Author:** e52fa787
**Votes:** 10
**Link:** [https://leetcode.com/problems/n-th-tribonacci-number/solutions/5064824/](https://leetcode.com/problems/n-th-tribonacci-number/solutions/5064824/)

---

# Explanation

From the recurrence relation $T_{n+3} = T_{n+2} + T_{n+1} + T_{n}, T_0=0, T_1=1, T_2=1$, we can use some math to derive the formula
```
T[n] = round(0.336228117 * (1.83928675521 ** n))
```
<details>
<summary>Details</summary>

The Tribonacci numbers satisfy the recursion relation $T_{n+3} = T_{n+2} + T_{n+1} + T_{n}, T_0=0, T_1=1, T_2=1$.

This is very similar to the Fibonacci Numbers $F_{n+2}=F_{n+1}+F_n, F_0=0, F_1=1$, which have a closed form solution known as Binet's formula: $F_n=\\frac1{\\sqrt5}\\left(\\frac{1+\\sqrt5}2\\right)^n+\\frac1{\\sqrt5}\\left(\\frac{1-\\sqrt5}2\\right)^n$. This formula can be derived in a lot of ways (characteristic functions / generating functions / matrices etc). Notice that this formula takes the form
```
F_n = (constant 1) * (constant 2) ** n + (constant 3) * (constant 4) ** n
```
and `constant 2` and `constant 4`, which have the exact values $\\frac{1+\\sqrt5}2$ and $\\frac{1-\\sqrt5}2$, are actually the roots of $x^2 = x + 1$. Note the similarity with the recurrence relation $F_{n+2}=F_{n+1}+F_{n}$!

It turns out that the same methods can also produce a similar formula for the Tribonacci numbers, which is known as a Binet-like formula. The formula now takes this form:
```
T_n = (constant 1) * (constant 2) ** n + (constant 3) * (constant 4) ** n + (constant 5) * (constant 6) ** n
```
And, like the Fibonacci Binet formula, `constant 2`, `constant 4`, and `constant 6` are the three roots of $x^3 = x^2 + x + 1$, the "polynomial version" of the original recurrence relation. (The technical term is a *characteristic equation*)

By substituting this formula into the recurrence relation and forming three equations using the starting values $T_0=0, T_1=1, T_2=1$, you can actually solve for the other three constants directly, and the final answer is
```
T_n = 0.336228 * 1.83929 ** n + (-0.168114 - 0.198324 i)*(-0.419643 + 0.606291 i) ** n + (-0.168114 + 0.198324 i) * (-0.419643 - 0.606291 i) ** n
```
Unfortunately, two of the roots are complex, so the whole formula involves complex numbers and becomes a lot harder to use. However, the two complex roots actually have a magnitude below `1`, so they actually get smaller and approach zero (exponentially quickly!) as `n` increases.
```
(-0.419643 + 0.606291 i) ** 0 = 1
(-0.419643 + 0.606291 i) ** 1 = -0.419643 + 0.606291 i
(-0.419643 + 0.606291 i) ** 2 = -0.191489 - 0.508852 i
(-0.419643 + 0.606291 i) ** 3 = 0.388869 + 0.0974382 i
(-0.419643 + 0.606291 i) ** 4 = -0.222262 + 0.194878 i
...
(-0.419643 + 0.606291 i) ** 20 = 0.00202463 - 0.000997153 i
```
Therefore, simply ignoring these two terms will still leave us pretty close to the true answer. Since the true answer is always a whole integer and the error never exceeds `0.5` (which you can check), we can just `round` it to the nearest integer and the formula will always be guaranteed to be correct.

The last thing to do is to decide how many decimal places to store for the two constants left, since storing too many decimal places doesn't affect the final rounded answer while consuming unnecessary performance. Since `n <= 37`, we'll manually check this through trial and error. When all is done, the final formula is
```
T[n] = round(0.336228117 * (1.83928675521 ** n))
```
Note: depending on the language, rounding can be achieved by adding `0.5` and casting to an `int` as well.

</details>

# Code

```cpp []
class Solution {
public:
    int tribonacci(int n) {
        return 0.5 + 0.336228117*pow(1.83928675521,n);
    }
};
```
```java []
class Solution {
    public int tribonacci(int n) {
        return (int) Math.round(0.336228117*Math.pow(1.83928675521,n));
    }
}
```
``` python3 []
class Solution:
    def tribonacci(self, n: int) -> int:
        return round(0.336228117*pow(1.83928675521,n))
```
```c []
int tribonacci(int n){
    return 0.5 + 0.336228117*pow(1.83928675521,n);
}
```
``` C# []
public class Solution {
    public int Tribonacci(int n) {
        return (int)(0.5+0.336228117*Math.Pow(1.83928675521,n));
    }
}
```
``` javascript []
var tribonacci = (n) => Math.round(0.336228117*Math.pow(1.83928675521,n))
```
``` typescript []
function tribonacci(n: number): number {
    return Math.round(0.336228117*Math.pow(1.83928675521,n));
};
```
Other languages that I can't fit in one code box:

``` rust []
impl Solution {
    pub fn tribonacci(n: i32) -> i32 {
        (0.5+0.336228117*f64::powi(1.83928675521,n)) as i32
    }
}
```
``` php []
class Solution {
    /**
     * @param Integer $n
     * @return Integer
     */
    function tribonacci($n) {
        return round(0.336228117*pow(1.83928675521,$n));
    }
}
```
``` swift []
class Solution {
    func tribonacci(_ n: Int) -> Int {
        return Int(0.5+0.336228117*pow(1.83928675521,Double(n)));
    }
}
```
``` kotlin []
class Solution {
    fun tribonacci(n: Int): Int {
        return (0.5+0.336228117*1.83928675521.pow(n)).toInt();
    }
}
```
``` Go []
func tribonacci(n int) int {
    // might be faster if you used your own integer power function
    return int(0.5 + 0.336228117*math.Pow(1.83928675521,float64(n)))
}
```
``` ruby []
# @param {Integer} n
# @return {Integer}
def tribonacci(n)
    (0.5 + 0.336228117*(1.83928675521**n)).to_i
end
```
``` scala []
object Solution {
    def tribonacci(n: Int): Int = {
        (0.5 + 0.336228117*scala.math.pow(1.83928675521,n)).toInt
    }
}
```

# Complexity
- Time complexity: $O(1)$
The answer fits inside a 32-bit integer, so exponentiation can be done in constant time.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

