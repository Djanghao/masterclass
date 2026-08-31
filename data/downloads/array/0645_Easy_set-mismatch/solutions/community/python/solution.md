# ✅☑Beats 99.08% || [C++/Java/Python/JavaScript] || 5 Approaches || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 299
**Link:** [https://leetcode.com/problems/set-mismatch/solutions/4606092/](https://leetcode.com/problems/set-mismatch/solutions/4606092/)

---

# PLEASE UPVOTE IF IT HELPED

---
![Screenshot 2024-01-20 053155.png](./images/0.png)

---
# Approaches
(Also explained in the code)

***Approach 1 - Brute Force
Approach 2 - Vector
Approach 3 - Set + sum
Approach 4 - Maps 
Approach 5 - XOR Operation***


---
#### ***Approach 1(Brute Force)***

1. **Initialization:**

    - Initialize variables `dup` and `missing` to -1. These will be used to store the duplicate and missing numbers.
1. **Iteration through Possible Numbers:**

    - Iterate through numbers from 1 to the length of the input array (`nums`).
1. **Count Occurrences:**

    - For each number, count the occurrences in the input array `nums` by iterating through it.
1. **Identify Duplicate and Missing:**

    - If the count is 2, set `dup` to the current number, indicating a duplicate.
    - If the count is 0, set `missing` to the current number, indicating a missing number.
1. **Return Result:**

    - After the iteration, return a vector containing the found duplicate (`dup`) and missing (`missing`) numbers.


# Complexity
- Time complexity:
   $$O(n^2)$$
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []


class Solution {
public:
    std::vector<int> findErrorNums(std::vector<int>& nums) {
        int dup = -1, missing = -1;
        
        for (int i = 1; i <= nums.size(); i++) {
            int count = 0;
            for (int j = 0; j < nums.size(); j++) {
                if (nums[j] == i) {
                    count++;
                }
            }
            if (count == 2) {
                dup = i;
            } else if (count == 0) {
                missing = i;
            }
        }
        
        return {dup, missing};
    }
};



```
```Java []


class Solution {
    public int[] findErrorNums(int[] nums) {
        int dup = -1, missing = -1;
        
        for (int i = 1; i <= nums.length; i++) {
            int count = 0;
            for (int j = 0; j < nums.length; j++) {
                if (nums[j] == i) {
                    count++;
                }
            }
            if (count == 2) {
                dup = i;
            } else if (count == 0) {
                missing = i;
            }
        }
        
        return new int[] {dup, missing};
    }
}



```
```python3 []
class Solution:
    def findErrorNums(self, nums):
        dup, missing = -1, -1
        
        for i in range(1, len(nums) + 1):
            count = nums.count(i)
            if count == 2:
                dup = i
            elif count == 0:
                missing = i
        
        return [dup, missing]



```
```javascript []

var findErrorNums = function(nums) {
    let dup = -1, missing = -1;
    
    for (let i = 1; i <= nums.length; i++) {
        let count = nums.filter(num => num === i).length;
        if (count === 2) {
            dup = i;
        } else if (count === 0) {
            missing = i;
        }
    }
    
    return [dup, missing];
};


```
---

#### ***Approach 2(Vector)***

1. **Array Initialization:**

    - Initialize a vector `v` of size `n+1` with all elements set to 0. This array will be used to keep track of the occurrences of each number.
1. **Count Occurrences:**

    - Iterate through the given `nums` array and update the count of each number in the `v` array.
1. **Identify Duplicate and Missing:**

    - Iterate through the `v` array.
        - If the count of a number is 2, it is the duplicate number.
        - If the count of a number is 0, it is the missing number.
1. **Return Result:**

    - Return a vector containing the duplicate and missing numbers.


# Complexity
- Time complexity:
   $$O(n)$$
    

- Space complexity:
   $$O(n)$$
    


# Code
```C++ []

class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        int n =nums.size();
        vector<int>v(n+1,0);
        int missing=0,duplicate =0;
        for(int i =0;i<n;i++){
            v[nums[i]]++;
        }
        for(int i =1;i<v.size();i++){
            if(v[i]==2)duplicate = i;
            if(v[i]==0)missing = i;
        }
        return {duplicate,missing};
    }
}; 




