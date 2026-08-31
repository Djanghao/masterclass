# rust solution

**Author:** skymnok
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-with-minimum-sum/solutions/3256251/](https://leetcode.com/problems/split-with-minimum-sum/solutions/3256251/)

---


# Code
```
impl Solution {
    pub fn split_num(num: i32) -> i32 {
        let mut a = num.to_string().chars().collect::<Vec<char>>();
        a.sort_unstable();
        let mut first = vec![];
        let mut second = vec![];
        a.chunks(2).for_each(|ch| {
            first.push(ch[0]);
            if ch.len() != 1 {
                second.push(ch[1]);
            }
        });
        first.iter().collect::<String>().parse::<i32>().unwrap() + second.iter().collect::<String>().parse::<i32>().unwrap()
    }
}
```