# Easy Proof and Video || How GCD? || Javascript and C++

**Author:** rupakk
**Votes:** 15
**Link:** [https://leetcode.com/problems/check-if-point-is-reachable/solutions/3086808/](https://leetcode.com/problems/check-if-point-is-reachable/solutions/3086808/)

---

# Observation
We have 4 options:
(x, y-x)
(x-y, y)
(x, 2*y)
(2*x, y)

I can rewrite last two options as
(x, 2^m * y) [It is like, this operation is performed m times]
(2^n * x, y) [It is like, this operation is performed n times]

Then, I can also rewrite both of the above options as one option:
(2^n * x, 2^m * y)

Now we have only 3 options:
(x, y-x)
(x-y, y)
(2^n * x, 2^m * y), where n,m>=0

Since we are starting with (1, 1), if we only perform last operation, then we can get numbers like:
(1,128), (16,64), (256,4)

In other words: (some power of 2, some power of 2)

And if we would only have last option that would have been very easy to identify for any traget coordinates.

Just check whether both x and y coordinate are powers of 2 or not.

Now if we add other two operations:
(x, y-x)
(x-y, y)
So basically what we are doing is, subtraction with some powers of 2.

So how we can confirm whether we actually did subtractions on some power of two?
Ans: GCD

How?
GCD of two numbers don't change even if we replace one number by their subtraction.

If we apply only the last operation then:
gcd(x,y) = some power of two

Now if we change (x,y) to (x, y-x)
The gcd(x, y-x) will still be some power of 2

Why?
Because if gcd(x, y) = g
Then y-x will also be divisble by g because y and x are divisible by g.
(y-x)/g = y/g - x/g 

The same can be said for (x-y, y)

So doesn't matter which operation we apply, if we are starting from (1, 1) and reaching any corrdinate (x, y)
The gcd of x and y will always be a power of 2.

Video:
<iframe width="580" height="300" src="https://www.youtube.com/embed/KiVZRzPfKnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

# Approach
If gcd(targetX, targetY) = some power of 2
then return true
else return false

# Complexity
- Time complexity: O( log( min(targetX, targetY)))

- Space complexity: O( log( min(targetX, targetY)))

# Code

```C++ []
class Solution {
public:
	bool isReachable(int x, int y) {
        int gc = __gcd(x,y);
        return (gc&(gc-1))==0;
    }
};
```
```javascript []
/**
 * @param {number} targetX
 * @param {number} targetY
 * @return {boolean}
 */
function gcd(x, y){
    if (y===0)
        return x;
    return gcd(y, x%y);
}

var isReachable = function(targetX, targetY) {
    let gc = gcd(targetX,targetY);
    return (gc&(gc-1))==0;
};
```