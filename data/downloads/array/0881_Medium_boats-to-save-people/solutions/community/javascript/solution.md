# ✔️✔️Easy Solutions in Java ✔️✔️, Python ✔️, and C++ ✔️🧐Look at once 💻 with Exaplanation

**Author:** Vikas-Pathak-123
**Votes:** 40
**Link:** [https://leetcode.com/problems/boats-to-save-people/solutions/3372708/](https://leetcode.com/problems/boats-to-save-people/solutions/3372708/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The basic idea is to sort the array in non-decreasing order, then use two pointers to represent the lightest and heaviest people, and gradually move them towards each other while keeping track of the number of boats used. Since we want to minimize the number of boats used, we want to put as many people on each boat as possible, subject to the weight limit.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Sort the `people` array in non-decreasing order.

2. Initialize the left pointer to the first element of the array, and the right pointer to the last element of the array.

3. Initialize a counter variable `boats` to 0.

4. While the left pointer is less than or equal to the right pointer, do the following:
a. Check if the sum of the weights of the people at the left and right pointers is less than
or equal to the `limit`.
b. If the sum is less than or equal to the `limit`, move the left pointer one step to the
right to include the next lightest person.
c. Move the right pointer one step to the left to include the next heaviest person,
regardless of whether or not they can fit on the current boat.
d. Increment the `boats` counter by 1.

5. Return the `boats` counter, which represents the total number of boats used.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this approach is $$O(n log n)$$ , where n is the length of the `people` array. This is because we use the `sort` function to sort the array in nondecreasing order, which has a time complexity of $$O(n log n)$$, and we use two pointers to traverse the sorted array, which has a time complexity of $$O(n)$$.


- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of this approach is $$O(1)$$, because we only use a
constant amount of extra space to store the left and right pointers and the `boats` counter.

![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

# Code
``` Java []
class Solution {
    public int numRescueBoats(int[] people, int limit) {
        Arrays.sort(people);
        int left = 0, right = people.length - 1, boats = 0;
        while (left <= right) {
            if (people[left] + people[right] <= limit) {
                left++;
            }
            right--;
            boats++;
        }
        return boats;
    }
}

```
```javascript []
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort(function(a, b) { return a - b; });
    var left = 0, right = people.length - 1, boats = 0;
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
        }
        right--;
        boats++;
    }
    return boats;
};

```
```python []
class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()
        left, right, boats = 0, len(people) - 1, 0
        while left <= right:
            if people[left] + people[right] <= limit:
                left += 1
            right -= 1
            boats += 1
        return boats

```
```C++ []
class Solution {
public:
    int numRescueBoats(vector<int>& people, int limit) {
        sort(people.begin(), people.end());
        int left = 0, right = people.size() - 1, boats = 0;
        while (left <= right) {
            if (people[left] + people[right] <= limit) {
                left++;
            }
            right--;
            boats++;
        }
        return boats;
    }
};

```
# Please Comment\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```