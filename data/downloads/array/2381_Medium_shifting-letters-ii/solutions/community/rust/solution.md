# Rust Linear Solution Almost all Contest Front Runners Use

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/shifting-letters-ii/solutions/2460326/](https://leetcode.com/problems/shifting-letters-ii/solutions/2460326/)

---


~~~
impl Solution {
    pub fn shifting_letters(s: String, shifts: Vec<Vec<i32>>) -> String {
        let n = s.len();
        let mut data = vec![0; n + 1];
        
        for shift in shifts {
            let amt = if shift[2] == 1 { 1 } else { -1 };
            data[s[0] as usize] += amt;
            data[s[1] as usize + 1] -= amt;
        }
        
        for i in 0..n {
            if i > 0 { data[i] = data[i] + data[i - 1]; }
            data[i] %= 26;
            if data[i] < 0 { data[i] += 26; }
        }
        
        let mut s = s.chars().collect::<Vec<char>>();
        for i in 0..n {
            s[i] = ('a' as u8 + (s[i] as u8 - 'a' as u8 + data[i] as u8) % 26) as char;
        }
        
        s.iter().collect()
    }
}
~~~