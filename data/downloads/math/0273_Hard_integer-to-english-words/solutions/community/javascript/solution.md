# Easy simple solution - Javascript | C++ | Python | Java

**Author:** Nabeel7801
**Votes:** 34
**Link:** [https://leetcode.com/problems/integer-to-english-words/solutions/5599841/](https://leetcode.com/problems/integer-to-english-words/solutions/5599841/)

---

# Approach
This problem is a simple one. The main part to identify here is that the `Hundreds` can be repeat for Billion, Million and Thousand.

I created a method for getting the hundreds in word `getHundred`. After doing this the rest of the part is quite easy. Simply add checks for Billion, Million and Thousand.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code

``` javascript []
/**
 * @param {number} num
 * @return {string}
 */

var numberToWords = function(num) {
    if (!num) return "Zero";

    const units = {
        '1': "One",
        '2': "Two",
        '3': "Three",
        '4': "Four",
        '5': "Five",
        '6': "Six",
        '7': "Seven",
        '8': "Eight",
        '9': "Nine",
        '10': "Ten",
        '11': "Eleven",
        '12': "Twelve",
        '13': "Thirteen",
        '14': "Fourteen",
        '15': "Fifteen",
        '16': "Sixteen",
        '17': "Seventeen",
        '18': "Eighteen",
        '19': "Nineteen",
    }

    const tens = {
        '2': "Twenty",
        '3': "Thirty",
        '4': "Forty",
        '5': "Fifty",
        '6': "Sixty",
        '7': "Seventy",
        '8': "Eighty",
        '9': "Ninety",
    }

    const getHundred = (num) => {
        let str = "";
        if (num >= 100) {
            const n = Math.floor(num/100);
            str += ` ${units[n]} Hundred`;
            num %= 100;
        }

        if (num >= 20) {
            const n = Math.floor(num/10);
            str += ` ${tens[n]}`;
            num %= 10;
        }

        if (num > 0) {
            str += ` ${units[num]}`;
        }

        return str.trim();
    }

    let answer = "";
    if (num >= 1e9) {
        const n = Math.floor(num / 1e9)
        answer += ` ${getHundred(n)} Billion`
        num %= 1e9;
    }

    if (num >= 1e6) {
        const n = Math.floor(num / 1e6)
        answer += ` ${getHundred(n)} Million`
        num %= 1e6;
    }

    if (num >= 1e3) {
        const n = Math.floor(num / 1e3)
        answer += ` ${getHundred(n)} Thousand`
        num %= 1e3;
    }

    answer += ` ${getHundred(num)}`

    return answer.trim();
};
```

```C++ []
#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

class Solution {
public:
    string numberToWords(int num) {
        if (num == 0) return "Zero";

        unordered_map<int, string> units = {
            {1, "One"}, {2, "Two"}, {3, "Three"}, {4, "Four"},
            {5, "Five"}, {6, "Six"}, {7, "Seven"}, {8, "Eight"},
            {9, "Nine"}, {10, "Ten"}, {11, "Eleven"}, {12, "Twelve"},
            {13, "Thirteen"}, {14, "Fourteen"}, {15, "Fifteen"},
            {16, "Sixteen"}, {17, "Seventeen"}, {18, "Eighteen"},
            {19, "Nineteen"}
        };

        unordered_map<int, string> tens = {
            {2, "Twenty"}, {3, "Thirty"}, {4, "Forty"},
            {5, "Fifty"}, {6, "Sixty"}, {7, "Seventy"},
            {8, "Eighty"}, {9, "Ninety"}
        };

        auto getHundred = [&](int num) {
            string str = "";
            if (num >= 100) {
                int n = num / 100;
                str += " " + units[n] + " Hundred";
                num %= 100;
            }

            if (num >= 20) {
                int n = num / 10;
                str += " " + tens[n];
                num %= 10;
            }

            if (num > 0) {
                str += " " + units[num];
            }

            return str;
        };

        string answer = "";
        if (num >= 1e9) {
            int n = num / 1e9;
            answer += getHundred(n) + " Billion";
            num %= 1e9;
        }

        if (num >= 1e6) {
            int n = num / 1e6;
            answer += getHundred(n) + " Million";
            num %= 1e6;
        }

        if (num >= 1e3) {
            int n = num / 1e3;
            answer += getHundred(n) + " Thousand";
            num %= 1e3;
        }

        answer += getHundred(num);

        return answer.substr(1);
    }
};

int main() {
    Solution sol;
    cout << sol.numberToWords(1234567890) << endl;
    return 0;
}

```

```Python []
class Solution:
    def numberToWords(self, num: int) -> str:
        if num == 0:
            return "Zero"

        units = {
            1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 
            6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten",
            11: "Eleven", 12: "Twelve", 13: "Thirteen", 14: "Fourteen",
            15: "Fifteen", 16: "Sixteen", 17: "Seventeen", 18: "Eighteen",
            19: "Nineteen"
        }

        tens = {
            2: "Twenty", 3: "Thirty", 4: "Forty", 5: "Fifty", 
            6: "Sixty", 7: "Seventy", 8: "Eighty", 9: "Ninety"
        }

        def getHundred(num):
            result = []
            if num >= 100:
                n = num // 100
                result.append(units[n] + " Hundred")
                num %= 100
            if num >= 20:
                n = num // 10
                result.append(tens[n])
                num %= 10
            if num > 0:
                result.append(units[num])
            return " ".join(result)

        answer = []
        if num >= 1e9:
            n = num // 1e9
            answer.append(getHundred(n) + " Billion")
            num %= 1e9
        if num >= 1e6:
            n = num // 1e6
            answer.append(getHundred(n) + " Million")
            num %= 1e6
        if num >= 1e3:
            n = num // 1e3
            answer.append(getHundred(n) + " Thousand")
            num %= 1e3
        answer.append(getHundred(num))

        return " ".join(answer).strip()

# Example usage
sol = Solution()
print(sol.numberToWords(1234567890))

```

```Java []
import java.util.HashMap;

public class Solution {
    public String numberToWords(int num) {
        if (num == 0) return "Zero";

        HashMap<Integer, String> units = new HashMap<>();
        units.put(1, "One"); units.put(2, "Two"); units.put(3, "Three"); units.put(4, "Four");
        units.put(5, "Five"); units.put(6, "Six"); units.put(7, "Seven"); units.put(8, "Eight");
        units.put(9, "Nine"); units.put(10, "Ten"); units.put(11, "Eleven"); units.put(12, "Twelve");
        units.put(13, "Thirteen"); units.put(14, "Fourteen"); units.put(15, "Fifteen");
        units.put(16, "Sixteen"); units.put(17, "Seventeen"); units.put(18, "Eighteen");
        units.put(19, "Nineteen");

        HashMap<Integer, String> tens = new HashMap<>();
        tens.put(2, "Twenty"); tens.put(3, "Thirty"); tens.put(4, "Forty");
        tens.put(5, "Fifty"); tens.put(6, "Sixty"); tens.put(7, "Seventy");
        tens.put(8, "Eighty"); tens.put(9, "Ninety");

        String getHundred(int num) {
            StringBuilder str = new StringBuilder();
            if (num >= 100) {
                int n = num / 100;
                str.append(" ").append(units.get(n)).append(" Hundred");
                num %= 100;
            }

            if (num >= 20) {
                int n = num / 10;
                str.append(" ").append(tens.get(n));
                num %= 10;
            }

            if (num > 0) {
                str.append(" ").append(units.get(num));
            }

            return str.toString().trim();
        }

        StringBuilder answer = new StringBuilder();
        if (num >= 1e9) {
            int n = num / 1e9;
            answer.append(" ").append(getHundred(n)).append(" Billion");
            num %= 1e9;
        }

        if (num >= 1e6) {
            int n = num / 1e6;
            answer.append(" ").append(getHundred(n)).append(" Million");
            num %= 1e6;
        }

        if (num >= 1e3) {
            int n = num / 1e3;
            answer.append(" ").append(getHundred(n)).append(" Thousand");
            num %= 1e3;
        }

        answer.append(" ").append(getHundred(num));

        return answer.toString().trim();
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.numberToWords(1234567890));
    }
}

```


> If my solution was helpful, Please support me with an UPVOTE

![upvote.jpeg](./images/0.jpeg)
