# Just Runnable(!Clean Code)

**Author:** n0b0dy01
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/4922527/](https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/4922527/)

---

# Code
```
fn if_palindrom(s: &str) -> bool {
    let chars = s.chars().collect::<Vec<_>>();
    let mut p1 = 0;
    let mut p2 = s.len() - 1;

    while p1 < p2 {
        if chars[p1] == chars[p2] {
            p1 += 1;
            p2 -= 1;
        } else {
            return false;
        }
    }
    true
}
impl Solution {
    pub fn check_palindrome_formation(a: String, b: String) -> bool {
        if a.len() == 1 && b.len() == 1 {
            return true;
        }
        if if_palindrom(&format!("{}{}",a,b)){
            return true;
        }

        let mut a_prefix_and_b_suffix = true;
        let mut b_prefix_and_a_suffix = true;
        let chars_a = a.chars().collect::<Vec<_>>();
        let chars_b = b.chars().collect::<Vec<_>>();

        if a_prefix_and_b_suffix {
            let mut a_pointer = 0;
            let mut b_pointer = chars_b.len() - 1;

            while chars_a[a_pointer] == chars_b[b_pointer] {
                a_pointer += 1;
                b_pointer -= 1;
            }
            let slice_1_a = &chars_a[..a_pointer].iter().collect::<String>();
            let slice_2_a = &chars_a[a_pointer..].iter().collect::<String>();
           
            let slice_1_b = &chars_b[..a_pointer].iter().collect::<String>();
            let slice_2_b = &chars_b[a_pointer..].iter().collect::<String>();

            if if_palindrom(&format!("{}{}", slice_1_a, slice_2_b))
                || if_palindrom(&format!("{}{}", slice_1_b, slice_2_a))
            {
                return true;
            }
            let slice_1_a = &chars_a[..=b_pointer].iter().collect::<String>();
            let slice_2_a = &chars_a[b_pointer+1..].iter().collect::<String>();
           
            let slice_1_b = &chars_b[..=b_pointer].iter().collect::<String>();
            let slice_2_b = &chars_b[b_pointer+1..].iter().collect::<String>();
             if if_palindrom(&format!("{}{}", slice_1_a, slice_2_b))
                || if_palindrom(&format!("{}{}", slice_1_b, slice_2_a))
            {
                return true;
            }
//               println!("{:?}",slice_1_a);
//             println!("{:?}",slice_2_a);
//  println!("{:?}",slice_1_b);
//             println!("{:?}",slice_2_b);
        }
        if b_prefix_and_a_suffix {
            let mut b_pointer = 0;
            let mut a_pointer = chars_b.len() - 1;

            while chars_a[a_pointer] == chars_b[b_pointer] {
                a_pointer -= 1;
                b_pointer += 1;
            }
            let slice_1_a = &chars_a[..b_pointer].iter().collect::<String>();
            let slice_2_a = &chars_a[b_pointer..].iter().collect::<String>();

            let slice_1_b = &chars_b[..b_pointer].iter().collect::<String>();
            let slice_2_b = &chars_b[b_pointer..].iter().collect::<String>();
//   println!("{:?}",slice_1_a);
//             println!("{:?}",slice_2_a);
//  println!("{:?}",slice_1_b);
//             println!("{:?}",slice_2_b);
            if if_palindrom(&format!("{}{}", slice_1_a, slice_2_b))
                || if_palindrom(&format!("{}{}", slice_1_b, slice_2_a))
            {
                return true;
            }
               let slice_1_a = &chars_a[..=a_pointer].iter().collect::<String>();
            let slice_2_a = &chars_a[a_pointer+1..].iter().collect::<String>();
           
            let slice_1_b = &chars_b[..=a_pointer].iter().collect::<String>();
            let slice_2_b = &chars_b[a_pointer+1..].iter().collect::<String>();
             if if_palindrom(&format!("{}{}", slice_1_a, slice_2_b))
                || if_palindrom(&format!("{}{}", slice_1_b, slice_2_a))
            {
                return true;
            }
        }
        false
    }
}
```