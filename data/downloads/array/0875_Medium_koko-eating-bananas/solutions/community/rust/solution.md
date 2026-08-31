# [Python3/Golang/Rust] Binary search

**Author:** frolovdmn
**Votes:** 7
**Link:** [https://leetcode.com/problems/koko-eating-bananas/solutions/3208566/](https://leetcode.com/problems/koko-eating-bananas/solutions/3208566/)

---

**Python3**:
```
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        left, right = 1, max(piles)
        
        while left < right:
            mid = (left + right) // 2
            hours = 0
            
            for pile in piles:
                hours += ceil(pile / mid)
                
            if hours <= h:
                right = mid
            else:
                left = mid + 1
            
        return right
```
**Golang**:
```
func minEatingSpeed(piles []int, h int) int {
    left, right := 1, max(piles)
    
    for left < right {
        mid := (left + right) / 2
        hours := 0
        
        for _, pile := range(piles) {
            hours += int(math.Ceil(float64(pile) / float64(mid)))
        }
        
        if hours <= h {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return right
}

func max(arr []int) int {
    max := arr[0]
    
    for _, val := range(arr) {
        if max < val {
            max = val
        }
    }
    return max
}
```

**Rust**:
```
impl Solution {
    pub fn min_eating_speed(piles: Vec<i32>, h: i32) -> i32 {
        let mut left: i32 = 1;
        let mut right: i32 = *piles.iter().max().unwrap();
        
        while left < right {
            let mid: i32 = (left + right) / 2;
            let mut hours: i32 = 0;
            
            for pile in &piles {
                hours += (*pile as f64 / mid as f64).ceil() as i32
            }
            
            if hours <= h {
                right = mid
            } else {
                left = mid + 1
            }
        }
        return right
    }
}
```