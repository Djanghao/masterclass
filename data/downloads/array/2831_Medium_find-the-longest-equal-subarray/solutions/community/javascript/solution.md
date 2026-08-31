# ❇ find-the-longest-equal-subarray👌 🏆O(N)❤️ Javascript🎯 Memory👀95.45%🕕 ++Explanation✍️ 🔴

**Author:** anurag-sindhu
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/4564255/](https://leetcode.com/problems/find-the-longest-equal-subarray/solutions/4564255/)

---

Time Complexity: O(N)
Space Complexity: O(N)
```
var longestEqualSubarray = function (nums, k) {
    let totalElementsInThePicture = 0;
    let mostFrequentElement = 0;
    let elementMapping = {};
    let backPointer = 0;
    for (let index = 0; index < nums.length; index++) {
        if (!elementMapping[nums[index]]) {
            elementMapping[nums[index]] = 0
        }
        elementMapping[nums[index]] += 1
        mostFrequentElement = Math.max(elementMapping[nums[index]], mostFrequentElement)
        totalElementsInThePicture++
        while (totalElementsInThePicture - mostFrequentElement > k) {
            elementMapping[nums[backPointer++]] -= 1;
            totalElementsInThePicture--
        }
    }
    return mostFrequentElement
};
```

![image](./images/0.png)
