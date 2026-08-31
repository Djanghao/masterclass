# Fast and memory efficient solutiuon

**Author:** peroyhav
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5361377/](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5361377/)

---

# Intuition
We don't actually need to flip the elements, but rather count occurences where the elements need to be flipped, this might be marked by setting the elements we did flip to zero, and not flipped to one. then whenever we have to do a flip, we invert the flip condition for the later stages, so we can keep track of wether zeroes or ones are the ones to be marked as flipped the next time.
![image.png](./images/0.png)

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
we begin by initializing the required helper variables to zero before starting.
then looping over each element in the array
whenever we encounter an item 

Whenever we encounter an element requiring to be flipped, instead of actually flipping the element, we write it to zero, marking it as flipped, and invert the flip variable so we pretend the ones in the array following is flipped. as soon as i >= k, we also invert the flip variable whenever the element nums[i - k] is marked as flipped, since that indicates we have flipped the current bit at least once already.

I have implemented the solution in C#, Rust and Go for my own learing, if my brief explanation is any help, please give a thumbs up.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` csharp []
public class Solution {
    public int MinKBitFlips(int[] nums, int k) {
        var count = 0;
        int flip = 0;
        if(k > nums.Length){
            return -1;
        }
        for(var i = 0;i< nums.Length;i++){
            if(i >= k){
                flip ^= 1 - nums[i - k];
            }
            if(nums[i] == flip){
                if(i + k > nums.Length){
                    return -1;
                }
                nums[i] = 0;
                flip ^= 1;
                count++;
            } else {
                nums[i] = 1;
            }
        }
        return count;
    }
}
```
``` rust []
impl Solution {
    pub fn min_k_bit_flips(nums: Vec<i32>, k: i32) -> i32 {
        let mut nums: Vec<i32> = nums;
        let k: usize = k as usize;
        let mut count = 0;
        let mut flip = 0;
        if k > nums.len() {
            return -1;
        }
        for i in 0..nums.len(){
            let i: usize = i as usize;
            if i >= k {
                flip ^= 1 - nums[i-k];
            }
            if nums[i] == flip {
                if i + k > nums.len() {
                    return -1;
                }
                nums[i] = 0;
                flip ^= 1;
                count += 1;
            } else {
                nums[i] = 1;
            }
        }

        count
    }
}
```
``` golang []
func minKBitFlips(nums []int, k int) int {
    n := len(nums);
    if k > n {
        return -1;
    }
    count := 0;
    flip := 0;

    for i := 0;i<n;i++ {
        if i >= k {
            flip ^= 1 - nums[i - k];
        }
        if nums[i] == flip {
            if i + k > n {
                return -1;
            }
            nums[i] = 0;
            flip ^= 1;
            count++;

        } else {
            nums[i] = 1;
        }
    }

    return count;
}
```