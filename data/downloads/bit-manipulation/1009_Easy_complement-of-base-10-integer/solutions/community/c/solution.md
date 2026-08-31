# C++ EASY TO SOLVE || Beginner friendly with detailed explanation and dry run

**Author:** Cosmic_Phantom
**Votes:** 70
**Link:** [https://leetcode.com/problems/complement-of-base-10-integer/solutions/1665399/](https://leetcode.com/problems/complement-of-base-10-integer/solutions/1665399/)

---

Given a positive integer, output its **complement number**. The complement strategy is to flip the bits of its binary representation i.e if it's **101** =Complement=> **010**

**Intuition:-**
There is not much of a intuition in this question as the question is loud and clear about it's use of bit manipulation .

To make things a bit more interesting let's do this question with and wihout bit manipulation 
***
***
**Using Bit Manipulations:-**
***
**Bit masking can be summarized with this image (^_^)**
![image](./images/0.jpeg) 
Thus, we can conclude that masking means to keep/change/remove a desired part of information.
***
**Dry run of bitmasking:-**
![image](./images/1.png)
***
**Code[Using bitmasking]:-**
```
class Solution {
public:
    int bitwiseComplement(int num) {
		    //base case
        if(num == 0) return 1;
        unsigned mask = ~0;
        while( mask & num ) mask = mask << 1;
        return ~num ^ mask;
    }
};
```
**Time Complexity:** *`O(log(num))`*
**Space Complexity:** *`O(1)`*
***
***
**Using XOR**
Basic idea is to find the smallest power of 2 that is larger than the `input number num`, and output the difference between `powerof2s` and `num` . 

**Dry run of XOR:-**
```
For example :-
Input: num = 5(101) ,
Thus the smallest power of 2 (and just larger than 5) is 8 (1000)
The output should be 8 - 5 - 1 = 2 (010).
```
**Code [using XOR]:-**
```
class Solution {
public:
    int bitwiseComplement(int num) {
        int powerof2s = 2, temp = num;
        
        while(temp>>1) {
            temp >>= 1;
            powerof2s <<= 1;
        }
        
        return powerof2s - num - 1;
    }
};
```

***
***
**Without using Bit manipulation:-**
***
**Algorithm:-**
1. At start convert convert the decimal number to its binary representation 
2. Then start overriding the bits with 1 as 0 and 0 with 1 .
3. Then again start converting the binary representation back to decimal representation .

**Code:-**
```
class Solution {
public:
    int bitwiseComplement(int num) {
        //base case
        if(num==0) return 1;
        vector<int> temp; 
		// convert to binary representation
        while( num != 0 ){
            temp.push_back( num % 2 );
            num /= 2;
        } 
		// make complement
        for(int i=0; i<temp.size(); i++){
            if( temp[i] == 1 ) temp[i] = 0;
            else if( temp[i] == 0 ) temp[i] = 1;
        } int res = 0;
		//Again convert them back to decimal representation 
        for(int i=temp.size()-1; i>-1; i--) res = res * 2 + temp[i];
        return res;
    }
};
```
**An optmization of the above code:- #Credit goes to @bakar7**
```
class Solution {
public:
    int bitwiseComplement(int n) {
        if (n == 0) {
            return 1;
        }

        int answer = 0;
        int power = 1;
        while (n) {
            answer += ((1 - (n % 2)) * power);
            n /= 2;
            power *= 2;
        }

        return answer;
    }
};
```



