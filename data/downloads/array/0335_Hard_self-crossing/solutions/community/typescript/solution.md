# [Time & Memory O(n)] Simple Typescript Solution

**Author:** jhw123
**Votes:** 0
**Link:** [https://leetcode.com/problems/self-crossing/solutions/2261111/](https://leetcode.com/problems/self-crossing/solutions/2261111/)

---

I referred to [this answer post by StefanPochmann](https://leetcode.com/problems/self-crossing/discuss/79141/Another-python...). The figure below is also from the post. I am posting this because I could not find Typescript code on the discussion thread and I thought the Python code on the original post is a little difficult to understand for the people who are not familiar with Python (like me).

### Idea

There are two cases (Case 1 and Case 2) for self-crossing. We only need to check if any of these cases appears in any consecutive 6 line drawings. 
Since the lines are drawn in anti-clockwise and the cases can be defined by relative length and positions of lines, we do not need to consider the absolute coordinates nor orientation of the lines while checking this; we can just assume `a` starts at (0, 0) and moves towards North.

```
Case 1                         Case 2
            b                              b
   +----------------+             +----------------+
   |                |             |                |
   |                |             |                | a
 c |                |           c |                |
   |                | a           |                |    f
   +----------->    |             |                | <----+
            d       |             |                |      | e
                    |             |                       |
                                  +-----------------------+
                                               d
```

### Complexity

Time: `O(n)`
Space: `O(1)`

where `n=distance.length`

```typescript
function isSelfCrossing(distance: number[]): boolean {
    // omit the line at i=distance.length because it is always self-crossing.
    for (let i=0; i<distance.length-1; i+=1) {
        const a = distance[i]
        const b = distance[i+1] ?? 0
        const c = distance[i+2] ?? 0
        const d = distance[i+3] ?? 0
        const e = distance[i+4] ?? 0
        const f = distance[i+5] ?? 0
		// Case 1
        if (c <= a && b <= d) {
            return true
        }
		// Case 2
        if (a < c && c <= a + e && e <= c && b <= d && d <= b + f) {
            return true
        }
    }
    
    return false
};
```