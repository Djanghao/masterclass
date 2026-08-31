# TS Solution

**Author:** GennadySX
**Votes:** 0
**Link:** [https://leetcode.com/problems/race-car/solutions/4623560/](https://leetcode.com/problems/race-car/solutions/4623560/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function racecar(target: number): number {
    let q: [number, [number, number]][] = [[0, [0, 1]]];
    let vis = new Set<string>();
    while (q.length > 0) {
        let [move, [position, speed]] = q.shift()!;
        if (target === position) return move;
        if (vis.has(`${position},${speed}`)) continue;
        else {
            vis.add(`${position},${speed}`);
            q.push([move + 1, [position + speed, speed * 2]]);
            if ((position + speed > target && speed > 0) || (position + speed < target && speed < 0)) {
                if (speed > 0) speed = -1;
                else speed = 1;
                q.push([move + 1, [position, speed]]);
            }
        }
    }
    return -1;
}
```