# simple solution by finding 2 num that must be swapped | RUST^tm

**Author:** garbagedevvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/5328212/](https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/5328212/)

---

# Code
```
impl Solution {
    pub fn prev_perm_opt1(arr: Vec<i32>) -> Vec<i32> {
        let mut res: Vec<i32> = arr.to_vec();
        let mut first_num: Vec<i32> = vec![];
        let mut second_num: Vec<i32> = vec![];
        for i in 0..arr.len() - 1 {
            if arr[i] > arr[i+1] {
                if first_num.len() == 0 {
                    first_num.push(arr[i]);
                    first_num.push(i as i32);
                }
                first_num[0] = arr[i];
                first_num[1] = i as i32;
            }
        }
        if first_num.len() == 0 {return res;}
        for i in (first_num[1] as usize) + 1..arr.len() {
            if second_num.len() == 0 && arr[i] < first_num[0] {
                second_num.push(arr[i]);
                second_num.push(i as i32);
                continue;
            }
            if second_num[0] < arr[i] && first_num[0] > arr[i] {
                second_num[0] = arr[i];
                second_num[1] = i as i32;
            }
        }

        res[first_num[1] as usize] = second_num[0];
        res[second_num[1] as usize] = first_num[0];

        // println!("{:?}\
{:?}", first_num, second_num);
        res
    }
}
```