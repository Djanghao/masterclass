# 🟢🔴🟢 Beats 100.00%👏 Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/5979342/](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/5979342/)

---

```
class Solution {
  int largestInteger(int num) {
    List<int> digits = [];
    while(num != 0){
        int r = num % 10;
        num ~/= 10;
        digits.add(r);
    }
    digits = digits.reversed.toList();
    int largest = int.parse(digits.join());
    for(int i = 0; i < digits.length; i++){
        for(int j = i+1; j < digits.length; j++){
            if(
                (digits[i].isEven && digits[j].isEven ||
                 digits[i].isOdd && digits[j].isOdd)
                 && digits[i] < digits[j]
               ){
                int temp = digits[i];
                digits[i] = digits[j];
                digits[j] = temp;
            }
        }
        largest = max(largest,int.parse(digits.join()));
    }
    return largest;
  }
}
```