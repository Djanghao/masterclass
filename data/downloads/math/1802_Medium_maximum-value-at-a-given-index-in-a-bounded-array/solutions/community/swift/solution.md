# Math One-liner explained

**Author:** VladimirTheLeet
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3621895/](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3621895/)

---

```
class Solution {
    func maxValue(_ n: Int, _ i: Int, _ s: Int) -> Int {
        (i < n-1-i) ? (s - n <= (i+1).\xB2) ? 1 + sqrt(s-n) : 2*(s + i*(i+1)) <= n*(n+3) ? 1 + (sqrt(8*(s - n + i*(i+1)) + 1) - 2*i - 1) / 2 : (s + ((i+1).\xB2 + (n-i).\xB2 - n - 1) / 2) / n : (s - n <= (n-i).\xB2) ? 1 + sqrt(s-n) : 2*s <= 2*i*(i-1) + 5*n - (n - 2*i).\xB2 ? 1 + (sqrt(8*(s - n + (n-i)*(n-1-i)) + 1) - 2*(n-1-i) - 1) / 2 : (s + ((n-i).\xB2 + (i+1).\xB2 - n - 1) / 2) / n
    }
}
func sqrt(_ num: Int) -> Int { Int(Double(num).squareRoot()) }
extension Int { var \xB2: Int { self * self } }
```

What? That's one line. I even added a couple of optional helper functions to make it pretty and concise :)

...

Okay, a little more verbose:

```
func maxValue(_ n: Int, _ i: Int, _ s: Int) -> Int
{
    let i = min(i, n-1-i)
    if s - n <= (i+1).\xB2 { return 1 + sqrt(s-n) }
    else if 2*(s + i*(i+1)) <= n*(n+3) { return 1 + (sqrt(8*(s - n + i*(i+1)) + 1) - 2*i - 1) / 2 }
    else { return (s + ((i+1).\xB2 + (n-i).\xB2 - n - 1) / 2) / n }
}
```
And some more..:

```
func maxValue(_ n: Int, _ i: Int, _ s: Int) -> Int
{
    let s = s - n
    let i = min(i, n - 1 - i)
    if s <= (i+1).\xB2 { return 1 + sqrt(s)}
    else if 8*(s + i*(i+1)) <= (2*n+1).\xB2 - 1 { return 1 + (sqrt(8*(s + i*(i+1)) + 1) - 2*i - 1) / 2 }
    else return 1 + (s + ((i+1).\xB2 + (n-i).\xB2 - n - 1) / 2) / n
}
```

Here we are:
```swift []
func maxValue(_ n: Int, _ i: Int, _ s: Int) -> Int
{
    let s = s - n
    let i = min(i, n - 1 - i)

    var x = sqrt(s)
    if x <= i + 1 { return x + 1 }

    x = (sqrt((i*(i+1)+s) * 8 + 1) - 1) / 2 - i
    if x <= n - i { return x + 1 }
    
    return (s + ((i+1).\xB2 + (n-i).\xB2 - n - 1) / 2) / n + 1
}
```
```cpp []
int maxValue(int n, int index, int maxSum)
{
    index = min(index, n-1-index);
    maxSum -= n;

    int x = sqrt(maxSum);
    if (x <= index+1) return x+1;

    x = (sqrt(8*((long long)index*(index+1)+maxSum)+1)-1)/2-index;
    if (x <= n - index) return x+1;

    return (maxSum + (((long long)index+1)*(index+1) + ((long long)n-index)*(n-index) - n - 1 )/2) / n+1;
}
```
### Explanation
Each `nums[i]` is 1 or greater. We can change the problem so that `nums[i]` is 0 or greater and new `maxSum` becomes `maxSum - n`. Also the problem is symmetrical and we can invert the order so that `index` is closer to 0 than to `n-1`.

We need to make the values as small as possible, so starting from `index` we will decrease the values by 1 up to 0. Let's say `nums[i] = x`. Then `nums[i-1] = nums[i+1] = x-1`, `nums[i-2] = nums[i+2] = x-2` and so on. We get an arithmetic progression (from some value of `y` to `x`), the sum of which is `(x+y)*(x-y+1)/2`. There is one progression to the right and another progression to the left of `index`. `nums[index]` is included in both progressions, so we have to subtract it to calculate the total sum. The value of `y` could be 0 if the progression reaches 0 before the boundary. Or `y` could be `x-index` for the left sequence, and `x-(n-1-index)` for the right sequence.
Let's consider 3 cases.

