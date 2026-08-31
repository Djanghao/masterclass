# Python3, C++, Java   ||   3 lines,  w/ example   ||   T/S: 99% / 15%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/sum-game/solutions/3313227/](https://leetcode.com/problems/sum-game/solutions/3313227/)

---

Here's the intuition:

- Alice's strategy is to increase the difference between the sums of the halves, and Bob's is to decrease that difference.

- Thus, for both of them, the stategy is to optimally only play 0s or 9s.
- It is an interesting exercise in algebra, which is left to the reader,  to show this problem is equvalent to doubling each fixed value in `num`, and then only playing 9s. 
- This equvalence implies the game is simply determined directly from the the original array `nums`, which we do in the code.  




Here's the code:
```python3 []
class Solution:
    def sumGame(self, num: str) -> bool:

        n = len(num)//2
        num = [9 if ch=='?' else 2*int(ch) for ch in num]
                                                          

        return  sum(num[:n]) != sum(num[n:])

```
```C++ []
class Solution {
public:
    bool sumGame(string num) {
        int n = num.size() / 2;
        vector<int> nums;
        
        for (char ch : num) {
            if (ch == '?') {
                nums.push_back(9); // Replace '?' with 9
            } else {
                nums.push_back(2 * (ch - '0')); // Double the digit
            }
        }
        
        int sum_first_half = accumulate(nums.begin(), nums.begin() + n, 0);
        int sum_second_half = accumulate(nums.begin() + n, nums.end(), 0);
        
        return sum_first_half - sum_second_half != 0;
    }
};
```
```Java []
class Solution {
    public boolean sumGame(String num) {
        int n = num.length() / 2;
        int[] nums = new int[num.length()];

        for (int i = 0; i < num.length(); i++) {
            char ch = num.charAt(i);
            if (ch == '?') {
                nums[i] = 9; // Replace '?' with 9
            } else {
                nums[i] = 2 * (ch - '0'); // Double the digit
            }
        }

        int sumFirstHalf = 0, sumSecondHalf = 0;
        for (int i = 0; i < n; i++) {
            sumFirstHalf += nums[i];
        }
        for (int i = n; i < nums.length; i++) {
            sumSecondHalf += nums[i];
        }

        return sumFirstHalf - sumSecondHalf != 0;
    }
}
```
_____

Here are two traces:
```
Example: num = "?2936 5??6?"

n = 10//2 = 5
num = [_, 4,18, 6,12,  10, _, _,12,_] <-- double the digits
    = [9, 4,18, 6,12,  10, 9, 9,12,9] <-- insert the 9s

    return  49 != 49                   <-- False

```
```
Example: num = "12?4?6  7?8?10"

n = 10//2 = 5
num = [ 2,4,_,8,_,12,  14,_,16,_,2,0] <-- double the digits
    = [ 2,4,9,8,9,12,  14,9,16,9,2,0] <-- insert the 9s

    return  44 != 50                  <-- True

```

[https://leetcode.com/problems/sum-game/submissions/1284299571/](https://leetcode.com/problems/sum-game/submissions/1284299571/)


I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(num)`.