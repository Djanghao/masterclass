# ✅  Multiple Javascript Solutions || Brute Force O(n) O(1) || Binary Search O(logn) O(1) || XOR

**Author:** lakshmikant4u
**Votes:** 10
**Link:** [https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/3213337/](https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/3213337/)

---

**Feel free to ask Q's...**
*#happytohelpu*

***Do upvote if you find this solution useful. Happy Coding!***

**Solution 1 : Brute Force (with XOR)**
Time Complexity : O(n)
Space Complexity : O(1)

```

const singleNonDuplicate = nums => nums.reduce((a, b) => a ^ b); // XOR to get the single value

```


**Solution 2 : Brute Force**
Time Complexity : O(n)
Space Complexity : O(1) 

```

const singleNonDuplicate = nums => {
    //Compare consecutive numbers and increment by 2 in each iteration
    for (let i = 0; i < nums.length - 1; i += 2) {
        if (nums[i] != nums[i + 1]) {
            return nums[i];
        }
    }
    return nums[nums.length - 1]; // The last element is the only single element.
}

```

**Solution 3 : Binary Search**
Time Complexity : O(log(n))
Space Complexity : O(1) 

```

const singleNonDuplicate = (nums, left = 0, right = nums.length - 1) => {

    while (left < right) {
        let mid = left + (right - left) / 2;
        if (nums[mid] == nums[mid + 1]) mid = mid - 1;
        if ((mid - left + 1) % 2 != 0) right = mid;
        else left = mid + 1;
    }
    return nums[left];
};

```


