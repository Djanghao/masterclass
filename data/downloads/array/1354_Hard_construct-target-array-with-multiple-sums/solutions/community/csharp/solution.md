# 🐌 C# - priority queue

**Author:** user7166Uf
**Votes:** 2
**Link:** [https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/2189962/](https://leetcode.com/problems/construct-target-array-with-multiple-sums/solutions/2189962/)

---

```
public class Solution
{
    public bool IsPossible(int[] target)
    {
        if (target.Length is 1) return target[0] is 1;

        long sum = target.Sum(x => (long) x);
        PriorityQueue<long, long> priorityQueue = new(target.Select(x => ((long) x, (long) -x)));

        while (priorityQueue.Peek() is not 1)
        {
            long value = priorityQueue.Dequeue();
            if (sum - value is 1) return true;

            long valueBeforeOperation = value % (sum - value);
            sum = sum - value + valueBeforeOperation;
            if (valueBeforeOperation is 0 || value == valueBeforeOperation) return false;

            priorityQueue.Enqueue(valueBeforeOperation, -valueBeforeOperation);
        }

        return true;
    }
}
```