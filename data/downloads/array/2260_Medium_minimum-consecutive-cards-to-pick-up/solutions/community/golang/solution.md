# Go - Sliding window - O(n) hashmap

**Author:** tuanbieber
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/2175165/](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/2175165/)

---

```
func minimumCardPickup(cards []int) int {
    if len(cards) == 0 || len(cards) == 1 {return -1}
    
    res := 1 << 63 - 1
    
    m := make(map[int]int)
    m[cards[0]]++
    l := 0
    
    for i := 1; i < len(cards); i++ {
        m[cards[i]]++
        
        checking := false
        
        for m[cards[i]] > 1 {
            checking = true
            m[cards[l]]--
            
            if m[cards[l]] == 0 {
                delete(m, cards[l])
            }
            
            l++
        }
        
        if checking {
            if i - l + 2 < res {
                res = i - l + 2
            }
        }
    }
    
    if res != 1 << 63 - 1 {
        return res
    }
    
    return -1
}
```