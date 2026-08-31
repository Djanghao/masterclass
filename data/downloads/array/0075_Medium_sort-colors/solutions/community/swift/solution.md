# 3 Easy Interview Approaches✅ || Brute Force🔥|| HashMap💯|| Count Sort✅|| Dutch National flag Algo

**Author:** naman_malik
**Votes:** 26
**Link:** [https://leetcode.com/problems/sort-colors/solutions/5298590/](https://leetcode.com/problems/sort-colors/solutions/5298590/)

---

![image.png](./images/0.png)

# Approach - 1 (Brute Force)
<!-- Describe your approach to solving the problem. -->
Brute Force - sort by any sorting Algorithm like bubble , insertion etc

# Complexity
- Time complexity: O(n*n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    void sortColors(vector<int>& nums) {

        for(int i=0; i<nums.size(); i++)
        {
            for(int j=i+1; j<nums.size(); j++)
            {
                if(nums[i]>nums[j])
                swap(nums[i],nums[j]);
            }
        }
    }
};
```
```java []
class Solution {
    public void sortColors(int[] nums) {
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] > nums[j]) {
                    // Swap nums[i] and nums[j]
                    int temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                }
            }
        }
    }
}

```
```python []
class Solution:
    def sortColors(self, nums):
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] > nums[j]:
                    # Swap nums[i] and nums[j]
                    nums[i], nums[j] = nums[j], nums[i]


```

# Approach - 2 (Better approach)
<!-- Describe your approach to solving the problem. -->
HashMap or Count sort - by Counting the frequency of (0,1,2) 

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    void sortColors(vector<int>& nums) {
        unordered_map<int,int>m;
        for(int i=0; i<nums.size(); i++)
        {
           m[nums[i]]++;
        }
        for(int i=0; i<nums.size(); i++)
        {
            if(m[0]>0){
            nums[i]=0;
            m[0]--;
            }

            else if(m[1]>0)
            {
            nums[i]=1;
            m[1]--;
            }

            else
            {
            nums[i]=2;
            m[2]--;
            }
        }
    }
};
```
```java []
class Solution {
    public void sortColors(int[] nums) {
        HashMap<Integer, Integer> countMap = new HashMap<>();
        countMap.put(0, 0);
        countMap.put(1, 0);
        countMap.put(2, 0);
        
        // Count occurrences of each color
        for (int num : nums) {
            countMap.put(num, countMap.get(num) + 1);
        }
        
        // Overwrite nums with sorted values
        int index = 0;
        for (int i = 0; i < 3; i++) {
            while (countMap.get(i) > 0) {
                nums[index++] = i;
                countMap.put(i, countMap.get(i) - 1);
            }
        }
    }
}

```
```python []
class Solution:
    def sortColors(self, nums):
        count_map = {0: 0, 1: 0, 2: 0}
        
        # Count occurrences of each color
        for num in nums:
            count_map[num] += 1
        
        # Overwrite nums with sorted values
        index = 0
        for color in range(3):
            while count_map[color] > 0:
                nums[index] = color
                index += 1
                count_map[color] -= 1

```
# Approach - 3 (Best approach)
<!-- Describe your approach to solving the problem. -->
Dutch National Flag algorithm

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    void sortColors(vector<int>& n) {
        int low=0,mid=0,high=n.size()-1;
        while(mid<=high)
        {
            if(n[mid]==0)
            {
                swap(n[low],n[mid]);
                mid++;
                low++;
            }

            else if(n[mid]==1)
            mid++;

            else
            {
                swap(n[mid],n[high]);
                high--;
            }
        }
    }
};
```
```java []
class Solution {
    public void sortColors(int[] nums) {
        int low = 0, mid = 0, high = nums.length - 1;

        while (mid <= high) {
            if (nums[mid] == 0) {
                swap(nums, low, mid);
                low++;
                mid++;
            } else if (nums[mid] == 1) {
                mid++;
            } else {
                swap(nums, mid, high);
                high--;
            }
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}


```
```python []
class Solution:
    def sortColors(self, nums):
        low, mid, high = 0, 0, len(nums) - 1

        while mid <= high:
            if nums[mid] == 0:
                nums[low], nums[mid] = nums[mid], nums[low]
                low += 1
                mid += 1
            elif nums[mid] == 1:
                mid += 1
            else:
                nums[mid], nums[high] = nums[high], nums[mid]
                high -= 1


```

![upvote cat4.png](./images/1.png)




