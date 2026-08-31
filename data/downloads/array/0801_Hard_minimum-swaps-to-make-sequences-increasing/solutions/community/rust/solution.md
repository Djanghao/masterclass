# C++ & Rust: One Pass Scan Counting Greedy O(N)

**Author:** xiaoping3418
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/1302319/](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/1302319/)

---

The reasining is pretty much the same essentially as most other post. 
1) Let n be the lenth of the arrays and count be the number of swaps of a way to make both arrays strictly incresing. Alternately, we can make n - count swaps to arcgive the same goal. Therefore, the answer is min(count, n - count).
2) As matter of fact, above conclusion is not valid if both elements at a position are greater than either elements in front of the position. One nice thing needs to be noticed is that any swap after the position has no impact. Therefore, the partial result we get up current could added to the final solution and the remaining problem could be resolved as if cuttent position is the start position.  
3) Added Rust solution on 07/16/2022    
~~~
// Rust Solution
use std::mem;

impl Solution {
    pub fn min_swap(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        let n = nums1.len();
        
        let (mut nums1, mut nums2) = (nums1, nums2);
        let (mut count, mut groupSize, mut ret) = (0, 1, 0);
        
        for i in 1..n {
            if nums1[i - 1].max(nums2[i - 1]) < nums1[i].min(nums2[i]) {
                ret += count.min(groupSize - count);
                count = 0;
                groupSize = 1;
            } else {
                groupSize += 1;
                if nums1[i - 1] <= nums1[i] && nums2[i - 1] <= nums2[i] { continue; }
                
                mem::swap(&mut nums1[i], &mut nums2[i]);
                count += 1;
				
                if i == n - 1 { ret += count.min(groupSize - count); } 
            }
        }
        
        ret
    }
}

// C++ Solution
class Solution {
public:
    int minSwap(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size(), count = 0, groupSize = 1, ret = 0;
        for (int i = 1; i < n; ++i) {
            int &a = nums1[i - 1], &b = nums2[i - 1], &c = nums1[i], &d = nums2[i]; 
            if (max(a, b) < min(c, d)) {
                ret += min(groupSize - count, count);
                count = 0;
                groupSize = 1;
            } else {
                ++groupSize;
                if (a >= c || b >= d) {
                    swap(c, d);
                    ++count;
                }
				if (i == n - 1) ret += min(count, groupSize - count); 
            };
        }
        return ret;
    }
};
~~~