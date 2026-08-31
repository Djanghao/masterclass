# Rust solution (very ugly code sorry)

**Author:** tapoafom
**Votes:** 0
**Link:** [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/solutions/6042243/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/solutions/6042243/)

---

Very ugly, but works. The idea is to calculate what power of multiplication allows to bring all the values \u200B\u200Bto the level of the max value. If k is greater than the sum of all power, then distribute the remaining k equally over all the values \u200B\u200Bthen finalize on applying +1 on the minimum values \u200B\u200B(without calculating them). If k is lower, then reduce the coefficients layer by layer and return to the previous case.

# Code
```rust []
impl Solution {

    pub fn get_final_state(nums: Vec<i32>, k: i32, multiplier: i32) -> Vec<i32> {

        let modulus = 10_u64.pow(9) + 7;
        let multiplier = multiplier as u64;
        let k = k as u64;

        if multiplier == 1 {
            return nums;
        }
        if nums.len() == 1 {
            return vec![((nums[0] as u64 * Self::pow_mod(multiplier, k, modulus)) % modulus) as i32];
        }

        let mut num_coeffs = std::collections::BinaryHeap::with_capacity(nums.len());

        let max = nums.iter().max().unwrap();
        let ln_max = (*max as f64).ln();
        let ln_multiplier = (multiplier as f64).ln();
        let mut k_in_progress = 0;
        for (i, num) in nums.iter().enumerate() {            
            let ln_num = (*num as f64).ln();
            let diff_to_max = ln_max - ln_num;
            let coeff = (diff_to_max / ln_multiplier).round() as u64;
            num_coeffs.push(
                (coeff, i, *num)
            );
            k_in_progress += coeff;
        }

        let mut num_coeffs = num_coeffs.into_vec();
        
        if k_in_progress > k {    

            num_coeffs.sort();  

            let mut coeff_reduction_for_all = 0;
            let mut i = 0;

            loop {

                let width = (nums.len() - i) as u64;
                let k_temp = width * (num_coeffs[i].0 - coeff_reduction_for_all);

                if k_in_progress <= k + k_temp {
                    let k_gap = k_in_progress - k;

                    let coeff_temp = if k_gap % width == 0 {
                        k_gap / width
                    } else {
                        1 + k_gap / width
                    };
                    k_in_progress -= width * coeff_temp;
                    coeff_reduction_for_all += coeff_temp;

                    for (c, _, _) in num_coeffs.iter_mut() {
                        if *c > coeff_reduction_for_all {
                            *c -= coeff_reduction_for_all;
                        } else {
                            *c = 0;
                        }
                    }
                    break;
                }

                k_in_progress -= k_temp;
                coeff_reduction_for_all = num_coeffs[i].0;
                i += num_coeffs.iter().skip(i).take_while(|x| x.0 == num_coeffs[i].0).count();
                 
            }
        }

        let coeff_increase = (k - k_in_progress) / nums.len() as u64;
        k_in_progress += coeff_increase * nums.len() as u64;
        
        if k_in_progress < k {
            num_coeffs.sort_by(|a, b| {
                let num_div = a.2 as f64 / b.2  as f64;
                let coeff_diff = b.0 as f64 - a.0 as f64;
                use std::cmp::Ordering;
                match (num_div, (multiplier as f64).powf(coeff_diff)) {
                    (n, m) if n < m => Ordering::Less,
                    (n, m) if n > m => Ordering::Greater,
                    _ if a.1 < b.1 => Ordering::Less,
                    _ if a.1 > b.1 => Ordering::Greater,
                    _ => Ordering::Equal,
                }        
            });

            for i in 0..(k - k_in_progress) {
                k_in_progress += 1;
                num_coeffs[i as usize].0 += 1;
            }
        } 
            
        let mut result = vec![0; nums.len()];
        for (coeff, i, num) in num_coeffs.iter() {
            result[*i] = (*num as u64 * Self::pow_mod(multiplier, *coeff + coeff_increase, modulus) % modulus) as i32;
        }
        
        result


    }

    pub fn pow_mod(base: u64, exponent:u64, modulus: u64) -> u64 {
        let mut result: u64 = 1;
        let mut exponent = exponent;
        let mut base = base;
        loop {
            if exponent&1 == 1 {
                result = (result * base) % modulus;
            }
            exponent = exponent >> 1;
            base = (base * base) % modulus;
            if exponent == 0 {
                break;
            }
        }
        result
    }

}
```