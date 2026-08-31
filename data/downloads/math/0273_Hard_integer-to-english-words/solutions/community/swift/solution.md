# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 16
**Link:** [https://leetcode.com/problems/integer-to-english-words/solutions/1990823/](https://leetcode.com/problems/integer-to-english-words/solutions/1990823/)

---

***Hello it would be my pleasure to introduce myself Darian.***

***Java***
```
class Solution {
    String[] tens = {"", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
    String[] ones = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven",
                    "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};

    public String numberToWords(int num) {
        if (num == 0)
            return "Zero";
        
        return helper(num).trim();
    }
    
    private String helper(int num) {
        StringBuilder sb=new StringBuilder();
        if (num >= 1000000000) {
            sb.append(helper(num / 1000000000)).append(" Billion ").append( helper(num % 1000000000));
        } else if  (num >= 1000000) {
            sb.append(helper(num / 1000000)).append(" Million ").append( helper(num % 1000000));
        }else if (num >= 1000) {
            sb.append(helper(num / 1000)).append(" Thousand ").append( helper(num % 1000));
        }else if (num >= 100) {
            sb.append(helper(num / 100)).append(" Hundred ").append( helper(num % 100));
        }else if (num >= 20) {
            sb.append(tens[num / 10]).append(" ").append( helper(num % 10));
        } else {
            sb.append(ones[num]);
        }
        return sb.toString().trim();
        
    }
}
```

***C++***
```
class Solution {
public:
    
    string ones[21] = {"Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"};
    
    string tens[10] = {"##", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
    
    string pref[4] = {"##", "Thousand", "Million", "Billion"};
    
    const int billion = 1000000000;
    const int million = 1000000;
    const int thousand = 1000;
    
    string oneDigit(int num)
    {
        return (num ? ones[num] + " " : "");
    }
    
    string twoDigit(int num)
    {
        if(num == 0)
            return "";
        if(num <= 20)
            return ones[num] + " ";
        else
            return tens[num/10] + " " + (num % 10 ? ones[num%10] + " " : "");
    }
    
    string threeDigit(int num)
    {
        if(num == 0)
            return "";
        if(num / 10 == 0)
            return oneDigit(num);
        if(num / 100 == 0)
            return twoDigit(num);
        
        return ones[num/100] + " Hundred " + twoDigit(num%100);
    }
    
    string convert(int num)
    {   
        if(num == 0)
            return "";
        if(num/billion)
            return threeDigit(num/billion) + "Billion " + convert(num%billion);
        if(num/million)
            return threeDigit(num/million) + "Million " + convert(num%million);
        if(num/thousand)
            return threeDigit(num/thousand) + "Thousand " + convert(num%thousand);
        return threeDigit(num);
    }
    string numberToWords(int num)
    {
        if(num == 0)
            return "Zero";
        string ans = convert(num);
        ans.pop_back();
        return ans;
    }
};
```

***Python***
```
class Solution:
    def numberToWords(self, num: int) -> str:
        mp = {1: "One",   11: "Eleven",    10: "Ten", 
              2: "Two",   12: "Twelve",    20: "Twenty", 
              3: "Three", 13: "Thirteen",  30: "Thirty", 
              4: "Four",  14: "Fourteen",  40: "Forty",
              5: "Five",  15: "Fifteen",   50: "Fifty", 
              6: "Six",   16: "Sixteen",   60: "Sixty", 
              7: "Seven", 17: "Seventeen", 70: "Seventy", 
              8: "Eight", 18: "Eighteen",  80: "Eighty",
              9: "Nine",  19: "Nineteen",  90: "Ninety"}
        
        def fn(n):
            """Return English words of n (0-999) in array."""
            if not n: return []
            elif n < 20: return [mp[n]]
            elif n < 100: return [mp[n//10*10]] + fn(n%10)
            else: return [mp[n//100], "Hundred"] + fn(n%100)
        
        ans = []
        for i, unit in zip((9, 6, 3, 0), ("Billion", "Million", "Thousand", "")): 
            n, num = divmod(num, 10**i)
            ans.extend(fn(n))
            if n and unit: ans.append(unit)
        return " ".join(ans) or "Zero"
```

***JavaScript***
```
var numberToWords = function(num) {
  if (num === 0) {
    return 'Zero';
  }
  
  if (num <= 20) {
    return translations.get(num);
  }
  
  let result = [];
  
  for (let [value, translation] of translations) {
    const times = Math.floor(num / value);
    
    if (times === 0) {
      continue;
    }
    
    num -= times * value;
    
    if (times === 1 && value >= 100) {
      result.push('One', translation);
      continue;
    }
    
    if (times === 1) {
      result.push(translation);
      continue;
    }
    
    result.push(numberToWords(times), translation);
  }
  
  return result.join(' ');
};

const translations = new Map([
  [1000000000, 'Billion'],
  [1000000, 'Million'],
  [1000, 'Thousand'],
  [100, 'Hundred'],
  [90, 'Ninety'],
  [80, 'Eighty'],
  [70, 'Seventy'],
  [60, 'Sixty'],
  [50, 'Fifty'],
  [40, 'Forty'],
  [30, 'Thirty'],
  [20, 'Twenty'],
  [19, 'Nineteen'],
  [18, 'Eighteen'],
  [17, 'Seventeen'],
  [16, 'Sixteen'],
  [15, 'Fifteen'],
  [14, 'Fourteen'],
  [13, 'Thirteen'],
  [12, 'Twelve'],
  [11, 'Eleven'],
  [10, 'Ten'],
  [9, 'Nine'],
  [8, 'Eight'],
  [7, 'Seven'],
  [6, 'Six'],
  [5, 'Five'],
  [4, 'Four'],
  [3, 'Three'],
  [2, 'Two'],
  [1, 'One'],
]);
```

***Kotlin***
```
class Solution {
    fun numberToWords(num: Int): String {
        if (num == 0) {
            return "Zero"
        }
        
        return helper(num)
    }
    
    private fun lessTwenty(num: Int): String {
        return when(num) {
            1 -> "One"
            2 -> "Two"
            3 -> "Three"
            4 -> "Four"
            5 -> "Five"
            6 -> "Six"
            7 -> "Seven"
            8 -> "Eight"
            9 -> "Nine"
            10 -> "Ten"
            11 -> "Eleven"
            12 -> "Twelve"
            13 -> "Thirteen"
            14 -> "Fourteen"
            15 -> "Fifteen"
            16 -> "Sixteen"
            17 -> "Seventeen"
            18 -> "Eighteen"
            19 -> "Nineteen"
            else -> ""
        }
    }
    
    private fun tens(num: Int): String {
        return when(num) {
            20 -> "Twenty"
            30 -> "Thirty"
            40 -> "Forty"
            50 -> "Fifty"
            60 -> "Sixty"
            70 -> "Seventy"
            80 -> "Eighty"
            90 -> "Ninety"
            else -> ""
        }
    }
    
    private fun helper(num: Int): String {
        var ans = "" // Kotlin uses StringBuilder under the hood
        
        if (num >= 1_000_000_000) {
            ans += helper(num / 1_000_000_000) + " Billion " + helper(num % 1_000_000_000)
        } else if (num >= 1_000_000) {
            ans += helper(num / 1_000_000) + " Million " + helper(num % 1_000_000)
        } else if (num >= 1_000) {
            ans += helper(num / 1_000) + " Thousand " + helper(num % 1_000)
        } else if (num >= 100) {
            ans += helper(num / 100) + " Hundred " + helper(num % 100)
        } else if (num >= 20) {
            ans += tens(num - (num % 10)) + " " + lessTwenty(num % 10)
        } else if (num < 20) {
            ans += lessTwenty(num)
        }
        
        return ans.trim()
    }
}
```

***Swift***
```
class Solution {
    
    private let kAtomicWords = [1:"One",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six", 
                                7:"Seven",8:"Eight",9:"Nine",10:"Ten",11:"Eleven",
                                12:"Twelve",13:"Thirteen",14:"Fourteen",15:"Fifteen",
                                16:"Sixteen",17:"Seventeen",18:"Eighteen",19:"Nineteen",
                                20:"Twenty",30:"Thirty",40:"Forty",50:"Fifty",60:"Sixty",
                                70:"Seventy",80:"Eighty",90:"Ninety"]

	private let kAtomicPowers = [100: "Hundred",
                                1_000: "Thousand",
                                1_000_000: "Million",
                                1_000_000_000: "Billion",
                                1_000_000_000_000: "Trillion"]

    func numberToWords(_ num: Int) -> String {
        guard num != 0 else { return "Zero" }
        // Remove nils and join by " "
	    return wordFor(num).flatMap{$0}.joined(separator: " ")
    }

    /// Recursively build
    private func wordFor(_ num: Int) -> [String?] {
        var result = [String?]()
        
	    // 0-19
	    if num < 20 {
		    result.append(kAtomicWords[num])
        }
        // 20-99
        else if num  < 100 {
	        let leastSig = num % 10
	        let mostSig = (num/10) * 10
            result.append(kAtomicWords[mostSig])
            if leastSig > 0 {
               result.append(kAtomicWords[leastSig])
            }
        }
        // 1Y xx - 1YY xxx xxx xxx xxx
        else {
	        // get largest power of number
	        var power = 100
	        while (num / (power*10)) > 0 {
		        power *= 10
            }
            // divide by 10 until we find closest atomic word power
			while kAtomicPowers[power] == nil {
				power /= 10
            }
            
	        var mostSig = num / power
	        let remainder = num - (mostSig * power)
    
            result.append(contentsOf: wordFor(mostSig))
            result.append(kAtomicPowers[power])
            result.append(contentsOf: wordFor(remainder))
        }
        
        return result
    }
}
```

***Consider upvote if useful! Hopefully it can be used in your advantage!***
***Take care brother, peace, love!***
***"Open your eyes."***