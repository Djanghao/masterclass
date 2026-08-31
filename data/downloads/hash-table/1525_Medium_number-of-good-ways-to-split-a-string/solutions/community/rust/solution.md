# Rust Solution（0ms, 2.24mb）

**Author:** lxemsyX8mw
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/5651613/](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/5651613/)

---

# Intuition
I tried to calculate lnum with bitwise operations (let left=0; !left[c]=>(left&(1<<c))==0;left[c]=true=>left|=1<<c;), but it was slower than let left = [false;26]

# Code
```
impl Solution {
  pub fn num_splits(s: String) -> i32 {
    let mut right = [0;26];
    let mut rnum = 0;
    let hash = |c|{(c as u8 - 'a' as u8) as usize};
    s.chars().for_each(|c|{
        let c = hash(c);
        if right[c]==0 {
            rnum+=1;
        }
        right[c]+=1;
    });
    let mut left = [false;26];
    let mut lnum = 0;
    let mut result = 0;
    s.chars().try_for_each(|c|{
        let c = hash(c);
        if !left[c] {
            left[c]=true;
            lnum+=1;
        }
        right[c]-=1;
        if right[c]==0 {
            rnum-=1;
        }
        if lnum==rnum {
            result+=1;
            Ok(())
        } else if lnum>rnum {
            return Err(());
        } else {
            Ok(())
        }
    });
    result
  }
}
```