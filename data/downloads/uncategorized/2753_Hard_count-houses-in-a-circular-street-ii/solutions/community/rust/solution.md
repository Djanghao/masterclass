# Rust Solution

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-houses-in-a-circular-street-ii/solutions/3698223/](https://leetcode.com/problems/count-houses-in-a-circular-street-ii/solutions/3698223/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Loop the houses alone the cycle up to 2 * k times. Therefore, we will visit every house at least twice.
Leave the door open on the very first house we see with door open and close the open door after that.
The last house that we closed the door was the first house we left the door open.   
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(K)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(!)
# Code
```
/**
 * Definition for a street.
 * impl Street {
 *     pub fn new(doors: Vec<i32>) -> Self {}
 *     pub fn close_door(&mut self) {}
 *     pub fn is_door_open(&self) -> bool {}
 *     pub fn move_right(&mut self) {}
 * }
 */
impl Solution {
    pub fn house_count(mut street: Street, k: i32) -> i32 {
        let (mut first, mut ret) = (-1, 0);
        
        for i in 0 .. 2 * k {
            if street.is_door_open() {
                if first == -1 { first = i }
                else {
                    street.close_door();
                    ret = i - first;
                } 
            }
            street.move_right();
        }

        ret
    }
}
```