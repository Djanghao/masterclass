# Easy solution two nested loop beats 97% and easy to understand

**Author:** rezord
**Votes:** 1
**Link:** [https://leetcode.com/problems/next-greater-element-iii/solutions/3079636/](https://leetcode.com/problems/next-greater-element-iii/solutions/3079636/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Converting number to array and starting from end of string to begining check if there is two digit next to each other which left is smaller than right. If there is we can switch them. if not then check index , index-2 and so one. when I find two digits which left is smaller than right, I will put the first smallest number which is not equal current left on left. and sort the rest on right.

# Complexity
- Complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![Screenshot 2023-01-20 at 9.17.10 PM.png](./images/0.png)


# Code
```
public class Solution {
    public int NextGreaterElement(int n) {
        var arr=($"{n}").ToArray();
        var l=arr.Length;
        for(int i=1;i<l;i++){
            for(int j=l-1;j-i>=0;j--){
                if(arr[j]>arr[j-i]){
                    var sub=arr.Skip(j-i).Take(l-j+i).OrderBy(p=>p).ToList();
                    var mid=sub.Where(p=>p>arr[j-i]).FirstOrDefault();
                    sub.Remove(mid);
                    arr=arr.Take(j-i).ToArray();
                    var str=$"{new string(arr)}{mid}{new string(sub.ToArray())}";
                    return Int32.TryParse(str,out int result)?result:-1;
                }
            }
        }
        return -1;
    }
}
```