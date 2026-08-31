# Not a stupid problem!

**Author:** kamisamaaaa
**Votes:** 131
**Link:** [https://leetcode.com/problems/count-collisions-on-a-road/solutions/1865557/](https://leetcode.com/problems/count-collisions-on-a-road/solutions/1865557/)

---

**Similar Question :-** [ https://leetcode.com/problems/asteroid-collision/]
**C++ Solution**

```
class Solution {
public:
    int countCollisions(string dir) {
        
        int res(0), n(size(dir)), i(0), carsFromRight(0);
        
        while (i < n and dir[i] == 'L') i++; // skipping all the cars going to left from beginning as they will never collide
        
        for ( ; i<n; i++) {
            if (dir[i] == 'R')  carsFromRight++;
            else {
                // if dir[i] == 'S' then there will be carsFromRight number of collission
                // if dir[i] == 'L' then there will be carsFromRight+1 number of collision (one collision for the rightmost cars and carsFromRight collision for the cars coming from left)
                res += (dir[i] == 'S') ? carsFromRight : carsFromRight+1;
                carsFromRight = 0;
            }
        }
        return res;
    }
};
```

**Java Solution**

```
class Solution {
    public int countCollisions(String dir) {
        
        int res = 0, n = dir.length(), i = 0, carsFromRight = 0;
        
        while (i < n && dir.charAt(i) == 'L') i++;
        
        for ( ; i<n; i++) {
            if (dir.charAt(i) == 'R')  carsFromRight++;
            else {
                res += (dir.charAt(i) == 'S') ? carsFromRight : carsFromRight+1;
                carsFromRight = 0;
            }
        }
        return res;
    }
}
```
**Python Solution**
```
class Solution:
    def countCollisions(self, directions: str) -> int:
        
        res, n, i, carsFromRight = 0, len(directions), 0, 0
        
        while i < n and directions[i] == 'L':
               i+=1
        
        while i<n:
            if directions[i] == 'R':
                carsFromRight+=1
            else:
                res += carsFromRight if directions[i] == 'S' else carsFromRight+1;
                carsFromRight = 0
            i+=1
                
        return res
```
**Upvote if it helps :)**