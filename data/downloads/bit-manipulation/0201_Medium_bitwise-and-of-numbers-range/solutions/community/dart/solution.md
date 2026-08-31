# ✅☑Beats 100% Users || Dart || EXPLAINED🔥

**Author:** mohamedaymanabdelzaher
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/4764015/](https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/4764015/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int rangeBitwiseAnd(int left, int right) {
  String result = "";
  String leftInBinarySystem = toBinary(left);
  String rightInBinarySystem = toBinary(right);
  for (int i = 0; i <32 ; i++) {
    if(leftInBinarySystem[i]==rightInBinarySystem[i]){
      print(result);
      print(leftInBinarySystem[i]);

      result  += leftInBinarySystem[i];
      print(result);
    }else{
      result  += "0"*(32-i);
      break;
    }
  }
  return toDecimal(result);

}
  String toBinary(int number) {
  String binaryString = "";
  for (int i=0;i<32;i++)  {
    int remainder = number % 2;
    number = number ~/ 2;
    binaryString = remainder.toString() + binaryString;
  }

  return binaryString;
}
int toDecimal(String binaryString) {
  int decimalNumber = 0;
  int powerOfTwo = 1;
  for (int i = binaryString.length - 1; i >= 0; i--) {
    int digit = int.parse(binaryString[i]);
    decimalNumber += digit * powerOfTwo;
    powerOfTwo *= 2;
  }
  return decimalNumber;
}

}
```