```
```Java []


class Solution {
    public int[] findErrorNums(int[] nums) {
        int n = nums.length;
        int[] v = new int[n + 1];
        int missing = 0, duplicate = 0;

        for (int i = 0; i < n; i++) {
            v[nums[i]]++;
        }

        for (int i = 1; i < v.length; i++) {
            if (v[i] == 2) {
                duplicate = i;
            }
            if (v[i] == 0) {
                missing = i;
            }
        }

        return new int[]{duplicate, missing};
    }
}





```
```python3 []

class Solution:
    def findErrorNums(self, nums):
        n = len(nums)
        v = [0] * (n + 1)
        missing, duplicate = 0, 0

        for num in nums:
            v[num] += 1

        for i in range(1, len(v)):
            if v[i] == 2:
                duplicate = i
            if v[i] == 0:
                missing = i

        return [duplicate, missing]


```
```javascript []

var findErrorNums = function(nums) {
    const n = nums.length;
    const v = new Array(n + 1).fill(0);
    let missing = 0, duplicate = 0;

    for (const num of nums) {
        v[num]++;
    }

    for (let i = 1; i < v.length; i++) {
        if (v[i] === 2) {
            duplicate = i;
        }
        if (v[i] === 0) {
            missing = i;
        }
    }

    return [duplicate, missing];
};



```
---

#### ***Approach 3(Set + Sum)***

1. **Calculate Expected Sum:**

    - Calculate the expected sum of numbers from 1 to n using the formula `(n * (n + 1)) / 2`. This assumes no duplicates and no missing numbers.
1. **Calculate Array and Unique Sums:**

    - Calculate the sum of all elements in the array (`array_sum`).
    - Use an unordered_set (`s`) to get the unique elements in the array and calculate their sum (`unique_sum`).
1. **Find Missing and Duplicate:**

    - The difference between the expected sum and the unique sum gives the missing number (`missing`).
    - The difference between the array sum and the unique sum gives the duplicate number (`duplicate`).
1. **Return Result:**

    - Return a vector containing the duplicate and missing numbers.


# Complexity
- Time complexity:
   $$O(n)$$
    

- Space complexity:
   $$O(n)$$
    


# Code
```C++ []


class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        int n = nums.size();
        int actual_sum = n * (n + 1) / 2;
        int array_sum = 0;
        int unique_sum = 0;
        unordered_set<int> s(nums.begin(), nums.end());

        for (int a : nums) {
            array_sum += a;
        }


        for (int a : s) {
            unique_sum += a;
        }

        int missing = actual_sum - unique_sum;
        int duplicate = array_sum - unique_sum;

        return {duplicate, missing};
    }
};




```
```Java []

class Solution {
    public int[] findErrorNums(int[] nums) {
        int n = nums.length;
        int actual_sum = n * (n + 1) / 2;
        int array_sum = 0;
        int unique_sum = 0;
        Set<Integer> s = new HashSet<>();

        for (int a : nums) {
            array_sum += a;
        }

        for (int a : nums) {
            s.add(a);
        }

        for (int a : s) {
            unique_sum += a;
        }

        int missing = actual_sum - unique_sum;
        int duplicate = array_sum - unique_sum;

        return new int[]{duplicate, missing};
    }
}



```
```python3 []
class Solution:
    def findErrorNums(self, nums):
        n = len(nums)
        actual_sum = n * (n + 1) // 2
        array_sum = 0
        unique_sum = 0
        s = set()

        for a in nums:
            array_sum += a

        for a in nums:
            s.add(a)

        for a in s:
            unique_sum += a

        missing = actual_sum - unique_sum
        duplicate = array_sum - unique_sum

        return [duplicate, missing]



