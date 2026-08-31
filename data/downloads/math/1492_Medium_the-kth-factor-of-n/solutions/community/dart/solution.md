# Simple and fastest constant space and linear time

**Author:** jesbin66
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-kth-factor-of-n/solutions/4998553/](https://leetcode.com/problems/the-kth-factor-of-n/solutions/4998553/)

---

# Approach
checking every numbers form 1 to n/2 and if n mod by number is zero then subtracting k by one and it will work until k=0 if this statement comes true then returning that number or go till i get greater or equal to n/2 and end the loop if k = 1 then return n as n is kth smallest factor of n or return -1 .

# Complexity
- Time complexity:
O(n) in worst case while loop can work upto n . N in the given input 

- Space complexity:
O(1)

# Code
```
class Solution {
  int kthFactor(int n, int k) {
    int i = 0,l = n~/2;
    while(i<=l){
      if(n%++i==0&&--k==0) return i;
    }
    if(k==1) return n;
    return -1;
  }
}
```