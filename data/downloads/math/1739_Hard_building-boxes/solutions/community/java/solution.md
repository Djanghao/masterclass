# Java 0ms/100% Math-based O(1) time - explained with citations

**Author:** mattihito
**Votes:** 4
**Link:** [https://leetcode.com/problems/building-boxes/solutions/1930763/](https://leetcode.com/problems/building-boxes/solutions/1930763/)

---

**Intuition**
If we had an infinite room, we would look for the sum of triangular numbers because corners give us the most constraint satisfaction for stacking, and if we start in a corner, we sum consecutive triangular numbers in the optimal pattern, which can be seen from the examples.  The sum of triangular numbers are the [Tetrahedral numbers](https://en.wikipedia.org/wiki/Tetrahedral_number) (wikipedia).  I didn't remember this off the top of my head, but I knew it would be a significant sequence, so I computed the first few terms and did a google search `"OEIS 1 4 10 20 35 56"` for revealing the name of these numbers.  Note: **OEIS** stands for the Online Encyclopedia of Integer Sequences and is useful for situations like this, where we know what a sequence looks like, but we want to learn more, incuding its name (if it has one) and its properties and formula.  If you don't get anything else useful from this solution, I hope you file away "OEIS" as a useful tool - I don't remember how I first stumbled onto it, but over the years it's been one of those tools which I don't need often, but when I do, it tends to greatly help in understanding a sequence.

**Developing An Approach**
So, let us first see if we can get what we need within the tetrahedral numbers with a finite room.  We notice that the room is `n x n x n` and the boxes are unit cubes, and there are `n` of them.  This means, assuming we start in the "first corner", we cannot even reach both a second and third corner on the floor with n boxes (unless n=1, the trivial case where the answer is also 1).  So, we can build our solution entirely from the tetrahedral numbers.  The formula for the tetrahedrals is `Te[k] = k(k+1)(k+2)/6`.  We can refer to [441. Arranging Coins](https://leetcode.com/problems/arranging-coins/discuss/1921181/triangular-numbers-no-need-to-binary-search-with-math-explained) for the seed of an idea for a solution; it is a very similar problem though it seeks completed rows which is not quite the same thing as minimum boxes on the floor, and it uses triangular numbers, not tetrahedral numbers.  But, we can start by finding the largest tetrahedral number not exceeding n, and then figure out what to do with the rest of the boxes.

**Further Steps for Leftover Boxes**
Let's consider the n=10 case - we form a minuature [Q-bert board](https://en.wikipedia.org/wiki/Qbert) with 3 tiers.  The next tetrahedral number is 20 (1+3+6+10).  Suppose we had 10 < n < 20.  Where would we put the extra n-10 boxes?  A naive approach is to place 4 along the floor in front of the lowest tier, then 3 above that, then two above that, etc.  But we can see that if we are strategic about placing our boxes, we can place two in front the lowest tier in such a way that we can add 1 on the tier above.  And if we place another (total of 3) in front of the lowest tier, we can now place another on the second tier, which then enables us to place another on the third tier.  That is, the optimal approach is _not_ to fill the bottom row first.  It is to fill enough of the bottom row until you can stack upwards again.  The pattern is, if we place 2 below, we have room for 1 above.  If we place 3 below, we have room for 2 above and 1 above that.  This is the pattern of the Triangular Numbers.  It turns out, we can place the j'th triangular number of boxes for only j boxes on the lower level.  That is, for this example of 10 < n < 20, we create our miniature Q-bert board (10 boxes, 6+3+1) then we can place 3 boxes total with only 2 along the floor (T[2] = 3), or we can place 6 boxes total with only 3 along the floor (and two on the second tier, and one on the third tier).  So, we can look for the smallest triangular number T[j] greater than or equal to the leftover boxes, and j will be the number of boxes we have to add on the floor to complete the problem.

**So, our algorithm is as follows:**
Let Te[x] indicate the x'th tetrahedral number and T[y] indicate the y'th triangular number.  We then:
1) Find the largest tetrahedral number less than or equal to n.  Call this Te[k].
2) There will be T[k] boxes on the floor, or `k(k+1)/2`.
3) Are there additional boxes?  If not, our answer is T[k].
4) Otherwise, find the smallest triangular number greater than or equal to the remainder of boxes.  Call this T[r].
5) Then, there are r additional boxes on the floor, and our answer is T[k] + r.

