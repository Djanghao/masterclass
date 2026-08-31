# Java, C#, and TypeScript Solution 🔥🚀 with approach. ❇️✅

**Author:** ArafatSabbir
**Votes:** 1
**Link:** [https://leetcode.com/problems/compare-version-numbers/solutions/5105426/](https://leetcode.com/problems/compare-version-numbers/solutions/5105426/)

---

\u2B06\uFE0FLike|\uD83C\uDFAFShare|\u2B50Favourite

# Approach
- Split the version strings by '.' and store them in two arrays.
- Iterate over the arrays and compare the numbers at each index.
- If the number at index i in the first array is less than the number at index i in the second array, return -1.
- If the number at index i in the first array is greater than the number at index i in the second array, return 1.
- If the numbers are equal, continue to the next index.
- If the loop completes without returning, return 0.


# Complexity
- Time complexity:
    - Splitting the strings by '.' will take O(n) time.
    - Comparing the numbers at each index will take O(n) time.
    - So, the total time complexity is O(n).

- Space complexity:
    - We are using two arrays to store the numbers.
    - So, the space complexity is O(n).

<!-- java, c# and typescript code is also provided in the code file. -->

```Java []
class Solution {
    public int compareVersion(String version1, String version2) {
        String[] v1 = version1.split("\\\\.");
        String[] v2 = version2.split("\\\\.");
        
        int i = 0;
        while(i < v1.length || i < v2.length){
            int num1 = i < v1.length ? Integer.parseInt(v1[i]) : 0;
            int num2 = i < v2.length ? Integer.parseInt(v2[i]) : 0;
            
            if(num1 < num2){
                return -1;
            }
            else if(num1 > num2){
                return 1;
            }
            i++;
        }
        return 0;
    }
}
```
```C# []
public class Solution {
    public int CompareVersion(string version1, string version2) {
        string[] v1 = version1.Split('.');
        string[] v2 = version2.Split('.');
        
        int i = 0;
        while(i < v1.Length || i < v2.Length){
            int num1 = i < v1.Length ? int.Parse(v1[i]) : 0;
            int num2 = i < v2.Length ? int.Parse(v2[i]) : 0;
            
            if(num1 < num2){
                return -1;
            }
            else if(num1 > num2){
                return 1;
            }
            i++;
        }
        return 0;
    }
}
```
```TypeScript []
function compareVersion(version1: string, version2: string): number {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    let i = 0;
    while(i < v1.length || i < v2.length){
        let num1 = i < v1.length ? parseInt(v1[i]) : 0;
        let num2 = i < v2.length ? parseInt(v2[i]) : 0;
        if(num1 < num2){
            return -1;
        }
        else if(num1 > num2){
            return 1;
        }
        i++;
    }
    return 0;
};
```
