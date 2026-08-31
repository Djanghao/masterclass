# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/reformat-date/solutions/1248975/](https://leetcode.com/problems/reformat-date/solutions/1248975/)

---

```
impl Solution {
    pub fn reformat_date(date: String) -> String {
        let arr_months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        ];
        date.rsplit(" ")
            .enumerate()
            .map(|(ind, s)| match ind {
                2 => format!("{:0>2}", s.replace(char::is_alphabetic, "")), // day
                1 => format!(
                    "{:02}",
                    arr_months.iter().position(|x| *x == s).unwrap() + 1 // month
                ),
                _ => s.to_owned(), // year
            })
            .collect::<Vec<_>>()
            .join("-")
    }
}
```