# C# (and C++) - O(n) time, O(1) memory - the most optimized you can do (correct me if I'm wrong)

**Author:** danilbutin
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3788036/](https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3788036/)

---

# Important note
I want to correct myself a bit
Multiplying by 2 inside of the loop might be actually faster in the result
Whoever is reading this, please note that

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First, you gotta find that specific element. I remembered that there was an algorithm for finding the most frequent element with O(n) time consumption, but I couldn't remember what it was. Hopefully, it can be googled easily, and it appeared to be the "Moore's voting" algorithm (I think I've heard people call it just a voting algorithm).
After you do that it's pretty straightforward. You just iterate over the list, tracking both parts splitted by the ith element.

# Approach
<!-- Describe your approach to solving the problem. -->
So yeah, Moore's voting algorithm is represented in the "FindMostFrequentNumber" method.
The next thing to do is to count the appearances of this element in the list (cause it could be from n / 2 to n, and the answer depends on that).
And the last thing is pretty easy - you just iterate over the initial list and keep tracking the count of elements in both parts and count of the "MostFrequentNumber" occurrences in both parts. The first time it meets the condition, return i. The algorithm shouldn't go to the last return if it meets the pre-defined characteristics

# Complexity
- Time complexity: $$O(3n)$$ - 1 for searching the number, 1 for counting the occurrences, 1 for the final loop. Which translates to $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code - C#
```
public class Solution {
    public int MinimumIndex(IList<int> nums)
    {
        var n = nums.Count;

        var mostFrequentNumber = FindMostFrequentNumber(nums);

        var totalCountOfMostFrequentNumber = 0;
        for (var i = 0; i < n; i++)
            if (nums[i] == mostFrequentNumber)
                totalCountOfMostFrequentNumber++;

        var leftDoubled = 0;
        var rightDoubled = totalCountOfMostFrequentNumber * 2;
        var leftLength = 0;
        var rightLength = n;
        for (var i = 0; i < n; i++)
        {
            leftLength++;
            rightLength--;
            if (nums[i] == mostFrequentNumber)
            {
                leftDoubled += 2;
                rightDoubled -= 2;
            }

            if (leftDoubled > leftLength && rightDoubled > rightLength)
                return i;
        }

        return -1;
    }

    private int FindMostFrequentNumber(IList<int> nums)
    {
        var res = 0;
        var count = 1;
        for (var i = 1; i < nums.Count; i++)
        {
            if (nums[i] == nums[res])
                count++;
            else
                count--;

            if (count == 0)
            {
                res = i;
                count = 1;
            }
        }

        return nums[res];
    }
}
```

Upd:
# Code - C++ just for example
And it's mostly from here, just adjusted a bitc
```
class Solution {
public:
    int minimumIndex(vector<int>& nums) {
    int majority = nums[0], count = 0;
    for(auto n: nums){
        if(n == majority) count++;
        else count--;
        if(count == 0) { majority = n; count = 1; }
    }
    
    int majCount = 0;
    for(auto n: nums) if(n == majority)  majCount++;
    
    majCount = majCount * 2;
    count = 0;
    int totalLeftLength = 0, totalRightLength = nums.size();
    for(int i = 0; i < nums.size(); ++i){
        totalLeftLength++;
        totalRightLength--;
        if(nums[i] == majority) {
            count +=2;
            majCount -=2;
        }
        if(count > totalLeftLength && majCount > totalRightLength) return i;
    }
    return -1;
}
};
```