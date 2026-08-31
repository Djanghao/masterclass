# Javascript / Typescript O(n) time O(1) space. With detailed explanation

**Author:** georgiiperepechko
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-collisions-on-a-road/solutions/1865844/](https://leetcode.com/problems/count-collisions-on-a-road/solutions/1865844/)

---

There are 3 types of _initial_ collisions: 'RL', 'RS' and 'SL';
The core idea is whenever there is an initial collision we basically view it as a "sink": all cars heading this way will collide.

Example:
```
RRRRRRLSSSSLS
     ||   ||
	 collisions happens here
	<  > <  > - cars heading here from left and right would be affected
```


```
function countCollisions(directions: string): number {
    let count = 0;
    for (let i = 0; i < directions.length; i++) {
        const window = directions[i] + directions[i+1]; // these are 2 cars we're looking at right now

        if (window === 'RL') {
            count += 2;
        } else if (window === 'RS' || window === 'SL') {
            count += 1;
        } else continue; // if it's not an initial collision, we just ignore it
        
		// but if it is, we continue checking outwards and adding to the count (all these collisions are worth 1 since collided cars become S)
        let tempI = i;
        while(directions[--tempI] === 'R') count ++;
		tempI = i + 1;
        while(directions[++tempI] === 'L') count ++;
		
		// finally we can skip all the cars we've already reviewed: we already counted them as a part of the collision
        i = tempI - 1;
    }
    return count;
};
```

Time complexity should be `O(n)` since we'd look at each car 3 times at the most:
- 1st time checking if it's an initial collision
- 2nd and 3rd time checking if the car is heading towards the initial collision point

Space complexity is const (we only store `count`, `i`, `tempI` and `window`)