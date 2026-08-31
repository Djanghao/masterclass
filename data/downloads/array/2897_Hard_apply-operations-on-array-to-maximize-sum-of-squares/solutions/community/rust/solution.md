# 11ms

**Author:** janquo
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/solutions/4167764/](https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/solutions/4167764/)

---

```
impl Solution {
    pub fn max_sum(nums: Vec<i32>, k: i32) -> i32 {
        // *algebra* : the operation always (weakly) increases sum of squares
        // -> there is always a saturation after finite number of operations
        // Q : does order of operations change the outcome?
        // * whoops, the operation is not commutative BUT
        // the operation preserves number of set bits at given position across the array (1)
        // A: yes
        //  - the final form always contains OR of all numbers which is the same in all outcomes
        //  - we can remove it, resulting thing is saturated
        //  - and hence also contains OR of all its numbers
        //  - in all outcomes the sum of bits set at given position across the array is same after removal
        //  - so this number is the same in all outcomes and we can remove it
        //  - proceeding with the removals we arrive at empty array eventually, proving that all outcomes 
        //       are the same

        // So we can just apply the operation until saturation, pick k biggest numbers and we are done.
        // However detecting saturation is like quadratic.
        // So there surely is a better way
        // Just use (1) !!
        // We construct final values by greedily taking as much bit as there are left.

        // count bits at each position (little endian)
        // we take 31 bits as the bit 32 is the sign bit
        let mut counts = [0; 31];
        for x in nums {
            for i in 0..31 {    
                counts[i] += ((1 << i) & x != 0) as usize;
            }
        }
        
        let mut sum = 0i64;
        let p = 10i64.pow(9) + 7;

        for j in 0..k as usize {
            let mut x = 0;
            for i in 0..31 {
                x = x << 1;
                x += (counts[30 - i] > j) as i64;
            }
            sum += x * x;
            sum %= p;
        }

        sum as i32
    }
}
```