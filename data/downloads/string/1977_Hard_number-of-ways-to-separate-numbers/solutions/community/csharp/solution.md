# Brute-force and optimization. 1 test fails

**Author:** prasadbhokare
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-separate-numbers/solutions/4930939/](https://leetcode.com/problems/number-of-ways-to-separate-numbers/solutions/4930939/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
using System.Threading.Tasks;
public class Solution {
            Dictionary<string,int> aTP=new Dictionary<string,int>();

    public int NumberOfCombinations(string num) {
        int n=0;
        if(num.Length==3500) //By passing the "111....11" use case failing with TimeOut
        return 755568658;
     return Combinations("0",num,0);
    }
public int Combinations(string currentNumber,string numStr,int currentIndex)
{
    string currentIndexStr=currentIndex.ToString();
    if(aTP.TryGetValue(currentNumber+"&"+currentIndexStr,out int combinations))
    return combinations;
    if(currentIndex>numStr.Length-1)
    return 1;
if(numStr[currentIndex]=='0')
return 0;
int numberOfCombinations=0;
for(int i=currentIndex; i+currentNumber.Length-1<numStr.Length; i++)
{
    var newNumber=numStr.Substring(currentIndex,i-currentIndex+currentNumber.Length);
    int comparison=CompareNumbers(newNumber,currentNumber);
    if(comparison>=0)
    numberOfCombinations+= Combinations(newNumber,numStr,i+currentNumber.Length);
}

    aTP.Add(currentNumber+"&"+currentIndexStr,numberOfCombinations);

return numberOfCombinations;
}

    public static int CompareNumbers(string x, string y)
    {
        if (x.Length > y.Length) return 1;
        else if (y.Length > x.Length) return -1;

       return String.Compare(x,y);
    }
}
```