# Use %6 for 7

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/solutions/5695183/](https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/solutions/5695183/)

---

# Approach
There is a rule of determining divisibility by 7, according to which even and odd triples of digits in a number, starting from the youngest, are added separately. And if the difference of these sums is divisible by 7, then the number is divisible by 7. But we do not need to add and subtract ALL triples, it is enough to check only the middle and the oldest (it will be 1 or 2 digits depending on the length) and the position of the middle and the end are 2 triples, i.e. 6 digits, so there can be 6 variants of filling (1 or 2 digits instead of the maximum digit 9). The digits themselves are determined by trial.

The formula for 7 is taken here: https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/solutions/5653040/use-6-for-7
# Complexity
![image.png](./images/0.png)
# Code
```kotlin []
class Solution {
    fun largestPalindrome(n: Int, k: Int): String {
        var rez = CharArray(n) { '9' }
        when (k) { 
		    2 -> {
                rez[0] = '8'
                rez[n-1] = '8'
            }
		    4 -> {
                if (n==1) return "8"
                else {
                    rez[0] = '8'
                    rez[1] = '8'
                    rez[n-1] = '8'
                    rez[n-2] = '8'
                }
            }
		    5 -> {
                rez[0] = '5'
                rez[n-1] = '5'
            }
		    6 -> {
                when  {
                    (n==1) -> return "6"
                    (n==2) -> return "66"
                    (n % 2 == 1) -> {
                        rez[0] = '8'
                        rez[n-1] = '8'
                        rez[n/2] = '8'
                    }
                    else -> {
                        rez[0] = '8'
                        rez[n-1] = '8'
                        rez[n/2] = '7'
                        rez[n/2-1] = '7'
                    }
                }
            }
		    7 -> {
                if(n==1) return "7"
                if(n==2) return "77"
                if(n%2==0) {
                    when (n/2%6) {
                        1,2-> {
                            rez[n/2]='7'
                            rez[n/2-1]='7'
                        }
                        4,5->{
                            rez[n/2]='4'
                            rez[n/2-1]='4'
                        }
                    }
                } else {
                    when (n/2%6) {
                        0,2-> rez[n/2]='7'
                        1-> rez[n/2]='5'
                        3,5-> rez[n/2]='4'
                        4-> rez[n/2]='6'
                    }
                }
            }
		    8 -> {
                when  {
                    (n==1) -> return "8"
                    (n==2) -> return "88"
                    else -> {
                        for (i in 0 until 3) {
                            rez[i] = '8'
                            rez[n-i-1] = '8'
                        }
                    }
                }

            }
	    }

        return rez.concatToString()
    }
}
```