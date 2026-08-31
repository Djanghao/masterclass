# Rust | Binary Search | Intuitive

**Author:** dinosaureggs
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/1961045/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/1961045/)

---

```
	pub fn find_min(nums: Vec<i32>) -> i32 {
        
        if nums.len() == 1 {
            return nums[0];
        }
        
        let mut s = 0;
        let mut e = nums.len()-1;
        
        // ignore duplicates from start
        while s < e && nums[s+1] == nums[0] {
            s += 1;
        }
        
        // ignore duplicates from end
        while e > s && nums[e] == nums[0] {
            e -= 1;
        }
        
        // not rotated
        if nums[s] < nums[e] {
            return nums[s];
        }
        
        // binary search it        
        while s < e {
            let mid = ( s + e ) / 2;
            if nums[mid] < nums[0] {
                e = mid;
            }else {
                s = mid + 1;
            }
        }
        
        nums[e]
    }
```