# Counting sort based solution

**Author:** germanov_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/friends-of-appropriate-ages/solutions/5490278/](https://leetcode.com/problems/friends-of-appropriate-ages/solutions/5490278/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(121)$$

# Code
```
impl Solution {
    pub fn num_friend_requests(ages: Vec<i32>) -> i32 {
        let mut hash = vec![0;121];
        for age in &ages { hash[*age as usize] +=1;}
        ages.iter().fold(0,|mut result,age| {            
            for start in *age as usize / 2  + 8..*age as usize+1 {
                if start == *age as usize {
                    result += hash[start] - 1;
                } else {
                    result += hash[start];
                }
            }
            result                                      
        }) as i32
    }
}
```