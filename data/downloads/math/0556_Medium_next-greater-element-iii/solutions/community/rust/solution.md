# Simple Solution

**Author:** n0b0dy01
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-iii/solutions/4818303/](https://leetcode.com/problems/next-greater-element-iii/solutions/4818303/)

---

# Code
```
impl Solution {
    pub fn next_greater_element(n: i32) -> i32 {
        let mut digits = n
            .to_string()
            .chars()
            .map(|n| n.to_digit(10).unwrap())
            .collect::<Vec<_>>();

        let mut min_number = u32::MAX;
        let mut min_index = 0;
        for i in (0..digits.len()).rev() {
            for j in i + 1..digits.len() {
                if digits[i] < digits[j] {
                    min_number = std::cmp::min(digits[j], min_number);
                    if min_number == digits[j] {
                        min_index = j;
        
                    }
                }
            }
            if min_number != u32::MAX {
                digits.swap(i, min_index);
                 digits[i+1..].sort();
                
                break;
            }
        }
         
        if min_number  == u32::MAX{
            return -1;
        }
        match digits
            .into_iter()
            .map(|c| c.to_string())
            .collect::<String>()
            .parse::<i32>()
        {
            Ok(num) => num,
            Err(_) => -1,
        }
    }
}
```