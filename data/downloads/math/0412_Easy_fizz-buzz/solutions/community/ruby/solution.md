# Short Ruby solution.

**Author:** user9697N
**Votes:** 7
**Link:** [https://leetcode.com/problems/fizz-buzz/solutions/455560/](https://leetcode.com/problems/fizz-buzz/solutions/455560/)

---

```Ruby
# https://leetcode.com/problems/fizz-buzz/submissions/
# @param {Integer} n
# @return {String[]}
def fizz_buzz(n)
    (1..n).map do |x|
        next 'FizzBuzz' if 0 == x%15
        next 'Buzz' if (x%5).zero?
        next 'Fizz' if (x%3).zero?
        x.to_s
    end
end
```