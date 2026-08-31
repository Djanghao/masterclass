# prefix sum + bisection search in Rust

**Author:** simplices
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/solutions/1932476/](https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/solutions/1932476/)

---

```
use std::cmp::min;
use std::cmp::max;
use std::cmp::Ordering;

pub fn upper_bound<T: PartialOrd>(arr: &[T], target: T) -> usize {
    let mut l = 0;
    let mut r = arr.len();
    while l<r {
        let m = (l+r)/2;
        let v = unsafe {arr.get_unchecked(m)};
        if *v <= target {
            l = m + 1;
        }else{ //v > target
            r = m;
        }
    }
    //l==r
    l
}

pub fn lower_bound<T: PartialOrd>(arr: &[T], target: T) -> usize {
    let mut l = 0;
    let mut r = arr.len();
    while l<r {
        let m = (l+r)/2;
        let v = unsafe{arr.get_unchecked(m)};
        if *v >= target {
            r = m;
        }else{ //v < target
            l = m+1;
        }
    }
    //l==r
    l
}

impl Solution {
    pub fn maximum_beauty(mut flowers: Vec<i32>, new_flowers: i64, target: i32, full: i32, partial: i32) -> i64 {
        
        /*
        assert_eq!(upper_bound(&[5,7,10,10,10,45], 10), 5);
        assert_eq!(upper_bound(&[5,7,10,10,10,45], 45), 6);
        assert_eq!(upper_bound(&[5,7,10,10,10,45], 9), 2);
        
        assert_eq!(lower_bound(&[5,7,10,10,10,45], 9), 2);
        assert_eq!(lower_bound(&[5,7,10,10,10,45], 10), 2);
        assert_eq!(lower_bound(&[5,7,10,10,10,45], 45), 5);
        assert_eq!(lower_bound(&[5,7,10,10,10,45], 0), 0);
        assert_eq!(lower_bound(&[10], 11), 1);
        assert_eq!(lower_bound(&[], 11), 0);
        */
        
        //low to high
        flowers.sort();
        
        let ll = flowers.len();
        
        let mut arr = vec![0i64; ll];
        
        let mut prev_v = 0i64;
        for (i,v) in flowers.iter().enumerate() {
            arr[i] = i as i64 * (*v as i64-prev_v) as i64;
            prev_v = *v as i64;
            
            //prefix sum to enable bisection for incomplete gardens
            if i > 0 {
                arr[i] += arr[i-1];
            }
        }
        
        //prefix sum to enable bisection for incomplete gardens
        //let arr = arr.iter().scan(0, |sum, i| {*sum += i; Some(*sum)}).collect::<Vec<_>>();
        
        let mut best = 0i64;
        let mut left = new_flowers as i64;
        
        for i in (0..=ll).rev(){
            
             if i < ll {
                let v = flowers[i];    
                //amount to reach complete garden
                let need_to_target = max(target - v, 0i32);
                if need_to_target as i64 <= left {
                    left -= need_to_target as i64;
                }else{
                    //not enough
                    break;
                }
            }
            
            //try fill incomplete gardens
            let mut num_incomplete = upper_bound(&arr[..i], left as i64);
            
            //bound to be < target in order to qualify as incomplete garden, search for last item in sorted order that is smaller than target
            let bound_idx = lower_bound(&flowers[..num_incomplete], target); 
            let found = 
            if bound_idx > 0 {
                debug_assert!(flowers[bound_idx-1] < target);
                num_incomplete = bound_idx;
                true
            }else{
                false
            };
           
            let min_flowers = 
            if !found {
                0i64
            }else{
                let idx = num_incomplete - 1;
                let accum = arr[idx];
                let remain = left as i64 - accum;
                let distribute_remain = remain / num_incomplete as i64;
                let min_flowers = flowers[idx] as i64 + distribute_remain;
                min(min_flowers, target as i64 - 1i64)
            };
            
            //cal score
            let num_complete = if i==ll { 0 } else { ll - i };
            let score = num_complete as i64 * full as i64 + min_flowers * partial as i64;
            best = max(best, score);        
        }
        best
    }
}
```