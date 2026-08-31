# 💡 Interview Approach for Beginners - Clean Code

**Author:** cs_iitian
**Votes:** 85
**Link:** [https://leetcode.com/problems/largest-divisible-subset/solutions/4699839/](https://leetcode.com/problems/largest-divisible-subset/solutions/4699839/)

---


```\uD83D\uDCA1Warning []
If you know LIS ( Longest Increasing Subsequence ), 
please don't watch this blog just try to think how can you map that
logic here. Although in this blog It's first and last time I'm
mentioning LIS.
```

### Youtube Solution ( In Hindi Language Only )
https://www.youtube.com/watch?v=0EAv6OKEZSk&ab_channel=CSIITIAN

## Common Sense
In Each group atleast one element would be present, so for size 1 we can have n no. of groups.

Now let's make some sense, how would you add a number in the group
Group: [1, 3, 6]
and you have 9, would you be able to add ?
Of Course not why because 9 would not be divisble by 6.

What about 12 ? Yes you can add 12.

## Observation to Add New Number
Now one more thing to observe here is If I just divide the newly (to be) added number by the maximum element of my group I can make sure the whole group is divided. ( Because the group's LCM is the maximum number )

### Can I add number less than the maximum number in group ?
Well yes ! Let's see
Group: [1, 4, 8]
and now can I add 2 here ? yes ! Now new Group would be [1, 2, 4, 8]

So I have to handle two things, 
1. If the number is greater or equal to maximum of group, then it should be divisible by maximum.
2. If the number is less than maximum of group, it should divide all the group members.

We can see that in first point, It is much easy to add I just need to know maximum but in second point I need to traverse the whole group to be able to add new element.

## What If Say, I Can handle both in First Point itself
Previously we have seen two points by which we can add new number to a group.
But What if I always make sure that I add new number using first point only. I mean what if I always make sure that the number I am adding is always greater than group ?

Take a Pause and Think about it , How can we do it ?

Okay, so basically I will sort the array to make sure the element which I am going to add is always greater.

Now I don't need to know the group.

So for current element, I can check all the previous and check divisibility and if it is divisble then it can be added to group so I will increase the group size by 1.

Now I know the size, but here I also need to know the group element, So I also keep track of the element. So whenever I increase the group size I will add the previous element. So that I can backtrack the origin of the group. ( Group's starting point would be marked as -1 )

# Approach
<!-- Describe your approach to solving the problem. -->
1. Sort the Array ( ascending order )
2. For Each Element traverse the previous element
3. If element is divisible by any previous element it means it can be part of that group by we also need to make sure it is part of the group with maximum size, So if we found any bigger group we will add it to that group
4. If we update the group size, it means we have added new element I will update my previous of the current element with group's maximum till now ( before adding )
5. I will also track the index of the last element added in the biggest group
6. Now I will backtraverse from that maximum index ( defined in previous point ) using my previous element array and one by one add into my result list

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {

    public List<Integer> largestDivisibleSubset(int[] nums) {
       
        Arrays.sort(nums);
        int n = nums.length;
       
        int[] groupSize = new int[n];
        int[] prevElement = new int[n];
        int maxIndex = 0;

        for(int i=0;i<n;i++) {
            groupSize[i] = 1;
            prevElement[i] = -1;
            for(int j=0;j<i;j++) {
                if(nums[i]%nums[j] == 0) {
                    if(groupSize[i] < 1 + groupSize[j]) {
                        groupSize[i] = 1 + groupSize[j];
                        prevElement[i] = j;
                    }
                }
            }
            if(groupSize[i] > groupSize[maxIndex]) {
                maxIndex = i;
            }
        }

        List<Integer> result = new ArrayList();
        while(maxIndex != -1) {
            result.add(0, nums[maxIndex]);
            maxIndex = prevElement[maxIndex];
        }

        return result;
    }
}
```
```C++ []
class Solution {
public:
    vector<int> largestDivisibleSubset(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n = nums.size();
        vector<int> groupSize(n, 1), prevElement(n, -1);
        int maxIndex = 0;

        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                if (nums[i] % nums[j] == 0 && groupSize[i] < groupSize[j] + 1) {
                    groupSize[i] = groupSize[j] + 1;
                    prevElement[i] = j;
                }
            }
            if (groupSize[i] > groupSize[maxIndex]) {
                maxIndex = i;
            }
        }

        vector<int> result;
        for (int i = maxIndex; i != -1; i = prevElement[i]) {
            result.insert(result.begin(), nums[i]);
        }
        return result;
    }
};
```
```Kotlin []
fun largestDivisibleSubset(nums: IntArray): List<Int> {
    nums.sort()
    val n = nums.size
    val groupSize = IntArray(n) { 1 }
    val prevElement = IntArray(n) { -1 }
    var maxIndex = 0

    for (i in nums.indices) {
        for (j in 0 until i) {
            if (nums[i] % nums[j] == 0 && groupSize[i] < groupSize[j] + 1) {
                groupSize[i] = groupSize[j] + 1
                prevElement[i] = j
            }
        }
        if (groupSize[i] > groupSize[maxIndex]) {
            maxIndex = i
        }
    }

    val result = mutableListOf<Int>()
    var i = maxIndex
    while (i != -1) {
        result.add(0, nums[i])
        i = prevElement[i]
    }
    return result
}
```
```Python []
class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        nums.sort()
        n = len(nums)
        groupSize = [1] * n
        prevElement = [-1] * n
        maxIndex = 0

        for i in range(n):
            for j in range(i):
                if nums[i] % nums[j] == 0:
                    if groupSize[i] < 1 + groupSize[j]:
                        groupSize[i] = 1 + groupSize[j]
                        prevElement[i] = j
            if groupSize[i] > groupSize[maxIndex]:
                maxIndex = i

        result = []
        while maxIndex != -1:
            result.insert(0, nums[maxIndex])
            maxIndex = prevElement[maxIndex]

        return result
```
```JavaScript []
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const groupSize = new Array(n).fill(1);
    const prevElement = new Array(n).fill(-1);
    let maxIndex = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && groupSize[i] < groupSize[j] + 1) {
                groupSize[i] = groupSize[j] + 1;
                prevElement[i] = j;
            }
        }
        if (groupSize[i] > groupSize[maxIndex]) {
            maxIndex = i;
        }
    }

    const result = [];
    for (let i = maxIndex; i !== -1; i = prevElement[i]) {
        result.unshift(nums[i]);
    }

    return result;
};
```
```Rust []
impl Solution {
    pub fn largest_divisible_subset(nums: Vec<i32>) -> Vec<i32> {
        let mut nums = nums;
        nums.sort();
        let n = nums.len();
        let mut group_size = vec![1; n];
        let mut prev_element = vec![-1; n];
        let mut max_index = 0;

        for i in 0..n {
            for j in 0..i {
                if nums[i] % nums[j] == 0 && group_size[i] < group_size[j] + 1 {
                    group_size[i] = group_size[j] + 1;
                    prev_element[i] = j as i32;
                }
            }
            if group_size[i] > group_size[max_index] {
                max_index = i;
            }
        }

        let mut result = Vec::new();
        let mut i = max_index as i32;
        while i != -1 {
            result.insert(0, nums[i as usize]);
            i = prev_element[i as usize];
        }
        result
    }
}
```
```Go []
func largestDivisibleSubset(nums []int) []int {
    sort.Ints(nums)
    n := len(nums)
    groupSize := make([]int, n)
    prevElement := make([]int, n)
    maxIndex := 0

    for i := 0; i < n; i++ {
        groupSize[i] = 1
        prevElement[i] = -1
        for j := 0; j < i; j++ {
            if nums[i]%nums[j] == 0 && groupSize[j]+1 > groupSize[i] {
                groupSize[i] = groupSize[j] + 1
                prevElement[i] = j
            }
        }
        if groupSize[i] > groupSize[maxIndex] {
            maxIndex = i
        }
    }

    var result []int
    for i := maxIndex; i != -1; i = prevElement[i] {
        result = append([]int{nums[i]}, result...)
    }
    return result
}
```

That's it guys !!!

## If you really come this far, please upvoted it !

---
### Connect via
#### [1. Instagram](https://www.instagram.com/cs_iitian/) ( Follow )
#### [2. Facebook Page](https://www.facebook.com/cs.iitian)
#### [3. Twitter](https://twitter.com/cs_iitian)
#### [4. Blog](https://csiitian.blog/) ( Subscribe to news letter )
#### [5. Medium](https://medium.com/@csiitian)
#### [6. Youtube](https://www.youtube.com/channel/UCuxmikkhqbmBOUVxf-61hxw) ( Like, Share & Subscribe )
#### [7. Leetcode](https://leetcode.com/cs_iitian/)