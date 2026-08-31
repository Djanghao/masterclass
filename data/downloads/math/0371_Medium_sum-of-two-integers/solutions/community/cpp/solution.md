# Share my C++ solutions,easy to understand

**Author:** vdvvdd
**Votes:** 141
**Link:** [https://leetcode.com/problems/sum-of-two-integers/solutions/84305/](https://leetcode.com/problems/sum-of-two-integers/solutions/84305/)

---

    class Solution {
    public:
        int getSum(int a, int b) {
            int sum = a;
            
            while (b != 0)
            {
                sum = a ^ b;//calculate sum of a and b without thinking the carry 
                b = (a & b) << 1;//calculate the carry
                a = sum;//add sum(without carry) and carry
            }
            
            return sum;
        }
    };