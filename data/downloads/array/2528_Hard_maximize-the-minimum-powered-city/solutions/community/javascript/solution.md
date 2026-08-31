# Binary Search + Greedy | Detailed Explanation

**Author:** humflelump
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/3014982/](https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/3014982/)

---

# Intuition
The first thing I did was to think of the input as an array of ***power*** rather than power stations.

For example, if your input is:

```
stations = [1,2,4,5,0], r = 1, k = 2
```

then you can calculate power to be

```
power = [3,7,11,9,5]
```

From here you can guess a maximum power, then check if it is achievable

For example

```
power = 3: Achievable by doing nothing
power = 4: Achievable by adding 1 station at i=1
power = 5: Achievable by adding 2 stations at i=1
power = 6: NOT Achievable because k < 4
```

As you can see 5 is the highest value that is still achievable, therefore it is the answer. This hopefully screams at you to do a binary search optimization so you only have to do log(n) checks.

# Approach

So with that general strategy, we just need an efficient algorithm for computing if a given max power is achievable or not.

This will require a greedy algorithm. Let's loop through the array of cities.

If the current power of a city is already greater than the required power, do nothing. However if the current power is less than what is needed, we need to add `goal - currPower` stations somewhere. So where do you add them? Well, one option is at the current city `i`. But we can do better! If we add the stations at `i + r`, we not only benefitting the current city, but also as many other potentially needy cities as possible.  

The next challenge is actually computing the power at a given city. If this is done naiively, you will have to sum up around `2r` numbers each time. This isn't efficient enough. A better approach is a rolling two pointer algorithm. Everytime you move to a new city `currSum += power[i + r]` and `currSum -= power[i - r]`.

With these techniques, we are ready to start coding! 

# Code

```js
var maxPower = function(stations_, r, k) {
    // Returns 0 if the goal is acheivable, 1 if not.
    // The answer is the goal which returned the last zero
    // This is best calculated with binary search
    function check(goal) {
        let additions = 0;
        let stations = [...stations_]; // mutable clone of the stations
        let [i, j] = [-r, r]; // the current window
        let currPower = _.sum(stations.slice(0, j + 1)); // sum within the current window
        for (const station of stations) {
            if (currPower < goal) {
                // we need to add power stations at k + r
                // we also need to update currPower and additions
                const delta = goal - currPower;
                additions += delta
                currPower += delta
                stations[Math.min(j, stations.length - 1)] += delta;
            }
            // keep track of the rolling sum
            j++
            currPower += ( stations[j] || 0)
            currPower -= ( stations[i] || 0)
            i++
        }
        return additions <= k ? 0 : 1;
    }
    
    // binary search to find last achievable goal
    const max = _.sum(stations_) + k;
    return lastIndexLessThan(1, 0, max, check);
};

// Handy Reusable Binary Search Function
function lastIndexLessThan(val, a, b, f = (i) => i) {
    if (a > b) return null;
    if (f(a) >= val) return null;
    if (f(b) < val) return b;
    
    while (a <= b) {
        const mid = Math.floor(a / 2 + b / 2);
        if (f(mid) < val) {
            a = mid + 1;
            if (f(a) >= val) {
                return mid;
            }
        } else {
            b = mid - 1;
            if (f(b) < val) {
                return b;
            }
        }
    }
}
```

# Complexity
n = len(stations)
max = sum(stations) + k
- Time complexity: $$O(n log(max))$$
- Space complexity: $$O(n)$$