# Python3 || 2 lines, map and separate  || T/S: 99% / 96%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/check-balanced-string/solutions/6000611/](https://leetcode.com/problems/check-balanced-string/solutions/6000611/)

---

Here's the plan:
1. We map the characters in `num` to integers.

1. We sum the even-indexed elements of `num` and we sum the even-indexed elements of `num`, and then we return whether they are equal. 
 ___

```python3 []
class Solution:
    def isBalanced(self, num: str) -> bool:

        num = list(map(int, num))
        
        return sum(num[0:len(num):2]) == sum(num[1:len(num):2])
```
```cpp []
class Solution {
public:
    bool isBalanced(std::string num) {
        int evenSum = 0;
        int oddSum = 0;

        for (size_t i = 0; i < num.length(); ++i) {
            int digit = num[i] - '0';
            if (i % 2 == 0) {
                evenSum += digit;} else {
                oddSum += digit;}
        }

        return evenSum == oddSum;}
};
```
```java []
class Solution {
    public boolean isBalanced(String num) {
        int evenSum = 0;
        int oddSum = 0;

        for (int i = 0; i < num.length(); i++) {
            int digit = num.charAt(i) - '0'; // Convert char to int
            if (i % 2 == 0) {
                evenSum += digit; } 
            else {
                oddSum += digit; }
        }
        return evenSum == oddSum;}
}
```
[https://leetcode.com/problems/check-balanced-string/submissions/1449986452/
](https://leetcode.com/problems/check-balanced-string/submissions/1449986452/
)
I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(num)`.