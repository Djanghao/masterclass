# C# Rolling Hash

**Author:** unagiHuman
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-pattern-in-infinite-stream-i/solutions/5867640/](https://leetcode.com/problems/find-pattern-in-infinite-stream-i/solutions/5867640/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
/**
 * Definition for an infinite stream.
 * class InfiniteStream {
 *     public InfiniteStream(int[] bits);
 *     public int Next();
 * }
 */
public class Solution {
    public int FindPattern(InfiniteStream stream, int[] pattern) {
        long M = (int)(1e9+7);
        long Base = 5 << 1;
        long phash = 0;
        foreach(var p in pattern)
        {
            phash = ((Base * phash)%M + p)%M;
        }
        long shash = 0;
        var queue = new Queue<long>();
        for(var i=0; i<pattern.Length; i++)
        {
            var next = stream.Next();
            shash = ((Base * shash)%M + next)%M;
            queue.Enqueue(next);
        }

        if(phash == shash)
        {
            return 0;
        }

        var result = 1;

        BigInteger bB = Base;
        BigInteger pL = pattern.Length;
        BigInteger bM = M;
        var k = BigInteger.ModPow(bB, pL, bM);
        for(var i=1; i<10e5;i++)
        {
            var next =  stream.Next();
            shash = (Base * shash + next)%M;
            shash  = (shash - ((long)k * queue.Dequeue())%M + M)%M;
            if(shash == phash)
            {
                return result;
            }
            queue.Enqueue(next);
            result++;
        }
        return -1;
    }

    
}
```