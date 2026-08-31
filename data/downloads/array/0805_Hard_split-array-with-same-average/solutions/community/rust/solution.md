# recursive search for multiples of reduced fraction

**Author:** josephhajduk
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-with-same-average/solutions/3245140/](https://leetcode.com/problems/split-array-with-same-average/solutions/3245140/)

---


# Code
```

fn gcd(a: u128, b: u128) -> u128 {
    match (a,b) {
        (0,c) => c,
        (c,0) => c,
        (a,b) => {
            return if a == b { a } else {
                if a % 2 == 0 {
                    if b % 2 != 0 {
                        gcd(a / 2, b)
                    } else {
                        gcd(a / 2, b / 2) * 2
                    }
                } else {
                    if b % 2 == 0 {       // b is even
                        gcd(a, b / 2)
                    } else {
                        if a > b {
                            gcd((a - b) / 2, b)
                        } else {
                            gcd((b - a) / 2, a)
                        }
                    }
                }
            }
        }
    }
}

pub fn find_sum(target_sum:u128, remaining_len:usize, choices:Vec<u128>) -> Option<Vec<u128>> {
    if remaining_len == 0 {
        return if target_sum == 0 { Some(vec![]) } else { None }
    }
    match choices.as_slice() {
        [] => None,
        [a] => if (*a == target_sum) && (remaining_len == 1) {Some(vec![*a])} else {None}
        _ => {
            let less_choices:Vec<u128> = choices.into_iter().filter(|j| *j <= target_sum).collect();
            return match less_choices.as_slice() {
                [] => None,
                [a] => if (*a == target_sum) && (remaining_len == 1) {Some(vec![*a])} else {None}
                _ => {
                    let mut even_less_choices = less_choices.clone();
                    if let Some(a) = even_less_choices.pop() {
                        let with_a = find_sum(target_sum - a, remaining_len -1, even_less_choices.clone()).map(|s| {
                            let mut r = s.clone();
                            r.push(a.clone());
                            r
                        });

                        if with_a.is_some() {
                            with_a
                        } else {
                            find_sum(target_sum, remaining_len, even_less_choices)
                        }
                    } else {
                        None
                    }
                }
            }
        }
    }
}
impl Solution {

    /*
    1 <= nums.length <= 30
    0 <= nums[i] <= 104
     */
    pub fn split_array_same_average(nums: Vec<i32>) -> bool {
        println!("split {:?}", nums);
        return match nums.as_slice() {
            [] => false,
            [_] => false,
            [x, y] => x == y,
            _ => {
                let nums:Vec<u128> =  nums.iter().map(|k| *k as u128).collect();
                let sum:u128 = nums.clone().iter().sum();
                let len = nums.len()as u128;
                let fgcd  = gcd(sum,len);
                let reduced_sum = sum/fgcd;
                let reduced_len = len/fgcd;
                println!("initial reduced average is {}/{}", reduced_sum,reduced_len);
                // if the reduced denominator is the length of the array then it is impossible to split
                if reduced_len == len as u128 {
                    false
                } else {
                    let mut n = 1;

                    for l in 1..(len/2+2) {
                        let target_sum = l*reduced_sum;
                        let target_len = l*reduced_len;

                        println!("trying {} in {}", target_sum, target_len);

                        // special case
                        if target_len ==1 {
                            if nums.contains(&target_sum) {
                                return true
                            }

                            if nums.clone().into_iter().filter(|m| *m > target_sum).count() == 1 {
                                println!("special case 1");
                                return false
                            }
                        }

                        // special case
                        let filtered_sum:u128 = nums.clone().into_iter().filter(|m| *m <= target_sum).sum();
                        if filtered_sum < target_sum {
                            println!("special case 2");
                        } else {
                            if target_len >= len {
                                return false
                            }

                            let found_sum = find_sum(target_sum, target_len as usize, nums.clone());

                            if found_sum.is_some() {
                                println!("found_sum: {:?}",found_sum);
                                return true
                            }
                        }
                    }
                    return false
                }
            }
        }
    }
}

```