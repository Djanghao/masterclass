# Self explaining solution using rust

**Author:** dreward
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-candies-to-people/solutions/5603355/](https://leetcode.com/problems/distribute-candies-to-people/solutions/5603355/)

---

# Intuition
Simple solution

# Approach
Linear

# Complexity
- Time complexity:
n

- Space complexity:
n

# Code
```
impl Solution {
    pub fn distribute_candies(candies: i32, num_people: i32) -> Vec<i32> {
        let mut result:Vec<i32>=vec![0;num_people as usize];
        let mut gift=1;
        let mut candies_left=candies;
        let mut giftee=0;
        while candies_left>=gift {
            result[giftee]+=gift;
            candies_left-=gift;
            gift+=1;
            giftee=(giftee+1)%(num_people as usize);
        }
        result[giftee]+=candies_left;
        result
        
    }
}
```