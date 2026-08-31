# C# max heap and sorting

**Author:** clewBy
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-sum-of-an-array/solutions/2808505/](https://leetcode.com/problems/find-the-k-sum-of-an-array/solutions/2808505/)

---

```
public class Solution {
    public long KSum(int[] nums, int k) {
        long sum = 0;
        foreach(int n in nums)
            if(n > 0) sum += n;
        Array.Sort(nums, (a,b) => { return Math.Abs(a)-Math.Abs(b); } );
        PriorityQueue<(long, long), long> pq = new();
        pq.Enqueue((sum-Math.Abs(nums[0]),0), sum-Math.Abs(nums[0]*-1));
        while(--k > 0){
            (long Sum, long Idx) c = pq.Dequeue();
            if(c.Idx+1 <= nums.Length-1){
                long nextIdx = c.Idx+1, nextSum = c.Sum-Math.Abs(nums[nextIdx]);
                pq.Enqueue((nextSum, nextIdx), nextSum*-1);
                pq.Enqueue((nextSum+Math.Abs(nums[c.Idx]), nextIdx), (nextSum+Math.Abs(nums[c.Idx]))*-1);
            }
            sum = c.Sum;
        }
        return sum;
    }
}
```