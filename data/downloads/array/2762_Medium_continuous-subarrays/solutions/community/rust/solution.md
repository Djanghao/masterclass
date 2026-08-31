# Rust clean Deque

**Author:** anurag852001
**Votes:** 0
**Link:** [https://leetcode.com/problems/continuous-subarrays/solutions/6144731/](https://leetcode.com/problems/continuous-subarrays/solutions/6144731/)

---

	use std::collections::VecDeque;

	impl Solution {
    pub fn continuous_subarrays(nums: Vec<i32>) -> i64 {
        let mut res : i64 = 0;
        let mut maxTillNow = nums[0];
        
        let mut min_deq = VecDeque::new();
        let mut max_deq  = VecDeque::new();
        let mut i = 0;
        let mut j = 0;
        
        while j < nums.len() {
            while max_deq.len()>0 && nums[*max_deq.back().unwrap()] < nums[j] {
                max_deq.pop_back();
            }
            while min_deq.len()>0 &&  nums[*min_deq.back().unwrap()] > nums[j] {
                min_deq.pop_back();
            }
            min_deq.push_back(j);
            max_deq.push_back(j);
            
            while i<j && (nums[min_deq[0]] - nums[max_deq[0]]).abs()>2{
                if min_deq[0] <=i {
                    min_deq.pop_front();
                }
                
                if max_deq[0] <= i {
                    max_deq.pop_front();
                }
                i+=1;
                
            }
            res=res+((j-i+1) as i64);
            j+=1;
        }
        res                                            
    }
	}