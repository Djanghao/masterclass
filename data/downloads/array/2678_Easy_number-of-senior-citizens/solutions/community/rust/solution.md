# O(n) || Beats 100 % Java  C++ | Python | Go | Rust | JavaScript

**Author:** kartikdevsharma_
**Votes:** 32
**Link:** [https://leetcode.com/problems/number-of-senior-citizens/solutions/5564704/](https://leetcode.com/problems/number-of-senior-citizens/solutions/5564704/)

---

## Concise Approach 


# Intuition
The problem requires counting the number of passengers who are over 60 years old. The key insight is that we don't need to convert the entire age to an integer; we can simply compare the characters representing the age digits. This allows for a more efficient solution without the need for string-to-integer conversion.

# Approach
1. Initialize a counter `seniorCount` to keep track of passengers over 60.
2. Iterate through each passenger's details in the input array.
3. For each passenger, extract the tens and ones digits of their age (located at indices 11 and 12 in the string).
4. Compare these digits to determine if the age is over 60:
   - If the tens digit is greater than '6', the person is over 60.
   - If the tens digit is '6', check if the ones digit is greater than '0'.
5. If either condition is true, increment the `seniorCount`.
6. Return the final count of seniors.

# Complexity
- Time complexity: O(n), where n is the number of passengers (length of the input array).
  We iterate through the array once, and for each string, we perform constant time operations.

- Space complexity: O(1)
  We only use a fixed amount of extra space (the `seniorCount` variable) regardless of the input size.

Now, here are equivalent implementations in other languages:

---

```Java []
class Solution {
    public int countSeniors(String[] details) {
        int seniorCount = 0;
        for (String info : details) {
            char tens = info.charAt(11);
            char ones = info.charAt(12);
            if (tens > '6' || (tens == '6' && ones > '0')) {
                seniorCount++;
            }
        }
        return seniorCount;
    }
}

```
```cpp []
class Solution {
public:
    int countSeniors(vector<string>& details) {
        int seniorCount = 0;
        for (const string& info : details) {
            char tens = info[11];
            char ones = info[12];
            if (tens > '6' || (tens == '6' && ones > '0')) {
                seniorCount++;
            }
        }
        return seniorCount;
    }
};
```


```Python []
class Solution:
    def countSeniors(self, details: List[str]) -> int:
        return sum(info[11] > '6' or (info[11] == '6' and info[12] > '0') for info in details)
```

```Go []
func countSeniors(details []string) int {
    seniorCount := 0
    for _, info := range details {
        tens := info[11]
        ones := info[12]
        if tens > '6' || (tens == '6' && ones > '0') {
            seniorCount++
        }
    }
    return seniorCount
}
```

```Rust []
impl Solution {
    pub fn count_seniors(details: Vec<String>) -> i32 {
        details.iter().filter(|&info| {
            let tens = info.as_bytes()[11];
            let ones = info.as_bytes()[12];
            tens > b'6' || (tens == b'6' && ones > b'0')
        }).count() as i32
    }
}
```


```Javascript []
/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    return details.reduce((count, info) => {
        const tens = info[11];
        const ones = info[12];
        return count + (tens > '6' || (tens === '6' && ones > '0') ? 1 : 0);
    }, 0);
};
```

---
## Approach 2:

### Intuition

The initial thought process for this problem involves recognizing that the input consists of strings containing compressed passenger information, with the age being a key component to extract and evaluate. The straightforward approach might be to extract the full age and compare it to 60, but a more efficient solution presents itself upon closer examination.

It becomes apparent that fully calculating the age for every passenger is unnecessary. If the tens digit of the age is 7, 8, or 9, the person is undoubtedly over 60. Conversely, if it's 5 or less, they're definitely under 60. The only case requiring further investigation is when the tens digit is 6.

This realization leads to the development of a series of quick checks that allow for rapid decision-making in each case, potentially reducing the number of operations required per passenger.

### Approach 

The solution is structured as follows:

1. Constants 
   - AGE_THRESHOLD: 60 (the age being checked against)
   - TENS_DIGIT_THRESHOLD: '6' (the character for comparison with the tens digit)
   - AGE_TENS_INDEX: 11 (position of the tens digit in the string)
   - AGE_ONES_INDEX: 12 (position of the ones digit in the string)

2. The main countSeniors method employs a simple for-loop to iterate through all passengers. For each passenger, the isOverSixty method is called to determine if they're a senior, incrementing a counter if true.

3. The isOverSixty method implements the efficient checks:
   
   a. The tens digit of the age is extracted using charAt(AGE_TENS_INDEX).
   
   b. If this digit is greater than '6', the person is over 60, and true is immediately returned. This efficiently handles all cases for ages 70 and above.
   
   c. If the tens digit is less than '6', the person is under 60, and false is immediately returned. This efficiently handles all cases for ages 59 and below.
   
   d. If the tens digit is exactly '6', the ones digit is checked. If it's greater than '0', the person is over 60; otherwise, they're exactly 60 and don't count as a senior by the given definition.

This approach is efficient because most ages can be determined by checking only one or two characters. It avoids string parsing or integer conversion, which can be relatively expensive operations.

### Complexity

- **Time complexity: O(n)**, where n is the number of passengers (the length of the details array). The array is iterated through once, and for each passenger, at most two constant-time operations (checking two characters) are performed. Despite the nested operations (the loop and the isOverSixty method), the overall complexity remains linear.

- **Space complexity: O(1)**. A fixed amount of extra space is used regardless of the input size. A few constants and a single integer counter are employed, but these don't grow with the input size.

---
### Code
```Java []
class Solution {
    private static final int AGE_THRESHOLD = 60;
    private static final char TENS_DIGIT_THRESHOLD = '6';
    private static final int AGE_TENS_INDEX = 11;
    private static final int AGE_ONES_INDEX = 12;
    public int countSeniors(String[] details) {
        int seniorCount = 0;
        for (String passenger : details) {
            if (isOverSixty(passenger)) {
                seniorCount++;
            }
        }
        return seniorCount;
    }
    private boolean isOverSixty(String passenger) {
        char tensDigit = passenger.charAt(AGE_TENS_INDEX);
        if (tensDigit > TENS_DIGIT_THRESHOLD) {
            return true;
        }
        if (tensDigit == TENS_DIGIT_THRESHOLD) {
            return passenger.charAt(AGE_ONES_INDEX) > '0';
        }
        return false;
    }
}
```
```C++ []
class Solution {
private:
    static const int AGE_THRESHOLD = 60;
    static const char TENS_DIGIT_THRESHOLD = '6';
    static const int AGE_TENS_INDEX = 11;
    static const int AGE_ONES_INDEX = 12;
    
    bool isOverSixty(const string& passenger) {
        char tensDigit = passenger[AGE_TENS_INDEX];
        if (tensDigit > TENS_DIGIT_THRESHOLD) {
            return true;
        }
        if (tensDigit == TENS_DIGIT_THRESHOLD) {
            return passenger[AGE_ONES_INDEX] > '0';
        }
        return false;
    }

public:
    int countSeniors(vector<string>& details) {
        int seniorCount = 0;
        for (const auto& passenger : details) {
            if (isOverSixty(passenger)) {
                seniorCount++;
            }
        }
        return seniorCount;
    }
};
```
```Python []
class Solution:
    AGE_THRESHOLD = 60
    TENS_DIGIT_THRESHOLD = '6'
    AGE_TENS_INDEX = 11
    AGE_ONES_INDEX = 12

    def countSeniors(self, details: List[str]) -> int:
        return sum(self.isOverSixty(passenger) for passenger in details)

    def isOverSixty(self, passenger: str) -> bool:
        tens_digit = passenger[self.AGE_TENS_INDEX]
        if tens_digit > self.TENS_DIGIT_THRESHOLD:
            return True
        if tens_digit == self.TENS_DIGIT_THRESHOLD:
            return passenger[self.AGE_ONES_INDEX] > '0'
        return False
```
```Go []
package main

const (
    AGE_THRESHOLD        = 60
    TENS_DIGIT_THRESHOLD = '6'
    AGE_TENS_INDEX       = 11
    AGE_ONES_INDEX       = 12
)

func countSeniors(details []string) int {
    seniorCount := 0
    for _, passenger := range details {
        if isOverSixty(passenger) {
            seniorCount++
        }
    }
    return seniorCount
}

func isOverSixty(passenger string) bool {
    tensDigit := passenger[AGE_TENS_INDEX]
    if tensDigit > TENS_DIGIT_THRESHOLD {
        return true
    }
    if tensDigit == TENS_DIGIT_THRESHOLD {
        return passenger[AGE_ONES_INDEX] > '0'
    }
    return false
}
```
```Rust []
impl Solution {
    const AGE_THRESHOLD: i32 = 60;
    const TENS_DIGIT_THRESHOLD: char = '6';
    const AGE_TENS_INDEX: usize = 11;
    const AGE_ONES_INDEX: usize = 12;

    pub fn count_seniors(details: Vec<String>) -> i32 {
        details.iter().filter(|&passenger| Self::is_over_sixty(passenger)).count() as i32
    }

    fn is_over_sixty(passenger: &str) -> bool {
        let tens_digit = passenger.chars().nth(Self::AGE_TENS_INDEX).unwrap();
        if tens_digit > Self::TENS_DIGIT_THRESHOLD {
            return true;
        }
        if tens_digit == Self::TENS_DIGIT_THRESHOLD {
            return passenger.chars().nth(Self::AGE_ONES_INDEX).unwrap() > '0';
        }
        false
    }
}
```
```JavaScript []
/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    return details.filter(isOverSixty).length;
};

/**
 * Check if a passenger is over 60 years old
 * @param {string} passenger
 * @return {boolean}
 */
function isOverSixty(passenger) {
    const AGE_TENS_INDEX = 11;
    const AGE_ONES_INDEX = 12;
    const TENS_DIGIT_THRESHOLD = '6';

    const tensDigit = passenger[AGE_TENS_INDEX];
    if (tensDigit > TENS_DIGIT_THRESHOLD) {
        return true;
    }
    if (tensDigit === TENS_DIGIT_THRESHOLD) {
        return passenger[AGE_ONES_INDEX] > '0';
    }
    return false;
}

```


---
## Approach 3:

### Intuition

Try extracting age information from strings containing compressed passenger data, and then determining if the age exceeds 60. A straightforward approach suggests itself: extract the age, convert it to a number, and compare it to the threshold.

This method, while potentially doing more work than necessary for some ages, would handle all scenarios uniformly. By breaking it down into separate steps (extracting the age, converting to a number, comparing), the code can be made clear and easy to understand.

### Approach

The solution is structured as follows:

1. Constants:
   - ELDERLY_THRESHOLD: 60 (the age being checked against)
   - AGE_TENS_INDEX: 11 (position of the tens digit in the string)
   - AGE_ONES_INDEX: 12 (position of the ones digit in the string)

2. The main countSeniors method uses a straightforward for-loop to iterate through all passengers. For each passenger, the calculateAge method is called to obtain their age, which is then compared to the ELDERLY_THRESHOLD. The counter is incremented if the age is greater.

3. The calculateAge method performs the core operations:
   
   a. The tens digit and ones digit are extracted separately using charAt.
   
   b. Each of these characters is converted to its numeric value using the charToDigit method.
   
   c. Simple arithmetic combines them into a two-digit number: tens * 10 + ones.

4. The charToDigit method employs a clever trick. Since the ASCII values of the digits '0' to '9' are consecutive, a digit character can be converted to its numeric value by subtracting the ASCII value of '0'. Thus, '0' - '0' = 0, '1' - '0' = 1, and so on.

This approach is straightforward and easy to comprehend. It treats all ages uniformly, making the logic very consistent. The same operations are always performed: extract the digits, convert to numbers, combine into an age, and compare to the threshold.

### Complexity

- **Time complexity: O(n)**, where n is the number of passengers (the length of the details array). The array is iterated through once, and for each passenger, a fixed number of operations are performed (extracting two characters, converting them to digits, combining them, and comparing to the threshold). These operations take constant time, so despite the nested operations (the loop and the calculateAge method), the overall complexity remains linear.

- **Space complexity: O(1)**. A fixed amount of extra space is used regardless of the input size. A few constants and a single integer counter are employed, but these don't grow with the input size.

---
### Code
```Java []
class Solution {
    private static final int ELDERLY_THRESHOLD = 60;
    private static final int AGE_TENS_INDEX = 11;
    private static final int AGE_ONES_INDEX = 12;
    public int countSeniors(String[] details) {
        int elderlyCount = 0;

        for (String passengerInfo : details) {
            if (calculateAge(passengerInfo) > ELDERLY_THRESHOLD) {
                elderlyCount++;
            }
        }

        return elderlyCount;
    }

    private int calculateAge(String info) {
        int tens = charToDigit(info.charAt(AGE_TENS_INDEX));
        int ones = charToDigit(info.charAt(AGE_ONES_INDEX));
        return tens * 10 + ones;
    }

    private int charToDigit(char c) {
        return c - '0';
    }
}
```
```C++ []
class Solution {
private:
    static const int ELDERLY_THRESHOLD = 60;
    static const int AGE_TENS_INDEX = 11;
    static const int AGE_ONES_INDEX = 12;
    
    int calculateAge(const string& info) {
        int tens = charToDigit(info[AGE_TENS_INDEX]);
        int ones = charToDigit(info[AGE_ONES_INDEX]);
        return tens * 10 + ones;
    }
    
    int charToDigit(char c) {
        return c - '0';
    }

public:
    int countSeniors(vector<string>& details) {
        int elderlyCount = 0;
        for (const auto& passengerInfo : details) {
            if (calculateAge(passengerInfo) > ELDERLY_THRESHOLD) {
                elderlyCount++;
            }
        }
        return elderlyCount;
    }
};
```
```Python []
class Solution:
    ELDERLY_THRESHOLD = 60
    AGE_TENS_INDEX = 11
    AGE_ONES_INDEX = 12

    def countSeniors(self, details: List[str]) -> int:
        return sum(self.calculateAge(info) > self.ELDERLY_THRESHOLD for info in details)

    def calculateAge(self, info: str) -> int:
        tens = self.charToDigit(info[self.AGE_TENS_INDEX])
        ones = self.charToDigit(info[self.AGE_ONES_INDEX])
        return tens * 10 + ones

    def charToDigit(self, c: str) -> int:
        return ord(c) - ord('0')
```
```Go []
package main

const (
    ELDERLY_THRESHOLD = 60
    AGE_TENS_INDEX    = 11
    AGE_ONES_INDEX    = 12
)

func countSeniors(details []string) int {
    elderlyCount := 0
    for _, passengerInfo := range details {
        if calculateAge(passengerInfo) > ELDERLY_THRESHOLD {
            elderlyCount++
        }
    }
    return elderlyCount
}

func calculateAge(info string) int {
    tens := charToDigit(info[AGE_TENS_INDEX])
    ones := charToDigit(info[AGE_ONES_INDEX])
    return tens*10 + ones
}

func charToDigit(c byte) int {
    return int(c - '0')
}
```
```Rust []
impl Solution {
    const ELDERLY_THRESHOLD: i32 = 60;
    const AGE_TENS_INDEX: usize = 11;
    const AGE_ONES_INDEX: usize = 12;

    pub fn count_seniors(details: Vec<String>) -> i32 {
        details.iter().filter(|&info| Self::calculate_age(info) > Self::ELDERLY_THRESHOLD).count() as i32
    }

    fn calculate_age(info: &str) -> i32 {
        let tens = Self::char_to_digit(info.chars().nth(Self::AGE_TENS_INDEX).unwrap());
        let ones = Self::char_to_digit(info.chars().nth(Self::AGE_ONES_INDEX).unwrap());
        tens * 10 + ones
    }

    fn char_to_digit(c: char) -> i32 {
        c as i32 - '0' as i32
    }
}
```
```JavaScript []
/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    const ELDERLY_THRESHOLD = 60;
    const AGE_TENS_INDEX = 11;
    const AGE_ONES_INDEX = 12;

    // Function to convert character to its digit value
    function charToDigit(c) {
        return c.charCodeAt(0) - '0'.charCodeAt(0);
    }

    // Function to calculate age from the string
    function calculateAge(info) {
        const tens = charToDigit(info[AGE_TENS_INDEX]);
        const ones = charToDigit(info[AGE_ONES_INDEX]);
        return tens * 10 + ones;
    }

    // Count the number of seniors
    let elderlyCount = 0;
    for (const passengerInfo of details) {
        if (calculateAge(passengerInfo) > ELDERLY_THRESHOLD) {
            elderlyCount++;
        }
    }

    return elderlyCount;
};


```
---

While these three approaches might seem similar at first glance but they actually use distinctly different problem-solving strategies and computational methods. 

The key differences lie in how they interpret and process the age data:

**Concise Approach** operates at the lowest level, directly comparing character values without any conversion or calculation, making it potentially the most efficient but least flexible. 
**Approach 2** introduces a more abstract, rule-based system with separate methods and constants, improving readability and maintainability at the cost of slightly more complex logic. 
**Approach 3** takes a more intuitive route by fully calculating the age as an integer before comparison, which is the most straightforward to understand and modify but potentially the least efficient due to the additional arithmetic operations. 
