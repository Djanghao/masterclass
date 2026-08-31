# JAVA || 100% FASTER || EXPLAINED PROPERLY

**Author:** sharforaz_rahman
**Votes:** 8
**Link:** [https://leetcode.com/problems/self-dividing-numbers/solutions/3054038/](https://leetcode.com/problems/self-dividing-numbers/solutions/3054038/)

---

![selfdividingNumber.PNG](./images/0.png)

# Approach
creating a method by which every element from left to right has been checked either it is self divisible or not. 
# Complexity
Time complexity: **O(N)**

**Please upvote if you like it**
# Code
```
class Solution {
    public List<Integer> selfDividingNumbers(int left, int right) {
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = left; i <= right; i++) {
            if(checking(i)) list.add(i);
        }
        return list;
    }

    public static boolean checking(int number) {
        int storingNumber = number;
        while (number != 0) {
            int r = number % 10;
            if (r == 0) return false;
            if (!(storingNumber % r == 0)) {
                return false;
            }
            number = number / 10;
        }
        return true;
    }
}
```