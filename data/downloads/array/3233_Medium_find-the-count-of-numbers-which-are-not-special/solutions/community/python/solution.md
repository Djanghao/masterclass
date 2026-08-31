# See Intuition+Approach || Check Primes || Easy Solution

**Author:** langesichhtt_
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5546629/](https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5546629/)

---

# Intuition and Approach
Example : 
                
    l = 4 , r = 16
    ans = 11 


Iterate on all squares between l=4 and r=16 .

    Squares between 4 and 16 , sq = [4,9,16]

    Now, count how many numbers in sq are special numbers.

    ans = totalNumbers - special numbers
        = not special numbers


## Key Observation : A number is special if it is divisible by square of prime number.



    num = 25,
    num is divisible by 5^2 where 5 is prime,
    therefore num=25 is special number

    num = 36,
    num is not divisible by any square of prime.
    therefore num=36 is not special number



# In example:-
    l=4, r=16

- Get square numbers between (4 and 16), there are 3 squares in this range [4,9,16].

- Now, intialize specialCount=0 and count number of special numbers using these squares.

      4 is special because its divisible by (2^2) where 2 is prime number, specailCount =1;

      9 is special number because it is divisible by (3^2) where 3 is prime number, specialCount = 2

      16 is not a special number because it is not divisible by any (primeNumber^2), specailCount =2

- Calculate ans

      Ans = count of not special numbers 
          = (totalNumbers in range [l,r]) - specialCount
          = 13 - 2
          = 11




## Complexity : 
    Time Complexity : O((sqrt(r)-sqrt(l))*sqrt(10^9)
                    ~ O(sqrt(10^9)^2)

    Space Complexity : O(1)


# Code

```Java []
 public int nonSpecialCount(int l, int r) {
        int num = (int)Math.sqrt(r);
        int special=0;
        while(num*num>=l && num*num<=r){
            boolean flag = true;
            for(int i=2; i<=(int)Math.sqrt(num); i++){
                if(num%i==0){
                    flag = false;
                    break;
                }
            }
            if(flag){
                special++;
            }
            num--;
        }
        int ans = r-l+1-special;
        if(l==1){
            ans++;
        }
        return ans;
    }
```
```python []
 def nonSpecialCount(self,l, r):
    num = int(math.sqrt(r))
    special = 0
    while num * num >= l and num * num <= r:
        flag = True
        for i in range(2, int(math.sqrt(num)) + 1):
            if num % i == 0:
                flag = False
                break
        if flag:
            special += 1
        num -= 1

    ans = r - l + 1 - special
    if l == 1:
        ans += 1
    return ans
```
```C++ []
  int nonSpecialCount(int l, int r) {
    int num = sqrt(r);
    int special = 0;

    while (num * num >= l && num * num <= r) {
        bool flag = true;
        for (int i = 2; i <= sqrt(num); i++) {
            if (num % i == 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            special++;
        }
        num--;
    }

    int ans = r - l + 1 - special;
    if (l == 1) {
        ans++;
    }
    return ans;
}
```

.
.

# PLEASE UPVOTE THANKS !
...
