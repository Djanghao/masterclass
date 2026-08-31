# Ruby Solution

**Author:** woahlag
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/632513/](https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/632513/)

---

```
def find_lucky(arr)
    count = Hash.new { 0 }
    arr.each { |number| count[number] += 1 }
    count.keys.select { |key| key == count[key] }.max || -1
end
```