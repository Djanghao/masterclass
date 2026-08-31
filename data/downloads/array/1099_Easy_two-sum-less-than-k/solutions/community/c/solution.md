# Easy Code for Beginners

**Author:** palaniappan_26
**Votes:** 2
**Link:** [https://leetcode.com/problems/two-sum-less-than-k/solutions/3953402/](https://leetcode.com/problems/two-sum-less-than-k/solutions/3953402/)

---

# Intuition
kce

# Approach
easy approach

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(1)

# Code
```
class Solution {
    public int twoSumLessThanK(int[] n, int k) {
        int sum=0;
        int c=-1;
        for(int i=0;i<n.length;i++){
           for(int j=i+1;j<n.length;j++){
              if(n[i]+n[j]<k){ 
               sum=n[i]+n[j];
               if(c<sum)
               c=sum;
              } 
            }
       } 
        
       return c;
    }
}
```