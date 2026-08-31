# C++ and C# very easy solution with only loops.Explained.

**Author:** aloneguy
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3427780/](https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/3427780/)

---

**The result is the sum of all combinations of subarrays which contains conyinious zeros.**
![photo_2023-04-17_21-57-53.jpg](./images/0.jpeg)
![photo_2023-04-17_21-58-02.jpg](./images/1.jpeg)
```C++ []
class Solution {
public:
    long long zeroFilledSubarray(vector<int>& nums) {
    long long answer=0;
    int count=0;
    for(int i=0;i<nums.size();i++){
        if(nums[i]==0)
        count++;
        else{
            answer+= 1ll*count*(count+1)/2;
            count=0;
        }
    }
    answer+=1ll*count*(count+1)/2;
    return answer;
    }
};
```

```C# []
public class Solution {
    public long ZeroFilledSubarray(int[] nums) {
        long answer = 0;
    long count = 0;
    foreach (var item in nums) {
        if (item == 0) {
            ++count;
        } 
        else {
            answer += count * (count + 1) / 2;
            count = 0;
        }
    }
    answer += count * (count + 1) / 2;
    return answer; 
    }
}
```

![Vote.png](./images/2.png)