```
```javascript []

var findErrorNums = function(nums) {
    const n = nums.length;
    const actual_sum = n * (n + 1) / 2;
    let array_sum = 0;
    let unique_sum = 0;
    const s = new Set();

    for (const a of nums) {
        array_sum += a;
    }

    for (const a of nums) {
        s.add(a);
    }

    for (const a of s) {
        unique_sum += a;
    }

    const missing = actual_sum - unique_sum;
    const duplicate = array_sum - unique_sum;

    return [duplicate, missing];
};




```
---

#### ***Approach 4(Maps)***


1. Create an unordered_map `mp` to count the occurrences of numbers from 1 to n.
1. Iterate through numbers in the input vector `nums`:
    - Increment the count of each number in `mp`.
    - Decrement the count of each number in `mp`.
1. Iterate through the entries in mp:
    - Identify the number with a count of -1 as the duplicate.
    - Identify the number with a count of 1 as the missing number.


# Complexity
- Time complexity:
   $$O(n)$$
    

- Space complexity:
   $$O(n)$$
    


# Code
```C++ []

class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        int n =nums.size();
        unordered_map<int,int>mp;
        for(int i =1;i<=n;i++)mp[i]++;

        for(auto a :nums)mp[a]--;
        int duplicate  = 0,missing=0;

        for(auto a :mp){
            if(a.second == -1)duplicate = a.first;
            if(a.second == 1)missing = a.first;
        }

        return {duplicate,missing};
    }
};




```
```Java []

class Solution {
    public int[] findErrorNums(int[] nums) {
        int n = nums.length;
        Map<Integer, Integer> mp = new HashMap<>();

        for (int i = 1; i <= n; i++) {
            mp.put(i, 0);
        }

        for (int a : nums) {
            mp.put(a, mp.get(a) - 1);
        }

        int duplicate = 0, missing = 0;

        for (Map.Entry<Integer, Integer> entry : mp.entrySet()) {
            if (entry.getValue() == -1) {
                duplicate = entry.getKey();
            }
            if (entry.getValue() == 1) {
                missing = entry.getKey();
            }
        }

        return new int[]{duplicate, missing};
    }
}



```
```python3 []
class Solution:
    def findErrorNums(self, nums):
        n = len(nums)
        mp = {i: 0 for i in range(1, n + 1)}

        for a in nums:
            mp[a] -= 1

        duplicate, missing = 0, 0

        for key, value in mp.items():
            if value == -1:
                duplicate = key
            if value == 1:
                missing = key

        return [duplicate, missing]



```
```javascript []

var findErrorNums = function(nums) {
    const n = nums.length;
    const mp = new Map();

    for (let i = 1; i <= n; i++) {
        mp.set(i, 0);
    }

    for (const a of nums) {
        mp.set(a, mp.get(a) - 1);
    }

    let duplicate = 0, missing = 0;

    for (const [key, value] of mp.entries()) {
        if (value === -1) {
            duplicate = key;
        }
        if (value === 1) {
            missing = key;
        }
    }

    return [duplicate, missing];
};




