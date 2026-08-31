# Python 3 hashmap solution O(N), no sort needed

**Author:** xil899
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/1767132/](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/1767132/)

---

Key implementation step:
* Create two hashmaps to count the frequencies of num with odd and even indices, respectively;
* Search for the `num` in each hashmap with the maximum and second maximum frequencies:
	* If the two `num`'s with the maximum frequencies are not equal, then return `len(nums) - (maxFreqOdd + maxFreqEven)`;
	* Otherwise return `len(nums) - max(maxFreqOdd + secondMaxFreqEven, maxFreqEven + secondMaxFreqOdd)`.

One thing to note in step 2 is that after getting the two hashmaps for odd and even indices, we **don't** need to sort the hashmap keys based on their values or using heaps, but only need to write a subroutine by scanning through all `num`'s in the hashmap, so the overall time complexity is `O(N)` instead of `O(NlogN)`.

Below is my in-contest solution, though I could have made it a bit neater. Please upvote if you find this solution helpful.

```
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        n = len(nums)
        odd, even = defaultdict(int), defaultdict(int)
        for i in range(n):
            if i % 2 == 0:
                even[nums[i]] += 1
            else:
                odd[nums[i]] += 1
        topEven, secondEven = (None, 0), (None, 0)
        for num in even:
            if even[num] > topEven[1]:
                topEven, secondEven = (num, even[num]), topEven
            elif even[num] > secondEven[1]:
                secondEven = (num, even[num])
        topOdd, secondOdd = (None, 0), (None, 0)
        for num in odd:
            if odd[num] > topOdd[1]:
                topOdd, secondOdd = (num, odd[num]), topOdd
            elif odd[num] > secondOdd[1]:
                secondOdd = (num, odd[num])
        if topOdd[0] != topEven[0]:
            return n - topOdd[1] - topEven[1]
        else:
            return n - max(secondOdd[1] + topEven[1], secondEven[1] + topOdd[1])
```