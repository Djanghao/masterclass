# ✅💯🔥Explanations No One Will Give You🎓🧠2 Detailed Approaches🎯🔥Extremely Simple And Effective🔥

**Author:** heir-of-god
**Votes:** 94
**Link:** [https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5526114/](https://leetcode.com/problems/sort-the-jumbled-numbers/solutions/5526114/)

---

<blockquote>
        <p>
            <b>
                Shoot for the moon. Even if you miss, you'll land among the stars.
            </b>        
        </p>
        <p>
            --- Norman Vincent Peale ---
        </p>
</blockquote>

# \uD83D\uDC51Problem Explanation and Understanding:

## \uD83C\uDFAF Problem Description
You are given an integer array `nums` and integer array `mapping`. You know that digit `i` is mapped to the digit `mapping[i]`. You want to sort `nums` based on what numbers you will get if you perform mapping on every its number (but you mustn't change the numbers in the output themselves)

## \uD83D\uDCE5\u2935\uFE0F Input:
- Integer array `nums`      | length <= 3 * 10^4 ; 0 <= nums[i] < 10^9
- Integer array `mapping`   | length = 10 and every value is unique

## \uD83D\uDCE4\u2934\uFE0F Output:
Sorted array based on mapping

---

# 1\uFE0F\u20E3\uD83C\uDFC6 Approach 1: Data Type Conversion

# \uD83E\uDD14 Intuition
- So, as it turns out, it\u2019s impossible to solve this problem without \u201Ctranslating\u201D each number (or at least I haven\u2019t found such a way, would be grateful if you share one if you found)
- Thus, the task becomes quite easy (you just need "translate" every number and map to it the original), although the effectiveness of the solutions remains in question (converting every number digit by digit even with second approach seems very unefficient and probably would fail with really big number).
- Okay, this is quite uncomfortable to change digits in the number as integer (though possible, check next approach) so let's convert every number to the str (or array in Python, for example) and then back to integer

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Inside `sortJumbled`, define a helper function `translate_integer`:
  - Convert the integer `num` to a array of its digits as strings.
  - Replace each digit with the corresponding value from the `mapping` array.
  - Join the modified digits back into a single string and convert it to an integer.
- Create an empty hashmap `number_mapping`.
- Iterate over each number in `nums`:
  - Use the `translate_integer` function to convert the number.
  - Store the result in `number_mapping` with the original number as the key.
- Sort the `nums` array using a lambda function that sorts based on the translated values from `number_mapping`.
- Return the sorted `nums` array.

# \uD83D\uDCD7 Complexity Analysis
- \u23F0 Time complexity: O(n * log n), since we use built-in sort functions (usually n * log n) and also perform many strings/array manipulations
- \uD83E\uDDFA Space complexity: O(n), since sorts algorithms usually take extra space (O(n) of O(log n) depending on language) and we use `number_mapping` with size n -> O(n) anyway 

# \uD83D\uDCBB Code
``` python []
class Solution:
    def sortJumbled(self, mapping: list[int], nums: list[int]) -> list[int]:
        def translate_integer(num: int) -> int:
            digits: list[str] = list(str(num))
            for i in range(len(digits)):
                digits[i] = str(mapping[int(digits[i])])
            return int("".join(digits))

        number_mapping: dict[int, int] = {}
        for num in nums:
            number_mapping[num] = translate_integer(num)
        nums.sort(key=lambda val: number_mapping[val])

        return nums
```
``` C++ []
class Solution {
public:
    vector<int> sortJumbled(vector<int>& mapping, vector<int>& nums) {
        auto translate_integer = [&](int num) -> int {
            string digits = to_string(num);
            for (char& digit : digits) {
                digit = '0' + mapping[digit - '0'];
            }
            return stoi(digits);
        };

        unordered_map<int, int> number_mapping;
        for (int num : nums) {
            if (number_mapping.find(num) == number_mapping.end()) {
                number_mapping[num] = translate_integer(num);
            }
        }

        sort(nums.begin(), nums.end(), [&](int a, int b) {
            return number_mapping[a] < number_mapping[b];
        });

        return nums;
    }
};
```
``` JavaScript []
var sortJumbled = function(mapping, nums) {
    const translateInteger = (num) => {
        let digits = num.toString().split('');
        for (let i = 0; i < digits.length; i++) {
            digits[i] = mapping[digits[i]];
        }
        return parseInt(digits.join(''));
    };

    const numberMapping = {};
    for (let num of nums) {
        if (!(num in numberMapping)) {
            numberMapping[num] = translateInteger(num);
        }
    }

    nums.sort((a, b) => numberMapping[a] - numberMapping[b]);

    return nums;
};
```
``` Java []
class Solution {
    public int[] sortJumbled(int[] mapping, int[] nums) {
        Map<Integer, Integer> numberMapping = new HashMap<>();

        for (int num : nums) {
            if (!numberMapping.containsKey(num)) {
                numberMapping.put(num, translateInteger(num, mapping));
            }
        }

        Integer[] numsBoxed = Arrays.stream(nums).boxed().toArray(Integer[]::new);
        Arrays.sort(numsBoxed, (a, b) -> Integer.compare(numberMapping.get(a), numberMapping.get(b)));

        for (int i = 0; i < nums.length; i++) {
            nums[i] = numsBoxed[i];
        }

        return nums;
    }

    private int translateInteger(int num, int[] mapping) {
        char[] digits = Integer.toString(num).toCharArray();
        for (int i = 0; i < digits.length; i++) {
            digits[i] = (char) ('0' + mapping[digits[i] - '0']);
        }
        return Integer.parseInt(new String(digits));
    }
}
```


# 2\uFE0F\u20E3\uD83D\uDE0E Approach 2: Directly Translate Integer

# \uD83E\uDD14 Intuition
- As I said in previous approach we can avoid converting integer to any other data type and convert integer directly, though other logic will be the same and this is only a matter of one function implementation.
- We will translate integer digit-by-digit starting from the last one.

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Inside `sortJumbled`, define a helper function `translate_integer`:
  - Handle the edge case where `num` is 0 by directly returning the mapped value of 0.
  - Initialize `res` to 0 for storing the translated number and `cur_mult` to 1 for constructing the number.
  - Use a while loop to process each digit of `num`:
    - Extract the last digit of `num` using modulo 10.
    - Update `num` by removing the last digit using integer division by 10.
    - Add the mapped value of the digit to `res`, scaled by `cur_mult`.
    - Multiply `cur_mult` by 10 to move to the next digit place.
  - Return the constructed translated integer `res`.
- Create an empty hashmap `number_mapping`.
- Iterate over each number in `nums`:
  - Use the `translate_integer` function to convert the number.
  - Store the result in `number_mapping` with the original number as the key.
- Sort the `nums` array using a lambda function that sorts based on the translated values from `number_mapping`.
- Return the sorted `nums` array.

# \uD83D\uDCD2 Complexity Analysis
- \u23F0 Time complexity: O(n * log n), since we still use built-in sort functions and change every number digit by digit (though I believe that due to the inner implementation (integers are something computer understands in bits) work with integers are way faster)
- \uD83E\uDDFA Space complexity: O(n), since we still use `number_mapping` hashmap

# \uD83D\uDCBB Code
``` python []
class Solution:
    def sortJumbled(self, mapping: list[int], nums: list[int]) -> list[int]:
        def translate_integer(num: int) -> int:
            if num == 0:  # edge case, we don't want return 0 but mapping value
                return mapping[0]
            res: int = 0
            cur_mult: int = 1  # to construct number we need every time multiple new digit
            while num > 0:
                digit = num % 10
                num //= 10
                res = mapping[digit] * cur_mult + res
                cur_mult *= 10

            return res

        number_mapping: dict[int, int] = {}
        for num in nums:
            number_mapping[num] = translate_integer(num)
        nums.sort(key=lambda val: number_mapping[val])

        return nums
```
``` C++ []
class Solution {
public:
    vector<int> sortJumbled(vector<int>& mapping, vector<int>& nums) {
        auto translate_integer = [&](int num) -> int {
            if (num == 0) {
                return mapping[0];
            }
            int res = 0;
            int cur_mult = 1;
            while (num > 0) {
                int digit = num % 10;
                num /= 10;
                res += mapping[digit] * cur_mult;
                cur_mult *= 10;
            }
            return res;
        };

        unordered_map<int, int> number_mapping;
        for (int num : nums) {
            if (number_mapping.find(num) == number_mapping.end()) {
                number_mapping[num] = translate_integer(num);
            }
        }

        sort(nums.begin(), nums.end(), [&](int a, int b) {
            return number_mapping[a] < number_mapping[b];
        });

        return nums;
    }
};
```
``` JavaScript []
var sortJumbled = function(mapping, nums) {
    const translateInteger = (num) => {
        if (num === 0) {
            return mapping[0];
        }
        let res = 0;
        let curMult = 1;
        while (num > 0) {
            const digit = num % 10;
            num = Math.floor(num / 10);
            res += mapping[digit] * curMult;
            curMult *= 10;
        }
        return res;
    };

    const numberMapping = {};
    for (let num of nums) {
        if (!(num in numberMapping)) {
            numberMapping[num] = translateInteger(num);
        }
    }

    nums.sort((a, b) => numberMapping[a] - numberMapping[b]);

    return nums;
};
```
``` Java []
class Solution {
    public int[] sortJumbled(int[] mapping, int[] nums) {
        Map<Integer, Integer> numberMapping = new HashMap<>();

        for (int num : nums) {
            if (!numberMapping.containsKey(num)) {
                numberMapping.put(num, translateInteger(num, mapping));
            }
        }

        Integer[] numsBoxed = Arrays.stream(nums).boxed().toArray(Integer[]::new);
        Arrays.sort(numsBoxed, (a, b) -> Integer.compare(numberMapping.get(a), numberMapping.get(b)));

        for (int i = 0; i < nums.length; i++) {
            nums[i] = numsBoxed[i];
        }

        return nums;
    }

    private int translateInteger(int num, int[] mapping) {
        if (num == 0) {
            return mapping[0];
        }
        int res = 0;
        int curMult = 1;
        while (num > 0) {
            int digit = num % 10;
            num /= 10;
            res += mapping[digit] * curMult;
            curMult *= 10;
        }
        return res;
    }
}
```

## \uD83D\uDCA1\uD83D\uDCA1\uD83D\uDCA1I encourage you to check out [my profile](https://leetcode.com/heir-of-god/) and [Project-S](https://github.com/Heir-of-God/Project-S) project for detailed explanations and code for different problems (not only Leetcode). Happy coding and learning!\uD83D\uDCDA

### Please consider *upvote*\u2B06\uFE0F\u2B06\uFE0F\u2B06\uFE0F because I try really hard not just to put here my code and rewrite testcase to show that it works but explain you WHY it works and HOW. Thank you\u2764\uFE0F

## If you have any doubts or questions feel free to ask them in comments. I will be glad to help you with understanding\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

![There is image for upvote](./images/0.png)
