# Solution

**Author:** deleted_user
**Votes:** 444
**Link:** [https://leetcode.com/problems/number-of-squareful-arrays/solutions/3536535/](https://leetcode.com/problems/number-of-squareful-arrays/solutions/3536535/)

---

```C++ []
class Solution {
public:
    int count=0;
    bool check(int a,int b){
        int temp = sqrt(a+b);
        return ((temp*temp) == (a+b));
    }
    void help(int curr,vector<int> arr){
        if(curr>= arr.size()){
            count++;
            return ;
        }
        for(int i= curr;i<arr.size();i++){
            if(i== curr || arr[i]!= arr[curr]){
                swap(arr[curr],arr[i]);
                if(curr==0 || (curr>0 && check(arr[curr-1],arr[curr]))) help(curr+1,arr);
            }
        }
    }
    int numSquarefulPerms(vector<int>& arr) {
        sort(arr.begin(),arr.end());
        help(0,arr);
        return count;
    }
};
```

```Python3 []
class Solution:
  def numSquarefulPerms(self, nums: List[int]) -> int:
    ans = 0
    used = [False] * len(nums)

    def isSquare(num: int) -> bool:
      root = int(math.sqrt(num))
      return root * root == num

    def dfs(path: List[int]) -> None:
      nonlocal ans
      if len(path) > 1 and not isSquare(path[-1] + path[-2]):
        return
      if len(path) == len(nums):
        ans += 1
        return

      for i, a in enumerate(nums):
        if used[i]:
          continue
        if i > 0 and nums[i] == nums[i - 1] and not used[i - 1]:
          continue
        used[i] = True
        dfs(path + [a])
        used[i] = False

    nums.sort()
    dfs([])
    return ans
```

```Java []
class Solution {
    public int numSquarefulPerms(int[] nums) {
        return permutate(nums, 0);
    }
    int permutate(int[] nums, int idx){
        if(idx>=nums.length){
            return 1;
        }
        int sum = 0;
        for(int i=idx; i<nums.length; i++){
            if(!shouldSwap(nums, idx, i)) continue;
            swap(nums, idx, i);
            if(idx==0 ||  sumSquare(nums, idx)) sum += permutate(nums, idx+1);
            swap(nums, idx, i);
        }
        return sum;
    }
    boolean shouldSwap(int[] nums, int index, int ii){
        for(int i=index; i<ii; i++){
            if(nums[i]==nums[ii]) return false;
        }
        return true;
    }
    void swap(int[] nums, int i, int j){
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    boolean sumSquare(int[] nums, int idx){
        int sq = (int) Math.sqrt(nums[idx] + nums[idx-1]);
        return (sq*sq)==(nums[idx]+nums[idx-1]);
    }
}
```
