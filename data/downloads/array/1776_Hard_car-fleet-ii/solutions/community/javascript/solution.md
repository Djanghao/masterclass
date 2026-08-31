# JavaScript Stack Solution w/ explanation

**Author:** stevenkinouye
**Votes:** 4
**Link:** [https://leetcode.com/problems/car-fleet-ii/solutions/1086204/](https://leetcode.com/problems/car-fleet-ii/solutions/1086204/)

---

Credit to lee215: https://leetcode.com/problems/car-fleet-ii/discuss/1085987/JavaC%2B%2BPython-O(n)-Stack-Solution

I couldn't figure this out.  I'm just writing this to help those that code in JavaSript as well as to teach to help strengthen the knowledge gained.

The idea is that to find the car which each car will bump into first.
There are a few things that we know (in this example I will use cars `[a, b, c, d, e]`):
* `a` can hit `b`, `c`, `d`, and `e`
* `a` can either hit `b` before `b` hits any other car or after
* If `a` hits `b` before `b` hits any other car, then the calculation is the distance from `a` to `b` divided by the difference in speeds
* If `a` hits `b` after `b` hits `c`, `a` is really hitting `c` because once `b` collides with `c` `b` becomes `c`'s speed
* Utilizing the knowledge from the bullet above, if `a` hits `b` or `c` after `b` or `c` hits `d`, `a` is really hitting `d`
* If there are no cars available to be hit then the result for that car is -1.
```javascript
var getCollisionTimes = function(cars) {
    // create a stack to hold all the indicies of the cars that can be hit
    const possibleCarsToHit = [];
    const result = new Array(cars.length).fill(-1);
	
    for (let i = cars.length - 1; i >= 0; i--) {
	
	    // if there are cars to hit, check if the current car will hit the car before or after hitting
		// the car in front of them
		// you can also think of this as if the current car will hit the car before or after being absorbed by
		// the slower car in front.
        while (possibleCarsToHit.length && result[possibleCarsToHit[possibleCarsToHit.length - 1]] >= 0) {
            const nextCarIndex = possibleCarsToHit[possibleCarsToHit.length - 1];
            const timeToCatchNextCar = 
                getTimeToCatchNextCar(cars[i], cars[nextCarIndex]);
            const timeToCatchNextNextCar = result[nextCarIndex];
            if (timeToCatchNextCar > 0 && 
                timeToCatchNextCar <= timeToCatchNextNextCar) {
				break;
			}
			
			// pop off the stack because the car was absorbed by the next car
			// before getting hit by the current car
            possibleCarsToHit.pop();
        }
        if (possibleCarsToHit.length) {
            const nextCarIndex = possibleCarsToHit[possibleCarsToHit.length - 1];
            result[i] = getTimeToCatchNextCar(cars[i], cars[nextCarIndex]);
        }
        possibleCarsToHit.push(i);
    }
    return result;
};
    
    
function getTimeToCatchNextCar(leftCar, rightCar) {
    const [leftCarPosition, leftCarSpeed] = leftCar
    const [rightCarPosition, rightCarSpeed] = rightCar;
    const distanceToCatchCar = rightCarPosition - leftCarPosition;
    const differenceInSpeed = leftCarSpeed - rightCarSpeed;
    return differenceInSpeed > 0 ? distanceToCatchCar / differenceInSpeed : -1;
}
```