# Very Easy || 100% || Fully Explained || Java, C++, Python, Python3 || HashMap & Two-Pointers

**Author:** PratikSen07
**Votes:** 216
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/2477252/](https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/2477252/)

---

# **Java Solution (Two-Pointers Approach):**
```
// Runtime: 1 ms, faster than 99.13% of Java online submissions for Intersection of Two Arrays II.
// Memory Usage: 42.5 MB, less than 92.71% of Java online submissions for Intersection of Two Arrays II.
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        // Sort both the arrays first...
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        // Create an array list...
        ArrayList<Integer> arr = new ArrayList<Integer>();
        // Use two pointers i and j for the two arrays and initialize both with zero.
        int i = 0, j = 0;
        while(i < nums1.length && j < nums2.length){
            // If nums1[i] is less than nums2[j]...
            // Leave the smaller element and go to next(greater) element in nums1...
            if(nums1[i] < nums2[j]) {
                i++;
            }
            // If nums1[i] is greater than nums2[j]...
            // Go to next(greater) element in nums2 array...
            else if(nums1[i] > nums2[j]){
                j++;
            }
            // If both the elements intersected...
            // Add this element to arr & increment both i and j.
            else{
                arr.add(nums1[i]);
                i++;
                j++;
            }
        }
        // Create a output list to store the output...
        int[] output = new int[arr.size()];
        int k = 0;
        while(k < arr.size()){
            output[k] = arr.get(k);
            k++;
        }
        return output;
    }
}
```

# **C++ Solution (Using Hash map):**
```
// Runtime: 3 ms, faster than 96.43% of C++ online submissions for Intersection of Two Arrays II.
class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        // If the size of nums1 is greater than nums2, swap them...
        if(nums1.size() > nums2.size()) {
            swap(nums1, nums2);
        }
        // Create a hashmap to find out the intersection of two arrays...
        unordered_map<int,int> map;
        // Store the count of each element of one array using the Hash map...
        for(auto val: nums1) {
            map[val]++;
        }
        int idx = 0;
        // Traverse through the nums2 array....
        for(auto val: nums2) {
            // For each element in nums2, check if count of that element in nums1 is positive or not...
            // If count of nums2[idx] in array nums1 is positive, then add this element(nums2[idx]) in result array...
            if(map[val] > 0){
                nums1[idx++] = val;
                // Decrease the count of this element in Hash map.
                --map[val];
            }
        }
        return vector<int>(nums1.begin(), nums1.begin()+idx);
    }
};
```

# **Python Solution (Two-Pointers Approach):**
```
# Runtime: 23 ms, faster than 89.65% of Python online submissions for Intersection of Two Arrays II.
# Memory Usage: 11.4 MB, less than 87.45% of Python online submissions for Intersection of Two Arrays II.
class Solution(object):
    def intersect(self, nums1, nums2):
        # Sort both the arrays first...
        sortedArr1 = sorted(nums1)
        sortedArr2 = sorted(nums2)
        # Use two pointers i and j for the two arrays and initialize both with zero.
        i = 0
        j = 0
        # Create a output list to store the output...
        output = []
        while i < len(sortedArr1) and j < len(sortedArr2):
            # If sortedArr1[i] is less than sortedArr2[j]...
            # Leave the smaller element and go to next(greater) element in nums1...
            if sortedArr1[i] < sortedArr2[j]:
                i += 1
            # If sortedArr1[i] is greater than sortedArr2[j]...
            # Go to next(greater) element in nums2 array...
            elif sortedArr2[j] < sortedArr1[i]:
                j += 1
            # If both the elements intersected...
            # Add this element to output & increment both i and j.
            else:
                output.append(sortedArr1[i])
                i += 1
                j += 1
        return output       # Return the output array...
```
                    
# **Python3 Solution (Two-Pointers Approach):**
```
# Runtime: 51 ms, faster than 92.91% of Python3 online submissions for Intersection of Two Arrays II.
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        # Sort both the arrays first...
        sortedArr1 = sorted(nums1)
        sortedArr2 = sorted(nums2)
        # Use two pointers i and j for the two arrays and initialize both with zero.
        i = 0
        j = 0
        # Create a output list to store the output...
        output = []
        while i < len(sortedArr1) and j < len(sortedArr2):
            # If sortedArr1[i] is less than sortedArr2[j]...
            # Leave the smaller element and go to next(greater) element in nums1...
            if sortedArr1[i] < sortedArr2[j]:
                i += 1
            # If sortedArr1[i] is greater than sortedArr2[j]...
            # Go to next(greater) element in nums2 array...
            elif sortedArr2[j] < sortedArr1[i]:
                j += 1
            # If both the elements intersected...
            # Add this element to output & increment both i and j.
            else:
                output.append(sortedArr1[i])
                i += 1
                j += 1
        return output       # Return the output array...
```
**I am working hard for you guys...
Please upvote if you found any help with this code...**