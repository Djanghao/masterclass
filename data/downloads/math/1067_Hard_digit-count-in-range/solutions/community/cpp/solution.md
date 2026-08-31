# solution based on each digit of the number.

**Author:** dawninghu
**Votes:** 0
**Link:** [https://leetcode.com/problems/digit-count-in-range/solutions/5984582/](https://leetcode.com/problems/digit-count-in-range/solutions/5984582/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    int digitsCount(int d, int low, int high) {
        if(low>=2)
            return countDigitD(d, high) - countDigitD(d, low-1);
        else
            return countDigitD(d, high);
    }
    int countDigitD(int d, int n) {
        string s = to_string(n);
        int N = s.size();
        long count = 0;
        if(d!=0) {
            for(int i=1; i<=N; i++) {
                long left_count = n /pow(10, i);
                count += left_count * pow(10, i-1);
                if(s[N-i]-'0' > d)
                    count += pow(10, i-1);
                else if(s[N-i]-'0' == d)
                    count += (long)n % (long)pow(10, i-1) +1;
            };
        } else { //d==0;
            for(int i=1; i<=N-1; i++) { //0 can not be at N digit.
                long left_count = n /pow(10, i)-1; //if digit i is 0, then higher can not be 0.
                count += left_count * pow(10, i-1);
                if(s[N-i]-'0' > d)
                    count += pow(10, i-1);
                else if(s[N-i]-'0' == d)
                    count += (long)n % (long)pow(10, i-1) +1;
            }
        }
        return count;
    }
};
```