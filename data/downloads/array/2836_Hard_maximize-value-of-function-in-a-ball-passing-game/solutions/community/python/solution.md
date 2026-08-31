# Diving into getMaxFunctionValue with explanations.

**Author:** janis__
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/solutions/3967513/](https://leetcode.com/problems/maximize-value-of-function-in-a-ball-passing-game/solutions/3967513/)

---

Alright, let\u2019s break this down. The method's named getMaxFunctionValue, so it's probably hunting for some max value, right?
First up, we compute the upper value using logarithms. Basically, it's finding out the largest power of 2 that\u2019s less than k.
Then, we initialize two matrices, next and res. These seem crucial for storing intermediate results.
The kBit list? That's just the binary form of k. Neat trick.
We've got a loop filling up the first columns of next and res with the receiver values. And then, another loop kinda plays around, updating next and res values.
The final loop? It's where the magic happens. This loop calculates the possible maximum value, and by the end, we've got our answer.
In short, getMaxFunctionValue is a crafty method, juggling numbers from receiver and k to give us a max result. Bit complex, but hey, it does the job!

from math import log, floor

class Solution:
    def getMaxFunctionValue(self, receiver, k):
        upper = int(floor(log(k) / log(2)))
        n = len(receiver)
        next = [[0] * (upper + 1) for _ in range(n)]
        res = [[0] * (upper + 1) for _ in range(n)]
        
        kBit = [0] * (upper + 1)
        currK = k
        for x in range(n):
            next[x][0] = receiver[x]
            res[x][0] = receiver[x]
        for i in range(upper + 1):
            kBit[i] = int(currK & 1)
            currK = currK >> 1

        for i in range(1, upper + 1):
            for x in range(n):
                nxt = next[x][i - 1]
                next[x][i] = next[nxt][i - 1]
                res[x][i] = res[x][i - 1] + res[nxt][i - 1]

        ans = 0
        for x in range(n):
            sum_val = x
            i = 0
            curr = x
            while i <= upper:
                if kBit[i] == 0:
                    i += 1
                    continue
                sum_val += res[curr][i]
                curr = next[curr][i]
                i += 1
            ans = max(ans, sum_val)
        return ans
```