# Simple java solution

**Author:** Siddhant_1602
**Votes:** 11
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4811468/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4811468/)

---

# Complexity
- Time complexity: $$O(n log n)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {
    public int minOperations(int[] nums, int k) {
        PriorityQueue<Long> nm=new PriorityQueue<>();
        for(int i:nums)
        {
            nm.offer((long)i);
        }
        int count=0;
        while(!nm.isEmpty() && nm.size()>1)
        {
            long val1=nm.poll();
            long val2=nm.poll();
            //System.out.println(val1+" "+val2);
            if(val1<k || val2<k)
            {
                long cal=(long)Math.min(val1,val2)*(long)2 + (long)Math.max(val1,val2);
                nm.offer(cal);
                count++;
            }
            else
            {
                nm.offer(val1);
                nm.offer(val2);
                break;
            }
        }
        return count;
    }
}
```