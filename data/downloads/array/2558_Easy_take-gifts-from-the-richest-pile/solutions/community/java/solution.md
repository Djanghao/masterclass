# ✅JAVA || Priority-Queue || Very easy || Intuitive 💯🔥

**Author:** AshLuvCode
**Votes:** 54
**Link:** [https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/3143788/](https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/3143788/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public long pickGifts(int[] nums, int k) {
        int n = nums.length;
        PriorityQueue<Integer> pq = new PriorityQueue<>((a,b)->(b-a));    // MAX-HEAP
        
        for(int i = 0; i<n; i++){
            pq.add(nums[i]);
        }
        
        long sum = 0;
        while(k-->0){
            pq.add((int)Math.sqrt(pq.remove()));
        }
        
        while(pq.size()>0){
            sum+=pq.remove();
        }

        return sum;
    }
}
```


![cat upvote.jpeg](./images/0.jpeg)
