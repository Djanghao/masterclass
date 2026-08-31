# Typical digit dp

**Author:** stringray2
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3839535/](https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3839535/)

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
```

const modi: i32 = 1_000_000_007;

impl Solution {
    
    fn solve(pos: usize, last: i32, started: bool, was_low: bool, n: usize, mut dp: &mut Vec<Vec<Vec<Vec<i32>>>>, s: &Vec<i32>) -> i32 {
        
        // println!("{} {} {} {} {}", pos, last, started, was_low, if pos<n{s[pos]} else {-1});
        // base case 
        if pos==n{
            
            if started==true{
                return 1;
            }else{
                return 0;
            }
        }
        
        // memoization 
        if dp[pos][last as usize][started as usize][was_low as usize]!=-1{return dp[pos][last as usize][started as usize][was_low as usize];}
        
        let mut max_dig = s[pos]; 
        
        if was_low==true{
            max_dig = 9i32;
        }
        
        
        let mut ret : i32 = 0;
        
        if started==false{
            // 
            for dig in 0..=max_dig{
                ret+= Self::solve(pos+1, dig, dig!=0, (dig<s[pos])|was_low, n, &mut dp, &s);
                if ret >=modi{ret%=modi;}
            }
            
            dp[pos][last as usize][started as usize][was_low as usize]=ret;
            return ret;
        }
        
        if last!=0 && last-1<=max_dig{
            ret+= Self::solve(pos+1, last-1, true, (last-1<s[pos])|was_low, n, &mut dp, &s);
        }
        
        if last+1<=max_dig{
            ret+=Self::solve(pos+1, last+1, true, (last+1<s[pos])|was_low, n, &mut dp, &s);
            if ret >=modi{ret%=modi;}
        }
        
        dp[pos][last as usize][started as usize][was_low as usize]=ret;
        return ret;
    }
    
    
    fn is_valid(s: &Vec<i32>) -> bool {
        
        let n = s.len();
        
        for i in 1..n{
            if (s[i-1]-s[i]).abs()!=1{
                return false;
            }
        }
        
        return true;
    }
    
    pub fn count_stepping_numbers(mut low: String, mut high: String) -> i32 {
        
        // digit dp why are they repeating so much 
        
        let n = high.len();
        
        //convert low into vec<i32>
        let mut low  = low.chars().map(|ch| ch as i32 - '0' as i32).collect::<Vec<i32>>();
        let mut ans = 0i32;
        //if low is a valid number then add +1 
        if Self::is_valid(&low) {
            ans+=1;
        }
        
        let high = high.chars().map(|ch| ch as i32 - '0' as i32).collect::<Vec<i32>>();
        
        while n>low.len(){
            //insert leading 0's 
            low.insert(0, 0i32);
        }
        
        println!("{:?}", high);
        
        let mut dp = vec![vec![vec![vec![-1; 2] ; 2]; 10]; n];
        let low_ret = Self::solve(0, 0, false, false, n, &mut dp, &low);
        println!(" break ");
        dp = vec![vec![vec![vec![-1; 2] ; 2]; 10]; n];
        let high_ret = Self::solve(0, 0, false, false, n, &mut dp, &high);
        
        println!("{} {}", low_ret, high_ret);
        let mut ans = (ans+(high_ret - low_ret+modi)%modi)%modi; 
        

        ans
        
    }
}
```