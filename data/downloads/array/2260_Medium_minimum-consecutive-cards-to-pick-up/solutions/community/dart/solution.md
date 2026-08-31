# BEATS 100% DART Solution

**Author:** Mohamed_Sadeck
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/4934594/](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/4934594/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)

# Code
```
class Solution {
  int minimumCardPickup(List<int> cards) {
    int ans=cards.length+1;
    Map<int,int> map = {};
    for(int i=0;i<cards.length;i++){
        if(!map.containsKey(cards[i])){
            map[cards[i]]=i;
        }else{
            ans=min(ans,i-map[cards[i]]!+1);
            map[cards[i]]=i;
        }
    }
    return ans>cards.length?-1:ans;
  }
}
```