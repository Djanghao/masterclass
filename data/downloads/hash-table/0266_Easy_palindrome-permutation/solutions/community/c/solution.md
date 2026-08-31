# Palindrome Permutation (C++, 4 lines, 100% runtime, O(1) Space )

**Author:** jbb123
**Votes:** 4
**Link:** [https://leetcode.com/problems/palindrome-permutation/solutions/996365/](https://leetcode.com/problems/palindrome-permutation/solutions/996365/)

---



```
class Solution {
public:
    bool canPermutePalindrome(string s) 
    {
        bitset<256> hash; // assuming extended ascii
        
        for(const char& c : s)
            hash.flip(c);
        
        return hash.count() <= 1;
    }
};
```

**Explanation**

The [bitset](http://www.cplusplus.com/reference/bitset/bitset/) can be best thought of as an array of bits, as the container is fixed-sized and contains only bits. The advantage of using a bitset is that it is optimized for space -- each element only requires a single bit. There are a handful of useful member functions that I reccomend you take a look at in the link above.

My code constructs a bitset with 256 bits, such that each element represents one symbol in the extended ascii alphabet. Each character in the string is iterated over, and its corresponding bit is flipped. Based on the intution that at most one charcater can appear an odd number of times (see solution for more detailed explanation), it is sufficent to return if at most one bit is a "1" (which is returned by count()).