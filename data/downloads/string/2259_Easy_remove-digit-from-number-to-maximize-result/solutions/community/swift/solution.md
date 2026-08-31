# My Swift Solution [space&time beat 100%]

**Author:** espadandy
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/1996531/](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/1996531/)

---

For problems involving the removal of a digit to change the number value, removing the possible left-most digit will always mostly impact the resulting value. Right-most possible digit least.

We define the matching digit is the digit that matches the given character. The following digit is the digit next to the matched digit. For every matching digit, the result of comparing its value with the following digit would determine whether the resulting value is larger or smaller.

In this problem, we want to maximize the resulting value. If this is impossible in a situation where all found matching digits are smaller, we want to diminish the impact of decreasing the number.

Starting from the left, once we find removing a matched digit could increase the resulting value, this matched digit would be the answer. Remove and return ASAP.

During our journey, we may encounter digits whose removal will decrease the value first. We need to find the right-most one in this case, so we need to keep tracking the newest matched digit we find.


```
class Solution {
    func removeDigit(_ number: String, _ digit: Character) -> String {
        var result = number
        var removeIndex: String.Index?
        
        for index in number.indices {
            if number[index] == digit {
                removeIndex = index
                let indexNext: String.Index = number.index(after: index)
                
                if indexNext != number.endIndex && number[indexNext] > digit {
                    result.remove(at: removeIndex!)
                    return result
                }
            }
        }
        result.remove(at: removeIndex!)
        return result
    }
}
```