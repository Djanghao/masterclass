# 💯Faster✅💯 Lesser✅5 Methods🔥Simple Counting🔥Hashmap🔥Moore Voting Algorithm🔥Boyer-Moore Voting

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 50
**Link:** [https://leetcode.com/problems/majority-element-ii/solutions/4131879/](https://leetcode.com/problems/majority-element-ii/solutions/4131879/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share 5 ways to solve this question with detailed explanation of each approach:

# Problem Explaination: 
The "Majority Element II" problem is a well-known problem in computer science and data analysis. It's a variation of the more common "Majority Element" problem, which asks you to find an element in an array that appears more than half of the time. In the "Majority Element II" problem, the requirement is a bit stricter: we are tasked with finding all elements that appear more than \u230An/3\u230B times in an array of integers, where n is the length of the array.

# \uD83D\uDD0D Methods To Solve This Problem:
I'll be covering four different methods to solve this problem:
1. Simple Counting
2. Boyer-Moore Voting Algorithm
3. Hash Map
4. Sorting
5. Moore Voting Algorithm

# 1. Simple Counting: 

- Initialize an empty list result to store the majority elements.
- Iterate through the unique elements in the input list nums using set(nums). This ensures that we examine each unique element only once.
- For each unique element num in the set:
    - Count the number of occurrences of num in the original nums list using nums.count(num).
    - Check if the count is greater than \u230An/3\u230B, where n is the length of the nums list.
    - If the count meets the majority criteria, append num to the result list.
- After iterating through all unique elements, return the result list containing the majority elements.
# Complexity
- \u23F1\uFE0F Time Complexity:  O(n^2) in the worst case.

- \uD83D\uDE80 Space Complexity: O(k), where k is the number of unique elements in the nums.
# Code
```Python []
class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        res = []
        for i in set(nums):
            if nums.count(i) > len(nums) // 3:
                res.append(i)
        return res
```
```Java []
public class Solution {
    public List<Integer> majorityElement(int[] nums) {
        List<Integer> result = new ArrayList<>();
        Set<Integer> uniqueNums = new HashSet<>();
        for (int num : nums) {
            uniqueNums.add(num);
        }
        for (int num : uniqueNums) {
            int count = 0;
            for (int n : nums) {
                if (n == num) {
                    count++;
                }
            }
            if (count > nums.length / 3) {
                result.add(num);
            }
        }
        return result;
    }
}
```
```C++ []
class Solution {
public:
    std::vector<int> majorityElement(std::vector<int>& nums) {
        std::vector<int> result; 
        std::unordered_set<int> uniqueNums;
        for (int num : nums) {
            uniqueNums.insert(num);
        } 
        for (int num : uniqueNums) {
            int count = 0;
            for (int n : nums) {
                if (n == num) {
                    count++;
                }
            }
            if (count > nums.size() / 3) {
                result.push_back(num);
            }
        } 
        return result;
    }
};
```
```C []
int cmpfunc(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}

int* majorityElement(int* nums, int numsSize, int* returnSize) {
    int* result = (int*)malloc(2 * sizeof(int));
    if (result == NULL) {
        *returnSize = 0;
        return NULL;
    }
    qsort(nums, numsSize, sizeof(int), cmpfunc);
    int candidate1 = nums[0];
    int candidate2 = nums[0];
    int count1 = 0;
    int count2 = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == candidate1) {
            count1++;
        } else if (nums[i] == candidate2) {
            count2++;
        } else if (count1 == 0) {
            candidate1 = nums[i];
            count1 = 1;
        } else if (count2 == 0) {
            candidate2 = nums[i];
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }
    count1 = 0;
    count2 = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == candidate1) {
            count1++;
        } else if (nums[i] == candidate2) {
            count2++;
        }
    }
    int resultSize = 0;
    if (count1 > numsSize / 3) {
        result[resultSize++] = candidate1;
    }
    if (count2 > numsSize / 3) {
        result[resultSize++] = candidate2;
    }
    *returnSize = resultSize;
    return result;
}
```
# 2. Boyer-Moore Voting Algorithm:
- Initialize two variables candidate1 and candidate2 to None, and two counters count1 and count2 to 0.
- Iterate through the array.
- For each element num in the array:
    - If num is equal to candidate1, increment count1.
    - If num is equal to candidate2, increment count2.
    - If count1 is 0, set num as candidate1 and increment count1.
    - If count2 is 0, set num as candidate2 and increment count2.
    - If neither of the above conditions is met, decrement count1 and count2.
- Initialize count1 and count2 to 0.
- Iterate through the array again.
- For each element num in the array:
    - If num is equal to candidate1, increment count1.
    - If num is equal to candidate2, increment count2.
- Check if count1 and count2 are greater than \u230An/3\u230B. If they are, both candidates are potential majority elements.
- Iterate through the array again and count the occurrences of candidate1 and candidate2.
- Return the candidates that meet the majority criteria.
# Complexity
- \u23F1\uFE0F Time Complexity:  O(n) - This algorithm makes three passes through the array.

- \uD83D\uDE80 Space Complexity: O(1) - Constant extra space is used.

# Code
```Python []
class Solution:
    def majorityElement(self, nums):
        candidate1, candidate2 = None, None
        count1, count2 = 0, 0
        for num in nums:
            if num == candidate1:
                count1 += 1
            elif num == candidate2:
                count2 += 1
            elif count1 == 0:
                candidate1 = num
                count1 = 1
            elif count2 == 0:
                candidate2 = num
                count2 = 1
            else:
                count1 -= 1
                count2 -= 1
        count1, count2 = 0, 0
        for num in nums:
            if num == candidate1:
                count1 += 1
            elif num == candidate2:
                count2 += 1
        result = []
        if count1 > len(nums) // 3:
            result.append(candidate1)
        if count2 > len(nums) // 3:
            result.append(candidate2)
        return result
```
```Java []
class Solution {
    public List<Integer> majorityElement(int[] nums) {
        List<Integer> result = new ArrayList<>();
        if (nums == null || nums.length == 0) {
            return result;
        }
        int candidate1 = 0, candidate2 = 0, count1 = 0, count2 = 0;
        for (int num : nums) {
            if (num == candidate1) {
                count1++;
            } else if (num == candidate2) {
                count2++;
            } else if (count1 == 0) {
                candidate1 = num;
                count1++;
            } else if (count2 == 0) {
                candidate2 = num;
                count2++;
            } else {
                count1--;
                count2--;
            }
        }
        count1 = 0;
        count2 = 0;
        for (int num : nums) {
            if (num == candidate1) {
                count1++;
            } else if (num == candidate2) {
                count2++;
            }
        }
        if (count1 > nums.length / 3) {
            result.add(candidate1);
        }
        if (count2 > nums.length / 3) {
            result.add(candidate2);
        }
        return result;
    }
}

```
```C++ []
class Solution {
public:
    vector<int> majorityElement(vector<int>& nums) {
        vector<int> result;
        int candidate1 = 0, candidate2 = 0, count1 = 0, count2 = 0;
        for (int num : nums) {
            if (num == candidate1) {
                count1++;
            } else if (num == candidate2) {
                count2++;
            } else if (count1 == 0) {
                candidate1 = num;
                count1 = 1;
            } else if (count2 == 0) {
                candidate2 = num;
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }
        count1 = 0;
        count2 = 0;
        for (int num : nums) {
            if (num == candidate1) {
                count1++;
            } else if (num == candidate2) {
                count2++;
            }
        }
        int n = nums.size();
        if (count1 > n / 3) {
            result.push_back(candidate1);
        }
        if (count2 > n / 3) {
            result.push_back(candidate2);
        }
        return result;
    }
};
```
```C []
int* majorityElement(int* nums, int numsSize, int* returnSize) {
    int candidate1 = 0, candidate2 = 0;
    int count1 = 0, count2 = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == candidate1) {
            count1++;
        } else if (nums[i] == candidate2) {
            count2++;
        } else if (count1 == 0) {
            candidate1 = nums[i];
            count1 = 1;
        } else if (count2 == 0) {
            candidate2 = nums[i];
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }
    count1 = 0;
    count2 = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == candidate1) {
            count1++;
        } else if (nums[i] == candidate2) {
            count2++;
        }
    }
    int* result = NULL;
    *returnSize = 0;
    
    if (count1 > numsSize / 3) {
        result = (int*)realloc(result, sizeof(int) * ((*returnSize) + 1));
        result[(*returnSize)++] = candidate1;
    }
    if (count2 > numsSize / 3) {
        result = (int*)realloc(result, sizeof(int) * ((*returnSize) + 1));
        result[(*returnSize)++] = candidate2;
    }
    return result;
}
```
# 3. Hash Map:
   - Initialize an empty dictionary count_dict.
- Iterate through the array.
- For each element num in the array, increment its count in count_dict.
- Iterate through the keys in count_dict.
- Check if the count of each key is greater than \u230An/3\u230B.
- Return the keys that meet the majority criteria.
# Complexity
- \u23F1\uFE0F Time Complexity: O(n) - This algorithm makes a single pass through the array.

- \uD83D\uDE80 Space Complexity: O(n) - Extra space is used to store counts in the dictionary.

# Code
```Python []
class Solution:
    def majorityElement(self, nums):

        count_dict = Counter(nums)
        result = [num for num, count in count_dict.items() if count > len(nums) // 3]
        return result

```
```Java []
class Solution {
    public List<Integer> majorityElement(int[] nums) {
        List<Integer> result = new ArrayList<>();
        if (nums == null || nums.length == 0) {
            return result;
        }
        Map<Integer, Integer> countMap = new HashMap<>();
        for (int num : nums) {
            countMap.put(num, countMap.getOrDefault(num, 0) + 1);
        }
        for (Map.Entry<Integer, Integer> entry : countMap.entrySet()) {
            if (entry.getValue() > nums.length / 3) {
                result.add(entry.getKey());
            }
        }
        return result;
    }
}
```
```C++ []
class Solution {
public:
    vector<int> majorityElement(vector<int>& nums) {
        unordered_map<int, int> count_dict;
        vector<int> result;
        for (int num : nums) {
            count_dict[num]++;
        }
        int n = nums.size();
        for (auto& entry : count_dict) {
            if (entry.second > n / 3) {
                result.push_back(entry.first);
            }
        }
        return result;
    }
};
```
```C []
struct Entry {
    int value;
    int count;
};

int* majorityElement(int* nums, int numsSize, int* returnSize) {
    int mapSize = 2; 
    struct Entry* hashMap = (struct Entry*)malloc(sizeof(struct Entry) * mapSize);
    if (hashMap == NULL) {
        perror("Memory allocation failed");
        exit(EXIT_FAILURE);
    }
    for (int i = 0; i < mapSize; i++) {
        hashMap[i].value = 0;
        hashMap[i].count = 0;
    }
    for (int i = 0; i < numsSize; i++) {
        bool found = false;
        for (int j = 0; j < mapSize; j++) {
            if (hashMap[j].count > 0 && hashMap[j].value == nums[i]) {
                hashMap[j].count++;
                found = true;
                break;
            }
        }
        if (!found) {
            bool inserted = false;
            for (int j = 0; j < mapSize; j++) {
                if (hashMap[j].count == 0) {
                    hashMap[j].value = nums[i];
                    hashMap[j].count = 1;
                    inserted = true;
                    break;
                }
            }
            if (!inserted) {
                mapSize *= 2;
                hashMap = (struct Entry*)realloc(hashMap, sizeof(struct Entry) * mapSize);
                if (hashMap == NULL) {
                    perror("Memory allocation failed");
                    exit(EXIT_FAILURE);
                }
                for (int j = mapSize / 2; j < mapSize; j++) {
                    hashMap[j].value = 0;
                    hashMap[j].count = 0;
                }
                i--;
            }
        }
    }
    int* result = (int*)malloc(sizeof(int) * mapSize);
    if (result == NULL) {
        perror("Memory allocation failed");
        exit(EXIT_FAILURE);
    }
    *returnSize = 0;
    for (int i = 0; i < mapSize; i++) {
        if (hashMap[i].count > numsSize / 3) {
            result[(*returnSize)++] = hashMap[i].value;
        }
    }
    free(hashMap);
    return result;
}

```
# 4. Sorting:
   - Sort the input array.
- Initialize an empty list result.
- Initialize a variable count to 1.
- Iterate through the sorted array, starting from the second element.
- For each element num in the array:
    - If num is equal to the previous element, increment count.
    - If num is different from the previous element, check if count is greater than \u230An/3\u230B.
    - If count is greater, append the previous element to result.
- Reset count to 1.
- After the loop, check if the last element has a count greater than \u230An/3\u230B and append it to result.
Return result.
# Complexity
- \u23F1\uFE0F Time Complexity: O(n log n) - This algorithm sorts the array.

- \uD83D\uDE80 Space Complexity: O(1) - Constant extra space is used.

# Code
```Python []
class Solution:
    def majorityElement(self, nums):
        nums.sort()
        result = []
        count = 1
        for i in range(1, len(nums)):
            if nums[i] == nums[i - 1]:
                count += 1
            else:
                if count > len(nums) // 3:
                    result.append(nums[i - 1])
                count = 1
        if count > len(nums) // 3:
            result.append(nums[-1])
        return result
```
```Java []
class Solution {
    public List<Integer> majorityElement(int[] nums) {
        List<Integer> result = new ArrayList<>();
        if (nums == null || nums.length == 0) {
            return result;
        }
        Arrays.sort(nums);
        int n = nums.length;
        int count = 1;
        for (int i = 1; i < n; i++) {
            if (nums[i] == nums[i - 1]) {
                count++;
            } else {
                if (count > n / 3) {
                    result.add(nums[i - 1]);
                }
                count = 1;
            }
        }
        if (count > n / 3) {
            result.add(nums[n - 1]);
        }
        return result;
    }
}

```
```C++ []
class Solution {
public:
    vector<int> majorityElement(vector<int>& nums) {
        vector<int> result;
        int n = nums.size();
        sort(nums.begin(), nums.end());
        int count = 1;
        for (int i = 1; i < n; i++) {
            if (nums[i] == nums[i - 1]) {
                count++;
            } else {
                if (count > n / 3) {
                    result.push_back(nums[i - 1]);
                }
                count = 1;
            }
        }
        if (count > n / 3) {
            result.push_back(nums[n - 1]);
        }
        return result;
    }
};

```
```C []
int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int* majorityElement(int* nums, int numsSize, int* returnSize) {
    qsort(nums, numsSize, sizeof(int), compare);
    int* result = (int*)malloc(sizeof(int) * 2); // At most 2 majority elements
    *returnSize = 0;
    int count = 1;
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] == nums[i - 1]) {
            count++;
        } else {
            if (count > numsSize / 3) {
                result[(*returnSize)++] = nums[i - 1];
            }
            count = 1;
        }
    }
    if (count > numsSize / 3) {
        result[(*returnSize)++] = nums[numsSize - 1];
    }
    return result;
}
```
# 5. Moore Voting Algorithm:
   - Initialize two variables candidate1 and candidate2 to None, and two counters count1 and count2 to 0.
- Iterate through the array.
- For each element num in the array:
    - If num is equal to candidate1, increment count1.
    - If num is equal to candidate2, increment count2.
    - If count1 is 0, set num as candidate1 and increment count1.
    - If count2 is 0, set num as candidate2 and increment count2.
    - If neither of the above conditions is met, decrement count1 and count2.
- Initialize count1 and count2 to 0.
- Iterate through the array again.
- For each element num in the array:
    - If num is equal to candidate1, increment count1.
    - If num is equal to candidate2, increment count2.
- Initialize two variables freq1 and freq2 to 0.
- Iterate through the array.
- For each element num in the array:
    - If num is equal to candidate1, increment freq1.
    - If num is equal to candidate2, increment freq2.
- Check if freq1 and freq2 are greater than \u230An/3\u230B. If they are, both candidates are potential majority elements.
- Return the candidates that meet the majority criteria.
# Complexity
- \u23F1\uFE0F Time Complexity: O(n) - This algorithm makes three passes through the array.

- \uD83D\uDE80 Space Complexity: O(1) - Constant extra space is used.

# Code
```Python []
class Solution:
    def majorityElement(self, nums):
        candidate1, candidate2 = None, None
        count1, count2 = 0, 0
        for num in nums:
            if num == candidate1:
                count1 += 1
            elif num == candidate2:
                count2 += 1
            elif count1 == 0:
                candidate1 = num
                count1 = 1
            elif count2 == 0:
                candidate2 = num
                count2 = 1
            else:
                count1 -= 1
                count2 -= 1
        count1, count2 = 0, 0
        for num in nums:
            if num == candidate1:
                count1 += 1
            elif num == candidate2:
                count2 += 1
        result = []
        if count1 > len(nums) // 3:
            result.append(candidate1)
        if count2 > len(nums) // 3:
            result.append(candidate2)
        return result
```
```Java []
class Solution {
    public List<Integer> majorityElement(int[] nums) {
        List<Integer> result = new ArrayList<>();
        if (nums == null || nums.length == 0) {
            return result;
        }
        int candidate1 = 0, candidate2 = 0, count1 = 0, count2 = 0;
        for (int num : nums) {
            if (num == candidate1) {
                count1++;
            } else if (num == candidate2) {
                count2++;
            } else if (count1 == 0) {
                candidate1 = num;
                count1++;
            } else if (count2 == 0) {
                candidate2 = num;
                count2++;
            } else {
                count1--;
                count2--;
            }
        }
        count1 = 0;
        count2 = 0;
        
        for (int num : nums) {
            if (num == candidate1) {
                count1++;
            } else if (num == candidate2) {
                count2++;
            }
        }
        if (count1 > nums.length / 3) {
            result.add(candidate1);
        }
        if (count2 > nums.length / 3) {
            result.add(candidate2);
        }
        
        return result;
    }
}
```
```C++ []
class Solution {
public:
    vector<int> majorityElement(vector<int>& nums) {
        vector<int> result;
        int candidate1 = 0, candidate2 = 0, count1 = 0, count2 = 0;
        for (int num : nums) {
            if (num == candidate1) {
                count1++;
            } else if (num == candidate2) {
                count2++;
            } else if (count1 == 0) {
                candidate1 = num;
                count1 = 1;
            } else if (count2 == 0) {
                candidate2 = num;
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }
        count1 = 0;
        count2 = 0;
        for (int num : nums) {
            if (num == candidate1) {
                count1++;
            } else if (num == candidate2) {
                count2++;
            }
        }
        int n = nums.size();
        if (count1 > n / 3) {
            result.push_back(candidate1);
        }
        if (count2 > n / 3) {
            result.push_back(candidate2);
        }

        return result;
    }
};

```
```C []
int* majorityElement(int* nums, int numsSize, int* returnSize) {
    int candidate1 = 0, candidate2 = 0;
    int count1 = 0, count2 = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == candidate1) {
            count1++;
        } else if (nums[i] == candidate2) {
            count2++;
        } else if (count1 == 0) {
            candidate1 = nums[i];
            count1 = 1;
        } else if (count2 == 0) {
            candidate2 = nums[i];
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }
    count1 = 0;
    count2 = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == candidate1) {
            count1++;
        } else if (nums[i] == candidate2) {
            count2++;
        }
    }
    int* result = (int*)malloc(sizeof(int) * 2); // At most 2 majority elements
    *returnSize = 0;
    if (count1 > numsSize / 3) {
        result[(*returnSize)++] = candidate1;
    }
    if (count2 > numsSize / 3) {
        result[(*returnSize)++] = candidate2;
    }
    return result;
}
```
# \uD83C\uDFC6Conclusion: 
The Boyer-Moore Voting Algorithm and Moore Voting Algorithm are particularly efficient with O(1) space complexity.

# \uD83D\uDCA1 I invite you to check out my profile for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA