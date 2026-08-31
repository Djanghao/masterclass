# Readable | Time: O(1) | Space: O(logN)

**Author:** rojas
**Votes:** 2
**Link:** [https://leetcode.com/problems/integer-to-english-words/solutions/4032098/](https://leetcode.com/problems/integer-to-english-words/solutions/4032098/)

---

# Code 1

- Time complexity: $O(1)$

- Space complexity: $O(\\log{N})$
    Used by string buffer

```Typescript []
const SUB_20 = [
    "Zero", "One", "Two", "Three", "Four", 
    "Five", "Six", "Seven", "Eight", "Nine", 
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", 
    "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
];

const SUB_100 = [
    "", "", "Twenty", "Thirty", "Forty",
    "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
];

const POW_10 = [
    "Hundred", "Thousand", "Million", "Billion" //, ...
];

function numberToWords(num: number): string {
    // Zero
    if (num === 0) {
        return SUB_20[0];
    }

    // Initialize string buffer
    const buf: string[] = [];

    // Billions
    if (num >= 1e9) {
        buf.push(SUB_20[0 | (num / 1e9)]);
        buf.push(POW_10[3]);
        num %= 1e9;
    }

    // Millions
    if (num >= 1e6) {
        getSub1000(buf, 0 | (num / 1e6));
        buf.push(POW_10[2]);
        num %= 1e6;
    }

    // Thousands
    if (num >= 1e3) {
        getSub1000(buf, 0 | (num / 1e3));
        buf.push(POW_10[1]);
        num %= 1e3;
    }

    // 1 - 999
    getSub1000(buf, num);

    // Return string
    return buf.join(" ");
};

function getSub1000(buf: string[], num: number): void {

    // Hundreds
    if (num >= 100) {
        buf.push(SUB_20[0 | (num / 100)]);
        buf.push(POW_10[0]);
        num %= 100;
    }

    // 20 - 99
    if (num >= 20) {
        buf.push(SUB_100[0 | (num / 10)]);
        num %= 10;
    }

    // 1 - 19
    if (num > 0) {
        buf.push(SUB_20[num]);
    }
}
```

```Javascript []
const SUB_20 = [
    "Zero", "One", "Two", "Three", "Four", 
    "Five", "Six", "Seven", "Eight", "Nine", 
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", 
    "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
];

const SUB_100 = [
    "", "", "Twenty", "Thirty", "Forty",
    "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
];

const POW_10 = [
    "Hundred", "Thousand", "Million", "Billion" //, ...
];

/**
 * @param {number} num
 * @return {string}
 */
function numberToWords(num) {
    // Zero
    if (num === 0) {
        return SUB_20[0];
    }

    // Initialize string buffer
    const buf = [];

    // Billions
    if (num >= 1e9) {
        buf.push(SUB_20[0 | (num / 1e9)]);
        buf.push(POW_10[3]);
        num %= 1e9;
    }

    // Millions
    if (num >= 1e6) {
        getSub1000(buf, 0 | (num / 1e6));
        buf.push(POW_10[2]);
        num %= 1e6;
    }

    // Thousands
    if (num >= 1e3) {
        getSub1000(buf, 0 | (num / 1e3));
        buf.push(POW_10[1]);
        num %= 1e3;
    }

    // 1 - 999
    getSub1000(buf, num);

    // Return string
    return buf.join(" ");
};

/**
 * @param {string[]} buf
 * @param {number} num
 */
function getSub1000(buf, num) {

    // Hundreds
    if (num >= 100) {
        buf.push(SUB_20[0 | (num / 100)]);
        buf.push(POW_10[0]);
        num %= 100;
    }

    // 20 - 99
    if (num >= 20) {
        buf.push(SUB_100[0 | (num / 10)]);
        num %= 10;
    }

    // 1 - 19
    if (num > 0) {
        buf.push(SUB_20[num]);
    }
}
```

```Java []
import java.util.StringJoiner;

class Solution {
    private final String[] SUB_20 = {
        "Zero", "One", "Two", "Three", "Four", 
        "Five", "Six", "Seven", "Eight", "Nine", 
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", 
        "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    };

    private final String[] SUB_100 = {
        "", "", "Twenty", "Thirty", "Forty",
        "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    };

    private final String[] POW_10 = {
        "Hundred", "Thousand", "Million", "Billion" //, ...
    };

    public String numberToWords(int num) {
        // Zero
        if (num == 0) {
            return SUB_20[0];
        }

        // Initialize string buffer
        StringJoiner buf = new StringJoiner(" ");

        // Billions
        if (num >= 1e9) {
            buf.add(SUB_20[(int) (num / 1e9)]);
            buf.add(POW_10[3]);
            num %= 1e9;
        }

        // Millions
        if (num >= 1e6) {
            getSub1000(buf, (int) (num / 1e6));
            buf.add(POW_10[2]);
            num %= 1e6;
        }

        // Thousands
        if (num >= 1e3) {
            getSub1000(buf, (int) (num / 1e3));
            buf.add(POW_10[1]);
            num %= 1e3;
        }

        // 1 - 999
        getSub1000(buf, num);

        // Return string
        return buf.toString();
    }

    private void getSub1000(StringJoiner buf, int num) {
        // Hundreds
        if (num >= 100) {
            buf.add(SUB_20[num / 100]);
            buf.add(POW_10[0]);
            num %= 100;
        }

        // 20 - 99
        if (num >= 20) {
            buf.add(SUB_100[num / 10]);
            num %= 10;
        }

        // 1 - 19
        if (num > 0) {
            buf.add(SUB_20[num]);
        }
    }
}
```

```Python []
SUB_20 = [
    "Zero", "One", "Two", "Three", "Four", 
    "Five", "Six", "Seven", "Eight", "Nine", 
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", 
    "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
]

SUB_100 = [
    "", "", "Twenty", "Thirty", "Forty",
    "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
]

POW_10 = [
    "Hundred", "Thousand", "Million", "Billion" #, ...
]

class Solution:
    def numberToWords(self, num: int) -> str:
        # Zero
        if num == 0:
            return SUB_20[0]
        
        # Initialize string buffer
        buf = []

        # Billions
        if num >= 1e9:
            buf.append(SUB_20[int(num // 1e9)])
            buf.append(POW_10[3])
            num %= int(1e9)

        # Millions
        if num >= 1e6:
            self.getSub1000(buf, int(num // 1e6))
            buf.append(POW_10[2])
            num %= int(1e6)

        # Thousands
        if num >= 1e3:
            self.getSub1000(buf, int(num // 1e3))
            buf.append(POW_10[1])
            num %= int(1e3)

        # 1 - 999
        self.getSub1000(buf, num)

        # Return string
        return " ".join(buf)

    def getSub1000(self, buf: list, num: int) -> None:
        # Hundreds
        if num >= 100:
            buf.append(SUB_20[num // 100])
            buf.append(POW_10[0])
            num %= 100
        
        # 20 - 99
        if num >= 20:
            buf.append(SUB_100[num // 10])
            num %= 10
        
        # 1 - 19
        if num > 0:
            buf.append(SUB_20[num])
```

```Rust []
const SUB_20: [&str; 20] = [
    "Zero", "One", "Two", "Three", "Four",
    "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
    "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
];

const SUB_100: [&str; 10] = [
    "", "", "Twenty", "Thirty", "Forty",
    "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
];

const POW_10: [&str; 4] = [
    "Hundred", "Thousand", "Million", "Billion"
];

impl Solution {
    pub fn number_to_words(num: i32) -> String {
        // Zero
        if num == 0 {
            return SUB_20[0].to_string();
        }

        // Initialize string buffer
        let mut buf: Vec<String> = Vec::new();
        let mut num = num;

        // Billions
        if num >= (1e9 as i32) {
            buf.push(SUB_20[(num / 1e9 as i32) as usize].to_string());
            buf.push(POW_10[3].to_string());
            num %= 1e9 as i32;
        }

        // Millions
        if num >= (1e6 as i32) {
            Solution::get_sub_1000(&mut buf, (num / (1e6 as i32)) as i32);
            buf.push(POW_10[2].to_string());
            num %= 1e6 as i32;
        }

        // Thousands
        if num >= (1e3 as i32) {
            Solution::get_sub_1000(&mut buf, (num / (1e3 as i32)) as i32);
            buf.push(POW_10[1].to_string());
            num %= 1e3 as i32;
        }

        // 1 - 999
        Solution::get_sub_1000(&mut buf, num);

        // Return string
        buf.join(" ")
    }

    fn get_sub_1000(buf: &mut Vec<String>, num: i32) {
        let mut num = num;

        // Hundreds
        if num >= 100 {
            buf.push(SUB_20[(num / 100) as usize].to_string());
            buf.push(POW_10[0].to_string());
            num %= 100;
        }

        // 20 - 99
        if num >= 20 {
            buf.push(SUB_100[(num / 10) as usize].to_string());
            num %= 10;
        }

        // 1 - 19
        if num > 0 {
            buf.push(SUB_20[num as usize].to_string());
        }
    }
}
```

```Go []
import (
	"fmt"
	"strings"
)

var SUB_20 = []string{
	"Zero", "One", "Two", "Three", "Four",
	"Five", "Six", "Seven", "Eight", "Nine",
	"Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
	"Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen",
}

var SUB_100 = []string{
	"", "", "Twenty", "Thirty", "Forty",
	"Fifty", "Sixty", "Seventy", "Eighty", "Ninety",
}

var POW_10 = []string{
	"Hundred", "Thousand", "Million", "Billion", //, ...
}

func numberToWords(num int) string {

    // Zero
	if num == 0 {
		return SUB_20[0]
	}

    // Initialize string buffer
	buf := []string{}

    // Billions
    if num >= 1e9 {
        getSub1000(&buf, num/1e9)
        buf = append(buf, POW_10[3])
        num %= 1e9
    }

    // Millions
    if num >= 1e6 {
        getSub1000(&buf, num/1e6)
        buf = append(buf, POW_10[2])
        num %= 1e6
    }

    // Thousands
    if num >= 1e3 {
        getSub1000(&buf, num/1e3)
        buf = append(buf, POW_10[1])
        num %= 1e3
    }

    // 1 - 999
	getSub1000(&buf, num)

    // Return string
	return strings.Join(buf, " ")
}

func getSub1000(buf *[]string, num int) {
    // Hundreds
	if num >= 100 {
		*buf = append(*buf, SUB_20[num/100], POW_10[0])
		num %= 100
	}

    // 20 - 99
	if num >= 20 {
		*buf = append(*buf, SUB_100[num/10])
		num %= 10
	}

    // 1 - 19
	if num > 0 {
		*buf = append(*buf, SUB_20[num])
	}
}
```

# Code 2

- Time complexity: $O(\\log{N})$

- Space complexity: $O(\\log{N})$
    Used by string buffer

Instead of individual `if` blocks, we can iterate through `POW_10` in reverse. This also allows easy extension to larger numbers by adding units to `POW_10` ("Trillion", "Quadrillion", etc).

```typescript []
//...

function numberToWords(num: number): string {
    // Zero
    if (num === 0) {
        return SUB_20[0];
    }

    // Initialize string buffer
    const buf: string[] = [];

    // >= 1000
    for (let i = POW_10.length - 1; num >= 1000; --i) {
        const p = 1000**i;
        if (num >= p) {
            getSub1000(buf, 0 | (num / p));
            buf.push(POW_10[i]);
            num %= p;
        }
    }

    // 1 - 999
    getSub1000(buf, num);

    // Return string
    return buf.join(" ");
}

//...
```

```javascript []
//...

function numberToWords(num) {
    // Zero
    if (num === 0) {
        return SUB_20[0];
    }

    // Initialize string buffer
    const buf = [];

    // >= 1000
    for (let i = POW_10.length - 1; num >= 1000; --i) {
        const p = 1000**i;
        if (num >= p) {
            getSub1000(buf, 0 | (num / p));
            buf.push(POW_10[i]);
            num %= p;
        }
    }

    // 1 - 999
    getSub1000(buf, num);

    // Return string
    return buf.join(" ");
}

//...
```

```java []
//...

public String numberToWords(int num) {
    // Zero
    if (num == 0) {
        return SUB_20[0];
    }

    // Initialize string buffer
    StringJoiner buf = new StringJoiner(" ");

    // >= 1000
    for (int i = POW_10.length - 1; num >= 1000; --i) {
        int p = (int) Math.pow(1000, i);
        if (num >= p) {
            getSub1000(buf, num / p);
            buf.add(POW_10[i]);
            num %= p;
        }
    }

    // 1 - 999
    getSub1000(buf, num);

    // Return string
    return buf.toString();
}

//...
```

```python []
#...

def numberToWords(self, num: int) -> str:
    # Zero
    if num == 0:
        return SUB_20[0]
    
    # Initialize string buffer
    buf = []

    # >= 1000
    i = len(POW_10) - 1
    while num >= 1000:
        p = 1000**i
        if num >= p:
            self.getSub1000(buf, num // p)
            buf.append(POW_10[i])
            num %= p
        i -= 1

    # 1 - 999
    self.getSub1000(buf, num)

    # Return string
    return " ".join(buf)

#...
```

```rust []
//...

pub fn number_to_words(num: i32) -> String {
    // Zero
    if num == 0 {
        return SUB_20[0].to_string();
    }

    // Initialize string buffer
    let mut buf: Vec<String> = Vec::new();
    let mut num = num;

    // >= 1000
    let mut i: usize = POW_10.len() - 1;
    while num >= 1000 {
        let p = i32::pow(1000, i as u32);
        if num >= p {
            Solution::get_sub_1000(&mut buf, num / p);
            buf.push(POW_10[i].to_string());
            num %= p;
        }
        i -= 1;
    }

    // 1 - 999
    Solution::get_sub_1000(&mut buf, num);

    // Return string
    buf.join(" ")
}

//...
```

```go []
//...

func numberToWords(num int) string {

    // Zero
	if num == 0 {
		return SUB_20[0]
	}

    // Initialize string buffer
	buf := []string{}

    // >= 1000
    for i := len(POW_10) - 1; num >= 1000; i-- {
        p := int(math.Pow(1000, float64(i)))
        if num >= p {
            getSub1000(&buf, num/p)
            buf = append(buf, POW_10[i])
            num %= p
        }
	}

    // 1 - 999
	getSub1000(&buf, num)

    // Return string
	return strings.Join(buf, " ")
}

//...
```