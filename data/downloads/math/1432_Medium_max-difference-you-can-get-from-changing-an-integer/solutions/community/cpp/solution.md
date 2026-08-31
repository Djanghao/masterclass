# 100 % faster || beginner friendly || C++

**Author:** ankurgoswami718
**Votes:** 3
**Link:** [https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/3425988/](https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/3425988/)

---

# Approach
**A) For making max number**
1. Find first occurrence of non '9' digit in the number.
2. replace every occurrence of this number with 9.
3. this will give you largest number that can be formed.

**B) For making min number**
1. Find first occurrence of non '0' && non '1' digit in the number.
2. non '0' because no point in replacing 0 with 0 && non '1' because if '1' is the first non '0' number from left, that means it is the first digit, and we can't replace 1 with '0'.
3. if this digit is not same as the first digit, replace every occurrence of this number with 0, else with 1.
4. this will give you smallest number that can be formed.

At last return their differnce

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
public:
    int maxDiff(int num) {
        if(num < 10){
            return 8;
        }
        int i;

        string s1 = to_string(num);
        for(i=0; i<s1.size(); i++){
            if(s1[i] != '9'){
                break;
            }
        }
        if(i < s1.size()){
            char first = s1[i];
            for(int i=0; i<s1.size(); i++){
                if(s1[i] == first){
                    s1[i] = '9';
                }
            }
        }
        int a = stoi(s1);

        string s2 = to_string(num);
        for(i=0; i<s2.size(); i++){
            if(s2[i] != '0' && s2[i] != '1'){
                break;
            }
        }
        if(i < s2.size()){
            char first = s2[i];
            char r = '0';
            if(s2[0] == first){
                r = '1';
            }
            for(int i=0; i<s2.size(); i++){
                if(s2[i] == first){
                    s2[i] = r;
                }
            }
        }
        int b = stoi(s2);
        
        return a-b;
    }
};
```