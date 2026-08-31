# Swift One-Liner

**Author:** tamara-snyder
**Votes:** 13
**Link:** [https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/1880063/](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/1880063/)

---

**Solution**
```
class Solution {
    func average(_ salary: [Int]) -> Double {
        return Double(salary.reduce(0, +) - (salary.min()! + salary.max()!)) / Double(salary.count - 2)
    }
}
```

**What's Happening**
- Sum the array by calling ```salary.reduce(0, +)``` and then subtract the min and max values of the array.
- You can get the min and max values by calling ```salary.min()!``` and ```salary.max()!```. It's safe to force unwrap these since there is guaranteed to be both a unique min and max value in this problem.
- Cast the sum to a double and divide it by the number of items in the array minus two items: ```salary.count - 2``` (it's minus two because we are omitting the min and max values). This right side of the equation must also be cast to a double or the Swift compiler will unleash its fury.
- Now you have the result and it just needs to be returned!