# C# PriorityQueue & Cycle Detect Solution

**Author:** unagiHuman
**Votes:** 0
**Link:** [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/solutions/5692971/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/solutions/5692971/)

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
public class Solution {
    public class CustomComparer : IComparer<(int index, long val)>
    {
        public int Compare((int index, long val) x, (int index, long val) y)
        {
            if(x.val == y.val)
            {
                if (x.index < y.index)
                {
                    return -1;
                }
                else if (x.index == y.index)
                {
                    return 0;
                }
                else
                {
                    return 1;
                }
            }
            else
            {
                if (x.val > y.val)
                {
                    return 1;
                }
                else
                {
                    return -1;
                }
            }
        }
    }

    public int[] GetFinalState(int[] nums, int k, int multiplier) {
        if(multiplier == 1) return nums;
        var N = nums.Length;
        long modulo = (long)Math.Pow(10, 9) + 7;
       
        var queue = new PriorityQueue<(int index, long val), (int index, long val)>(new CustomComparer());
        var max = int.MinValue;
        for(var i = 0; i<N; i++)
        {
            var num = nums[i];
            queue.Enqueue((i,num),(i,num));
            max = Math.Max(num,max);
        }

        var lmultiplier = (long)multiplier;

        while(k>0)
        {
            
            var deq = queue.Dequeue();
            long lnum = deq.val;
            long val = lnum * lmultiplier;
            nums[deq.index] = (int)(val%modulo);
            var one = (deq.index, val);
            queue.Enqueue(one,one);
            k--;
            if(queue.Peek().val > max)
            {
                break;
            }
        }

        Console.WriteLine("cycle k:{0}",k);

        var mod = k % N;
        Console.WriteLine("cycle mod:{0}",mod);
        for(var i=0; i<mod; i++)
        {
            var deq = queue.Dequeue();
            var index = deq.index;
            var lnum = deq.val%modulo;
            nums[index] = (int)((lnum * lmultiplier)%modulo);
        }

        var count = k / N;
        Console.WriteLine("cycle count:{0}",count);
        var bigMulti = new BigInteger(lmultiplier);
        var bigCount = new BigInteger(count);
        var bigModulo = new BigInteger(modulo);
        var pow = BigInteger.ModPow(bigMulti,bigCount,bigModulo);
        for(var i = 0; i<N; i++)
        {
            var bignum = new BigInteger(nums[i]);
            bignum = (pow * bignum)%bigModulo;
            nums[i] = (int)bignum;
        }


        return nums;

        void printArray(IEnumerable<int> array)
        {
            foreach(var one in array)
            {
                Console.Write("{0},",one);
            }
             Console.Write("\
");
        }
    }
}
```