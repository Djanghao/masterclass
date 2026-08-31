# 🚀All Sorting Algs in Rust: Heap Sort, Merge Sort, Shell, bubble, sort,

**Author:** astroex
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-an-array/solutions/1589476/](https://leetcode.com/problems/sort-an-array/solutions/1589476/)

---

```
//  Heap Sort 
//  Min heap 
use std::collections::BinaryHeap;
use std::cmp::Reverse;
impl Solution {
    pub fn sort_array(nums: Vec<i32>) -> Vec<i32> {
        let l = nums.len();
        let mut minheap = BinaryHeap::with_capacity(l as usize);
        nums.into_iter().for_each(|i| minheap.push(Reverse(i)));
        let mut res = Vec::new();
        while let Some(Reverse(max)) = minheap.pop() { 
            res.push(max);
            if res.len() == l { 
                break
            }
        }
        res
    }
}

//  Max heap 
use std::collections::BinaryHeap;
impl Solution {
    pub fn sort_array(nums: Vec<i32>) -> Vec<i32> {
        let mut maxheap = BinaryHeap::from(nums);
        maxheap.into_sorted_vec()
    }
}

//  Bubble Sort 
//  Time Limit Exceeded
impl Solution {
    pub fn sort_array(nums: Vec<i32>) -> Vec<i32> {
        let mut res: Vec<i32> = nums.into();
        
        for _ in 0..res.len() { 
            let mut swaps = 0;
            for i in 1..res.len() { 
                if res[i-1] > res[i] { 
                    res.swap(i -1, i);
                    swaps +=1;
                }
            }
            if swaps == 0 { 
                break;
            }
        }
        res
    }
}
// Shell Sort 
impl Solution {
    pub fn sort_array(nums: Vec<i32>) -> Vec<i32> {
        let l = nums.len();
        let mut gap = l/2;
        let mut res: Vec<i32> = nums.into();
        
        while gap > 0 { 
            for i in gap..l { 
                let tmp = res[i].clone();
                let mut j = i;
                while j >= gap && res[j - gap] > tmp { 
                    res[j] = res[j - gap].clone();
                    j -= gap;
                }
                res[j] = tmp;
            }
            gap /= 2;
        }
        res
    }
}

//  Sort unstable
impl Solution {
    pub fn sort_array(nums: Vec<i32>) -> Vec<i32> {
        let mut nums = nums;
        nums.sort_unstable();
        nums
    }
}

// Merge Sort 
impl Solution {
    pub fn sort_array(nums: Vec<i32>) -> Vec<i32> {
        if nums.len() > 1 { 
            let (l, r) = nums.split_at(nums.len() /2);
            let sorted_r = Self::sort_array(r.to_vec());
            let sorted_l = Self::sort_array(l.to_vec());
            
            let mut res: Vec<i32> = nums.into();
            let (mut i, mut j) = (0, 0);
            
            let mut k = 0;
            while i < sorted_l.len() && j < sorted_r.len() { 
                
                if sorted_l[i] <= sorted_r[j] { 
                    res[k] = sorted_l[i].clone();
                    i += 1;
                } else { 
                    res[k] = sorted_r[j].clone();
                    j += 1;
                }
                k += 1;
            }
            while i < sorted_l.len() { 
                res[k] = sorted_l[i].clone();
                k +=1;
                i +=1;
            }
            while j < sorted_r.len() { 
                res[k] = sorted_r[j].clone();
                k +=1;
                j +=1;
            }
            res
        } else { 
            nums.to_vec()
        }
    }
}
```