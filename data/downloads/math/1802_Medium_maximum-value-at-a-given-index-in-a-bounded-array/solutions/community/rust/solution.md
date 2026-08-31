# Pure Math O(1) Approach, Not Easy, Just Experimental.

**Author:** yichenliu727etlc
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3621786/](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3621786/)

---

# Preface

This solution is based on pure math method, which is complex. I think for job interview instead of completetions (like ICPC or OI), coming up this will cost too much time. So this is just experimental, but still worth reading.

# Intuition

There are two constrains:
+ `abs(list[j] - list[j + 1]) <= 1`: This means the adjacent values in `list` must change step by step, or not change.
+ `max_sum`: this means the total sum is limited. If we want to make `list[index]` as large as possible, we should avoid wasting numbers on other elements.

Think about that there is `list` which is long enough, if we want to make `list[index]` to be a large value `peak`, the way which produces least sum is 
+ Let elements `list[index - peak + 1]` to `list[index]` grow from `1` to `peak`.
+ Let elements `list[index]` to `list[index + peak - 1]` decrease from `peak` to `1`.
+ Leave other elements be `1`

If we draw a bar chart, it will looks like a mountain on plain. So let's call the constant `1` parts "plain", the increasing and decreasing parts `slope`, and the max value `peak`

```
                peak
                5
              4 # 4
            3 # # # 3
          2 # # # # # 2
1 1 1 1 1 # # # # # # # 1 1 1 1 1
|-plain-|-slope-|-slope-|-plain-|

```

However, think about that due to the limitation of `index` and list length `n`, the slopes may be cut, which make them not able to start from or decrease to `1`.

```
    5
  4 # 4
3 # # # 3
# # # # # 2
# # # # # # 1 1 1 1 

```

If `peak`, `n` and `index` are known, then we can compute the sum of numbers `sum`.

1. Check the relationship between `peak`, `n` and `index`. This tells us whether there will be plain on the left/right side of the peak, whether the slope is complete (and its size).
2. The slope is a arithmetic sequence. For a slope of length `len`, minimum value `bottom`, the sum of the slope is `(top + bottom) * len / 2`.
3. For the plain, its sum is just its length.

By doing this, we can get a equation about `peak` and `sum`. In the question, actually, `peak` is unknown but the maximum `sum` is known. So we can solve the equation to find the maximum `peak` corresponding to the maximum `sum`.

# Approach

For convinience, we will use shorten variable names in this section.
+ $i$: `index`, the index of peak.
+ $n$: same to he original `n`, the list length
+ $p$: `peak`, maximum value
+ $S$: `sum`, total sum
+ $S_{\\max}$: `max_sum`, the maximum possible sum
+ $S_L$, $S_R$, the sum on the left and right side of the peak.


## Compute the Sum of List on One Side of the Peak

Let $l$ be the length from `index` to the boundary of list.

If $p < l$ (the slope is complete, there is a plain)

```
              5
            4 #
          3 # #
        2 # # #
1 1 1 1 # # # #
```

+ The length of slope: $p$
+ The bottom value of slope: $1$
+ The sum of slope: $\\dfrac{p(p + 1)}{2}$
+ The length/sum of the plain: $l - p$
+ Side sum: $S_? = \\dfrac{p^2}{2} - \\dfrac{p}{2} + l$


If $p \\geq l$ (the slope may be incomplete, there is no plain)

```
    5
  4 #
3 # #
# # #
# # #
```

+ The length of slope: $l$
+ The bottom value of slope: $p - l + 1$
+ The sum of slope: $\\dfrac{l(p + p - l + 1)}{2}$
+ The length/sum of the plain: $0$
+ Side sum: $S_? = lp + \\dfrac{l (1 - l)}{2}$

## Cases of The Left Side

For the part of list on the left side of the peak, $l = i + 1$.

1. Case (a): $p < i + 1$

    $S_L = \\dfrac{p^2}{2} - \\dfrac{p}{2} + (i + 1)$

2. Case (b): $p \\geq i + 1$

    $S_L = (i + 1)p + \\dfrac{-i(i + 1)}{2}$ 

## Cases of The Right Side

For the part of list on the left side of the peak, $l = n - i$.

