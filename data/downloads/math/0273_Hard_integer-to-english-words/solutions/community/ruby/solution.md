# Super Simple Approach | O(n) Complexity | 6 Languages

**Author:** nagastu02
**Votes:** 2
**Link:** [https://leetcode.com/problems/integer-to-english-words/solutions/5600269/](https://leetcode.com/problems/integer-to-english-words/solutions/5600269/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
When given an integer, the task is to convert it into its English words representation. The challenge lies in correctly handling the hierarchical structure of the number (units, tens, hundreds, thousands, millions, etc.) and ensuring that the representation is grammatically correct.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Predefined Arrays: Use arrays to store English words for numbers less than 20, tens, and large units (thousands, millions, billions).
2. Divide and Conquer: Break down the number into chunks of three digits (since English words group numbers in thousands) and convert each chunk into words.
3. Recursive Helper Function: Convert each chunk into words by recursively processing hundreds, tens, and units.
4. Combining Results: Concatenate the results for each chunk, appending the appropriate large unit word (thousand, million, billion) as needed.

# Complexity
- Time complexity: O(N), where N is the number of digits in the number. Each digit is processed a constant number of times.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1), as the space used for storing the result and temporary variables is constant and does not grow with input size.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```Java []
class Solution {
    private static final String[] LESS_THAN_20 = {
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", 
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", 
        "Seventeen", "Eighteen", "Nineteen"
    };
    private static final String[] TENS = {
        "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    };
    private static final String[] THOUSANDS = {"", "Thousand", "Million", "Billion"};

    public String numberToWords(int num) {
        if (num == 0) return "Zero";

        int i = 0;
        String words = "";

        while (num > 0) {
            if (num % 1000 != 0) {
                words = helper(num % 1000) + THOUSANDS[i] + " " + words;
            }
            num /= 1000;
            i++;
        }

        return words.trim();
    }

    private String helper(int num) {
        if (num == 0) return "";
        else if (num < 20) return LESS_THAN_20[num] + " ";
        else if (num < 100) return TENS[num / 10] + " " + helper(num % 10);
        else return LESS_THAN_20[num / 100] + " Hundred " + helper(num % 100);
    }
}

```
```C++ []
class Solution {
private:
    vector<string> LESS_THAN_20 = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", 
                                   "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", 
                                   "Seventeen", "Eighteen", "Nineteen"};
    vector<string> TENS = {"", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
    vector<string> THOUSANDS = {"", "Thousand", "Million", "Billion"};

public:
    string numberToWords(int num) {
        if (num == 0) return "Zero";
        
        int i = 0;
        string words = "";
        
        while (num > 0) {
            if (num % 1000 != 0) {
                words = helper(num % 1000) + THOUSANDS[i] + " " + words;
            }
            num /= 1000;
            i++;
        }
        
        return words.substr(0, words.find_last_not_of(" ") + 1);
    }
    
    string helper(int num) {
        if (num == 0) return "";
        else if (num < 20) return LESS_THAN_20[num] + " ";
        else if (num < 100) return TENS[num / 10] + " " + helper(num % 10);
        else return LESS_THAN_20[num / 100] + " Hundred " + helper(num % 100);
    }
};
```
```Python []
class Solution:
    LESS_THAN_20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", 
                    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", 
                    "Seventeen", "Eighteen", "Nineteen"]
    TENS = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
    THOUSANDS = ["", "Thousand", "Million", "Billion"]

    def numberToWords(self, num: int) -> str:
        if num == 0:
            return "Zero"
        
        i = 0
        words = ""
        
        while num > 0:
            if num % 1000 != 0:
                words = self.helper(num % 1000) + Solution.THOUSANDS[i] + " " + words
            num //= 1000
            i += 1
        
        return words.strip()
    
    def helper(self, num: int) -> str:
        if num == 0:
            return ""
        elif num < 20:
            return Solution.LESS_THAN_20[num] + " "
        elif num < 100:
            return Solution.TENS[num // 10] + " " + self.helper(num % 10)
        else:
            return Solution.LESS_THAN_20[num // 100] + " Hundred " + self.helper(num % 100)

```
```javascript []
class Solution {
    constructor() {
        this.LESS_THAN_20 = [
            "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
            "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
            "Seventeen", "Eighteen", "Nineteen"
        ];
        this.TENS = [
            "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
        ];
        this.THOUSANDS = ["", "Thousand", "Million", "Billion"];
    }

    numberToWords(num) {
        if (num === 0) return "Zero";

        let i = 0;
        let words = "";

        while (num > 0) {
            if (num % 1000 !== 0) {
                words = this.helper(num % 1000) + this.THOUSANDS[i] + " " + words;
            }
            num = Math.floor(num / 1000);
            i++;
        }

        return words.trim();
    }

    helper(num) {
        if (num === 0) return "";
        else if (num < 20) return this.LESS_THAN_20[num] + " ";
        else if (num < 100) return this.TENS[Math.floor(num / 10)] + " " + this.helper(num % 10);
        else return this.LESS_THAN_20[Math.floor(num / 100)] + " Hundred " + this.helper(num % 100);
    }
}
```
```C []
const char *LESS_THAN_20[] = {
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", 
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", 
    "Seventeen", "Eighteen", "Nineteen"
};
const char *TENS[] = {
    "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
};
const char *THOUSANDS[] = {"", "Thousand", "Million", "Billion"};

void helper(int num, char *result) {
    if (num == 0) return;
    else if (num < 20) {
        strcat(result, LESS_THAN_20[num]);
        strcat(result, " ");
    }
    else if (num < 100) {
        strcat(result, TENS[num / 10]);
        strcat(result, " ");
        helper(num % 10, result);
    }
    else {
        strcat(result, LESS_THAN_20[num / 100]);
        strcat(result, " Hundred ");
        helper(num % 100, result);
    }
}

char* numberToWords(int num) {
    static char result[MAX_LENGTH];
    memset(result, 0, sizeof(result));
    
    if (num == 0) {
        strcpy(result, "Zero");
        return result;
    }
    
    int i = 0;
    while (num > 0) {
        if (num % 1000 != 0) {
            char temp[MAX_LENGTH] = "";
            helper(num % 1000, temp);
            strcat(temp, THOUSANDS[i]);
            strcat(temp, " ");
            strcat(temp, result);
            strcpy(result, temp);
        }
        num /= 1000;
        i++;
    }
    
    // Trim trailing space
    int len = strlen(result);
    if (len > 0 && result[len - 1] == ' ') {
        result[len - 1] = '\\0';
    }
    
    return result;
}

int main() {
    int test_cases[] = {123, 12345, 1234567, 1234567891, 0};
    int num_tests = sizeof(test_cases) / sizeof(test_cases[0]);

    for (int i = 0; i < num_tests; i++) {
        printf("%d: %s\
", test_cases[i], numberToWords(test_cases[i]));
    }

    return 0;
}
```
```ruby []
class Solution
  LESS_THAN_20 = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
    "Seventeen", "Eighteen", "Nineteen"
  ]
  TENS = [
    "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
  ]
  THOUSANDS = ["", "Thousand", "Million", "Billion"]

  def number_to_words(num)
    return "Zero" if num == 0

    i = 0
    words = ""

    while num > 0
      if num % 1000 != 0
        words = helper(num % 1000) + THOUSANDS[i] + " " + words
      end
      num /= 1000
      i += 1
    end

    words.strip
  end

  private

  def helper(num)
    if num == 0
      ""
    elsif num < 20
      LESS_THAN_20[num] + " "
    elsif num < 100
      TENS[num / 10] + " " + helper(num % 10)
    else
      LESS_THAN_20[num / 100] + " Hundred " + helper(num % 100)
    end
  end
end
```
