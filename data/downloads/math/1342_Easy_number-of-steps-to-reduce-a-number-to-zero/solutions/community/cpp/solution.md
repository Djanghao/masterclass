# C++ | Short w/ 4 Approaches - O(1) Space ✅

**Author:** prantik0128
**Votes:** 46
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/2077956/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/2077956/)

---

##### Basic Iterative/Intuitive Approach
**Time Complexity : O(logN)
Space Complexity : O(1)**
```
class Solution {
public:
    int numberOfSteps(int num) { // number of steps to reach 0
        int count=0; // count of steps
        while(num){ // while num is not 0
            if(num%2) // if num is odd
                --num; // decrement num
			else // if num is even
                num=num/2; // divide num by 2
            ++count; // increment count
        }
        return count; // return count    
    }
};
```

##### Recursive Approach
**Time Complexity : O(logN)
Space Complexity : O(N)**
```
class Solution {
public:
    int numberOfSteps(int num) { // number of steps to reach 0
        if(num==0) return 0; // base case 1 
        if(num==1) return 1; // base case 2
        return numberOfSteps(num/2)+(num%2==0?1:2); // recursive case and add 1 if num is odd else add 2
    }
};
```
##### Bit-Manipulation Approach
**Time Complexity : O(No. of bits in N)
Space Complexity : O(1)**
```
class Solution {
public:
int numberOfSteps(int num) { //  number of steps to reach 0    
        int count = 0; // number of steps 
        while(num){ // while n is not 0
            num = num & 1 ? num - 1 : num >> 1; // if n is odd, subtract 1, else right shift by 1
            count++; // increment count
        }
        return count; // return count
    }
};
```
##### Builtin Functions
**Time Complexity :  O(No. of bits in N)
Space Complexity : O(1)**
```
class Solution {
public:
    int numberOfSteps(int num) { // number of steps to reach 0
        return num == 0 ? 0 : sizeof(num) * 8 - __builtin_clz(num) + __builtin_popcount(num) - 1; 
        // if num is 0, return 0 directly else length of num * 8 - number of leading zeros + number of 1s - 1
    }
};
```