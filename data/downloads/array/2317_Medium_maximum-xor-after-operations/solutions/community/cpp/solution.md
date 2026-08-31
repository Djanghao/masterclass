# Clear and Lucid Explanation along with Dry Runs | O(n) |

**Author:** KanishYathraRaj
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-xor-after-operations/solutions/4486693/](https://leetcode.com/problems/maximum-xor-after-operations/solutions/4486693/)

---

# Intuition

We can't increase nums[i] since we use AND operator with it because AND operator can't make '0' to '1' but it can make '1' to '0'. Did you find the hint behind it? if not , don't worry I am here to help you!

lets take first example,

`nums = [ 3 , 2 , 4 , 6 ] `

Every integers has 32 bits
```
3 ->  0 ........ 0 0 1 1
2 ->  0 ........ 0 0 1 0
4 ->  0 ........ 0 1 0 0
6 ->  0 ........ 0 1 1 0
```
You can see that after 3rd bit (right to left) in every elemet , there is no '1' in the bits. 

Since we need to find the maximum xor value of all element , the maximum "possible" answer can be , "1 1 1" after some required operations( don't worry about the operation we need to do)

(because after 3rd bit , all bits in every elemet is '0' since we use AND operator to change the value of nums[i] , it can only change bit '1' to '0' , not '0' to '1' )

`0 ........ 0 1 1 1 which is  7 (Maximum Possible Answer)`

So we need to some how try to reach the "Maximum Possible Answer".

Lets take a look at the XOR property , it return 1 when bits differ and it return 0 when same bits encounter.

if I take the XOR for the above example without nessary operations we get,

```
3 ->  0 1 1
2 ->  0 1 0
4 ->  1 0 0
6 ->  1 1 0
    ---------
      0 1 1  -> xor value
      2 3 1  -> no of set bits('1') in each coloumn.
```

You can see that when there is ODD no of set bits it gives '1' in xor

when there is EVEN no of set bits it gives '0' in xor beause same bits in xor return '0' so all odd bits cancel out each other.

So if we avoid Even no of set bits , then we can reach the Maximum Possible Answer.

why not try convert "even no of set bits into odd no of set bits"
As we discussed earlier we can't convert "0" to "1" so we are going to convert the existing "1" bit to "0" bit hence no of bits in that column becomes ODD. 

If you don't understand try read it once more or see the dry run below.

```
from the example we have taken , we can convert

4 -> 1 0 0 to 0 0 0 which is 0
or
6 -> 1 1 0 to 0 1 0 which is 2

-----------
3 ->  0 1 1 
2 ->  0 1 0
0 ->  0 0 0 
6 ->  1 1 0
     -------
      1 1 1
------------

or

------------
3 ->  0 1 1
2 ->  0 1 0
4 ->  1 0 0
2 ->  0 1 0
     -------
      1 1 1
------------

so reducing even set bits by one gives odd bits
which can maximize the xor value.
```

Lets take the 2nd example.

```
nums = [ 1 , 2 , 3 , 9 , 2 ]

1 -> 0 0 0 1
2 -> 0 0 1 0
3 -> 0 0 1 1
9 -> 1 0 0 1
-------------
     1 0 2 3 -> no of set bits in each column.
-------------

So the Maximum Possible Answer can be 1 1 1 1 which is 15

We can see that 2nd and 3rd column have even no of set bits 
as 2 and 0 

we can reduce 2 to 1 
but we can't reduce 0 to -1

because there is no existing '1' bit in that column 
so we can't do the operation '1' to '0'.
(as there there is no set bits)

Hence the Answer is 1 0 1 1 which is 11.


1 -> 0 0 0 1
2 -> 0 0 1 0
1 -> 0 0 0 1    3 (0 0 1 1) converted to 1 (0 0 0 1)
9 -> 1 0 0 1
-------------
     1 0 1 1
     1 0 1 3 -> no of set bits.
-------------

or

1 -> 0 0 0 1
0 -> 0 0 0 0     2 (0 0 1 0) converted to 0 (0 0 0 0)
3 -> 0 0 1 1  
9 -> 1 0 0 1
-------------
     1 0 1 1
     1 0 1 3 -> no of set bits.
-------------

Answer is 1 0 1 1 which 11.
```
# Approach
 
why not try cumulative OR operatoion on the every element.

so if set bit exist in any of the column it returns "1" and
if set bit not exist in the their coumn it return "0" 

```
3 ->  0 1 1
2 ->  0 1 0
4 ->  1 0 0
6 ->  1 1 0
    ---------
      1 1 1  -> OR value
    ---------

1 -> 0 0 0 1
2 -> 0 0 1 0
3 -> 0 0 1 1
9 -> 1 0 0 1
    ---------
     1 0 1 1 -> OR value
    ---------

Hope you all understood my Explanation
```

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int maximumXOR(vector<int>& nums) {

        int ans = 0 ;

        for(int x : nums) ans |= x ;

        return ans;
    }
};
```

# PLEASE UP VOTE!
