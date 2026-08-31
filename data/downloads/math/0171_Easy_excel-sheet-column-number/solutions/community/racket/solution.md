# Easy 4 line solution in C++

**Author:** ridz165h
**Votes:** 0
**Link:** [https://leetcode.com/problems/excel-sheet-column-number/solutions/4527927/](https://leetcode.com/problems/excel-sheet-column-number/solutions/4527927/)

---


# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
class Solution {
public:
    int titleToNumber(string columnTitle) {
        
        int count = 0,n=0;
        while(n<columnTitle.length()){
            char c = columnTitle[n];
            int t = c - 'A'+1;
            count = count * 26 + t;
            cout << t << " " << count << "\
";
            n++;
        }

        return count;
    }
};
```