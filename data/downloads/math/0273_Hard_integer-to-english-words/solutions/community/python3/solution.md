# Solution

**Author:** deleted_user
**Votes:** 452
**Link:** [https://leetcode.com/problems/integer-to-english-words/solutions/2997480/](https://leetcode.com/problems/integer-to-english-words/solutions/2997480/)

---

```C++ []
class Solution {
public:
    string one(int num) {
    switch(num) {
      case 1: return "One";
      case 2: return "Two";
      case 3: return "Three";
      case 4: return "Four";
      case 5: return "Five";
      case 6: return "Six";
      case 7: return "Seven";
      case 8: return "Eight";
      case 9: return "Nine";
    }
    return "";
  }

  string twoLessThan20(int num) {
    switch(num) {
      case 10: return "Ten";
      case 11: return "Eleven";
      case 12: return "Twelve";
      case 13: return "Thirteen";
      case 14: return "Fourteen";
      case 15: return "Fifteen";
      case 16: return "Sixteen";
      case 17: return "Seventeen";
      case 18: return "Eighteen";
      case 19: return "Nineteen";
    }
    return "";
  }

  string ten(int num) {
    switch(num) {
      case 2: return "Twenty";
      case 3: return "Thirty";
      case 4: return "Forty";
      case 5: return "Fifty";
      case 6: return "Sixty";
      case 7: return "Seventy";
      case 8: return "Eighty";
      case 9: return "Ninety";
    }
    return "";
  }

  string two(int num) {
    if (num == 0)
      return "";
    else if (num < 10)
      return one(num);
    else if (num < 20)
      return twoLessThan20(num);
    else {
      int tenner = num / 10;
      int rest = num - tenner * 10;
      if (rest != 0)
        return ten(tenner) + " " + one(rest);
      else
        return ten(tenner);
    }
  }

  string three(int num) {
    int hundred = num / 100;
    int rest = num - hundred * 100;
    string res = "";
    if (hundred*rest != 0)
      res = one(hundred) + " Hundred " + two(rest);
    else if ((hundred == 0) && (rest != 0))
      res = two(rest);
    else if ((hundred != 0) && (rest == 0))
      res = one(hundred) + " Hundred";
    return res;
  }

    string numberToWords(int num) {
        if (num == 0)
      return "Zero";

    int billion = num / 1000000000;
    int million = (num - billion * 1000000000) / 1000000;
    int thousand = (num - billion * 1000000000 - million * 1000000) / 1000;
    int rest = num - billion * 1000000000 - million * 1000000 - thousand * 1000;

    string result = "";
    if (billion != 0)
      result = three(billion) + " Billion";
    if (million != 0) {
      if (result.size()!=0)
        result += " ";
      result += three(million) + " Million";
    }
    if (thousand != 0) {
      if (result.size()!=0)
        result += " ";
      result += three(thousand) + " Thousand";
    }
    if (rest != 0) {
      if (result.size()!=0)
        result += " ";
      result += three(rest);
    }
    return result;
    }

};
```

```Python3 []
class Solution:
    def numberToWords(self, num: int) -> str:
        if num == 0:
            return "Zero"
        ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
        tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
        teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
        suffixes = ["", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion", "Nonillion", "Decillion"]
        words = []
        i = 0
        while num > 0:
            triplet = num % 1000
            num = num // 1000
            if triplet == 0:
                i += 1
                continue
            temp = []
            if triplet // 100 > 0:
                temp.append(ones[triplet // 100])
                temp.append("Hundred")
            if triplet % 100 >= 10 and triplet % 100 <= 19:
                temp.append(teens[triplet % 10])
            else:
                if triplet % 100 >= 20:
                    temp.append(tens[triplet % 100 // 10])
                if triplet % 10 > 0:
                    temp.append(ones[triplet % 10])
            if i > 0:
                temp.append(suffixes[i])
            words = temp + words
            i += 1
        return " ".join(words)
```

```Java []
class Solution {

    private final String[] belowTwenty = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
            "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
    private final String[] tens = {"", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};

    public String numberToWords(int num) {
        if (num == 0) {
            return "Zero";
        }
        return helper(num);
    }

    private String helper(int num) {
        StringBuilder result = new StringBuilder();
        if (num < 20) {
            result.append(belowTwenty[num]);
        } else if (num < 100) {
            result.append(tens[num / 10]).append(" ").append(belowTwenty[num % 10]);
        } else if (num < 1000) {
            result.append(helper(num / 100)).append(" Hundred ").append(helper(num % 100));
        } else if (num < 1000000) {
            result.append(helper(num / 1000)).append(" Thousand ").append(helper(num % 1000));
        } else if (num < 1000000000) {
            result.append(helper(num / 1000000)).append(" Million ").append(helper(num % 1000000));
        } else {
            result.append(helper(num / 1000000000)).append(" Billion ").append(helper(num % 1000000000));
        }
        return result.toString().trim();
    }
}
```
