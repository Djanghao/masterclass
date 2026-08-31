# c++ implementation for every function

**Author:** minhphanhvu
**Votes:** 9
**Link:** [https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/751555/](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/751555/)

---

```
class Solution {
public:
    
    int count_of_bits(int num){ //function to return number of bits
        int count = 0;
        while (num > 0){
            if (num % 2 == 1){
                count +=1;
                num = num/2;
            }
            else{
                num = num/2;
            }
        }
        return count;
    }
    //-----
    bool if_prime(int num){ //function to return if a number is prime(true) or not(false)
        if (num <=1){ //0 and 0 is not prime
            return false;
        }
        int i =2;
        while (i <= (num/2)){
            if (num % i == 0){
                return false;
            }
            i++;
        }
        return true;
    }
    //-----
    int countPrimeSetBits(int L, int R) {
        int res = 0;
        int count;
        for (int i = L; i <= R; i++){
            count = count_of_bits(i);
            if (if_prime(count)){
                res +=1;
            }
        }
        return res;
    }
};
```