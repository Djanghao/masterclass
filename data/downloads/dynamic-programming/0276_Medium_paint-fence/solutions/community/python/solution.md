# Python solution with explanation

**Author:** orbuluh
**Votes:** 234
**Link:** [https://leetcode.com/problems/paint-fence/solutions/71150/](https://leetcode.com/problems/paint-fence/solutions/71150/)

---

If n == 1, there would be k-ways to paint.

if n == 2, there would be two situations:

 - 2.1 You paint same color with the previous post: k*1 ways to paint, named it as `same`
 - 2.2 You paint differently with the previous post: k*(k-1) ways to paint this way, named it as `dif`

So, you can think, if n >= 3, you can always maintain these two situations, 
`You either paint the same color with the previous one, or differently`.

Since there is a rule: "no more than two adjacent fence posts have the same color."

We can further analyze: 

 - from 2.1, since previous two are in the same color, next one you could only paint differently, and it would form one part of "paint differently" case in the n == 3 level, and the number of ways to paint this way would equal to `same*(k-1)`.
 - from 2.2, since previous two are not the same, you can either paint the same color this time (`dif*1`) ways to do so, or stick to paint differently (`dif*(k-1)`) times.

Here you can conclude, when seeing back from the next level, ways to paint the same, or variable `same` would equal to `dif*1 = dif`, and ways to paint differently, variable `dif`, would equal to `same*(k-1)+dif*(k-1) = (same + dif)*(k-1)`

So we could write the following codes:

            
        if n == 0:
            return 0
        if n == 1:
            return k
        same, dif = k, k*(k-1)
        for i in range(3, n+1):
            same, dif = dif, (same+dif)*(k-1)
        return same + dif