# (O(1)⏱️| O(1)📦) JAVA☕ PYTHON🐍 JAVASCRIPT💛 TYPESCRIPT🔷 C++🦾 C##️⃣ Simple Calculation🧮

**Author:** VishnuThangaraj
**Votes:** 5
**Link:** [https://leetcode.com/problems/sequential-digits/solutions/4663116/](https://leetcode.com/problems/sequential-digits/solutions/4663116/)

---

Github - https://github.com/VishnuThangaraj \uD83D\uDE3A
**UPVOTE IF YOU FOUND HELPFUL\u2728**

# Intuition\uD83E\uDDE0
Generate all valid the sequential digits within the given range (`low - high`) and return them in sorted order.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach\u26A1
<!-- Describe your approach to solving the problem. -->
1. Initialize `result` array/ArrayList to store the sequences.
2. Iterate in the range of 1 to 8 because a 9-digit sequence starting from 9 cannot be created.
3. Initialize `num` which hold current Digit and **num+1** for `nextDigit`.
4. For each digit, use while loop to generate all possible sequential digits starting from `num`.
5. It keeps appending the `nextDigit` to the current number until it reaches 9 or exceeds the upper limit (`high`).
6. Append the `num` to result if falls within the range (`low to high`).
7. Sort the `result` array and return it.


# Complexity\u231B
- Time complexity: `O(1)`, As the total number of iteration does not depends on the input size.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(1)`, The maximum number of digits in the result list is constant as we are considering digits in range of digits 1 to 8.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code\uD83D\uDCBB
``` Java []
class Solution {
    public List<Integer> sequentialDigits(int low, int high) {
        List<Integer> result = new ArrayList<>();

        for(int digit=1; digit<9; digit++){
            int num = digit;
            int nextDigit = num + 1;

            while(num <= high && nextDigit <= 9){
                num = (num * 10) + nextDigit;
                if(num >= low && num <= high) result.add(num);

                nextDigit++;
            }
        }

        Collections.sort(result);
        return result;
    }
}
```
``` Python []
class Solution:
    def sequentialDigits(self, low: int, high: int) -> List[int]:
        result = []

        for digit in range(1,10):
            num = digit
            nextDigit = num + 1

            while num <= high and nextDigit <= 9:
                num = num*10 + nextDigit
                if num >= low and num <= high:
                    result.append(num)

                nextDigit += 1

        return sorted(result)
```
``` Javascript []
var sequentialDigits = function(low, high) {
    const result = [];

    for(let digit=1; digit<9; digit++){
        let num = digit;
        let nextDigit = num + 1;

        while(num <= high && nextDigit <= 9){
            num= num*10 + nextDigit;
            if(num >= low && num <= high) result.push(num);

            nextDigit++;
        }
    }

    return result.sort((a, b) => a - b);
};
```
``` Typescript []
function sequentialDigits(low: number, high: number): number[] {
    const result = [];

    for(let digit=1; digit<9; digit++){
        let num = digit;
        let nextDigit = num + 1;

        while(num <= high && nextDigit <= 9){
            num= num*10 + nextDigit;
            if(num >= low && num <= high) result.push(num);

            nextDigit++;
        }
    }

    return result.sort((a, b) => a - b);
};
```
``` C++ []
class Solution {
public:
    vector<int> sequentialDigits(int low, int high) {
        std::vector<int> result;

        for(int digit=1; digit<9; digit++){
            int num = digit;
            int nextDigit = num + 1;

            while(num <= high && nextDigit <= 9){
                num = (num * 10) + nextDigit;
                if(num >= low && num <= high) result.push_back(num);

                nextDigit++;
            }
        }

        std::sort(result.begin(), result.end());
        return result;
    }
};
```
``` C# []
public class Solution {
    public IList<int> SequentialDigits(int low, int high) {
        List<int> result = [];

        for(int digit=1; digit<9; digit++){
            int num = digit;
            int nextDigit = num + 1;

            while(num <= high && nextDigit <= 9){
                num = (num * 10) + nextDigit;
                if(num >= low && num <= high) result.Add(num);

                nextDigit++;
            }
        }

        result.Sort();
        return result;
    }
}
```

**UPVOTE IF YOU FOUND HELPFUL\u2728**