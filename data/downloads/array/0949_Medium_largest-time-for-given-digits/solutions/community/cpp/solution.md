# Solution

**Author:** deleted_user
**Votes:** 5
**Link:** [https://leetcode.com/problems/largest-time-for-given-digits/solutions/3529280/](https://leetcode.com/problems/largest-time-for-given-digits/solutions/3529280/)

---

```C++ []
class Solution {
public:
    string largestTimeFromDigits(vector<int>& arr) {
        sort(arr.begin(), arr.end(), greater<int>());
        do{
            int hours = arr[0] * 10 + arr[1];
            int minutes = arr[2] * 10 + arr[3];
            
            if(hours<24 && minutes<60){
                string time = "";
                if(hours<10){
                    time+="0";
                }
                time += to_string(hours);
                time += ":";
                
                if(minutes<10){
                    time += "0";
                }
                
                time += to_string(minutes);
                return time;
            }
        }while(prev_permutation(arr.begin(), arr.end()));
        
        return "";
    }
};
```

```Python3 []
class Solution:
    def largestTimeFromDigits(self, arr: List[int]) -> str:
        curMax = -1
        curStr = ""
        for permutation in set(permutations(arr)):
            a, b, c, d = permutation
            hours = a*10 + b
            minutes = c*10 + d
            if hours > 23 or minutes > 59:
                pass
            elif hours*60 + minutes > curMax:
                curMax = hours*60 + minutes
                curStr = str(a) + str(b) + ":" + str(c) + str(d)

        return curStr
```

```Java []
class Solution {
    private boolean rearrange(int maxValue,int index,int[] a){
        int max = -1;
		
        for(int i = index; i<a.length;i++) if(a[i]<=maxValue && (max==-1 || a[max]<a[i])) max = i;
        if(max==-1) return false;

        int temp = a[max];
        a[max] = a[index];
        a[index] = temp;
        return true;
    }
    public String largestTimeFromDigits(int[] a) {
        boolean res = (rearrange(2,0,a) && (a[0]==2 ? rearrange(3,1,a) : rearrange(9,1,a)) && rearrange(5,2,a) && rearrange(9,3,a)) || (rearrange(1,0,a) && rearrange(9,1,a) && rearrange(5,2,a) && rearrange(9,3,a));
        
        StringBuilder sb = new StringBuilder();
        
        if(!res) return sb.toString();
        
        return sb.append(String.valueOf(a[0]))
          .append(String.valueOf(a[1]))
          .append(':')
          .append(String.valueOf(a[2]))
          .append(String.valueOf(a[3])).toString();
    }
}
```
