# JavaScript | two pointers | O(n)

**Author:** Zhe1ka
**Votes:** 2
**Link:** [https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/2513379/](https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/2513379/)

---

when you recognise that MAX distance is between first or the last item/house and some another you will find a solution very fast without using nested loops or Math.min/Math.max methods 
```
function maxDistance(colors: number[]): number {
    const mostLeft = colors[0];
    const mostRight = colors[colors.length - 1];
    let maxDistance = 0;
    
    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        
        if (color !== mostLeft && maxDistance < i) {
            maxDistance = i;
        }
        
        if (color !== mostRight && maxDistance < colors.length - 1 - i) {
            maxDistance = colors.length - 1 - i;
        }
    }
    
    return maxDistance;
};