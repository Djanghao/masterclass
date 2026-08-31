# Rust: Simple Solution with Loop

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/2260534/](https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/2260534/)

---

~~~
impl Solution {
    pub fn latest_time_catch_the_bus(buses: Vec<i32>, passengers: Vec<i32>, capacity: i32) -> i32 {
        let mut b = buses;
        let mut p  = passengers;
        let n = p.len();
		
		// cnt: passenger counter of current bus;
		// last: arriving time of last passenger
		// ret: return value
        let (mut cnt, mut last, mut ret) = (0i32, 0i32, 1i32);
        
		// sort buses in reverse order so that the bus at the end will be the next to leave 
        b.sort();
        b.reverse();
        p.sort();
        
        for i in 0..n {
		    // empty buses that no body can catch?
            while b.is_empty() == false && p[i] > b[b.len() - 1] {
                ret = b[b.len() - 1];
                b.pop();
            }
            if b.is_empty() { break; }
            // beat the current passenger
			if last < p[i] - 1 { ret = p[i] - 1; }
            last = p[i];
			
			// current passenger is boarding the bus
            cnt += 1;
            if i == n - 1 || cnt == capacity || p[i + 1] as i32 > b[b.len() - 1] {
                // there is an empty seat for arriving at bus leaving time
				if cnt < capacity {
                    if p[i] < b[b.len() - 1] { ret = b[b.len() - 1]; }
                }
                b.pop();                
                cnt = 0;
            }
        }
        // last bus in open
        if b.is_empty() == false { return b[0] }
        ret
    }
}
~~~