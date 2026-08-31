# C# easy one line solution with explanation

**Author:** Muhammad-Diyor
**Votes:** 5
**Link:** [https://leetcode.com/problems/defanging-an-ip-address/solutions/3890213/](https://leetcode.com/problems/defanging-an-ip-address/solutions/3890213/)

---


# Approach

I used ```string.Split(".")``` method to get input string seperated by dots. So, that method returns an array of strings. Then I used ```string.Join("[.]")``` to convert that array into one string while adding "[.]" between and returned via lambda expression. 

# Code
```
public class Solution {
    public string DefangIPaddr(string address) => string.Join("[.]", address.Split("."));
}
```