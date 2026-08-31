# Very clear explanation | Straightforward solution | Explanation case missed

**Author:** genericalAccount
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/3111623/](https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/3111623/)

---

First of all, think that each monkey has two options to move. So this ends in them having `2^n` possible arrangements. 

The only way the monkeys don't collide is if all of them go or clockwise or anticlockwise. In any other case there is at least one pair that ends in the same vertex. 

So the raw solution would be `(2**n - 2) % 1000000007`.

A little detail I had to face is that since the number of vertices is up to `1000000000`, you require to optimize the way you calculate the value `2**n`, and this is basically making a power exponentiation. For that part I would suggest reading and solving the [problem 50](https://leetcode.com/problems/powx-n/).

## EDIT: 
If someone checks one of [my attempts](https://leetcode.com/contest/weekly-contest-330/submissions/detail/887215331/), there is one that is related to the topic in other posts, about the answer `2**n-4` when `n` is even. I think the statement of the problem is wrong and that's why this case is not considered, but in case someone cares about why this result is a possible answer, the idea is: 

You can swap between neighbors to avoid the possible overlap between monkeys **in a vertex**. So when you have an even number you can arrange them as

```
B\u2500\u2500\u2500\u2500B
\u2502    \u2502
\u2502    \u2502
A\u2500\u2500\u2500\u2500A
```
or

```
A\u2500\u2500\u2500\u2500B
\u2502    \u2502
\u2502    \u2502
\u2502    \u2502
A\u2500\u2500\u2500\u2500B
```
And making one pair defines the other pairs. This generates the two missing cases that should be removed together with the full clockwise and anticlockwise cases.

In the case of odd `n` you will have one missing number that won't have partner, and this one will require to enter in one of the sites of his neighbors, but since those will be occupied by the other neighbors of its neighbors, this last monkey will overlap with one of the neighbors of distance `2` implying that in this case the pairs case is not considered as possible:

```
\u250C\u2500\u25BAB\u2500\u2500\u2500\u2500B
\u2502       \u2502
A       \u2502
\u2502       \u2502
\u2514\u2500\u25BAC\u2500\u2500\u2500\u2500C
```

# Code
```
class Solution:
    def monkeyMove(self, n: int) -> int:
        modulo = 1_000_000_007
        answer = 1
        exponent = 2
        while n:
            if n&1:
                answer *= exponent                
            exponent = (exponent*exponent) % modulo
            n >>= 1
        answer += modulo - 2
        answer %= modulo      
        return answer

```