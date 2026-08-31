# Easy Solution|| Java||100% BEAT

**Author:** abishek_ramesh
**Votes:** 3
**Link:** [https://leetcode.com/problems/random-flip-matrix/solutions/3131418/](https://leetcode.com/problems/random-flip-matrix/solutions/3131418/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
 Easy Solution 
# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
class Solution {
    int i=0,j=0;
     int m=0;int n=0;

    public Solution(int m, int n) {
        this.m=m;
        this.n=n;
    }
    
    public int[] flip() {
        j++;
        if(j==n){
            j=0;
            i++;
        }
        if(i==m){
            i=0;
            j=0;
        }

             
        return new int[]{i,j};
        
    }
    
    public void reset() {
      
        
        
        
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(m, n);
 * int[] param_1 = obj.flip();
 * obj.reset();
 */
```