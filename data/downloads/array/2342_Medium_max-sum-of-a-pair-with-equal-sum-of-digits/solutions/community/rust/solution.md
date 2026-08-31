# rust solution using hashmap and arrays to keep largest two numbers with same digit sum

**Author:** benkol003
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/5430945/](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/5430945/)

---

# Code
```
    use std::collections::{HashMap};

    impl Solution {
        pub fn digit_sum(mut num: i32) -> i32{
            let mut sum = 0;
            while num>0{
                sum+= num%10;
                num/=10;
            }
            return sum;
        }

        pub fn update_max_array(arr : &mut [i32;2], num: i32){
            let m = arr.iter().enumerate().min_by_key(|&(_,value)| value).unwrap();
            if(m.1<&num){arr[m.0]=num};
        }

        pub fn maximum_sum(nums: Vec<i32>) -> i32 {
            //sum digits in nums array
            let mut equalDSNums : HashMap<i32,[i32; 2]> = HashMap::new();
    
            for num in nums{
                let ds = Self::digit_sum(num);
                //bin numbers that have same digit sum
                Self::update_max_array(equalDSNums.entry(ds).or_insert([0,0]) , num);
            }
    
            //throw away those under size 2 - use 0 value to denote empty element
            equalDSNums.retain(|_,s| -> bool {return !s.contains(&0i32)});
            if (equalDSNums.len()==0) {return -1};
            //find max for each group num[i]+num[j]
            let maxsums = equalDSNums.values().map(|s|{
                let mut i = s.iter().rev();
                return i.next().unwrap() + i.next().unwrap();
            });
            //choose largest group
            return maxsums.max().unwrap();
    
        }
        
    }
```