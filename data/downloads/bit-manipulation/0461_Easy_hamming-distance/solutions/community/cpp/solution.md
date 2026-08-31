# [C++] Using bit-manipulation {important concept for beginners}

**Author:** shubhambhatt__
**Votes:** 34
**Link:** [https://leetcode.com/problems/hamming-distance/solutions/720965/](https://leetcode.com/problems/hamming-distance/solutions/720965/)

---

***Pls upvote if you find this helpful  :)***
The basic idea here is to discuss the usage of xor operator (^) ,and operator(&) and right shift operator(>>).When we take xor of two numbers the bits with same numbers become zero and with different numbers become 1. Then we can right shift all the 1's and use & to find the number of ones .  
```
class Solution {
public:
    int hammingDistance(int x, int y) {
        int z=x^y;int count=0;
        while(z){
            if(z&1)count++;
            z=z>>1;
        }
        return count;
    }
};
```