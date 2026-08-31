# [C++] next permutation of the first half | O(N)

**Author:** Araceae
**Votes:** 2
**Link:** [https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/1183676/](https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/1183676/)

---

The idea is the same as [31. Next Permutation](https://leetcode.com/problems/next-permutation/).
We can first find the next permutation for the first half of array and then fill the remaining half according the first half.

### **Code**
```cpp
class Solution {
public:
    string nextPalindrome(string num) {
        int n = num.size();
		
		// find the index k, l and swap them to get the next permutaion
        int k;
        for (k = n/2 - 2; k >= 0; --k)
            if (num[k] < num[k+1]) break;
        
        if (k < 0)  return "";
        
        int l;
        for (l = n/2 - 1; l >= 0; --l)
            if (num[k] < num[l])    break;
        
        swap(num[k], num[l]);
        reverse(num.begin() + k+1, num.begin() + n/2);
        
		// generate the data for remaining half 
        for (int i = 0; i < n/2; ++i)
             num[num.size()-1-i] = num[i];
        
        return num;
    }
};
```