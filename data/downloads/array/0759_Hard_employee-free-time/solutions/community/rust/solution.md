# Rust Sort

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/employee-free-time/solutions/2831201/](https://leetcode.com/problems/employee-free-time/solutions/2831201/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Just combine all schedule into one vector & sort them in the order of start time.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N & Log N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
/*
// Definition for an Interval.
#[derive(PartialEq, Eq, Clone, Debug)]
struct Interval {
    pub start:i32,
    pub end:i32
}

impl Interval {
    #[inline]
    fn new(start:i32, end:i32) -> Self{
        Interval {
            start,
            end
        }
    }
}
*/

impl Solution {
    pub fn employee_free_time(schedule: Vec<Vec<Interval>>) -> Vec<Interval> {
        let mut data = vec![];

        for s in schedule {
            for p in s { data.push((p.start, p.end)); }
        } 
        data.sort();

        let mut last = data[0].1;     
        let mut ret = vec![];
        
        for d in data {
            if d.0 > last { ret.push(Interval::new(last, d.0)); }
            last = last.max(d.1); 
        }

        ret
    }
}
```