**A note on finding Te[k] from n:**
By definiition (of Te[k] in our algorithm): `n >= Te[k] = k(k+1)(k+2)/6`.
Multiplying through by six: `6n >= 6 Te[k] = k(k+1)(k+2) > k^3`.
Thus, `k < pow(6n, 1/3)`.
Therefore, to find k, we can approximate as `k = ceil(pow(6n, 1/3))` and decrement k while it's too large.  This prevents rounding problems.

**A note on finding T[r] from remainder of boxes x = n - Te[k]:**
By definition (of T[r] in our algorithm): `x <= T[r] = r(r+1)/2`.
Multiplying through by two: `2x <= 2 T[r] = r(r+1) < (r+1)^2`.
Thus, `sqrt(2x) < r+1` and `r > sqrt(2x) - 1`.
Therefore, to find r, we can approximate as `r = floor(sqrt(2x)) - 1` and increment while it's too small.  This prevents rounding problems.

Here is the O(1) / O(1) **Java code** (runtime varies between 0ms and 2ms in a few attempts):
```
class Solution {

    static final double ONE_THIRD = 1.0d / 3.0d;

    public int minimumBoxes(int n) {
        int k = findLargestTetrahedralNotGreaterThan(n);
        int used = tetrahedral(k);
        int floor = triangular(k);
        int unused = (n - used);
        if (unused == 0) {
            return floor;
        }
        int r = findSmallestTriangularNotLessThan(unused);
        return (floor + r);
    }

    private final int findLargestTetrahedralNotGreaterThan(int te) {
        int a = (int) Math.ceil(Math.pow(product(6, te), ONE_THIRD));
        while (tetrahedral(a) > te) {
            a--;
        }
        return a;
    }

    private final int findSmallestTriangularNotLessThan(int t) {
        int a = -1 + (int) Math.floor(Math.sqrt(product(t, 2)));
        while (triangular(a) < t) {
            a++;
        }
        return a;
    }

    private final int tetrahedral(int a) {
        return (int) ratio(product(a, a + 1, a + 2), 6);
    }

    private final int triangular(int a) {
        return (int) ratio(product(a, a + 1), 2);
    }

    private final long product(long... vals) {
        long product = 1L;
        for (long val : vals) {
            product *= val;
        }
        return product;
    }

    private final long ratio(long a, long b) {
        return (a / b);
    }

}
```

**Complexity**
O(1) space for a bunch of variables that don't depend on n.
O(1) time assuming the methods to find Te[k] and T[r] which approximate the answer then iterate until correct result in at most some constant number of increments/decrements to reach the actual values.

**Wait, is approximating k and r then iterating until they are correct actually constant time?**
It may not be.  We could go faster yet and solve for k/Te[k] and r/T[r] directly, but it's going to involve solving a cubic equation and quadratic equation, respectively.  Instead of estimating k for finding Te[k] from n by taking the cube root of 6n (based on 6n >= 6 Te[k] = k(k+1)(k+2) > k^3  =>  6n > k^3) we can solve 6n = k(k+1)(k+2) directly for k and then take the floor.  I don't know about you, but I can't solve cubic equations by hand or from memory.  But Wolfram Alpha can.  https://www.wolframalpha.com/input?i=k%28k%2B1%29%28k%2B2%29+%3D+6n+%7C+solve+for+k gives us the real root and two complex roots.  Clearly, we want only the real root.  To write it more cleanly, let's define z as 27n + sqrt(729n^2 - 3).  Then the root is k = cuberoot(z/9) + cuberoot(1/3z) - 1.  So, for an integer k, we need floor(cuberoot(z/9) + cuberoot(1/3z) - 1).  Similarly, we can compute T[r] from x directly (where x was the number of boxes remaining, n - Te[k]).  We have x = r(r+1)/2 and then we find the ceiling of the root of r we need.  This gives us r = ceiling(0.5(sqrt(8x - 1) - 1)), from the quadratic equation.  So, instead of estimating k and r and iterating to find the correct values, we can have a truly O(1) time solution by computing these values directly (otherwise the time complexity could possibly be some non-constant function of n for the error in the estimates resulting in iteration from estimate to actual values).   I think it would be unheard of to solve a cubic equation like this in an interview, but sometimes I find it fun to look for ways to optimize like this.  Plus, it's always handy to know about Wolfram Alpha, so if you didn't know that was there, I hope you find it as interesting as I do.  I think implementing this would make the code more cryptic than it already may be, so I didn't update the above solution with this approach, but it would certainly be possible, and it would result in a truly constant-time solution, as advertised.

**Standard Plea**: If you found this explanation and thought process helpful, please **consider an upvote so someone else is more likely to find it, too**.  And if not, **I would sincerely appreciate your constructive criticism so I can learn to write better solutions**.  Thanks for your time, and happy problem-solving!