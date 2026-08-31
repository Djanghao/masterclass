# 🌺C# ,Java ,Python3, JavaScript solutions

**Author:** Daisy001
**Votes:** 8
**Link:** [https://leetcode.com/problems/happy-number/solutions/3144421/](https://leetcode.com/problems/happy-number/solutions/3144421/)

---

In this solution, we use list, array or map  to store the numnber
than we can check it appear or not 



```javascript []
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let used = new Set();

    while(n>0)
    {
        let tmp = 0;
        while(n>0)
        {
            let i = n%10;

            tmp += i*i;
            n = Math.floor(n/10);
        }

        if(used.has(tmp))
        {
            return false;
        }
        else
        {
            used.add(tmp);    
        }
        

        if(tmp==1)
        {
            return true;
        }

        n = tmp;

    }
    
    return false; 
};
```
```Java []
class Solution {
    public boolean isHappy(int n) {
        List<Integer>used = new ArrayList<Integer>();

        while(n>0)
        {
            int tmp = 0;
            while(n>0)
            {
                int i = n%10;

                tmp += i*i;
                n = n/10;
            }

            if(used.contains(tmp))
            {
                return false;
            }
            else
            {
                used.add(tmp);    
            }
            

            if(tmp==1)
            {
                return true;
            }

            n = tmp;

        }
        
        return false; 
    }
}
```
```Python3 []
class Solution:
    def isHappy(self, n: int) -> bool:
        used = []

        while(n>0):
            tmp = 0
            while(n>0):
                i = n%10

                tmp += i*i
                n = n//10

            if(tmp in used):
                return False
            else:
                used.append(tmp)

            if(tmp==1):
                return True
            
            n = tmp

        return False
```
```C# []
public class Solution {
    public bool IsHappy(int n) {
        
        List<int>used = new List<int>();

        while(n>0)
        {
            int tmp = 0;
            while(n>0)
            {
                int i = n%10;

                tmp += i*i;
                n = n/10;
            }

            if(used.Contains(tmp))
            {
                return false;
            }
            else
            {
                used.Add(tmp);    
            }
            

            if(tmp==1)
            {
                return true;
            }

            n = tmp;

        }
        
        return false;
    }
}
```

\uD83E\uDDE1Find More LeetCode Solutions : [Zyrastory - LeetCode Solutions](https://zyrastory.com/en/category/coding-en/leetcode-en/)

