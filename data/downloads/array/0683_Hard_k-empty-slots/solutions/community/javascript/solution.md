# Sliding Window

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-empty-slots/solutions/6112322/](https://leetcode.com/problems/k-empty-slots/solutions/6112322/)

---

**Note:** **We need to find exactly k empty slots bewteen two blooming flowers**

1. Convert days list with 0-indexed
2. Start left = 0 and right  = k + 1 as we want k slots bewteen these two
3. Iterate until  right < days.length
4. Check the range that k slots are available in left & right
5. When i is right, we get the exact k slots

--

```javascript []
function kEmptySlots(flowers, k) {
    const days = new Array(flowers.length);
    
    // Convert position to days (0-indexed)
    for(let i = 0; i < flowers.length; i++) {
        days[flowers[i] - 1] = i + 1;
    }
    
    let left = 0;
    let right = k + 1;  // We want K gaps between left & right
    let res = Infinity;
    
    for(let i = 0; right < days.length; i++) {
        if(days[i] < days[left] || days[i] <= days[right]) {
            // We have found k gaps
            if(i === right) {
                res = Math.min(res, Math.max(days[left], days[right]));
            }
            left = i;
            right = k + 1 + i;  //Next Window
        }
    }
    
    return res === Infinity ? -1 : res;
}
```