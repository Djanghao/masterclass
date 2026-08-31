# [C++] O(log(N)) 4ms with proper explanation.

**Author:** sameerp98
**Votes:** 27
**Link:** [https://leetcode.com/problems/elimination-game/solutions/829076/](https://leetcode.com/problems/elimination-game/solutions/829076/)

---

```
class Solution
{
public:
    /*
    If we look at the sequence it is always of the form 2^(x) *(1,2,3,4...) where x is from [0,n/2)
    1 2 3 4 5 6 7 8 9 10 11 12 -> diff=1
      2   4   6   8   10    12 -> 2* (1 2 3 4 5) diff=2
      2       6       10       -> 2* (1 3 5) diff=4
              6                -> Answer
    In order to understand this question, first question yourself does the number of terms
    matter along with the direction in with we are removing the elements. If you think there are
    a total of 4 cases:
    Let n be number of terms in our sequece at any given time, and  direction be either left->right
    or right->left.
    n can odd or even
    cases are:
    n odd direction left->right  [1,2,3,4,5] -> [2,4] FOR ODD DIRECTION DOESN'T MATTER 
    n odd direction right->left  [1,2,3,4,5] -> [2,4] start always increases
    n even direction left->right [1,2,3,4] -> [2,4] start of the sequence was 1 now it is 2
    n even direction right->left [1,2,3,4] -> [1,3] start of the sequence is same as before.
    */
    int lastRemaining(int n)
    {
        int diff = 1, direction = 0, start = 1;
        //direction 0-> direction left->right
        //direction 1-> direction right->left
        while (n > 1)
        {
            if (n & 1 || direction == 0) //n is odd or when n is even direction should be left to right
            {
                start += diff;
            }
            n /= 2;
            diff *= 2;              //increase the difference between 2 terms of the sequence at each direction
            direction = !direction; //flip direction
        }
        return start;
    }
};
```