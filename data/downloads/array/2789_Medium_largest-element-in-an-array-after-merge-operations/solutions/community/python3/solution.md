# EXPLANATION WITH STEP BY STEP

**Author:** speedyy
**Votes:** 27
**Link:** [https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/3805349/](https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations/solutions/3805349/)

---

```
Choose an integer i such that " nums[i] <= nums[i + 1] "

If we have a sequence like    2 3 9 9 3   , here ' 2 3 9 9 ' fill up the condition. The
summation of ' 9 9 '(18) in ' 2 3 9 9 ' is larger than any other value(2, 3) as its a
NON-DECREASING SEQUENCE.
                 
                 2   3   9  '9'
                 2   3  '18'
                 2  '21'
                 23

As you can see summation from the backward in a non-decreasing sequence always give us a
value which is larger than the previous value like 18 is larger than 3, 21 larger than 2, 
covering the whole sequence in one shot.
This way we can easily get our LARGEST SUMMATION easily FROM ALL OF THE NON-DECREASING GROUPS.
```
### Implementation
```
                        2   4   7   9   2  3  3

assume sum = the last element = 3.

                        2   4   7   9   2  3  3
    _______________________________________|
   |
   Is 3 <= sum (3)? YES, so sum = 3 + 3 = 6

                        2   4   7   9   2  6
    ____________________________________|
   |
   Is 2 <= sum (6)? YES, sum = 6+2 = 8

                        2   4   7   9   8
    ________________________________|
   |
   Is 9 <= sum(8)? 'NO'! Since 9 > 8, so ofc 8 will be never be the answer. Just set sum = 
   current element (9), now again keep doing the summation.

Since sum = 9 now, 9+7 = 16 >= 4, 16+4 = 20 >= 2, 20+2 = 22

After getting 22, we haven't found any number >= 22, if we had let's say 23, ofc new sum = 23

Plain logic, no need to even think any max operation.
```

```
If you still have any kind of doubt, lets assume 'small' and 'big' = the summation of a
non-decreasing sequence and 'small' < 'big'

'small'  --   'small'   --   big   --    'small'   --    'small'
                                            |_______________|
        _____________________________________________|
       |
       Assume the summation of the last two 'small' is still less than the 'big'.
As the summation of the last 2 'small' < big, our answer starts from the 'big'. 'big' can
cover all of it's left ranges as no other value greater than 'big'.
Now all we have to do is returning the summation of ( 'small'  --   'small'   --   big )
```

```CPP []
class Solution 
{
public:
    long long maxArrayValue(vector<int>& nums) 
    {
        long long n = nums.size()-1, sum = nums[n];

        for(int i=n-1; i>-1; i--)
            sum = (nums[i] <= sum? sum + nums[i] : nums[i]);
        
        return sum;
    }
};
```
```Python []
class Solution:
    def maxArrayValue(self, nums: List[int]) -> int:
        n = len(nums) - 1
        sum = nums[n]

        for i in range(n-1, -1, -1):
            sum = sum + nums[i] if nums[i] <= sum else nums[i]

        return sum
```
```
``
Time  complexity : O(n)
Space complexity : O(1)
```
### If you have any kind of query plz comment it.
### An upvote will really make me happy if you liked my explanation. Thank you