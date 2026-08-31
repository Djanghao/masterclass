# JS, TS | Simple Sort Solution

**Author:** orichh
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-units-on-a-truck/solutions/1686498/](https://leetcode.com/problems/maximum-units-on-a-truck/solutions/1686498/)

---

```
function maximumUnits(boxTypes: number[][], truckSize: number): number {
    
    boxTypes.sort((a,b) => (b[1] - a[1]))
    
    let total = 0
    let i = 0

    while (truckSize && i < boxTypes.length) {
        let [count, units] = boxTypes[i];
        if (count < truckSize) {
            total += count * units
            truckSize -= count
        } else {
            while (count && truckSize) {
                total += units;
                count--;
                truckSize--;
            }
        }
        i++;
    }
    
    return total
};
```