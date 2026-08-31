# ✅✅Faster || Easy To Understand || C++ Code

**Author:** __KR_SHANU_IITG
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/2669766/](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/2669766/)

---

* ***Greedy***

* ***Time Complexity :- O(N)***

* ***Space Complexity :- O(1)***

```
class Solution {
public:
    int minimumSwap(string str1, string str2) {

        int n = str1.size();

        //  [x, x]   we can match this type of pattern in 1 swap, let's say this as type 1
        //  [y, y]

        //  [x, y]   we can match this type of pattern in 2 swap, let's say this as type 2
        //  [y, x]

        // if we get a match then simply skip

        // count the no. of 'x' and 'y' of str1 at mismatch position 

        int count_x = 0;

        int count_y = 0;

        for(int i = 0; i < n; i++)
        {
            if(str1[i] != str2[i])
            {
                if(str1[i] == 'x')
                {
                    count_x++;
                }
                else if(str1[i] == 'y')
                {
                    count_y++;
                }
            }
        }

        // if we are having odd no. of mismatch then it is not possible to make equal string

        if((count_x + count_y) % 2)
        {
            return -1;
        }

        int swaps = 0;

        // find the no. of swaps required for type 1 match

        swaps += (count_x / 2 + count_y / 2);

        // if there are any mismatch remaining, then match this with the help of type 2

        if(count_x % 2 == 1)
        {
            swaps += 2;
        }

        return swaps;
    }
};
```