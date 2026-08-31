# rust 17ms solution with explaination

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/solutions/5004995/](https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets/solutions/5004995/)

---

![image.png](./images/0.png)

# Approach
To get the min exposed is to get the max covered;

Let dp[n][i] be the max_covered with n carpets, let m be the length of carpets.

dp[n][i]=max(
dp[n-1][i-M]+cover[i-M+1] \\\\\\*I choose to cover from i-M+1 to i\\*\\\\,
max(dp[n][0 to i-1]) \\\\\\*max so far\\*\\\\)

# Note
Don't consider when the carpets overlap each other, that will not increase the white covered.

dp[n][i] is all whites from 0 to i when i<M. I though when i<M\\*num_carpets is also correct, but this does not decrease the time needed.

# Complexity
- Time complexity:
$$O(floor.len()*num\\_carpets)$$

- Space complexity:
$$O(floor.len())$$

# Code
```
use std::cmp::{min, max};
use std::mem::swap;
impl Solution {
    pub fn minimum_white_tiles(floor: String, num_carpets: i32, carpet_len: i32) -> i32 {
        if (num_carpets*carpet_len) as usize >= floor.len(){return 0;}
        let carpet_len=carpet_len as usize;
        let mut whites=0i32;
        let floor=floor.as_bytes().iter().map(|&x|if x==b'1'{whites+=1;true}else{false}).collect::<Vec<bool>>();
        if carpet_len==1{
            return max(whites-num_carpets, 0);
        }
        if whites==0{return 0;}
        
        let mut cover=vec![0i32; floor.len()-carpet_len+1];
        cover[0]=(0..carpet_len).filter(|x|floor[*x]).count() as i32;
        for i in 1..cover.len(){
            cover[i]=cover[i-1];
            if floor[i+carpet_len-1]{cover[i]+=1;}
            if floor[i-1]{cover[i]-=1;}
        }

        let mut sum=vec![0; carpet_len];
        sum[0]=if floor[0]{1}else{0};
        for i in 1..carpet_len{
            sum[i]=sum[i-1];
            if floor[i]{sum[i]+=1;}
        }

        let mut res=0;
        let mut prev=vec![0i32; floor.len()];
        let mut cur=vec![0i32; floor.len()];
        for n in 1..=num_carpets{
            let mut max_so_far=0;
            for i in 0..floor.len(){
                let c=if i<carpet_len{
                    sum[i]
                }else{
                    prev[i-carpet_len]+cover[i-carpet_len+1]
                };
                max_so_far=max(max_so_far, c);
                cur[i]=max_so_far;
            }
            swap(&mut cur,&mut  prev);
        }
        whites-prev[floor.len()-1]
    }
}
```