# let's understand Segment based solution, beats 100%, O(1) space, O(n) with YouTube explanation

**Author:** vinod_aka_veenu
**Votes:** 40
**Link:** [https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/6013828/](https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/6013828/)

---

# YouTube explanation  https://youtu.be/GuP_aVmcQV0

# Intuition && Approach
keep it simple guys, as we know the swap between adjacent is possible only when they have same number of set bits===> 

for example:- **nums[] = {4, 1, 8} ==>{0100, 0001, 1000}** ==> all have same number of bits so we can sort

if nums[] = {4, 1, 8, 14, 13} ==> {0100, 0001, 1000, 1110, 1101} ===> first 3 number are having **same bits**.
**minVal = 1**   from the same set bit set
**maxVal = 8**
now the next integer is different set bits , in this case we need to check 2 condtions:- 

1) if (currInteger < previous MaxVal) ===> return false.
   **why??** because its not possible to make swap here as we got an smaller value on rigjht side that too with different set bits.

2) if **(currInteger > previous MaxVal)** ===> means we caan proceed further becasue even though its diffrent set bit number but also greater than the maxVal of previous bits group (1 bit set group here)

so as (14 > 8) ===> means we can further proceed it , and now we got a new group of (3 set bit)==> 

so in this group also we will keep on tracking **maxval, minVal**
now at any point of time if we found a condition where **minVal<prevMaxVal ===> return false;** ===> why because consider an example like this 

{1, 8, 4, 14, 13, 7} ===> we have 2 bits group :- 

                        1-bit => {0001, 1000, 0100} ==> maxVal = 8
                        3-bit => {1110, 1101, 0111} ===> minVal = 7
so in above example (currMinVal < prevMaxVal)==> no swap possible ==> not able to sort ===> return false.

came out of loop, at the end return **currMin>prevMax**

**why??** , because last check we are doing after comeout of loop becase by this time condition for loop traversal was closed.




# Code
```java []
class Solution {
    public boolean canSortArray(int[] nums) {
    int prevMax = Integer.MIN_VALUE;
    int currMax = nums[0];
    int currMin = nums[0];
    int setBits = Integer.bitCount(nums[0]);

    for(int i=1; i<nums.length; i++)
    {
     if(setBits==Integer.bitCount(nums[i]))
     {
       currMax = Math.max(currMax, nums[i]);
       currMin = Math.min(currMin, nums[i]);   
     }
     else{
           if(currMin<prevMax)
           return false;
           prevMax = currMax;
           setBits = Integer.bitCount(nums[i]);
           currMin = nums[i];
           currMax = nums[i];
     }
     
    }
      return currMin>prevMax;
    }
}
```
```C# []
public class Solution
{
    public bool CanSortArray(int[] nums)
    {
        int prevMax = int.MinValue;
        int currMax = nums[0];
        int currMin = nums[0];
        int setBits = CountBits(nums[0]);

        for (int i = 1; i < nums.Length; i++)
        {
            if (setBits == CountBits(nums[i]))
            {
                currMax = Math.Max(currMax, nums[i]);
                currMin = Math.Min(currMin, nums[i]);
            }
            else
            {
                if (currMin < prevMax)
                    return false;

                prevMax = currMax;
                setBits = CountBits(nums[i]);
                currMin = nums[i];
                currMax = nums[i];
            }
        }

        return currMin > prevMax;
    }

    private int CountBits(int num)
    {
        return Convert.ToString(num, 2).Replace("0", "").Length;
    }
}

```
```C++ []
class Solution {
public:
    bool canSortArray(std::vector<int>& nums) {
        int prevMax = INT_MIN;
        int currMax = nums[0];
        int currMin = nums[0];
        int setBits = countBits(nums[0]);

        for (size_t i = 1; i < nums.size(); i++) {
            if (setBits == countBits(nums[i])) {
                currMax = std::max(currMax, nums[i]);
                currMin = std::min(currMin, nums[i]);
            } else {
                if (currMin < prevMax)
                    return false;

                prevMax = currMax;
                setBits = countBits(nums[i]);
                currMin = nums[i];
                currMax = nums[i];
            }
        }

        return currMin > prevMax;
    }

private:
    int countBits(int num) {
        return std::bitset<32>(num).count();
    }
};
```
```python []
class Solution(object):
    def canSortArray(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        prev_max = float('-inf')
        curr_max = nums[0]
        curr_min = nums[0]
        set_bits = self.count_bits(nums[0])

        for i in range(1, len(nums)):
            if set_bits == self.count_bits(nums[i]):
                curr_max = max(curr_max, nums[i])
                curr_min = min(curr_min, nums[i])
            else:
                if curr_min < prev_max:
                    return False

                prev_max = curr_max
                set_bits = self.count_bits(nums[i])
                curr_min = nums[i]
                curr_max = nums[i]

        return curr_min > prev_max

    def count_bits(self, num):
        return bin(num).count('1')

```



