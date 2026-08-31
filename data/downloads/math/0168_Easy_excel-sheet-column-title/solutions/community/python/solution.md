# Python solution with explanation

**Author:** yuzhiqiang
**Votes:** 377
**Link:** [https://leetcode.com/problems/excel-sheet-column-title/solutions/51404/](https://leetcode.com/problems/excel-sheet-column-title/solutions/51404/)

---

Let's see the relationship between the Excel sheet column title and the number:

    A   1     AA    26+ 1     BA  2\xd726+ 1     ...     ZA  26\xd726+ 1     AAA  1\xd726\xb2+1\xd726+ 1
    B   2     AB    26+ 2     BB  2\xd726+ 2     ...     ZB  26\xd726+ 2     AAB  1\xd726\xb2+1\xd726+ 2
    .   .     ..    .....     ..  .......     ...     ..  ........     ...  .............   
    .   .     ..    .....     ..  .......     ...     ..  ........     ...  .............
    .   .     ..    .....     ..  .......     ...     ..  ........     ...  .............
    Z  26     AZ    26+26     BZ  2\xd726+26     ...     ZZ  26\xd726+26     AAZ  1\xd726\xb2+1\xd726+26

Now we can see that ABCD\uff1dA\xd726\xb3\uff0bB\xd726\xb2\uff0bC\xd726\xb9\uff0bD\uff1d1\xd726\xb3\uff0b2\xd726\xb2\uff0b3\xd726\xb9\uff0b4

But how to get the column title from the number? We can't simply use the n%26 method because:

ZZZZ\uff1dZ\xd726\xb3\uff0bZ\xd726\xb2\uff0bZ\xd726\xb9\uff0bZ\uff1d26\xd726\xb3\uff0b26\xd726\xb2\uff0b26\xd726\xb9\uff0b26

We can use (n-1)%26 instead, then we get a number range from 0 to 25.

    class Solution:
        # @return a string
        def convertToTitle(self, num):
            capitals = [chr(x) for x in range(ord('A'), ord('Z')+1)]
            result = []
            while num > 0:
                result.append(capitals[(num-1)%26])
                num = (num-1) // 26
            result.reverse()
            return ''.join(result)