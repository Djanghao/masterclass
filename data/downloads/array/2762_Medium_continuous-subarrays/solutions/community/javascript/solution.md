# ❇ continuous-subarrays👌 🏆O(N)❤️ Javascript🎯 Memory👀100.00%🕕 ++Explanation✍️ 🔴🔥 ✅ 👉 💪🙏

**Author:** anurag-sindhu
**Votes:** 3
**Link:** [https://leetcode.com/problems/continuous-subarrays/solutions/4523178/](https://leetcode.com/problems/continuous-subarrays/solutions/4523178/)

---

Time Complexity: O(N)
Space Complexity: O(1)

```
var continuousSubarrays = function (nums) {
    let tempBiggestIndex = 0;
    let tempSmallestIndex = 0;
    let exploredTillInPreviousJourneyIndex = null;
    let exploredJourneyStartedIndex = null;
    let tempLength = 0;
    let count = 0;
    let secondaryPointer = 0;
    let primaryPointer = 0;
    for (primaryPointer = 0; primaryPointer < nums.length; primaryPointer++) {
        const tempBiggestIndexCondition =
            Math.abs(nums[primaryPointer] - nums[tempBiggestIndex]) <= 2;
        const tempSmallestIndexCondition =
            Math.abs(nums[primaryPointer] - nums[tempSmallestIndex]) <= 2;
        if (tempBiggestIndexCondition && tempSmallestIndexCondition) {
            //updating the Biggest and Smallest Indexes
            tempBiggestIndex =
                nums[primaryPointer] > nums[tempBiggestIndex] ? primaryPointer : tempBiggestIndex;
            tempSmallestIndex =
                nums[primaryPointer] < nums[tempSmallestIndex] ? primaryPointer : tempSmallestIndex;
            tempLength++;
        } else {
            if (exploredTillInPreviousJourneyIndex !== null) {
                // decreasing the overlapped numbers
                count -=
                    ((exploredTillInPreviousJourneyIndex - exploredJourneyStartedIndex + 1) *
                        (exploredTillInPreviousJourneyIndex -
                            exploredJourneyStartedIndex +
                            1 +
                            1)) /
                    2;
            }
            if (tempBiggestIndexCondition || tempSmallestIndexCondition) {
                exploredTillInPreviousJourneyIndex = primaryPointer - 1;
                primaryPointer = ++secondaryPointer;
            } else {
                // Overlapping not possible the nums[primaryPointer] because its out of the reach of possible difference(<=2),
                // hence starting the complete new journey
                secondaryPointer = primaryPointer;
                exploredTillInPreviousJourneyIndex = null;
            }
            exploredJourneyStartedIndex = primaryPointer;
            tempBiggestIndex = primaryPointer;
            tempSmallestIndex = primaryPointer;
            count += (tempLength * (tempLength + 1)) / 2;
            tempLength = 1;
        }
    }
    if (exploredTillInPreviousJourneyIndex !== null) {
        // decreasing the overlapped numbers
        count -=
            ((exploredTillInPreviousJourneyIndex - exploredJourneyStartedIndex + 1) *
                (exploredTillInPreviousJourneyIndex - exploredJourneyStartedIndex + 1 + 1)) /
            2;
    }
    count += (tempLength * (tempLength + 1)) / 2;
    return count;
};
```
![image](./images/0.png)
