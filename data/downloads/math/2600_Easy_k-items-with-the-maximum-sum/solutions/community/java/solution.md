# JAVA 100 % FASTER🔥🔥|| STEP BY STEP EXPLAINED😁

**Author:** abhiyadav05
**Votes:** 10
**Link:** [https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/3344630/](https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/3344630/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1)
![Screenshot_20230205_171246.png](./images/0.png)


# Code
```
class Solution {
    public int kItemsWithMaximumSum(int numOnes, int numZeros, int numNegOnes, int k) {
        
        int max = 0; // the maximum sum
        
        // while we still need to select k numbers
        while(k > 0){
            
            // if we have at least one 1 left, add it to the sum
            if(numOnes > 0){
                numOnes--;
                max++;
                k--;
            }
            // if we have at least one 0 left, skip it
            else if(numZeros > 0){
                numZeros--;
                k--;
            }
            // if we have at least one -1 left, add it to the sum
            else{
                numNegOnes--;
                max--;
                k--;
            }   
        } 
        // if we did not select k numbers, return the maximum sum anyway
        return max;
    }
}
```