# Sort Digits of an Integer using Insertion Sort

**Author:** kamvis
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/5485750/](https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/5485750/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve this problem, we need to break down the number into its digits, sort them in ascending or descending order based on the sign of the number, adjust for leading zeros if the number is positive, and then concatenate the digits back into a number.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Determine the sign of the number and convert it to positive if necessary.
2. Split the number into its individual digits using a loop.
3. Sort the digits in ascending order if the number is positive; otherwise, sort them in descending order for negative numbers.
4. If the number is positive and starts with a leading zero after sorting, swap the zero with the first non-zero digit.
5. Concatenate the sorted digits into a string, convert it back to an integer, and apply the sign to get the final result.

# Complexity
- Time complexity: O(d log d)  <!-- Here, d represents the number of digits in the number -->
- Space complexity: O(d)


# Code
```
/*
I wrote with Insertion sort, you can choose the sort algorithm you want. 
*/
/*
class Solution {
  int smallestNumber(int num) {
    int sign = 1;
    if(num == 0) return 0;
    if (num.isNegative) {
      sign = -1;
      num *= -1;
    }
    List Snum = [];
    while (num > 0) {
      Snum.add(num % 10);
      num ~/= 10;
    }
    if (sign == 1) {
    Snum.sort();
      if (Snum[0] == 0) {
        for (int i = 1; i < Snum.length; i++) {
          if (Snum[i] != 0) {
            int temp = Snum[0];
            Snum[0] = Snum[i];
            Snum[i] = temp;
            break;
          }
        }
      }
      print(Snum);
    } else if (sign == -1) {
     Snum.sort((a, b) => b.compareTo(a));
    }
    String concatenatedString = Snum.join();
    int res = int.parse(concatenatedString);
    return res * sign;
  }
}
*/

class Solution {
  int smallestNumber(int num) {
    int sign = 1;
    if(num == 0) return 0;

    if (num.isNegative) {
      sign = -1;
      num *= -1;
    }
    List Snum = [];
    while (num > 0) {
      Snum.add(num % 10);
      num ~/= 10;
    }
    if (sign == 1) {
      for (int i = 1; i < Snum.length; i++) {
        int key = Snum[i];
        int j = i - 1;
        while (j >= 0 && Snum[j] > key) {
          Snum[j + 1] = Snum[j];
          j--;
        }
        Snum[j + 1] = key;
      }
      print('-----');
      print(Snum);
      if (Snum[0] == 0) {
        for (int i = 1; i < Snum.length; i++) {
          if (Snum[i] != 0) {
            int temp = Snum[0];
            Snum[0] = Snum[i];
            Snum[i] = temp;
            break;
          }
        }
      }
    } else if (sign == -1) {
      for (int i = 1; i < Snum.length; i++) {
        int key = Snum[i];
        int j = i - 1;
        while (j >= 0 && Snum[j] < key) {
          Snum[j + 1] = Snum[j];
          j--;
        }
        Snum[j + 1] = key;
      }
    }
    String concatenatedString = Snum.join();
    int res = int.parse(concatenatedString);
    return res * sign;
  }
}
```