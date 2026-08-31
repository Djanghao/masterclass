# JAVA || PriorityQueue || Easy to understand

**Author:** MohakHarjani
**Votes:** 19
**Link:** [https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/3312059/](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/3312059/)

---

```
class Pair{
    int num;
    int index;
    Pair(int num, int index)
    { this.num = num; this.index = index; }
}
class Solution {
    public long findScore(int[] nums) 
    {
        int n = nums.length;
        PriorityQueue<Pair>pq = new PriorityQueue<Pair>((Pair a, Pair b)->{
            if (a.num != b.num) return (a.num - b.num);
            else return (a.index - b.index);
        });
        for (int i = 0; i < nums.length; i++ ) pq.add(new Pair(nums[i], i));
        boolean[] marked = new boolean[n];
        
        long ans = 0;
        while(!pq.isEmpty())
        {
            int currNum = pq.peek().num;
            int currIdx = pq.peek().index;
            pq.poll();
            if (marked[currIdx]) continue;
            
            ans += currNum;
            marked[currIdx] = true;
            if (currIdx + 1 < n) marked[currIdx + 1] = true;
            if (currIdx - 1 >= 0) marked[currIdx - 1] = true; 
        }
        return ans;
    }
}
```