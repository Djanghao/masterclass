# Math Solution

**Author:** Tuan_Tea
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/5223634/](https://leetcode.com/problems/minimum-moves-to-reach-target-score/solutions/5223634/)

---

# Intuition
Math
# Approach
Math

# Complexity
- Time complexity:
O(logn)

- Space complexity:
O(1)

# Code
```
public class Solution {
    public int MinMoves(int target, int maxDoubles) {
        if(target==1) return 0;
        int count=0,i;
        for(i=0;i<maxDoubles;i++){
            if(target%2==1) count++;
            target=target/2;
            count++;
            if(target<4) {
                i++;
                break;
            }
        }
        return count+target-1;
    }
}
```