1. Case (c): $p < n - i$

    $S_R = \\dfrac{p^2}{2} - \\dfrac{p}{2} + (n - i)$ 

2. Case (d): $p \\geq n - i$

    $S_R = (n - i)p + \\dfrac{(n - i)(1 - n + i)}{2}$

## Cases of the Total Sum


The total sum $S = S_L + S_R - p$. Note $-p$ because we count the $p$ in both $S_L$ and $S_R$.

1. Case (a, c): $p < i + 1$, $p < n - i$

    $S = p^2 - 2p + (n + 1)$

2. Case (a, d): $p < i + 1$, $p \\geq n - i$

    $S = \\dfrac{p^2}{2} + (n - i - 3/2) p + \\left( (i + 1) + \\dfrac{(n - i) (1 - n + i)}{2} \\right)$

3. Case (b, c): $p \\geq i + 1$, $p < n - i$

    $S = \\dfrac{p^2}{2} + (i - 1/2) p + \\left( -\\dfrac{i(i + 1)}{2} + (n - i) \\right)$

4. Case (b, d): $p \\geq i + 1$, $p \\geq n - i$

    $S = np + \\dfrac{(n - i)(1 - n + i) - i (i + 1)}{2}$

## Solve the Equation with Cases

Now we have the equation $S$ about and $p$. Since $S \\leq S_{\\max}$, we can get the inequality about $S_{\\max}$ and $p$. Then, we can ge the limitation on $p$, and obtain the maximum $p$.

However, this equation have 4 cases. Here is the way to solve it:
1. For one case, first assume this case stands and try to solve the inequality $S \\leq S_{\\max}$.
2. If the equation cannot be solved, then no solution in this case. Else, we will get a range of $p$.
3. If the solved range exceed the limit of the case condition, clip the range with the case condition.
4. If there are conflict constrains, there will be no solution in this case. Otherwise, the maximum $p$ is the floor of the upper limit.
5. Solve all cases, and pick ang global maximum $p$.

## Solve Single Inquality

Recall the method of solving a quadratic inequality:

$ap^2 + bp + c' \\leq S_{\\max}$

First, move $S_{\\max}$ to the LHS, let $c = c' - S_{\\max}$, then $ap^2 + bp + c \\leq 0$

Now solve the equation $ap^2 + bp + c = 0$:

1. If $a = 0$ (no $ap^2$ term), just solve as a linear equation, $p_1 = p_2 = -\\dfrac{c}{b}$.
2. Compute $\\varDelta = b^2 - 4ac$. If $\\varDelta < 0$, no real solution for this case.
3. Solution is $p_1, p_2 = \\dfrac{-b \\mp \\sqrt{\\varDelta}}{2a}$. ($-$ for $p_1$, $+$ for $p_2$).

Look back to the original equations. Case (a, c), (a, d) and (b, c) all have $a > 0$. So the solution for the inequality is $p_1 \\leq p \\leq p_2$. Again, we need to clip this range with the case condition, and check if there is conflicts.

# Complexity
- Time complexity: $O(1)$

- Space complexity: $O(1)$

# Code

