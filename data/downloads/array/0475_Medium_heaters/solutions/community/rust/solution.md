# simple solution using binary search (we sort the heaters positions first) | RUST^tm

**Author:** garbagedevvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/heaters/solutions/3968081/](https://leetcode.com/problems/heaters/solutions/3968081/)

---

# Code
```
impl Solution {
    pub fn find_radius(houses: Vec<i32>, heaters: Vec<i32>) -> i32 {
        let mut rad: i32 = i32::MIN;
        
        
        let mut sorted_heaters: Vec<i32> = heaters;
        sorted_heaters.sort_by(|a,b| a.cmp(b));
        // println!("heaters:{:?}", sorted_heaters);

        // the intiutions is finding the nearest heater for each house, and then calculating the distance between them, after that we find the highest near-heater-distance-to-house. 

        for i in 0..houses.len() {
            let close_heater: i32 = Self::bin_search_close(&sorted_heaters, houses[i]);
            if (close_heater - houses[i]).abs() > rad {
                rad = (close_heater-houses[i]).abs();
            }
        }

        rad
    }
    pub fn bin_search_close(pos_vec: &Vec<i32>, pos: i32) -> i32 {
        if pos_vec.len() == 1 {return pos_vec[0]}
        let mut l: usize = 0;
        let mut r: usize = pos_vec.len()-1;

        while l < r {
            let m: usize = (l+r)/2;
            if pos_vec[m] < pos {
                l = m + 1;
                continue;
            }
            r = m;
        }
        if l > 0 &&(pos_vec[l] - pos).abs() > (pos_vec[l-1] - pos).abs() {
            return pos_vec[l-1];
        } 
        pos_vec[l]
    }
}
```