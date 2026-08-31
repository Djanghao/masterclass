# Brute Force Solution

**Author:** kaushambi2612
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-almost-equal-pairs-i/solutions/5686764/](https://leetcode.com/problems/count-almost-equal-pairs-i/solutions/5686764/)

---

# Intuition
Traverse through all (i, j) pairs. If the pair is almost equal, increase the counter

# Approach
Consider the example: 
`3000` and `3`
if you pad `3` with `000`, then you have `3000` and `0003`. 
Count the number of different positions. In this case, it is `2`. Store the indices where these differ. Pick any one number and swap digits on those positions. If both the numbers are the same, return `true`.


# Code
```csharp []
public class Solution {
    public int CountPairs(int[] nums) {  
        int count = 0;
        for(int i = 0; i < nums.Length; i++){
            for(int j = i + 1; j < nums.Length; j++){
                if(IsAlmostEqual(nums, i, j)){
                    count++;
                }
            }
        }
        return count;
    }

    private bool IsAlmostEqual(int[] nums, int i, int j){
        if(nums[i] == nums[j]) return true;

        string a = nums[i] + "";
        string b = nums[j] + "";

        var arr = PadString(a);
        var brr = PadString(b);

        var diffList = new List<int>();
        for(int k = 0 ; k < arr.Length; k++){
            if(arr[k] != brr[k])
                diffList.Add(k);
        }

        if(diffList.Count != 2)
            return false;

        char temp = arr[diffList[0]];
        arr[diffList[0]] = arr[diffList[1]];
        arr[diffList[1]] = temp;

        for(int k = 0 ; k < arr.Length; k++){
            if(arr[k] != brr[k])
                return false;
        }
        return true;
    }

    private char[] PadString(string a){
        int l = 7 - a.Length;    
        while(l > 0){
            a  = "0" + a;
            l--;
        }
        return a.ToCharArray();
    }

}
```