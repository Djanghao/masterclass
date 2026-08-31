# Dart 0 ms

**Author:** Muhammed_Shebin
**Votes:** 0
**Link:** [https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/6047529/](https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/6047529/)

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
```dart []
class Solution {
  String categorizeBox(int length, int width, int height, int mass) {
    int volume= length * width * height;
    bool bulky=false;
    bool heavy = false ;
    String result='';

    if( mass >= 100){
        heavy = true;
    }
    if(volume >= 1000000000||width >= 10000||length >= 10000||height >= 10000){
        bulky = true;
    }
    if(bulky == true && heavy == true){
        result='Both';
    }
    else if(bulky == false && heavy == false ){
        result = 'Neither';
    }
    else if(bulky == true && heavy == false ){
        result = 'Bulky';
    }
    else{
        result = 'Heavy';
    }
    return result;
    
  }
}
```