# JavaScript and Rust solution

**Author:** svolkovichs
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-impossible-or/solutions/3207641/](https://leetcode.com/problems/minimum-impossible-or/solutions/3207641/)

---

# Intuition
We need to find first number which is power of 2 and not presented in the array. If we have 1 and 2 we can build 3. If we have 1 2 and 4 we can build 3, 5, 6 and 7 etc. 

# Approach
Move all the numbers from array into set. Iterate powers of 2 unitill first not presented in the array.

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
**JavaScript**
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var minImpossibleOR = function(nums) {
    let set = new Set()
    for(let i = 0; i < nums.length; i++){
        set.add(nums[i])
    }
    
    for (let i = 0; i <= 32; i++){
        let num = Math.pow(2, i)
        if(!set.has(num)){
            return num
        }
    }
    
};
```
**Rust**
```
impl Solution {
    pub fn min_impossible_or(nums: Vec<i32>) -> i32 {
        let mut set = std::collections::HashSet::new();
        for num in nums.iter() {
            set.insert(num);
        }
        
        for n in 0..=32 {
            let num:i32 = 2i32.pow(n);
            if(!set.contains(&num)){
                return num;
            }
        }
        return -1;
    }
}
```
