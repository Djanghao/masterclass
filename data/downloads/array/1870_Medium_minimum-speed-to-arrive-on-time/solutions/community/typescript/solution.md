# Optimized binary search solution. Fast and short code. O(n)

**Author:** badnewz
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3820686/](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3820686/)

---

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)

# Code
```
function minSpeedOnTime(dist: number[], hour: number): number {

    const n = dist.length; if ( n - 1 >= hour ) return -1;

// calculate upper speed range
    const maxSpeed = Math.max( ...dist, hour === ( hour | 0 ) ? 0 : Math.ceil( dist[ n - 1 ] / ( hour - n + 1 ) ) );
    let l = 1, r = maxSpeed;

// validation function: to check if we can get on time at current speed
    const isValid = ( speed: number ): boolean => {
        let res = 0;
        for ( let i = 0; i < n - 1; i++ )
            if ( ( res += Math.ceil( dist[ i ] / speed ) ) > hour )
                return false;
        return ( res + dist[ n - 1 ] / speed ) <= hour;
    }
    
// binary search
    while ( l <= r ) {
        const m = ( l + r ) >>> 1;
        if ( isValid( m ) ) r = m - 1
        else l = m + 1;
    }
    return l;
};
```