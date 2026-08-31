# ✅Best Method 🔥|| 100% || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 3094
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/3676877/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/3676877/)

---

# Intuition:
The Intuition is to use two pointers, `i` and `j`, to iterate through the array. The variable `j` is used to keep track of the current index where a unique element should be placed. The initial value of `j` is 1 since the first element in the array is always unique and doesn't need to be changed.

# Explanation:
The code starts iterating from `i = 1` because we need to compare each element with its previous element to check for duplicates.

The main logic is inside the `for` loop:
1. If the current element `nums[i]` is not equal to the previous element `nums[i - 1]`, it means we have encountered a new unique element.
2. In that case, we update `nums[j]` with the value of the unique element at `nums[i]`, and then increment `j` by 1 to mark the next position for a new unique element.
3. By doing this, we effectively overwrite any duplicates in the array and only keep the unique elements.

Once the loop finishes, the value of `j` represents the length of the resulting array with duplicates removed.

Finally, we return `j` as the desired result.

# Code
```C++ []
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int j = 1;
        for(int i = 1; i < nums.size(); i++){
            if(nums[i] != nums[i - 1]){
                nums[j] = nums[i];
                j++;
            }
        }
        return j;
    }
};
```
```Java []
class Solution {
    public int removeDuplicates(int[] nums) {
        int j = 1;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] != nums[i - 1]) {
                nums[j] = nums[i];
                j++;
            }
        }
        return j;
    }
}
```
```Python3 []
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        j = 1
        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                nums[j] = nums[i]
                j += 1
        return j
```

![CUTE_CAT.png](./images/0.png)

**If you are a beginner solve these problems which makes concepts clear for future coding:**
1. [Two Sum](https://leetcode.com/problems/two-sum/solutions/3619262/3-method-s-c-java-python-beginner-friendly/)
2. [Roman to Integer](https://leetcode.com/problems/roman-to-integer/solutions/3651672/best-method-c-java-python-beginner-friendly/)
3. [Palindrome Number](https://leetcode.com/problems/palindrome-number/solutions/3651712/2-method-s-c-java-python-beginner-friendly/)
4. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/solutions/3666304/beats-100-c-java-python-beginner-friendly/)
5. [Remove Element](https://leetcode.com/problems/remove-element/solutions/3670940/best-100-c-java-python-beginner-friendly/)
6. [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/solutions/3672475/4-method-s-c-java-python-beginner-friendly/)
7. [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/solutions/3675747/beats-100-c-java-python-beginner-friendly/)
8. [Majority Element](https://leetcode.com/problems/majority-element/solutions/3676530/3-methods-beats-100-c-java-python-beginner-friendly/)
9. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/3676877/best-method-100-c-java-python-beginner-friendly/)
10. **Practice them in a row for better understanding and please Upvote the post for more questions.**

**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**