1. `y = 0` for both sequences. Then `x = nums[index]` must be less than or equal to `index+1` (and also less than `n-index` because we made `index` closer to 0 than `n-1`). In this case we have both progressions are the same and the sum is `2*(x*(x+1)/2)-x = x*x <= maxSum`. Here we just need to take the square root.
2. For the left sequence `y = x-index`, but for the right sequence `y = 0`. `x` must be greater than `index+1` but less than or equal to `n-index`. (It's not possible for the `y` on the left to be 0 and the `y` on the right to be not 0, because we made `index` closer to 0 than to `n-1`). Here the total sum is `(x+(x-index))*(x-(x-index)+1)/2 + x*(x+1)/2 - x = (2*x-index)*(index + 1)/2 + x*(x+1)/2 - x <= maxSum`. Solve it and get `x <= (sqrt(8*(index*(index+1)+maxSum)+1)-1)/2-index`.
3. `y` for the left sequence is `x-index` and `y` for the right sequence is `x-(n-1-index)`. Then `((2*x-index)*(index+1) + (2*x-n+1+index)*(n-index))/2 - x <= maxSum` and `x <= (maxSum + ((index+1)^2 + (n-index)^2 - n - 1 )/2) / n`.
Finally, we revert the action of lowering down min values for `nums[i]` from 1 to 0. In order to return to the original problem, we increase `x` by 1.

Original idea and explanation by [@user2575jO](/user2575jO), taken from [here](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/3619980/0ms-beat-100-o-1-pure-math-no-loop-no-search/comments/1923092).

---
##### Reduction to one-liner
The main difficulty here is that we have to get rid of all the auxiliary variables and change the paradigm from "calculate the value and see if it fits" to "determine in advance what exactly needs to be calculated". It also would be a good idea to cut out unnecessary heavy calculations of the square root.
So, we begin from `x`:
`x = sqrt(s)`
`if x <= i + 1 { return x + 1 }`
No big deal, $\\sqrt{s}\\le i+1$ transforms to $s\\le (i+1)^{2}$:
`if s <= (i+1)\xB2 { return 1 + sqrt(s)}`

Next
`x = (sqrt((i*(i+1)+s) * 8 + 1) - 1) / 2 - i`
`if x <= n - i { return x + 1 }`
We replace `x` with its `n-i` boundary condition, and slightly unwind this quadratic equation solution to get rid of the root calculation.
$\\frac{\\sqrt{8(s+i(i+1)+1)}-1}{2}-i\\le n-i \\implies \\sqrt{8(s+i(i+1)+1)}\\le 2n+1 \\implies 8(s+i(i+1))+1\\le (2n+1)^{2}\\implies 8(s+i(i+1))\\le (2n+1)^{2}-1$
`if 8*(s + i*(i+1)) <= (2*n+1)\xB2 - 1 { return 1 + (sqrt(8*(s + i*(i+1)) + 1) - 2*i - 1) / 2 }`

Now we are done with x and proceed with removing of `s = s - n`. Adjust the formulas to take into account the fact that the value of `s` in them will now be `n` larger than the present one.

`if s <= (i+1)\xB2 { return 1 + sqrt(s)}`
becomes
`if s - n <= (i+1)\xB2 { return 1 + sqrt(s-n) }`. Trivial.

`if 8*(s + i*(i+1)) <= (2*n+1)\xB2 - 1 { return 1 + (sqrt(8*(s + i*(i+1)) + 1) - 2*i - 1) / 2 }`
Significant changes only in the left part:
$8(s-n + i(i+1)) \\le (2n+1)\xB2 - 1\\implies 8(s + i(i+1)) \\le 4n\xB2+4n+1 - 1 + 8n\\implies 8(s + i(i+1)) \\le 4n\xB2+12n\\implies 2(s + i(i+1)) \\le n(n+3)$
`if 2*(s + i*(i+1)) <= n*(n+3) { return 1 + (sqrt(8*(s - n + i*(i+1)) + 1) - 2*i - 1) / 2 }`

Last change for `s`:
`1 + (s + ((i+1)\xB2 + (n-i)\xB2 - n - 1) / 2) / n`
$1 + \\frac{(s-n + ((i+1)\xB2 + (n-i)\xB2 - n - 1) / 2)}{n}\\implies 1 + \\frac{(s + ((i+1)\xB2 + (n-i)\xB2 - n - 1) / 2)}{n}-\\frac{n}{n}\\implies \\frac{(s + ((i+1)\xB2 + (n-i)\xB2 - n - 1) / 2)}{n}$
`(s + ((i+1)\xB2 + (n-i)\xB2 - n - 1) / 2) / n`

Let's take a look what we have at the moment:
```
let i = min(i, n-1-i)
if s - n <= (i+1)\xB2 { return 1 + sqrt(s-n) }
else if 2*(s + i*(i+1)) <= n*(n+3) { return 1 + (sqrt(8*(s - n + i*(i+1)) + 1) - 2*i - 1) / 2 }
else { return (s + ((i+1)\xB2 + (n-i)\xB2 - n - 1) / 2) / n }
```
Getting close. Just `i` remains, being used for possible inverting the order so that index is always closer to start that the end. This is actually a very smart and helpful addition, saving many troubles of considering different sides possibilities. Unfortunately, I was not able to come up with the universal all-cases formula in abscence of such a convenient condition. We'll have to resort to branching, that is, go in two routes: `if min(i, n-1-i) == i`, i.e., no inversion, everything is as it is, and when `min(i, n-1-i) == n-1-i`, every occurence of `i` is superseded by the value `n-1-i`. Although the process is tedious, it comes down to simply replacing and reducing what you can.

$s - n \\le  (i+1)\xB2\\implies s - n \\le (n-i)\xB2$

$2(s + i(i+1)) \\le n(n+3)\\implies 2s + 2(n\xB2-n-2ni+i+i\xB2) \\le n\xB2+3n \\implies 2s \\le -n\xB2+4ni-2i\xB2+ 5n-2i \\implies 2s \\le 2i(i-1)+5n-(n-2i)\xB2$

$1 + \\frac{(\\sqrt{8(s - n + i(i+1)) + 1} - 2i -1)}{2}\\implies 1 + \\frac{(\\sqrt{8(s - n + (n-i)(n-1-i)) + 1} - 2(n-1-i) -1)}{2}$

$\\frac{(s + ((i+1)\xB2 + (n-i)\xB2 - n - 1) / 2)}{n} \\implies \\frac{(s + ((n-i)\xB2 + (i+1)\xB2 - n - 1) / 2)}{n}$. Unsurprisingly, nothing has changed here, as this is a route for the close borders on both sides.

The overall result. *(Needless to say, such a big one-liner is far from cleanest and most readable code. Don't do that in projects that other people have to work with)*.
```
if i < n-1-i
{
    if s - n <= (i+1)\xB2 { return 1 + sqrt(s-n) }
    else if 2*(s + i*(i+1)) <= n*(n+3) { return 1 + (sqrt(8*(s - n + i*(i+1)) + 1) - 2*i - 1) / 2 }
    else { return (s + ((i+1)\xB2 + (n-i)\xB2 - n - 1) / 2) / n }
}
else
{
    if (s - n <= (n-i)\xB2) { return 1 + sqrt(s-n) }
    else if 2*s <= 2*i*(i-1) + 5*n - (n - 2*i)\xB2 { return 1 + (sqrt(8*(s - n + (n-i)*(n-1-i)) + 1) - 2*(n-1-i) - 1) / 2 }
    else { return (s + ((n-i).\xB2 + (i+1).\xB2 - n - 1) / 2) / n }
}
```

Now we have come to the end. The only thing left is to replace `if-else` with ternary operators and claim the bragging rights. The working code is at the solution's very beginning.

##### Complexity
- Time: $O(log(s))$. `sqrt` is the culprit
- Space: $O(1)$.