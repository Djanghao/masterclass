# ✔️✔️✔️easy to understand 1 liner PYTHON code || C++ || JAVA || DART || KOTLIN⚡⚡⚡

**Author:** anish_sule
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/4895811/](https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/4895811/)

---

# Code
```Python []
class Solution:
    def targetIndices(self, nums: List[int], target: int) -> List[int]:
        nums.sort()
        return [i for i in range(len(nums)) if nums[i] == target]
```
```C++ []
class Solution {
public:
    vector<int> targetIndices(vector<int>& nums, int target) {
        vector<int> fin;
        sort(nums.begin(), nums.end());
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == target) {
                fin.push_back(i);
            }
        }
        return fin;
    }
};
```
```Java []
class Solution {
    public List<Integer> targetIndices(int[] nums, int target) {
        Arrays.sort(nums);
        ArrayList<Integer> fin = new ArrayList<Integer>();
        for(int i=0;i<nums.length;i++){
            if(nums[i]==target)fin.add(i);
        }
        return fin;
    }
}
```
```Dart []
class Solution {
  List<int> targetIndices(List<int> nums, int target) {
    nums.sort();
    List<int> fin=[];
    for(int i=0;i<nums.length; i++){
        if(nums[i]==target){
            fin.add(i);
        }
    }
    return fin ;
    }
}
```
```Kotlin []
class Solution {
    fun targetIndices(nums: IntArray, target: Int): List<Int> {
        var fin=arrayListOf<Int>()
        nums.sort()
        for(i in 0 until nums.size){
            if(nums[i]==target){
                fin.add(i)
            }
        }
        return fin
    }
}
```