# Golang Solution with explanation

**Author:** nathannaveen
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/1750426/](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/1750426/)

---

## **How This Solution Works:**

The idea of this solution is pretty simple and relies on the fact that the minimum number is made by making the biggest number the last digit and the smallest number the first. For example: If we use the digits `[4, 6, 1, 3, 0, 9]`, the minimum number we can make is `013469`.

If we want the minimum sum, we just have to add the two minimum numbers together and get the minimum sum. 

So let us say that we have `num = 4009`. We have the digits `[0, 0, 4, 9]`. Then the two minimum numbers that we can make are `04`, and `09`.

* For `new1`, the tens digit can be the smallest digit, `0`.
* For `new2`, the tens digit can be the second smallest digit, `0`.
* For `new1`, the ones digit can be the third smallest digit, `4`.
* For `new2`, the ones digit can be the fourth smallest digit, `9`.

***

## **Walk Through the Code:**

* We can first add all the digits into the `digits` array. 
* Then we can sort `digits`.
* The we can do `new1 := digits[0] * 10 + digits[2]`. This is baisically:
    * We do `digits[0] * 10`. This basically = `Minimum number * 10`. We do the `* 10` because this is how we make `digits[0]` into the tens digit.
* The we can do `new2 := digits[1] * 10 + digits[3]`. This is baisically:
    * We do `digits[1] * 10`. This basically = `Second minimum number * 10`. We do the `* 10` because this is how we make `digits[1]` into the tens digit.

***

``` go
func minimumSum(num int) int {
    digits := []int{}
    
    for num > 0 {
        digits = append(digits, num % 10)
        num /= 10
    }
    
    sort.Ints(digits)
    
    new1 := digits[0] * 10 + digits[2]
    new2 := digits[1] * 10 + digits[3]
    
    return new1 + new2
}
```