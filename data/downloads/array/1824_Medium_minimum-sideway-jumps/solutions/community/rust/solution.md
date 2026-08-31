# rust 25ms

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sideway-jumps/solutions/4875997/](https://leetcode.com/problems/minimum-sideway-jumps/solutions/4875997/)

---

![image.png](./images/0.png)

# Approach
dp, store minimum side jumps needed. If point[i] is the same as point[i-1], we don't need to do anything. If one point in point[i] and point[i-1] has no obstacle, the situation is trivial.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn min_side_jumps(obstacles: Vec<i32>) -> i32 {
        let mut prev=vec![1,0,1];
        let M=std::i32::MAX-1;
        for i in 1..obstacles.len(){
            if obstacles[i]==obstacles[i-1]{continue;}
            if obstacles[i-1]==0{
                prev[obstacles[i] as usize -1]=M;
            }else if obstacles[i]==0{
                prev[obstacles[i-1] as usize -1]=std::cmp::min(prev[0], std::cmp::min(prev[1], prev[2]))+1;
            }else{
                prev[obstacles[i] as usize -1]=M;
                prev[obstacles[i-1] as usize -1]=prev[(6-obstacles[i]-obstacles[i-1]) as usize -1]+1;
            }
            //println!("{:?}",prev);
        }
        prev.into_iter().min().unwrap()
    }
}
```