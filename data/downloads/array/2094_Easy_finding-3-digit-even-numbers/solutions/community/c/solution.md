# C++ with Explanation | O(n) Solution | Easy to Understand |

**Author:** tupesoham
**Votes:** 117
**Link:** [https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/1612135/](https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/1612135/)

---

The Approach: 

Find count of all elements in given digits array.

**Check for all numbers between 100 to 999 whether it can be formed by the digits present in *digits vector*.**

We are using 2 maps for the same. If we are able to make it, Then we can add it to the answer.

At the end we will Sort the answer vector and return it.

```
class Solution {
 public:
  vector<int> findEvenNumbers(vector<int>& digits) {
    // generating frequency map of the given digits
    vector<int> count(10, 0);
    for (auto& d : digits) count[d]++;

    vector<int> res;

    for (int num = 100; num < 999; num += 2) {
      // generating frequency map of the current number
      vector<int> currCount(10, 0);
      int temp = num;

      while (temp) {
        currCount[temp % 10]++;
        temp /= 10;
      }

      // checking if the number can be generated or not
      bool flag = true;
      for (int i = 0; i < 10; i++) {
        if (currCount[i] > count[i]) {
          flag = false;
          break;
        }
      }

      if (flag) {
        res.push_back(num);
      }
    }
    return res;
  }
};
```

If you like the solution, don't forget to upvote. Thanks! 
If you have any questions, feel free to comment down below.
Credits for cleaner code: @mycoding1729