```rust []
impl Solution {
    fn solve_quad(a: f64, b: f64, c: f64) -> Option<(f64, f64)> {
        if a == 0. {
            return if b != 0. {
                Some((-c / b, -c / b))
            } else {
                None
            }
        }
        else {
            let delta = b * b - 4. * a * c;
            if delta < 0. { 
                return None;
            }
            let sqrt_delta = delta.sqrt();
            let x1 = (-b - sqrt_delta) / (2. * a);
            let x2 = (-b + sqrt_delta) / (2. * a);
            return Some((x1, x2));
        }
    }

    fn solve_max_peak(
        case1_value: f64,
        case1_geq: bool,
        case2_value: f64,
        case2_geq: bool,
        a: f64,
        b: f64,
        c: f64
    ) -> Option<i32> {
        let op_solve = Self::solve_quad(a, b, c);
        if !op_solve.is_some() { 
            return None; 
        }
        let (mut start, mut end) = op_solve.unwrap();
        if a == 0. {
            start = 0.;
        }
        if case1_geq && start < case1_value {
            start = case1_value;
        }
        if case2_geq && start < case2_value {
            start = case2_value;
        }
        if !case1_geq && end > case1_value {
            end = case1_value;
        }
        if !case2_geq && end > case2_value {
            end = case2_value;
        }
        return if (
            end <= 0.0 ||
            start >= end ||
            (start.floor() == end.floor() && end != end.floor())
        ) {
            None
        }
        else {
            Some(end as i32)
        }
    }

    pub fn max_value(n: i32, index: i32, max_sum: i32) -> i32 {
        let n_ = n as f64;
        let i = index as f64;
        let s = max_sum as f64;
        let ps : [Option<i32> ; 4] = [
            Self::solve_max_peak(
                i + 1., false,
                n_ - i, false,
                1.,
                -2.,
                n_ + 1. - s
            ),
            Self::solve_max_peak(
                i + 1., false,
                n_ - i, true,
                0.5,
                n_ - i - 1.5,
                (i + 1.) + (n_ - i) * (1. - n_ + i) / 2. - s
            ),
            Self::solve_max_peak(
                i + 1., true,
                n_ - i, false,
                0.5,
                i - 0.5,
                - i * (i + 1.) / 2. + (n_ - i) - s
            ),
            Self::solve_max_peak(
                i + 1., true,
                n_ - i, true,
                0.,
                n_,
                ((n_ - i) * (1. - n_ + i) - i * (i + 1.)) / 2. - s
            )
        ];
        let mut max_p = max_sum / n;
        for j in 0 .. 4 {
            if ps[j].is_some() && ps[j].unwrap() > max_p {
                max_p = ps[j].unwrap();
            }
        }
        return max_p;
    }
}
```
```python3 []
from typing import Tuple, Optional
import math

class Solution:
    def solve_quad(self, a: float, b: float, c: float) -> Optional[Tuple[float, float]]:
        if a == 0.:
            if b != 0.:
                return (-c / b, -c / b)
            else:
                return None
        else:
            delta = b * b - 4. * a * c
            if delta < 0.:
                return None
            sqrt_delta = math.sqrt(delta)
            x1 = (-b - sqrt_delta) / (2. * a)
            x2 = (-b + sqrt_delta) / (2. * a)
            return (x1, x2)

    def solve_max_peak(
        self,
        case1_value: float,
        case1_geq: bool,
        case2_value: float,
        case2_geq: bool,
        a: float,
        b: float,
        c: float
    ) -> Optional[int]:
        op_solve = self.solve_quad(a, b, c)
        if op_solve is None:
            return None
        (start, end) = op_solve
        if a == 0.:
            start = 0.
        if case1_geq and start < case1_value:
            start = case1_value
        if case2_geq and start < case2_value:
            start = case2_value
        if not case1_geq and end > case1_value:
            end = case1_value
        if not case2_geq and end > case2_value:
            end = case2_value
        if (
            end <= 0.0 or
            start >= end or
            (math.floor(start) == math.floor(end) and end != math.floor(end))
        ):
            return None
        else:
            return int(end)

    def maxValue(self, n: int, index: int, maxSum: int) -> int:
        n_ = float(n)
        i = float(index)
        s = float(maxSum)
        ps = [
            self.solve_max_peak(
                case1_value = i + 1.,
                case1_geq = False,
                case2_value = n_ - i,
                case2_geq = False,
                a = 1.,
                b = -2.,
                c = n_ + 1. - s
            ),
            self.solve_max_peak(
                case1_value = i + 1.,
                case1_geq = False,
                case2_value = n_ - i,
                case2_geq = True,
                a = 0.5,
                b = n_ - i - 1.5,
                c = (i + 1.) + (n_ - i) * (1. - n_ + i) / 2. - s
            ),
            self.solve_max_peak(
                case1_value = i + 1.,
                case1_geq = True,
                case2_value = n_ - i,
                case2_geq = False,
                a = 0.5,
                b = i - 0.5,
                c = -i * (i + 1.) / 2. + (n_ - i) - s
            ),
            self.solve_max_peak(
                case1_value = i + 1.,
                case1_geq = True,
                case2_value = n_ - i,
                case2_geq = True,
                a = 0.,
                b = n_,
                c = ((n_ - i) * (1. - n_ + i) - i * (i + 1.)) / 2. - s
            )
        ]
        max_p = maxSum // n
        for p in ps:
            if p is not None and p > max_p:
                max_p = p
        return max_p
```
