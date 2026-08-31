# 0ms solution

**Author:** mahmoud_khera
**Votes:** 0
**Link:** [https://leetcode.com/problems/integer-replacement/solutions/6007733/](https://leetcode.com/problems/integer-replacement/solutions/6007733/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
    pub fn integer_replacement(n: i32) -> i32 {
        let mut n=n as u32;
   let mut res=0;

    while n>1 {
        if n & 1==0{
          n>>=1
        }else if ((n+1)/2)&1==0 && n != 3{
            
            n+=1;
        }else {
            n-=1;
        }
        res+=1;
    }




    res
        
    }
}
```