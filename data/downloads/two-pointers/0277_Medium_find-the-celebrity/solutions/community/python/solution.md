# Java/Python, O(n) calls, O(1) space easy to understand solution

**Author:** dietpepsi
**Votes:** 185
**Link:** [https://leetcode.com/problems/find-the-celebrity/solutions/71228/](https://leetcode.com/problems/find-the-celebrity/solutions/71228/)

---

**Java**

    public class Solution extends Relation {
         public int findCelebrity(int n) {
            int x = 0;
            for (int i = 0; i < n; ++i) if (knows(x, i)) x = i;
            for (int i = 0; i < x; ++i) if (knows(x, i)) return -1;
            for (int i = 0; i < n; ++i) if (!knows(i, x)) return -1;
            return x;
        }
    }

    // 171 / 171 test cases passed.
    // Status: Accepted
    // Runtime: 13 ms
    // 97.79%

**Python**

    def findCelebrity(self, n):
        x = 0
        for i in xrange(n):
            if knows(x, i):
                x = i
        if any(knows(x, i) for i in xrange(x)):
            return -1
        if any(not knows(i, x) for i in xrange(n)):
            return -1
        return x

    # 171 / 171 test cases passed.
    # Status: Accepted
    # Runtime: 1460 ms
    # 91.18%

**Explanation**

The first loop is to exclude `n - 1` labels that are not possible to be a celebrity. 
After the first loop, `x` is the only candidate.
The second and third loop is to verify `x` is actually a celebrity by definition.

The key part is the first loop. To understand this you can think the `knows(a,b)` as a `a < b` comparison, if `a` knows `b` then `a < b`, if `a` does not know `b`, `a > b`. Then if there is a celebrity, he/she must be the "maximum" of the `n` people.

However, the "maximum" may not be the celebrity in the case of no celebrity at all. Thus we need the second and third loop to check if `x` is actually celebrity by definition.

The total calls of knows is thus `3n` at most. One small improvement is that in the second loop we only need to check i in the range `[0, x)`. You can figure that out yourself easily.