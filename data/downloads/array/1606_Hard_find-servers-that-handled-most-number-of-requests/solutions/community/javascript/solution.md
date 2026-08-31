# Slow ass Javascript

**Author:** rockwell153
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/876972/](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/876972/)

---

I imagine the area this needs to be optimized is finding the correct server, but not sure how to approach that

```

const busiestServers = ( k, arrival, load ) => {
    
    // keep track of how many requests each server handled
    const handled = Array(k).fill(0)
    
    // keep track of when each server will be available again
    const servers = Array(k).fill(0)
    
    // finds the ideal available server
    // i think there's an optimization here but not clue how to approach it
    const findserver = ( i, t ) => {
        let j = i % k
        if ( servers[j] <= t ) return j

        for ( let l = j + 1; l < k; l++ ) {
            if ( servers[l] <= t ) return l
        }
        for ( let l = 0; l < j; l++ ) {
            if ( servers[l] <= t ) return l
        }
        
        return false
    }
    
    let max = 0
    arrival.forEach( ( time, i ) => {

        // find available
        let serverIndex = findserver( i, time )
        if ( false === serverIndex ) return
        
        // add load
        handled[ serverIndex ]++
        max = Math.max( max, handled[ serverIndex ] )
        servers[ serverIndex ] = time + load[i]
    })

    return handled.reduce( ( a, x, i ) => x == max ? a.push( i ) && a : a, [] )
}

```