# [C++/Java/C#] Straight Forward Solutions ||  Simple Solutions Explained

**Author:** nitishhsinghhh
**Votes:** 20
**Link:** [https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/2090522/](https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/2090522/)

---

# Solution

Given a list of integers called nums, representing a run-length encoded list, we need to decompress it and generate the decompressed list by concatenating all the sublists from left to right. Each adjacent pair of elements in the nums list represents a frequency-value pair. To accomplish this, we extract each pair and repeat the value by its frequency. The resulting decompressed list is useful for further analysis or manipulation.


```C++ []
class Solution {
public:
    vector<int> decompressRLElist(vector<int>& nums) {
        vector<int> res;
        for (int i = 0; i < nums.size(); i++) {
            int fre =
                nums[i++]; // Get the frequency value at index i and increment i
            int val = nums[(i)]; // Get the value at the next index (i+1)
            for (int j = 0; j < fre; j++)
                res.push_back(val); // Append the value 'val' to the result
                                    // vector 'res' 'fre' times
        }
        return res; // Return the decompressed list
    }
};
```
```C++ []
class Solution { 
public:
    vector<int> decompressRLElist(vector<int>& nums) {
        vector<int> res;  // Initialize an empty vector to store the decompressed list
        for (int i(0); i < nums.size(); i += 2) {
            // Iterate through the nums vector, considering pairs of frequency-value
            // i += 2 is used to jump to the next pair in each iteration
            res.insert(res.end(), nums[i], nums[i + 1]);
            // Insert nums[i] number of elements with the value nums[i+1] at the end of the res vector
            // This effectively decompresses the run-length encoded pair
        }
        return res;  // Return the decompressed list
    }
};
```
------------

To solve this problem in C#, we need to extract the frequency and value pairs from the array, where they are stored at odd and even indices respectively. This can be achieved by iterating through the array and collecting both values, which are then stored in an ArrayList. Finally, we can use the ToArray method to return the extracted values by copying them to a new array. This approach is efficient and easy to understand, making it a useful solution for this problem.

```Java []
class Solution {
    public int[] decompressRLElist(int[] nums) {
        ArrayList<Integer> resList = new ArrayList<Integer>(); // Create an ArrayList to store the decompressed list
        for (int i = 0; i < nums.length; i++) {
            int fre = nums[i++]; // Get the frequency value at index i and increment i
            int val = nums[i]; // Get the value at the next index (i+1)
            for (int j = 0; j < fre; j++) {
                resList.add(val); // Add the value 'val' to the resList 'fre' times
            }
        }
        int[] resArray = new int[resList.size()]; // Create a new array to store the decompressed list
        Arrays.setAll(resArray, resList::get); // Fill the resArray with the values from resList
        return resArray; // Return the decompressed list as an array
    }
}
```
```csharp []
// Solution 1
public class Solution {
    public int[] DecompressRLElist(int[] nums) {
        ArrayList ans = new ArrayList();  // Create an ArrayList to store the decompressed list
        for (int i = 0; i < nums.Length; i++) {
            int fre = nums[i++];  // Get the frequency value at index i and increment i
            int val = nums[i];    // Get the value at the next index (i+1)
            for (int j = 0; j < fre; j++) {
                ans.Add(val);  // Add the value 'val' to the ans ArrayList 'fre' times
            }
        }
        return (int[])ans.ToArray(typeof(int));  // Convert the ArrayList to an array and return it as the decompressed list
    }
}

// Solution 2
public class Solution {
    public int[] DecompressRLElist(int[] nums) {
        ArrayList ans = new ArrayList();  // Create an ArrayList to store the decompressed list
        for (int i = 0; i < nums.Length; i += 2) {
            for (int j = 0; j < nums[i]; j++) {
                ans.Add(nums[i + 1]);  // Add the value nums[i+1] to the ans ArrayList nums[i] times
            }
        }
        return (int[])ans.ToArray(typeof(int));  // Convert the ArrayList to an array and return it as the decompressed list
    }
}
```

# Frequently encountered in technical interviews
```
std::vector<std::pair<std::string, int>> interview_frequency = {{"Amazon", 2},
                                                                {"Apple", 3}};
```

