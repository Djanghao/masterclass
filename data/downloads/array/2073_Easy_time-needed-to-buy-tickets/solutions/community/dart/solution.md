# Dart | Array | O(N) Time | 100% |

**Author:** WarMac4964
**Votes:** 1
**Link:** [https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4995962/](https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4995962/)

---

# Complexity
- Time complexity: O(N)

- Space complexity: O(1)

# Code
```
class Solution {
  int timeRequiredToBuy(List<int> tickets, int k) {
    int result = 0;
    
    for(int i=0;i<tickets.length;i++){
        if(i <= k){
            result += min(tickets[k], tickets[i]);
        }else{
            result += min(tickets[k]-1, tickets[i]);
        }
    }
    
    return result;
  }
}
```