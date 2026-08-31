# 🔥Beats 100% | C++ | Java | Python | Javascript | Ruby | C | O(n) Solution ❣️| Detailed Explanation

**Author:** anshuP_cs24
**Votes:** 215
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/4141891/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/4141891/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to remove duplicates from a sorted integer array nums while keeping track of the number of unique elements. The function should return the count of unique elements and modify the input array in-place to contain only the unique elements at the beginning in the same order.

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. First, we check if the input vector nums is empty. If it is empty, there are no unique elements, so we return 0.

2. We initialize a variable k to 1. This variable will keep track of the count of unique elements in the modified nums array.

3. We iterate through the input vector nums starting from the second element (index 1) using a for loop.

4. Inside the loop, we compare the current element nums[i] with the previous unique element nums[k - 1]. If they are not equal, it means we have encountered a new unique element. In this case, we update the nums[k] position with the current element to keep it in place. We then increment k to indicate that we have found one more unique element.

5. After the loop completes, k contains the count of unique elements, and the first k elements of the nums vector contain the unique elements in the same order they appeared in the input.

6. We return the value of k as the final count of unique elements.

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of this algorithm is O(n), where n is the number of elements in the input vector nums. This is because we iterate through the input vector once, and each iteration takes constant time.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of this algorithm is O(1) because it modifies the input array in-place without using any additional data structures that depend on the size of the input.

---

# \uD83D\uDCA1"If you have advanced to this point, I kindly request that you consider upvoting this solution to broaden its reach among others."\u2763\uFE0F\uD83D\uDCA1

---

```C++ []
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty()) {
            return 0;
        }

        int k = 1; // Initialize the count of unique elements to 1
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] != nums[i - 1]) {
                nums[k] = nums[i]; // Overwrite the next unique element
                k++;
            }
        }
        
        return k;
    }
};

```
```Java []
public class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }

        int k = 1; // Initialize the count of unique elements to 1
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] != nums[k - 1]) {
                nums[k] = nums[i]; // Overwrite the next unique element
                k++;
            }
        }
        
        return k;
    }
}

```
```Python []
class Solution:
    def removeDuplicates(self, nums):
        if not nums:
            return 0
        
        k = 1  # Initialize the count of unique elements to 1
        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                nums[k] = nums[i]  # Overwrite the next unique element
                k += 1
        
        return k

```
```Javascript []
function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 1; // Initialize the count of unique elements to 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]; // Overwrite the next unique element
            k++;
        }
    }

    return k;
}

```
```C []
int removeDuplicates(int* nums, int numsSize) {
    if (numsSize == 0) {
        return 0;
    }

    int k = 1; // Initialize the count of unique elements to 1
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] != nums[k - 1]) {
            nums[k] = nums[i]; // Overwrite the next unique element
            k++;
        }
    }

    return k;
}

```
```Ruby []
class Solution
  def remove_duplicates(nums)
    return 0 if nums.empty?

    k = 1 # Initialize the count of unique elements to 1
    (1...nums.size).each do |i|
      if nums[i] != nums[k - 1]
        nums[k] = nums[i] # Overwrite the next unique element
        k += 1
      end
    end

    k
  end
end

```

# Do Upvote if you like the solution and Explanation please \u2763\uFE0F