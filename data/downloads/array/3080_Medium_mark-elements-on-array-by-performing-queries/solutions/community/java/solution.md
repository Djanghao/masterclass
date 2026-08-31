# Simple java solution

**Author:** Siddhant_1602
**Votes:** 11
**Link:** [https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4884202/](https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4884202/)

---

# Complexity
- Time complexity: $$O(n log n)$$ -->

- Space complexity: $$O(n)$$

# Code
```
class Solution {
    public long[] unmarkedSumArray(int[] nums, int[][] queries) {
        HashSet<Integer> nm = new HashSet<>();
        PriorityQueue<Integer> pq =new PriorityQueue<>();
        long val= 0 ;
        for(int i=0;i<nums.length;i++)
        {
            nm.add(i);
            pq.add(nums[i]);
            val+=nums[i];
        }
        int lent = queries.length;
        
        HashMap<Integer,Queue<Integer>> h = new HashMap<>();
        for(int i=0;i<nums.length;i++){
            
            int val1 = nums[i];
            if(h.get(val1)==null){
                Queue<Integer> q = new LinkedList<>();
                q.add(i);
                h.put(val1,q);
            }else{
                Queue<Integer>  q= h.get(val1);
                q.add(i);
            }
        }
        long ans[] = new long[lent];
        for(int i=0;i<lent;i++)
        {
            int left = queries[i][0];
            int right = queries[i][1];   
            long sum = 0;
            if(nm.contains(left)){
                nm.remove(left);
                val-=nums[left];
            }
            
            while(right>0)
            {    
                if(pq.size()>0)
                {
                    int val2 = pq.poll();
                    Queue<Integer> indexes = h.get(val2);
                    int ind3 = indexes.remove();
                    
                    if(nm.contains(ind3))
                    {
                        right--;
                        nm.remove(ind3);
                        val-=nums[ind3];
                    }
                }
                else
                {
                    break;
                }
            }
            ans[i] = val;
        }
        return ans;
    }
}
```