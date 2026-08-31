# 🤗 Elegant, Maintainable, Human Readable Solution

**Author:** stazcp
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-crossing/solutions/3678776/](https://leetcode.com/problems/path-crossing/solutions/3678776/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use a Set for O(1) search of elements.
# Approach
<!-- Describe your approach to solving the problem. -->
Store each visited location into our `been` `Set`, my `delta` is my coordinates. 

`delta[0]` is East & West, East is negative, West positive. 
`delta[1]` is North & South, North is positive, South is Negative.

Keep starting position in Set, if we visit the same spot again return true.

If you want higher performance score use your own hashing/stringing function instead of `.toString()`.

Like 
```
const makeString = (delta) => `${delta[0]},${delta[1]}`
```


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function isPathCrossing(path: string): boolean {
    const been = new Set(['0,0'])
    let delta = [0,0]
    for(let i = 0; i < path.length; ++i){
        switch (path[i]) {
            case 'N':
                delta = [delta[0], delta[1]+1]
                break
            case 'S':
                delta = [delta[0] , delta[1] - 1]
                break
            case 'E':
                delta = [delta[0] - 1 , delta[1]]
                break
            case 'W':
                delta = [delta[0] + 1, delta[1]]
        }
        if(been.has(delta.toString())) return true
        been.add(delta.toString())
    }


    return false
};
```