# Ruby - Short

**Author:** shhavel
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/solutions/1301263/](https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/solutions/1301263/)

---


### Idea

Following the task task instructions reduce amout of chalk pieces `k` on each student by `chalk[i]`.
Return **index** of a student for wich there is no enought amount of chalk pieces.

### Optimization

Replace `k` by its remidnder after division by `chalk.sum`. This emulates full cycles on array `chalk`.

### Ruby

```ruby
def chalk_replacer(chalk, k)
  k %= chalk.sum
  chalk.index { |c| (k -= c) < 0 }
end
```

Time complexity: `O(n)`

Any comments are welcome :)