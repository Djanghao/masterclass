# ✅💯🔥Explanations No One Will Give You🎓🧠3 Detailed Approaches🎯🔥Extremely Simple And Effective🔥

**Author:** heir-of-god
**Votes:** 142
**Link:** [https://leetcode.com/problems/single-number-iii/solutions/5233887/](https://leetcode.com/problems/single-number-iii/solutions/5233887/)

---

<blockquote>
        <p>
            <b>
                The secret of your future is hidden in your daily routine.
            </b>        
        </p>
        <p>
            --- Mike Murdock ---
        </p>
</blockquote>

# \uD83D\uDC51Problem Explanation and Understanding:

## \uD83C\uDFAF Problem Description
You are given a list of Integers ```nums```, where every element appears exactly **2** times and ONLY TWO of them appear once. You need to find this elements

## \uD83D\uDCE5\u2935\uFE0F Input:
- Integer array ```nums``` 

## \uD83D\uDCE4\u2934\uFE0F Output:
Array which contain two nums which appear only once in the array

---

# 1\uFE0F\u20E3\u2728 Approach 1: Brute Force

# \uD83E\uDD14 Intuition
To be honest my first solution was using frequency map (check next approach) but after rechecking constraints I understanded that solution in O(n^2) is probably possible too
- I don't think there's anything to explain: all you want to do is have two pointers and if you established some pointer on index ```i``` and then traversed through every index ```j``` such that ```j != i``` and haven't found duplicate - then this number is one of the answer.

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Define result variable and variable to keep track where to add next result.
- Define first loop
- Define second loop
- Define flag variable which will tell us whether we've found part of the result or not

# \uD83D\uDCD8 Complexity Analysis
- \u23F0 Time complexity: O(n^2), since we have nested loop and each go through whole array
- \uD83E\uDDFA Space complexity: O(1), since we don't use any extra space

# \uD83D\uDCBB Code
``` python []
class Solution:
    def singleNumber(self, nums: list[int]) -> list[int]:
        n: int = len(nums)
        result: list[int] = [0, 0]
        index = 0

        for i in range(n):
            found = False
            for j in range(n):
                if i != j and nums[i] == nums[j]:
                    found = True
                    break
            if not found:
                result[index] = nums[i]
                index += 1
                if index == 2:
                    break

        return result
```
``` C++ []
class Solution {
public:
    vector<int> singleNumber(vector<int>& nums) {
        vector<int> result(2, 0);
        int index = 0;
        int n = nums.size();

        for (int i = 0; i < n; i++) {
            bool found = false;
            for (int j = 0; j < n; j++) {
                if (i != j && nums[i] == nums[j]) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                result[index++] = nums[i];
                if (index == 2) {
                    break;
                }
            }
        }

        return result;
    }
};
```
``` JavaScript []
var singleNumber = function(nums) {
    let result = [0, 0];
    let index = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let found = false;
        for (let j = 0; j < n; j++) {
            if (i !== j && nums[i] === nums[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            result[index++] = nums[i];
            if (index === 2) {
                break;
            }
        }
    }

    return result;
};
```
``` Java []
class Solution {
    public int[] singleNumber(int[] nums) {
        int[] result = new int[2];
        int index = 0;
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            boolean found = false;
            for (int j = 0; j < n; j++) {
                if (i != j && nums[i] == nums[j]) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                result[index++] = nums[i];
                if (index == 2) {
                    break;
                }
            }
        }

        return result;
    }
}
```
``` C []
int* singleNumber(int* nums, int numsSize, int* returnSize) {
    int* result = (int*)malloc(2 * sizeof(int));
    int index = 0;

    for (int i = 0; i < numsSize; i++) {
        int found = 0;
        for (int j = 0; j < numsSize; j++) {
            if (i != j && nums[i] == nums[j]) {
                found = 1;
                break;
            }
        }
        if (!found) {
            result[index++] = nums[i];
            if (index == 2) {
                break;
            }
        }
    }

    *returnSize = 2;
    return result;
}
```


# 2\uFE0F\u20E3\uD83E\uDD18 Approach 2: Frequncy map use

# \uD83E\uDD14 Intuition
This approach is quite easy to come up with too.
- You can go through whole array and count frequency of each element
- After this you can go through your frequency map and check whether element has frequency 1 - this would be answer

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Define frequency map
- Traverse array and for every num ```num``` add to ```freq[num]``` 1
- Define res array and traverse through frequency map to find the answer

# \uD83D\uDCDA Complexity Analysis
- \u23F0 Time complexity: O(n), since we traverse through whole array ```nums``` which is O(n) and then through ```freq``` which is also O(n) -> O(n) in total
- \uD83E\uDDFA Space complexity: O(n), since we use hash map with size ```n // 2 + 1``` which is O(n)

# \uD83D\uDCBB Code
``` python []
class Solution:
    def singleNumber(self, nums: list[int]) -> list[int]:
        freq = defaultdict(int)  # number -> appear_number
        for n in nums:
            freq[n] += 1

        res: list[int] = []
        for num, f in freq.items():
            if f == 1:
                res.append(num)

        return res
```
``` C++ []
class Solution {
public:
    vector<int> singleNumber(vector<int>& nums) {
        unordered_map<int, int> freq;
        for (int n : nums) {
            freq[n]++;
        }

        vector<int> res;
        for (auto& pair : freq) {
            if (pair.second == 1) {
                res.push_back(pair.first);
            }
        }

        return res;
    }
};
```
``` JavaScript []
var singleNumber = function(nums) {
    const freq = new Map();
    for (const n of nums) {
        freq.set(n, (freq.get(n) || 0) + 1);
    }

    const res = [];
    for (const [num, count] of freq.entries()) {
        if (count === 1) {
            res.push(num);
        }
    }

    return res;
};
```
``` Java []
class Solution {
    public int[] singleNumber(int[] nums) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int n : nums) {
            freq.put(n, freq.getOrDefault(n, 0) + 1);
        }

        int[] res = new int[2];
        int index = 0;
        for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {
            if (entry.getValue() == 1) {
                res[index++] = entry.getKey();
                if (index == 2) {
                    break;
                }
            }
        }

        return res;
    }
}
```
``` C []
int* singleNumber(int* nums, int numsSize, int* returnSize) {
    typedef struct {
        int key;
        int value;
    } HashTable;

    HashTable* freq = (HashTable*)calloc(numsSize, sizeof(HashTable));
    int uniqueCount = 0;

    for (int i = 0; i < numsSize; i++) {
        int found = 0;
        for (int j = 0; j < uniqueCount; j++) {
            if (freq[j].key == nums[i]) {
                freq[j].value++;
                found = 1;
                break;
            }
        }
        if (!found) {
            freq[uniqueCount].key = nums[i];
            freq[uniqueCount].value = 1;
            uniqueCount++;
        }
    }

    int* result = (int*)malloc(2 * sizeof(int));
    int index = 0;
    for (int i = 0; i < uniqueCount; i++) {
        if (freq[i].value == 1) {
            result[index++] = freq[i].key;
            if (index == 2) {
                break;
            }
        }
    }

    free(freq);
    *returnSize = 2;
    return result;
}
```

# 3\uFE0F\u20E3\uD83D\uDE0E Approach 3: Bit manipulation

### This approach require that you understand bit manipulation and XOR operation. If not, read [my explanations here](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solutions/5229327/explanations-no-one-will-give-you2-detailed-approachesextremely-simple-and-effective)

# \uD83E\uDD14 Intuition
This approach is hard to come up with in interview so don't worry if you couldn't, let's talk about intuition
- I hope everyone already learned that ```a ^ a = 0``` and that order for XORing doesn't matter at all.
- Now let's consider XOR of every element in ```nums```, let's say elements x1 and x2 is our result. So if we have ```nums = [a1, a2, x1, b1, x2, b2, ...]``` what can we say about its XOR? You can group pair of equal elements as: ```XOR_nums = (a1 ^ a2) ^ (b1 ^ b2) ^ ... ^ (x1 ^ x2)```. What all this brackets before last will be? Zero. So, if you XOR all values in this array all you will be left with is just XOR of two elements which appers only once.
- Now what means if in bit representation of this XOR at some position ```i``` there's bit 1? It means that one of (x1, x2) contains there bit ```1``` and the other ```0```. So how we can use this?
- Let's say now we will divide our array on this criteria: 
    - **If at position ```i``` some element ```el``` has bit 1 then this is group 1, else this is group 2**
- It's obvious that equal number will fall in the same group because they're equal.
- Now let's think about XOR of this two groups. If there're all that pairs (a1, a2), (b1, b2), ... in those group then they will result in ```0```. But what we will get in remainder? Quite interesting: in remainder from group 1 we will have element which contained bit 1 at position ```i``` and from group 2 element which contained bit 2 at position ```i```. That's it, these numbers are our answer

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Define and calculate ```overall_xor``` (that's XOR for ```nums```)
- Define XOR values for group1 and group2
- Now we need to find position of bit where nums is differ. Let's define ```bit_pos_dif``` which will store index of position of this bit counting from right.
- Now go through every number from ```nums``` and XOR it with its appropriate group.

# \uD83D\uDCDA Complexity Analysis
- \u23F0 Time complexity: O(n), since we traverse through whole array ```nums``` twice which is O(2n) -> O(n) 
- \uD83E\uDDFA Space complexity: O(1), since we don't use any extra space

# \uD83D\uDCBB Code
``` python []
class Solution:
    def singleNumber(self, nums: list[int]) -> list[int]:
        overall_xor = 0
        for n in nums:
            overall_xor ^= n
        first_group_xor = 0
        second_group_xor = 0

        bit_pos_dif = 0
        while (overall_xor >> bit_pos_dif) & 1 != 1:
            bit_pos_dif += 1

        for num in nums:
            if (num >> bit_pos_dif) & 1 == 1:
                first_group_xor ^= num
            else:
                second_group_xor ^= num

        return [first_group_xor, second_group_xor]
```
``` C++ []
class Solution {
public:
    vector<int> singleNumber(vector<int>& nums) {
        int overall_xor = 0;
        for (int n : nums) {
            overall_xor ^= n;
        }

        int first_group_xor = 0;
        int second_group_xor = 0;

        int bit_pos_dif = 0;
        while (((overall_xor >> bit_pos_dif) & 1) != 1) {
            bit_pos_dif++;
        }

        for (int num : nums) {
            if (((num >> bit_pos_dif) & 1) == 1) {
                first_group_xor ^= num;
            } else {
                second_group_xor ^= num;
            }
        }

        return {first_group_xor, second_group_xor};
    }
};
```
``` JavaScript []
var singleNumber = function(nums) {
    let overall_xor = 0;
    for (const n of nums) {
        overall_xor ^= n;
    }

    let first_group_xor = 0;
    let second_group_xor = 0;

    let bit_pos_dif = 0;
    while (((overall_xor >> bit_pos_dif) & 1) !== 1) {
        bit_pos_dif++;
    }

    for (const num of nums) {
        if (((num >> bit_pos_dif) & 1) === 1) {
            first_group_xor ^= num;
        } else {
            second_group_xor ^= num;
        }
    }

    return [first_group_xor, second_group_xor];
};
```
``` Java []
class Solution {
    public int[] singleNumber(int[] nums) {
        int overall_xor = 0;
        for (int n : nums) {
            overall_xor ^= n;
        }

        int first_group_xor = 0;
        int second_group_xor = 0;

        int bit_pos_dif = 0;
        while (((overall_xor >> bit_pos_dif) & 1) != 1) {
            bit_pos_dif++;
        }

        for (int num : nums) {
            if (((num >> bit_pos_dif) & 1) == 1) {
                first_group_xor ^= num;
            } else {
                second_group_xor ^= num;
            }
        }

        return new int[] {first_group_xor, second_group_xor};
    }
}
```
``` C []
int* singleNumber(int* nums, int numsSize, int* returnSize) {
    int overall_xor = 0;
    for (int i = 0; i < numsSize; i++) {
        overall_xor ^= nums[i];
    }

    // Find the rightmost set bit in overall_xor
    unsigned int bit_pos_dif = overall_xor & -(unsigned int)overall_xor;

    int first_group_xor = 0;
    int second_group_xor = 0;

    for (int i = 0; i < numsSize; i++) {
        if ((nums[i] & bit_pos_dif) != 0) {
            first_group_xor ^= nums[i];
        } else {
            second_group_xor ^= nums[i];
        }
    }

    int* result = (int*)malloc(2 * sizeof(int));
    result[0] = first_group_xor;
    result[1] = second_group_xor;
    *returnSize = 2;
    return result;
}
```

## \uD83D\uDCA1\uD83D\uDCA1\uD83D\uDCA1I encourage you to check out [my profile](https://leetcode.com/heir-of-god/) and [Project-S](https://github.com/Heir-of-God/Project-S) project for detailed explanations and code for different problems (not only Leetcode). Happy coding and learning!\uD83D\uDCDA

### Please consider *upvote*\u2B06\uFE0F\u2B06\uFE0F\u2B06\uFE0F because I try really hard not just to put here my code and rewrite testcase to show that it works but explain you WHY it works and HOW. Thank you\u2764\uFE0F

## If you have any doubts or questions feel free to ask them in comments. I will be glad to help you with understanding\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

![There is image for upvote](./images/0.png)
