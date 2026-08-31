# Rust | easy O(n)

**Author:** yuvraj789
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-unique-elements/solutions/1838539/](https://leetcode.com/problems/sum-of-unique-elements/solutions/1838539/)

---

```
impl Solution {
    pub fn sum_of_unique(nums: Vec<i32>) -> i32 
    {
        //vector to store frequency of each element (1 <= nums[i] <= 100)
        let mut freq=vec![0; 101];
        
        for i in 0..nums.len()
        {
            freq[nums[i] as usize]+=1;
        }
        
        let mut sum=0;
        for i in 0..101
        {
            //if freq[i]==0, number is not present in the given array
            //if freq[i]==1, number is unique
            //if freq[i]>1, number is present more than once
            
            if freq[i as usize]==1
            {
                sum=sum+i;
            }
        }
        
        return sum;
    }
}
```