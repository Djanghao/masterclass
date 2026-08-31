# Accepted Simple Solution with Step By Step Detailed Explaination

**Author:** kpratyush12345
**Votes:** 117
**Link:** [https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/1669777/](https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/1669777/)

---

So we can divide this question in three parts :
1.	Division with its own multiple for eg. 8 / 4 = 2
2.	Division without repeating numbers after decimal for eg. 41 / 2 = 20.5
3.	Division with repeating numbers after decimal for eg. 14 / 3 = 4.(6) or 47 / 18 = 2.6(1)
Note : Here the repeating part is in bracket.

For **1st Part** we can normally divide the numbers and add it to the ans string and return if the remainder is 0.

```
//Code: 
int q = num / den;
int r = num % den;
ans += q;
if(r == 0) return ans;
```

For **2nd part** we need to add a \u201C.\u201D if remainder is not zero and then make the remainder 10 times everytime and append the quotient to the ans string.
```
//Code:
while(r != 0)
	r *= 10;
	q = r / den;
	r = r % den;
	ans += q;
```

For the **3rd part** we need to use and unordered_map so that we can store the the position from where the repeating of number starts in front of the remainder. If the remainder is already in the map then we insert the \u201C(\u201D opening bracket at the position of that rem and lastly append a \u201C)\u201D closing bracket and break out of the loop and return the ans.
```
//Code :
unordered_map<int, int> mp;
while(r != 0)
	if(mp(r) is in map)
		int pos = mp[r];
		ans.insert(pos, "(");
		ans += ')';
		break;
	else
		mp[r] = ans.length();
		r *= 10;
		q = r / den;
		r = r % den;
		ans += q;
```

Now it will give runtime error for cases like -1 / -2147483648 so we need to change the int to long
```
long num = labs(numerator), den = labs(denominator);
long q = num / den;
long r = num % den;
```
and 
```
unordered_map<long, int> mp;
```
We need to handle the case where there are negative numbers. So if numerator is negative and denominator is positive or numerator is positive and denominator is negative we need to add a \u201C-\u201C negative symbol in the ans.
```
if (numerator > 0 ^ denominator > 0) 
	ans += '-';
```

**Final Code :**
```
class Solution {
public:
    string fractionToDecimal(int numerator, int denominator) {
        if(!numerator) return "0";
        string ans = "";
        if (numerator > 0 ^ denominator > 0) ans += '-';
        long num = labs(numerator), den = labs(denominator);
        long q = num / den;
        long r = num % den;
        ans += to_string(q);
        
        if(r == 0) return ans;
        
        ans += '.';
        unordered_map<long, int> mp;
        while(r != 0){
            if(mp.find(r) != mp.end()){
                int pos = mp[r];
                ans.insert(pos, "(");
                ans += ')';
                break;
            }
            else{
                mp[r] = ans.length();
                r *= 10;
                q = r / den;
                r = r % den;
                ans += to_string(q);
            }
        }
        return ans;
    }
};
```

**Upvote if this helps you :)**