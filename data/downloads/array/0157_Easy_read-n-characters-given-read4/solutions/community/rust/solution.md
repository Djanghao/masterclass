# Rust solution with `copy_from_slice`

**Author:** bankq
**Votes:** 0
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4/solutions/3033746/](https://leetcode.com/problems/read-n-characters-given-read4/solutions/3033746/)

---


```
/**
 * The read4 API is defined as.
 *     fn read4(&self,buf4: &mut [char]) -> i32;
 * You can call it using self.read4(buf4)
 */

impl Solution {
    pub fn read(&self, buf: &mut [char], n: i32) -> i32 {
         let mut read_cnt = 0;
         while read_cnt < n {
             let mut buf4: [char; 4] = ['\\0'; 4];
             let r = self.read4(&mut buf4);
             if r == 0 {
                 break;
             }
            
            let to_read = r.min(n-read_cnt);
            buf[read_cnt as usize..(read_cnt+to_read) as usize].copy_from_slice(&buf4[..to_read as usize]);
            read_cnt += to_read;
         } 

         read_cnt
    }
}
```