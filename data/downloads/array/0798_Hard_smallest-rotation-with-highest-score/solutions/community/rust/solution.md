# Delta arrays

**Author:** a_muzam
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/4471113/](https://leetcode.com/problems/smallest-rotation-with-highest-score/solutions/4471113/)

---


Since we are rotating to the left, each number changes the total score twice:

(-1) i == x-1
(+1) i == len(nums)-1
We can use this to determine, for each number, at what k's the total score would change.

Then we iterate over the changes depending on k to find the maximum possible score.

Finding the formula for number of left-rotations to reduce the value ( ((i+n)-(x-1))%n) took a while with pen and paper.
I don't expect that you find it intuitive.



# Code
```
impl Solution {
    pub fn best_rotation(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let mut deltas = vec![0; n];
        let mut score: i32 = 0;
        
        nums.iter().enumerate().for_each(|(i, x)| {
            let x = *x as usize;
            deltas[((i+n)-(x-1))%n]-=1;
		    deltas[(i+1)%n]+=1;
            if x <= i {
                score+=1;
            }
        });
        let mut max_score = score;
        let mut max_idx: i32 = 0;
        for k in 1..n {
            score += deltas[k];
            if score > max_score {
                max_score = score;
                max_idx = k as i32;
            }
        }
	    max_idx
    }
}
```