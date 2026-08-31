# [Python/Python3] Shifting Letter | 2 Solutions | One-liner

**Author:** newborncoder
**Votes:** 5
**Link:** [https://leetcode.com/problems/shifting-letters/solutions/1088920/](https://leetcode.com/problems/shifting-letters/solutions/1088920/)

---

***ShamelessSelfPromotion***: My other leetcode [solutions](https://leetcode.com/discuss/general-discussion/1112952/Collection-of-my-leetcode-solution-posts) to various questions can be found [here](https://leetcode.com/discuss/general-discussion/1112952/Collection-of-my-leetcode-solution-posts)

Two solutions that have the same algorithm. One of which is a one-liner.

Algorithm:
1. We see here that if the shift array is ```[10,20,30]```, then the first letter actually shifts ```10+20+30``` times. The second element shifts ```10+20``` times and the third element shifts ```30``` times.
2. By this we can see that instead of shifting a part of the array as it comes, we first calculate the times a letter needs to be shifted.
3. For this as we can see that it is the reverse of what the ```accumulate``` function does in python. So first we reverse the array and apply the accumulate function and then gain reverse that to get our output.
4. As we cannot change string, we convert the string to list so that it will be easy for us to replace the element in the array.
5. We loop on on the list and calculate the shift.
6. Here the value of shift can be greater than 26, so we dont forget to ```%``` the shift. Also, for shifting, we add the shift to the ascii representation of the digit as ```ord(letter) + shift%26```.
7. As we are wrapping around the alphabatical sequence, if this sum is greater than 122, which is the ascii for ```z```, then we subtract 26 from it to get the correct letter and then convert that to letter using ```chr```.
8. At last we join the list and we get the string.

Solution 1:
Time: ```O(N)```
Space:```O(N)```

```
class Solution:
    def shiftingLetters(self, S: str, shifts: List[int]) -> str:
        
        final_shift = list(accumulate(shifts[::-1]))[::-1]
        
        s_list = list(S)
        
        for x in range(len(s_list)):
            midval = ord(s_list[x]) + final_shift[x]%26
            if midval > 122:
                midval = midval - 26
            
            s_list[x] = chr(midval)
        
        return ''.join(s_list)
```

Solution 2:
Time: ```O(N)```
Space:```O(N)```
```
class Solution:
    def shiftingLetters(self, S: str, shifts: List[int]) -> str:
        return ''.join(chr((ord(letter) + shifting%26) - 26)  if (ord(letter) + shifting%26)>122 else chr((ord(letter) + shifting%26)) for letter,shifting in zip(S, list(accumulate(shifts[::-1]))[::-1]))
```