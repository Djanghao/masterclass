# C++ and C# very easy solution with explanation.Beats 100%.

**Author:** aloneguy
**Votes:** 6
**Link:** [https://leetcode.com/problems/split-with-minimum-sum/solutions/3449967/](https://leetcode.com/problems/split-with-minimum-sum/solutions/3449967/)

---

# Instuition:We have to create an array which contains the frequency of digits in number. Then we add even digits to one number and odd digits to another.Result will be the sum of two final numbers.

For example we have 123456,
so we can split digits alternatively into 135 and 246.

For example we have 1234567,
so we can split digits alternatively into 1357 and 246.
<!-- Describe your first thoughts on how to solve this problem. -->

![photo_2023-04-24_14-13-52.jpg](./images/0.jpeg)
![photo_2023-04-24_14-14-51.jpg](./images/1.jpeg)


```C++ []
class Solution {
public:
    int splitNum(int num) {

      int numbers[10]={0};//for frequency of digits
        while (num > 0) {
            numbers[num % 10]++;
            num /= 10;
        }
        int n1 = 0, n2 = 0;
        bool odd = true;
        for (int i = 0; i < 10; i++) {
            while (numbers[i] > 0) {
                if (odd) {
                    n1 = n1 * 10 + i;
                }
                else {
                    n2 = n2 * 10 + i;
                }
                numbers[i]--;
                odd = !odd;
            }
        }
        return n1 + n2;   
    }
};
```
```C# []
public class Solution {
    public int SplitNum(int num) {
        int[] freq = new int[10];
        while (num > 0) {
            freq[num % 10]++;
            num /= 10;
        }
        int n1 = 0, n2 = 0;
        bool odd = true;
        for (int i = 0; i < 10; i++) {
            while (freq[i] > 0) {
                if (odd) {
                    n1 = n1 * 10 + i;
                } else {
                    n2 = n2 * 10 + i;
                }
                freq[i]--;
                odd = !odd;
            }
        }
        return n1 + n2;
    }
}
```



