# ✍ ✅ [JavaScript][PHP] Two-Pointer Approach to Solving the Rescue Boat Problem

**Author:** akunopaka
**Votes:** 6
**Link:** [https://leetcode.com/problems/boats-to-save-people/solutions/3372569/](https://leetcode.com/problems/boats-to-save-people/solutions/3372569/)

---

# Approach
This approach uses a greedy algorithm to solve the problem. 
It **sorts the array** of passengers by weight in ascending order.
A **left pointer is** initialized to the **first element** of the array and a **right pointer is** initialized to the **last element** of the array(heaviest passenger).

The elements at the left pointer(**lighter passenger**) **and** right pointer(**heaviest passenger**) are added together and the total is compared to the limit. If the total **is greater than the limit**, **only** the element at the right pointer(**heaviest passenger**) **is taken** to the boat and the *right pointer is decremented*. 

If the **total is less** than or equal to the limit, **both passengers are taken** and the *left pointer is incremented*. 

On each iteration **increment the number of boats needed**. 

This **continues until the left pointer is greater than the right** pointer(until all passengers are assigned to boats), at which point all elements have been processed and the *total number of boats is returned*. 


# Complexity
*Time Complexity*: O(n log n) due to the sorting of the array.
*Space Complexity*: O(1) as no additional space is used.



```php []
class Solution {
    /**
     * @param Integer[] $people
     * @param Integer $limit
     * @return Integer
     */
    function numRescueBoats(array $people, int $limit): int {
        // the idea is to collect the maximum sum to limit for each boat
        // two poiners approach
        // sort the array
        sort($people);
        // set the pointers
        $leftPointer = 0;
        $rightPointer = count($people) - 1;
        // set the counter
        $boatsCounter = 0;
        // loop until the pointers meet
        while ($leftPointer <= $rightPointer) {
            // we can always put the heaviest person in a boat
            // also we can put up to two people in a boat
            // So, if the sum of the two people is less than the limit
            if ($people[$leftPointer] + $people[$rightPointer] <= $limit) {
                // increment the left pointer
                $leftPointer++;
            }
            // decrement the right pointer
            $rightPointer--;
            // increment the boats counter
            $boatsCounter++;
        }
        // return the boats counter
        return $boatsCounter;
    }
}
```

```javascript []
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    let boatsCount = 0;
    people.sort((a, b) => a - b);

    let leftPointer = 0;
    let rightPointer = people.length - 1;

    while (leftPointer <= rightPointer) {
        if ((people[rightPointer] + people[leftPointer]) <= limit) {
            leftPointer++;
        }
        rightPointer--;
        boatsCount++;
    }
    return boatsCount;
};
```

##### Thanks for reading! If you have any questions or suggestions, please leave a comment below. I would love to hear your thoughts! \uD83D\uDE0A

### **Please upvote if you found this post helpful! \uD83D\uDC4D**






