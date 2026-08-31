# #796 | Rotate String | Beats 100%

**Author:** WeckHawk
**Votes:** 1
**Link:** [https://leetcode.com/problems/rotate-string/solutions/6002238/](https://leetcode.com/problems/rotate-string/solutions/6002238/)

---

# Description
**C++**
![image.png](./images/0.png)

**C#**
![image.png](./images/1.png)

**PHP**
![image.png](./images/2.png)

**Java**
![image.png](./images/3.png)




# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```cpp []
class Solution {
public:
    bool rotateString(string s, string goal) 
    {
        for (int i = 0; i < s.size(); i++)
        {
            s.insert(s.end(), s[0]);
            s.erase(0, 1);
            if(s == goal) return true;
        }
        return false;
    }
};
```
``` csharp []
public class Solution {
    public bool RotateString(string s, string goal) 
    {
        bool result = s.Length == goal.Length && (goal + goal).Contains(s);
        return result;
    }
}
```
``` java []
class Solution {
    public boolean rotateString(String s, String goal) 
    {
        return (s.length() == goal.length() && (goal + goal).contains(s) == true);
    }
}
```
``` php []
class Solution {

    /**
     * @param String $s
     * @param String $goal
     * @return Boolean
     */
    function rotateString($s, $goal) 
    {
        if(strlen($s) === strlen($goal) && stripos(($goal . $goal), $s) !== false)
            return true;

        return false;
    }
}
```