# ✅Two Simple Java Solutions || ✅Runtime 1ms || ✅ Beats 100%

**Author:** ahmedna126
**Votes:** 19
**Link:** [https://leetcode.com/problems/robot-return-to-origin/solutions/3960405/](https://leetcode.com/problems/robot-return-to-origin/solutions/3960405/)

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

# Code1 
```
class Solution {
    public boolean judgeCircle(String moves) {
        int UpDown = 0;
        int LeftRight = 0;

        for (char c : moves.toCharArray() )
        {
            if (c == 'U')
                UpDown++;
            else if (c == 'D')
                UpDown--;
            else if (c == 'R')
                LeftRight++;
            else if (c == 'L')
                LeftRight--;
        }
        return (LeftRight == 0 && UpDown == 0);
    }
}
```


# code 2

```
class Solution {
    public boolean judgeCircle(String moves) {
        int UpDown = 0;
        int LeftRight = 0;

        for (char c : moves.toCharArray() )
        {
            switch (c){
                case 'U':
                    UpDown++;
                    break;
                case 'D':
                    UpDown--;
                    break;
                case 'L':
                    LeftRight++;
                    break;
                case 'R':
                    LeftRight--;
                    break;
            }
        }



        return (LeftRight == 0 && UpDown == 0); 
    }
}
```


## For additional problem-solving solutions, you can explore my repository on GitHub: [GitHub Repository](https://github.com/ahmedna126/java_leetcode_challenges)


![e78315ef-8a9d-492b-9908-e3917f23eb31_1674946036.087042.jpeg](./images/0.jpeg)
