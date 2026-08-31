# ✅ [Python/Rust/C++] three easy & concise solutions (with detailed comments)

**Author:** iablokov
**Votes:** 12
**Link:** [https://leetcode.com/problems/integer-to-roman/solutions/2725198/](https://leetcode.com/problems/integer-to-roman/solutions/2725198/)

---

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
**** 
**Python.** This [**solution**](https://leetcode.com/submissions/detail/826490173/) employs a repetition of Roman digits. It demonstrated **47 ms runtime (96.77%)** and used **13.9 MB memory (35.57%)**. Time complexity is contstant: **O(1)**. Space complexity is constant: **O(1)**.
```
class Solution:
    def intToRoman(self, num: int) -> str:
        
		# Starting from Python 3.7, dictionary order is guaranteed 
		# to be insertion order
        num_to_roman = { 1000 : "M", 900 : "CM", 500 : "D", 400 : "CD",
                          100 : "C",  90 : "XC",  50 : "L",  40 : "XL",
                           10 : "X",   9 : "IX",   5 : "V",   4 : "IV",
                            1 : "I" }
        roman: str = ""

        # The idea is to repeat each of Roman digits as many times
        # as needed to cover the decimal representation.
        for i, r in num_to_roman.items():
            roman += r * (num // i)
            num   %= i
        else:
            return roman
```
**** 
**Rust.** This [**solution**](https://leetcode.com/submissions/detail/826504889/) employs a brute force digit substitution. It demonstrated **0 ms runtime (100.00%)** and used **2.0 MB memory (94.20%)**. Time complexity is constant: **O(1)**. Space complexity is constant: **O(1)**.
```
const ONES : [&str;10] = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const TENS : [&str;10] = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const CENT : [&str;10] = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const MILS : [&str;4]  = ["", "M", "MM", "MMM"];

impl Solution 
{
    pub fn int_to_roman(num: i32) -> String 
    {
        // Given that the number of outcomes is small, a brute force
		// substituion for each power of ten is a viable solution...
		format!("{}{}{}{}", MILS[(num / 1000 % 10) as usize],
                            CENT[(num / 100  % 10) as usize],
                            TENS[(num / 10   % 10) as usize],
                            ONES[(num        % 10) as usize])
    }
}
```
**** 
**\u0421++.** This [**solution**](https://leetcode.com/submissions/detail/826509511/) employs an iterative build-up of a Roman number. It demonstrated **0 ms runtime (100.0%)** and used **6.1 MB memory (47.60%)**. Time complexity is constant: **O(1)**. Space complexity is constant: **O(1)**.
```
class Solution 
{
    const int    intgr[13] = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
    const string roman[13] = {"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};

public:
    string intToRoman(int num)
    {
        string rom = "";
		
        for (int i = 0; num > 0; i++)
		    // each digit is repeated as many times as needed to 
			// completely cover the decimal representation 
            while (num >= intgr[i]) rom += roman[i], num -= intgr[i];
        return rom;
    }
};
```