```
---
#### ***Approach 5(XOR Operation)***

1. Calculate the XOR of all numbers from 1 to n (denoted as `xorAll`) and the XOR of the array `nums` (denoted as `xorArray`).
1. XOR the `xorAll` and `xorArray` to obtain `xorResult`.
1. Find the rightmost set bit in `xorResult` and store it in `rightmostSetBit`.
1. Divide the numbers from 1 to n into two groups based on the rightmost set bit: `xorSet` for numbers with the set bit, and `xorNotSet` for numbers without the set bit.
1. XOR all numbers in `nums` with the rightmost set bit to find the duplicate and missing numbers.
1. Iterate through `nums` and compare each number with `xorSet`. If found, return `{xorSet, xorNotSet}`; otherwise, return `{xorNotSet, xorSet}`.


# Complexity
- Time complexity:
   $$O(n)$$
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []

class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        int n = nums.size();
        int xorAll = 0;
        int xorArray = 0;

     
        for (int i = 1; i <= n; i++) {
            xorAll ^= i;
        }

        
        for (int num : nums) {
            xorArray ^= num;
        }

       
        int xorResult = xorArray ^ xorAll;

        
        int rightmostSetBit = xorResult & -xorResult;

        int xorSet = 0;
        int xorNotSet = 0;

        
        for (int i = 1; i <= n; i++) {
            if (i & rightmostSetBit) {
                xorSet ^= i;
            } else {
                xorNotSet ^= i;
            }
        }

        for (int num : nums) {
            if (num & rightmostSetBit) {
                xorSet ^= num;
            } else {
                xorNotSet ^= num;
            }
        }

        
        for (int num : nums) {
            if (num == xorSet) {
                return {xorSet, xorNotSet};
            }
        }

        
        return {xorNotSet, xorSet};
    }
};




```
```Java []



class Solution {
    public int[] findErrorNums(int[] nums) {
        int n = nums.length;
        int xorAll = 0;
        int xorArray = 0;

        for (int i = 1; i <= n; i++) {
            xorAll ^= i;
        }

        for (int num : nums) {
            xorArray ^= num;
        }

        int xorResult = xorArray ^ xorAll;

        int rightmostSetBit = xorResult & -xorResult;

        int xorSet = 0;
        int xorNotSet = 0;

        for (int i = 1; i <= n; i++) {
            if ((i & rightmostSetBit) != 0) {
                xorSet ^= i;
            } else {
                xorNotSet ^= i;
            }
        }

        for (int num : nums) {
            if ((num & rightmostSetBit) != 0) {
                xorSet ^= num;
            } else {
                xorNotSet ^= num;
            }
        }

        for (int num : nums) {
            if (num == xorSet) {
                return new int[]{xorSet, xorNotSet};
            }
        }

        return new int[]{xorNotSet, xorSet};
    }
}




```
```python3 []
class Solution:
    def findErrorNums(self, nums):
        n = len(nums)
        xorAll = 0
        xorArray = 0

        for i in range(1, n + 1):
            xorAll ^= i

        for num in nums:
            xorArray ^= num

        xorResult = xorArray ^ xorAll

        rightmostSetBit = xorResult & -xorResult

        xorSet = 0
        xorNotSet = 0

        for i in range(1, n + 1):
            if (i & rightmostSetBit) != 0:
                xorSet ^= i
            else:
                xorNotSet ^= i

        for num in nums:
            if (num & rightmostSetBit) != 0:
                xorSet ^= num
            else:
                xorNotSet ^= num

        for num in nums:
            if num == xorSet:
                return [xorSet, xorNotSet]

        return [xorNotSet, xorSet]



```
```javascript []

var findErrorNums = function(nums) {
    const n = nums.length;
    let xorAll = 0;
    let xorArray = 0;

    for (let i = 1; i <= n; i++) {
        xorAll ^= i;
    }

    for (const num of nums) {
        xorArray ^= num;
    }

    const xorResult = xorArray ^ xorAll;

    const rightmostSetBit = xorResult & -xorResult;

    let xorSet = 0;
    let xorNotSet = 0;

    for (let i = 1; i <= n; i++) {
        if (i & rightmostSetBit) {
            xorSet ^= i;
        } else {
            xorNotSet ^= i;
        }
    }

    for (const num of nums) {
        if (num & rightmostSetBit) {
            xorSet ^= num;
        } else {
            xorNotSet ^= num;
        }
    }

    for (const num of nums) {
        if (num === xorSet) {
            return [xorSet, xorNotSet];
        }
    }

    return [xorNotSet, xorSet];
};



```
---




# PLEASE UPVOTE IF IT HELPED

---
---


---