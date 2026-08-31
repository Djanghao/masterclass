# Rust, greedy, O(1) with explanation

**Author:** rsha256
**Votes:** 1
**Link:** [https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/1226337/](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/1226337/)

---

```rs
impl Solution {
    pub fn maximum_time(time: String) -> String {
        let second = time.chars().nth(1).unwrap(); // extract the character at index 1
        let third = time.chars().nth(3).unwrap(); // extract the character at index 3
        let fourth = time.chars().nth(4).unwrap();
        let mut accumulator = String::new(); // initialize string builder
        // set tens digit of hour
        if time.starts_with('?') { // do we need to replace the first character?
            if '?' != second && second.to_digit(10).unwrap() > 3 { // if so, what do we replace with?
                accumulator.push('1');
            } else {
                accumulator.push('2');
            }
        } else {
            accumulator.push(time.chars().next().unwrap());
        }
        // set ones digit of hour
        if '?' == second { // do we need to replace the second character?
            if "2" == accumulator { //  if the first character is "2" then "29" isn't a valid hour, so greedy strategy would fail
                accumulator.push('3'); // instead "23" is the max hour
            } else {
                accumulator.push('9');
            }
        } else {
            accumulator.push(second); // if no altering is needed, push the original number to our stringbuilder
        }
        accumulator.push(':'); // add hours -> minutes separator
        // set tens digit of minutes
        if '?' == third {
            accumulator.push('5');
        } else {
            accumulator.push(third);
        }
        // set ones digit of minutes
        if '?' == fourth {
            accumulator.push('9');
        } else {
            accumulator.push(fourth);
        }
        return accumulator;
    }
}
```
